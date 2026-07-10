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
  index.html            single-page markup, 7 sections + nav + modal
  assets/
    css/styles.css       design system (palette, type, layout, components)
    js/i18n.js            FR/ZH/EN dictionary + language-switch engine
    js/main.js             nav, dynamic section rendering, scroll reveal, modal
    js/mascot.js            cursor-follower companion + section pose state-machine
    mascot/                 the 8 mascot PNGs (waving, laptop, presenting, thinking,
                             pointing, hero, thumbsup, motif)
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

- Keyboard: all interactive elements (nav, language switcher, mascot
  toggle, modal, `<details>` disclosures) are reachable and operable via
  keyboard; the memo modal traps focus and restores it to the trigger on
  close.
- `prefers-reduced-motion: reduce` disables the cursor-follow effect, the
  section-triggered pose swap animation, and scroll-reveal motion — the
  mascot companion falls back to a single static pose.
- The floating mascot companion is purely decorative (`aria-hidden`) and
  uses `pointer-events: none`, so it can never intercept clicks or block
  keyboard/screen-reader navigation. A persisted toggle in the nav bar
  turns it off entirely.
- On touch devices the cursor-follow lean is skipped (no pointer to
  track); the section-pose swap still runs. The floating companion is
  hidden below 720px width so it cannot cover content on small screens.

## Known gaps for the next iteration

See the final build report for the full list (rapport link is an
intentional "à venir" placeholder; LinkedIn link likewise; project
mastery levels in Compétences are an editorial self-assessment pending
Lesliam's review).
