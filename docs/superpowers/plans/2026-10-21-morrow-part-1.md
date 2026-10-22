# FrameFind Part 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adapt FrameFind into a polished, responsive, static image-search UI and commit it on a feature branch based on `main`.

**Architecture:** Preserve the current semantic HTML and visual design, correcting the search landmark so it remains inert. Keep the correctly linked root stylesheet and empty responsive grid, and leave JavaScript behavior for Part 2.

**Tech Stack:** Plain HTML, CSS, and JavaScript; no frameworks, libraries, or build tools.

**Spec:** `docs/superpowers/specs/2026-10-21-morrow-design.md`

## Global Constraints

- Use plain HTML, CSS, and JavaScript; no frameworks, libraries, or build tools.
- Keep `index.html`, `styles.css`, `script.js`, and `README.md` at the repository root.
- Preserve unique IDs `search-input`, `search-button`, and `results`.
- Keep `#results` empty initially and style it with CSS Grid using `repeat(auto-fill, minmax(...))`.
- Do not fetch or display images or add search behavior in Part 1.
- Keep the README to 3–5 sentences.

## Review Focus

- At a 320px viewport, the header, search form, chips, and page must not overflow horizontally; verify in the browser at 320px.
- With keyboard-only navigation, the search field, Search and Clear buttons, and chips must be reachable and visibly focused; verify using Tab and Shift+Tab.
- Clicking Search or pressing Enter must not navigate, fetch, or populate results; verify both actions in the browser.
- On initial load, the empty-state prompt is visible and `#results` has no child elements; inspect the DOM before and after interaction.
- The stylesheet and script must load from their exact root paths; verify visual styling in a local browser and inspect the document links.

---

### Task 1: Adapt FrameFind's static page and styles

**Files:**
- Modify: `index.html`
- Modify: `script.js`
- Verify: `styles.css`
- Verify: `README.md`

**Interfaces:**
- Consumes: The approved FrameFind design in `docs/superpowers/specs/2026-10-21-morrow-design.md`.
- Produces: A root page with `#search-input`, `#search-button`, `#clear-button`, `#results`, `#empty-state`, and matching `styles.css` / `script.js` links.

- [ ] **Step 1: Keep Search inert**

Replace the native form with a non-form `div` that retains the `search-form` class and ID and adds `role="search"`. Set `#search-button` to `type="button"`. This prevents implicit Enter submission without adding JavaScript behavior; preserve the accessible input label and existing unique IDs.

- [ ] **Step 2: Verify the stylesheet**

Keep the stylesheet linked as `styles.css` and preserve FrameFind's visual system, `.results-grid` CSS Grid rule using `repeat(auto-fill, minmax(...))`, and responsive breakpoints. Confirm no stale `style.css` remains.

- [ ] **Step 3: Keep JavaScript to one comment**

Replace the two existing comment lines in `script.js` with one explanatory comment and no handlers or other behavior.

- [ ] **Step 4: Verify the README**

Keep the existing README if it remains 3–5 sentences and names FrameFind, its image-search purpose, and two design decisions with rationales.

### Task 2: Verify requirements and publish the feature branch

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`
- Verify: `README.md`
- Verify: removal of `style.css`

**Interfaces:**
- Consumes: Task 1's root files.
- Produces: A locally verified, committed feature branch and a PR to `main` if repository access permits.

- [ ] **Step 1: Check markup and empty results**

Confirm the labeled input and unique IDs exist, the stylesheet and script links resolve, Search is `type="button"`, the search landmark is not a form, and `#results` has no children or images.

- [ ] **Step 2: Check responsive grid and README**

Confirm `.results-grid` uses `display: grid` and `grid-template-columns: repeat(auto-fill, minmax(...))`, and the README has 3–5 sentences with two rationale-backed design decisions.

- [ ] **Step 3: Run the browser smoke check**

Open `index.html` locally. Check styling, keyboard focus, click Search and press Enter, confirm no navigation, network search, or result cards, and inspect layout at 320px and a wide viewport.

- [ ] **Step 4: Commit on the feature branch**

Verify the current branch is the active feature branch based on `main`, stage the four root deliverables and updated design/plan documents, and commit with `fix: keep FrameFind Part 1 search inert`.

- [ ] **Step 5: Push and open a pull request**

Push the active feature branch to the configured public `origin` and open a PR targeting `main`. If push or PR creation is blocked by missing permissions or an existing conflicting branch, stop and report the exact blocker without force-pushing.
