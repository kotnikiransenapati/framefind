# FrameFind — Part 1 Design

## Goal

Adapt the existing FrameFind image-search UI into a working static Part 1 scaffold using plain HTML, CSS, and JavaScript. This phase is presentation-only: search controls remain inert and results are not fetched or displayed.

## Visual direction

Keep FrameFind's deep forest-teal, warm-cream, and orange palette, sticky masthead, large editorial hero, inline search panel, quick-pick chips, and separate collection section. The FrameFind identity, color theme, and single-column hero/results structure are distinct from PixelPulse.

## Page structure and behavior

- Keep the root `index.html`, `styles.css`, `script.js`, and `README.md`; remove any stale `style.css` file.
- Preserve the branded header and tagline, the search controls as a `role="search"` landmark, quick-pick chips, Clear control, result-count placeholder, and visible empty-state message.
- Keep the search input ID `search-input`, the Search button ID `search-button`, and the initially empty results container ID `results`.
- Use a non-form search landmark and non-submitting buttons so neither clicking Search nor pressing Enter submits or reloads the page. The Clear and category controls also remain nonfunctional in Part 1.
- Keep `#results` empty and styled as a responsive CSS Grid using `repeat(auto-fill, minmax(...))`.
- Keep `script.js` to a single comment, loaded immediately before `</body>`.
- Keep the README to 3–5 sentences that describe FrameFind and explain two design decisions with their rationale.

## Responsive and accessibility requirements

Preserve the existing narrow-screen layouts, associated accessible label for the search input, and visible keyboard-focus styles. The grid must reflow from phone to desktop widths without horizontal overflow.

## Acceptance checks

1. The root files are `index.html`, `styles.css`, `script.js`, and `README.md`; no stale `style.css` remains.
2. FrameFind has a branded header and one-line tagline.
3. The accessible search input, uniquely identified Search button, and uniquely identified results container are present.
4. `#results` is initially empty and uses a responsive CSS Grid with `repeat(auto-fill, minmax(...))`.
5. Quick-pick chips and at least one other listed feature are visible (Clear control, empty-state message, result-count placeholder, or sticky header).
6. Opening `index.html` locally displays the styled page; clicking Search or pressing Enter does not submit, reload, fetch, or show results.
