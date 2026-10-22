
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

  // Clear previous results before showing the new search
  results.innerHTML = "";
  resultsCount.textContent = "Searching...";

  const url =
    `https://commons.wikimedia.org/w/api.php` +
    `?action=query` +
    `&generator=search` +
    `&gsrsearch=${encodeURIComponent(query)}` +
    `&gsrnamespace=6` +
    `&gsrlimit=20` +
    `&prop=imageinfo` +
    `&iiprop=url` +
    `&iiurlwidth=500` +
    `&format=json` +
    `&origin=*`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch images.");
  }

  const data = await response.json();
  const pages = Object.values(data.query?.pages || {});

  let count = 0;

  pages.forEach((item) => {
    const imageInfo = item.imageinfo?.[0];

    if (!imageInfo) {
      return;
    }

    const imageUrl = imageInfo.thumburl || imageInfo.url;
    const imageTitle = item.title
      .replace(/^File:/, "")
      .replace(/_/g, " ");

    // Create the card
    const card = document.createElement("article");
    card.className = "image-card";

    // Make the card open its source in a new tab
    const link = document.createElement("a");
    link.href = imageInfo.descriptionurl || imageInfo.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Create the image
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = imageTitle;
    image.loading = "lazy";

    // Create the title
    const title = document.createElement("h3");
    title.textContent = imageTitle;

    // Add elements to the card and the card to the grid
    link.appendChild(image);
    link.appendChild(title);
    card.appendChild(link);
    results.appendChild(card);

    count++;
  });

  // Enhancement: display the result count
  resultsCount.textContent =
    `Showing ${count} results for "${query}"`;
});
