# Portfolio — Yang FEI (Lesliam), AI Engineer

Static, trilingual (FR / 中文 / EN), single-page portfolio for the
OpenClassrooms AI Engineer final project (P15). Pure HTML/CSS/vanilla JS,
no framework, no build step, no external network dependency.

## Run locally

Two supported ways to view the site:

1. **Directly via `file://`** — just open `index.html` in a browser
   (double-click it, or `open index.html` / `xdg-open index.html`). Every
   asset is referenced with a relative path and there are no `fetch`/XHR
   calls, so this works fully offline.
2. **Via a static server** (closer to the GitHub Pages environment):

   ```bash
   cd portfolio
   python3 -m http.server 8000
   ```

   Then open `http://localhost:8000/` in a browser.

## Deploy to GitHub Pages

This folder is deploy-ready as-is:

1. Push the repository (or just this `portfolio/` folder) to GitHub.
2. In the repo settings, enable **GitHub Pages**:
   - Option A — serve from the `main` branch, `/portfolio` folder (if
     the whole mission repo is pushed).
   - Option B — copy the contents of `portfolio/` into a dedicated
     `docs/` folder at the repo root, or into a `gh-pages` branch, and
     point GitHub Pages at that location.
3. No build step is required — GitHub Pages serves the static files
   as-is.

## Project structure

```
portfolio/
  index.html            single-page markup, 6 sections (hero, parcours,
                          competences, projets OC, reflexivite, contact) + nav
  assets/
    css/styles.css       design system (palette, type, layout, components)
    js/i18n.js            FR/ZH/EN dictionary + language-switch engine
    js/main.js             nav, dynamic section rendering, scroll reveal, theme
    arch/                   3 architecture illustrations, one per language
    mascot/                 8 mascot poses available (waving, laptop, presenting,
                             thinking, pointing, hero, thumbsup, motif); the page
                             currently uses 3 of them (hero, waving, pointing) and
                             keeps the others for future sections
      eras/                  5 parcours scenes (formation, early stages, embedded,
                              AI reconversion, atelier)
    docs/                   linked deliverables: the project management report
                             (PDF) and the rendered mind map (HTML)
  README.md
```

## Editing content

All user-facing text lives in `assets/js/i18n.js`, one JS object per
language (`fr`, `zh`, `en`) with an identical key structure across the
three. Static text in `index.html` is bound via `data-i18n="path.to.key"`
(or `data-i18n-attr="attr:path.to.key"` for attributes like `alt` /
`aria-label`). Repeated/structured content (timeline, skill branches,
project cards, reflection Q&A) is rendered from arrays in the same
dictionary by `main.js` — edit the arrays, the markup regenerates itself
on load and on language switch.

## Accessibility notes

- Keyboard: all interactive elements (skip link, nav and burger menu,
  language switcher, theme toggle, links, `<details>` disclosures in
  Réflexivité) are reachable and operable via keyboard, with a visible
  focus ring.
- `prefers-reduced-motion: reduce` disables the scroll-reveal motion, the
  hero parallax, smooth anchor scrolling and every transition; content is
  shown immediately instead.
- Without JavaScript, the `.no-js` fallback keeps every section fully
  visible (the reveal animation is the only thing lost).
- A language switch is announced through an `aria-live` region; the
  mastery levels are exposed as `role="img"` with a textual label
  ("Niveau N sur 5") rather than as decorative dots only.
- The architecture illustration has both an `alt` text and a longer
  text-equivalent description wired via `aria-describedby`; the mascot
  and era illustrations are decorative or carry a descriptive `alt`.
- Links opening a new tab carry a visually-hidden "opens in a new tab"
  hint.

## Known gaps for the next iteration

- Mastery levels in Compétences are an editorial self-assessment,
  reconciled with `deliverables/carte_mentale/carte_mentale.mm` (the
  authoritative source). Where the two differ, the site is a
  finer-grained superset rather than a contradiction: it splits some
  mind-map nodes (6 soft skills against 5 merged nodes) and rates a few
  rows the mind map leaves unrated.
- The LinkedIn URL in the Contact section should be confirmed before
  publication.
