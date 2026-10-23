// FrameFind — Part 1: UI scaffold only.
// Search functionality will be implemented in Part 2.
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");
const resultsCount = document.getElementById("results-count");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  // Ignore empty searches
  if (!query) {
    return;
  }

  // Clear previous results and show loading state
  results.innerHTML = "";
  resultsCount.textContent = `Searching for "${query}"...`;

  const url =
    "https://commons.wikimedia.org/w/api.php" +
    "?action=query" +
    "&generator=search" +
    `&gsrsearch=${encodeURIComponent(query)}` +
    "&gsrnamespace=6" +
    "&gsrlimit=20" +
    "&prop=imageinfo" +
    "&iiprop=url" +
    "&iiurlwidth=500" +
    "&format=json" +
    "&origin=*";

  try {
    const response = await fetch(url);

    // Check for HTTP errors before parsing
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    const pages = Object.values(data.query?.pages || {});

    // Keep only results with a usable image URL
    const images = pages.filter((item) => {
      const info = item.imageinfo?.[0];
      return info?.thumburl || info?.url;
    });

    // Show a friendly empty state
    if (images.length === 0) {
      resultsCount.textContent = "0 results";
      results.innerHTML =
        '<p class="message">No images found. Try another search!</p>';
      return;
    }

    // Render one card per image
    images.forEach((item) => {
      const imageInfo = item.imageinfo[0];
      const imageUrl = imageInfo.thumburl || imageInfo.url;
      const titleText = item.title
        .replace(/^File:/, "")
        .replace(/_/g, " ");

      const card = document.createElement("article");
      card.className = "image-card";

      const link = document.createElement("a");
      link.href = imageInfo.descriptionurl || imageInfo.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `View source for ${titleText}`);

      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = titleText;
      image.loading = "lazy";

      const title = document.createElement("h3");
      title.textContent = titleText;

      link.appendChild(image);
      link.appendChild(title);
      card.appendChild(link);
      results.appendChild(card);
    });

    // Enhancement: result count
    resultsCount.textContent =
      `Showing ${images.length} results for "${query}"`;

  } catch (error) {
    console.error("PixelVerse search error:", error);

    results.innerHTML =
      '<p class="message error-message">Something went wrong. Please try again.</p>';
    resultsCount.textContent = "Search failed";

  }
});