# Morrow Part 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver Morrow's static, responsive image-search UI as a committed Part 1 feature branch.

**Architecture:** A semantic HTML page links a standalone stylesheet and an inert JavaScript file. CSS supplies the paper-and-forest-green identity, sticky masthead, search-led layout, suggestion chips, empty-state prompt, and an auto-filling results grid.

**Tech Stack:** Plain HTML, CSS, and JavaScript; no frameworks, libraries, or build tools.

**Spec:** `docs/superpowers/specs/2026-10-21-morrow-design.md`

## Global Constraints

- Use plain HTML, CSS, and JavaScript; no frameworks, libraries, or build tools.
- Keep `index.html`, `styles.css`, `script.js`, and `README.md` at the repository root.
- Use unique IDs `search-input`, `search-button`, and `results`.
- Keep `#results` empty initially and style it with `repeat(auto-fill, minmax(210px, 1fr))`.
- Do not fetch or display images or add search behavior in Part 1.
- Keep the README to 3–5 sentences.

## Review Focus

- At a 320px viewport, the header, search form, chips, and page must not overflow horizontally; verify in the browser at 320px.
- With keyboard-only navigation, the search field, Search and Clear buttons, and chips must be reachable and visibly focused; verify using Tab and Shift+Tab.
- Submitting by click or Enter must not navigate, fetch, or populate results; verify both actions in the browser.
- On initial load, the empty-state prompt is visible and `#results` has no child elements; inspect the DOM before and after interaction.
- The stylesheet and script must load from their exact root paths; verify visual styling in a local browser and inspect the document links.

---

### Task 1: Create Morrow's static page and styles

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `README.md`
- Delete: `style.css`

**Interfaces:**
- Consumes: The approved design in `docs/superpowers/specs/2026-10-21-morrow-design.md`.
- Produces: A root page with `#search-input`, `#search-button`, `#clear-button`, `#results`, `#empty-state`, and `styles.css` / `script.js` links.

- [ ] **Step 1: Build the semantic HTML skeleton**

Create a branded sticky header, one-line tagline, search-led main section, visible label for `input#search-input`, inert `button#search-button` and `button#clear-button`, three nonfunctional category buttons, an empty-state element outside the grid, and an initially childless `section#results`. Link `styles.css` in `<head>` and load `script.js` immediately before `</body>`. Use buttons that do not submit or navigate.

- [ ] **Step 2: Add responsive styling**

Use a paper background, forest-green text and controls, and a restrained citrus accent. Keep the header sticky, make the hero and search layout stack at narrow widths, provide visible focus styles, and set `#results` to `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(210px, 1fr))` and a consistent gap.

- [ ] **Step 3: Keep JavaScript inert**

Create `script.js` with a single explanatory comment and no event handlers or other behavior.

- [ ] **Step 4: Write the README**

Write 3–5 sentences naming Morrow, describing its future image-search purpose, and explaining two design decisions and why they were made.

- [ ] **Step 5: Remove the stale stylesheet**

Delete the starter `style.css`, which is not the stylesheet linked by the page.

### Task 2: Verify requirements and commit the feature branch

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`
- Verify: `README.md`
- Verify: removal of `style.css`

**Interfaces:**
- Consumes: Task 1's root files.
- Produces: A locally verified, committed `part-1-scaffold-ui` branch.

- [ ] **Step 1: Check required markup and empty results**

Confirm the unique IDs and associated visible input label exist, the stylesheet and script links point to the correct files, `#results` has no children or images, and the empty-state message is visible.

- [ ] **Step 2: Check responsive grid and README**

Confirm the grid uses the required `repeat(auto-fill, minmax(210px, 1fr))` CSS Grid declaration and the README contains 3–5 sentences, including two rationale-backed design decisions.

- [ ] **Step 3: Run the browser smoke check**

Open `index.html` locally. Check the styled header, tagline, input, button, chips, and empty state; test keyboard focus; click Search and press Enter; confirm no navigation, network search, or result cards; check the layout at 320px and a wide viewport.

- [ ] **Step 4: Initialize the requested feature branch and commit**

If the workspace is still uninitialized, run `git init`; create and switch to `part-1-scaffold-ui`; stage the app, spec, plan, and removal of the stale stylesheet; commit with `feat: scaffold Morrow image search UI`.

- [ ] **Step 5: Publish only with a configured public remote**

If a public GitHub remote and write access are available, push the feature branch and open a PR targeting `main`. If no remote or destination is configured, stop after the local commit and request the public repository URL/access needed to publish; do not invent a repository or claim a PR exists.
