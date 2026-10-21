# Morrow — Part 1 Design

## Goal

Build a distinct, responsive image-search interface using plain HTML, CSS, and JavaScript. This phase is presentation-only: users can type in the search field, but submitting the form must not fetch or display images.

## Visual direction

Morrow uses a warm paper background, deep forest-green typography and controls, and restrained citrus accents. A slim sticky masthead introduces the brand; a spacious, left-aligned hero gives the search task priority, with a short tagline and an editorial category-chip row. This structure, name, and palette distinguish the app from the PixelPulse reference.

## Page structure and behavior

- The root `index.html` contains semantic header, main, search form, empty-state message, and results regions.
- The search input has the unique ID `search-input` and a programmatically associated visible label. The Search button has the unique ID `search-button`.
- A nonfunctional Clear control and three styled suggestion chips provide visual affordances only; no controls trigger network requests or populate results in Part 1.
- The results region has the unique ID `results`, contains no images or other hard-coded cards, and is styled as a responsive CSS Grid using `repeat(auto-fill, minmax(...))`.
- A visible empty-state message prompts users to search. The compact masthead remains sticky while scrolling.
- `styles.css` is linked from the document head, and the empty `script.js` is loaded immediately before `</body>`.
- `README.md` is 3–5 sentences covering Morrow's purpose and two design choices with their rationale.

## Responsive and accessibility requirements

The layout adapts from narrow phones to widescreen without horizontal overflow. The search field has a persistent visible label, controls are keyboard reachable, and focus states remain visible. Grid columns are determined by available width and the chosen minimum card size.

## Acceptance checks

1. The four required root files exist: `index.html`, `styles.css`, `script.js`, and `README.md`.
2. The page identifies itself as Morrow and includes a one-line tagline.
3. The labeled input, uniquely identified Search button, and uniquely identified results container are present.
4. `#results` is initially empty and uses the specified responsive CSS Grid pattern.
5. At least two original features are visible: suggestion chips, empty-state message, Clear control, and sticky header.
6. Opening `index.html` locally displays the styled header, search controls, and empty results area; submitting the form does not perform a search.
