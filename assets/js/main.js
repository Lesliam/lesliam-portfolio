/*
 * main.js — nav, dynamic content rendering, scroll reveal, theme + language.
 * Depends on window.I18N (i18n.js).
 */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

  var LEVEL_LABEL = {
    fr: function (n) { return `Niveau ` + n + ` sur 5`; },
    zh: function (n) { return `熟练度 ` + n + `/5`; },
    en: function (n) { return `Level ` + n + ` of 5`; }
  };

  function clearChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null && text !== ``) node.textContent = text;
    return node;
  }

  /* ---------- renderers ---------- */

  /* Index-based era-scene mapping for the parcours story panels, in display
     order. Four illustrated chapters, each stitched to one generated scene. */
  var CHAPTER_ERA_SCENE = [`formation`, `early_stages`, `embedded`, `ai_reconversion`];

  function eraScenePath(eraKey) {
    return `assets/mascot/eras/era_` + eraKey + `.png`;
  }

  function renderChapters(dict) {
    var container = document.getElementById(`story`);
    if (!container) return;
    clearChildren(container);

    dict.parcours.chapters.forEach(function (chapter, index) {
      var article = el(`article`, `chapter reveal`);

      var panel = el(`div`, `panel`);
      var badge = el(`span`, `panel__no`, chapter.chapNum);
      badge.setAttribute(`aria-hidden`, `true`);
      panel.appendChild(badge);

      var img = el(`img`, `panel__img`);
      img.src = eraScenePath(CHAPTER_ERA_SCENE[index] || CHAPTER_ERA_SCENE[0]);
      img.alt = chapter.imgAlt || ``;
      img.width = 1200;
      img.height = 896;
      img.loading = `lazy`;
      panel.appendChild(img);
      article.appendChild(panel);

      var tale = el(`div`, `tale`);
      tale.appendChild(el(`p`, `tale__chap`, chapter.chapLabel));
      tale.appendChild(el(`h3`, null, chapter.title));
      tale.appendChild(el(`p`, `tale__lead`, chapter.lead));

      var stamps = el(`div`, `stamps`);
      (chapter.stamps || []).forEach(function (stamp) {
        var span = el(`span`, `stamp`);
        span.appendChild(el(`b`, null, stamp.year));
        span.appendChild(document.createTextNode(` · ` + stamp.org));
        stamps.appendChild(span);
      });
      tale.appendChild(stamps);
      article.appendChild(tale);

      container.appendChild(article);
    });
  }

  function renderLanguagesList(targetId, dict) {
    var list = document.getElementById(targetId);
    if (!list) return;
    clearChildren(list);
    dict.parcours.languages.forEach(function (lang) {
      list.appendChild(el(`li`, null, lang));
    });
  }

  /* Line-art glyphs echoing each branch's matching prop in the atelier
     scene (neural net / pipeline / board / server). Static, trusted markup
     -- not user data -- so a direct innerHTML assignment is safe here. */
  var BRANCH_GLYPH = {
    "ia-ml": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3">`
      + `<circle cx="5" cy="7" r="2.2"/><circle cx="5" cy="19" r="2.2"/>`
      + `<circle cx="17" cy="4" r="2.2"/><circle cx="17" cy="13" r="2.2"/><circle cx="17" cy="22" r="2.2"/>`
      + `<circle cx="29" cy="10" r="2.2"/><circle cx="29" cy="16" r="2.2"/>`
      + `<path d="M7 7l8-3M7 7l8 6M7 19l8-6M7 19l8 3M19 4l8 6M19 13l8-3M19 13l8 3M19 22l8-6"/></svg>`,
    "mlops": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3">`
      + `<rect x="6" y="3" width="22" height="15" rx="1.5"/>`
      + `<path d="M3 22h28l-2-4H5z"/>`
      + `<rect x="11" y="7" width="5" height="4" rx="0.6"/><rect x="19" y="7" width="5" height="4" rx="0.6"/>`
      + `<path d="M16 9h3M17.5 11v3h-4M17.5 14h4"/></svg>`,
    "embarque": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3">`
      + `<rect x="4" y="6" width="26" height="14" rx="1.5"/>`
      + `<rect x="12" y="10" width="10" height="6" rx="0.8"/>`
      + `<path d="M12 12h-3M12 14h-3M22 12h3M22 14h3M14 6V3M20 6V3M14 20v3M20 20v3"/></svg>`,
    "infra": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3">`
      + `<rect x="9" y="2" width="16" height="22" rx="1.5"/>`
      + `<path d="M12 6h7M12 10h7"/>`
      + `<circle cx="22" cy="6" r="0.9"/><circle cx="22" cy="10" r="0.9"/>`
      + `<circle cx="17" cy="16" r="2.2"/><circle cx="17" cy="20.5" r="0.9"/></svg>`,
    /* Démo & vulgarisation: a browser frame with a play triangle -- an
       interactive demo someone can open and try. */
    "demo": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<rect x="4" y="4" width="26" height="18" rx="2"/>`
      + `<path d="M4 9h26"/>`
      + `<circle cx="7.5" cy="6.5" r="0.7"/><circle cx="10.5" cy="6.5" r="0.7"/>`
      + `<path d="M9 14h7M9 18h4"/>`
      + `<path d="M21 13.5l5 3-5 3z"/></svg>`,
    /* Synthesis cards (same card markup as the skill branches): a house
       sheltering a chip for the self-hosted personal infrastructure, two
       crossing strands for the through line between both careers. */
    "infra-perso": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M4 12l13-9 13 9"/><path d="M7 11v11h20V11"/>`
      + `<rect x="13" y="14" width="8" height="6" rx="1"/>`
      + `<path d="M13 16h-2M13 18.5h-2M21 16h2M21 18.5h2"/></svg>`,
    "fil-rouge": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M4 5c9 1 8 15 26 16"/><path d="M4 21c9-1 8-15 26-16"/>`
      + `<circle cx="17" cy="13" r="1.8"/></svg>`
  };

  /* Line-art glyphs for the Projets OC grid, one per featured project code.
     Same static-markup rationale as BRANCH_GLYPH above: trusted, non-user
     data, safe as a direct innerHTML assignment. */
  var OC_GLYPH = {
    "P6": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M5 22h25" />`
      + `<rect x="7" y="14" width="4" height="8" rx="0.6" /><rect x="15" y="10" width="4" height="12" rx="0.6" /><rect x="23" y="5" width="4" height="17" rx="0.6" />`
      + `<path d="M8 11l7-3 6 2 7-5" /></svg>`,
    "P7": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M17 7C13 4 8 4 4 6v15c4-2 9-2 13 1 4-3 9-3 13-1V6c-4-2-9-2-13 1z" />`
      + `<path d="M17 7v16" />`
      + `<path d="M7 10c2-1 4-1 6-0.5M7 14c2-1 4-1 6-0.5M21 9.5c2-0.5 4-0.5 6 0.5M21 13.5c2-0.5 4-0.5 6 0.5" /></svg>`,
    "P8": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<path d="M13 4v5M21 4v5" />`
      + `<rect x="9" y="9" width="16" height="8" rx="2" />`
      + `<path d="M17 17v3a3 3 0 0 1-3 3H7" /></svg>`,
    "P13": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<circle cx="17" cy="6" r="3" />`
      + `<path d="M13.5 9.5c1 1.5 1 3-0.5 4.5 1.5 1 2 3 1.5 5h5c-0.5-2 0-4 1.5-5-1.5-1.5-1.5-3-0.5-4.5" />`
      + `<path d="M11 22h12l-1-3H12z" /></svg>`,
    "P14": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<rect x="6" y="4" width="22" height="18" rx="2.5" />`
      + `<path d="M11 9h4M11 13h7M11 17h5" />`
      + `<path d="M22 8.5v6M19 11.5h6" /></svg>`,
    "P15": `<svg width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">`
      + `<rect x="13" y="2" width="8" height="13" rx="4" />`
      + `<path d="M9 12a8 8 0 0 0 16 0" />`
      + `<path d="M17 20v3M13 23h8" /></svg>`
  };

  /* External-link icon reused in both the featured card foot and the full
     project index -- a small out-arrow signalling "leaves the page". */
  var EXTERNAL_LINK_ICON = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h6v6M10 3L3 10" /></svg>`;

  function renderSkillBar(level, lang) {
    var wrap = el(`div`, `skill-bar`);
    wrap.setAttribute(`role`, `img`);
    wrap.setAttribute(`aria-label`, LEVEL_LABEL[lang](level));
    for (var i = 1; i <= 5; i++) {
      var dot = el(`span`, `skill-bar__dot` + (i <= level ? ` skill-bar__dot--filled` : ``));
      dot.setAttribute(`aria-hidden`, `true`);
      wrap.appendChild(dot);
    }
    return wrap;
  }

  function renderBranches(dict, lang) {
    var container = document.getElementById(`branches-list`);
    if (!container) return;
    clearChildren(container);
    dict.competences.branches.forEach(function (branch) {
      /* A branch flagged `wide` spans the whole grid row instead of taking a
         column, so the symmetric four-card row above it stays intact. */
      var card = el(`article`, `branch-card` + (branch.wide ? ` branch-card--wide` : ``));
      var head = el(`div`, `branch-card__head`);
      var glyph = el(`span`, `branch-card__glyph`);
      glyph.setAttribute(`aria-hidden`, `true`);
      glyph.innerHTML = BRANCH_GLYPH[branch.id] || ``;
      head.appendChild(glyph);
      card.appendChild(head);
      card.appendChild(el(`h3`, `branch-card__title`, branch.title));
      var ul = el(`ul`, `branch-card__skills`);
      ul.setAttribute(`role`, `list`);
      branch.skills.forEach(function (skill) {
        var li = el(`li`, `skill-row`);
        var top = el(`div`, `skill-row__top`);
        top.appendChild(el(`span`, `skill-row__name`, skill.name));
        top.appendChild(el(`span`, `skill-row__evidence`, skill.evidence));
        li.appendChild(top);
        li.appendChild(renderSkillBar(skill.level, lang));
        ul.appendChild(li);
      });
      card.appendChild(ul);
      container.appendChild(card);
    });
  }

  /* Synthesis cards closing the Compétences section: the personal
     infrastructure running in production, and the through line between the
     embedded and AI careers. Same card markup as the skill branches, minus
     the 1-5 level bars -- these entries are facts, not self-assessed levels. */
  function renderSynthese(dict) {
    var container = document.getElementById(`synthese-list`);
    if (!container) return;
    clearChildren(container);
    (dict.competences.synthese || []).forEach(function (card) {
      var article = el(`article`, `branch-card`);

      var head = el(`div`, `branch-card__head`);
      var glyph = el(`span`, `branch-card__glyph`);
      glyph.setAttribute(`aria-hidden`, `true`);
      glyph.innerHTML = BRANCH_GLYPH[card.id] || ``;
      head.appendChild(glyph);
      article.appendChild(head);

      article.appendChild(el(`h3`, `branch-card__title`, card.title));
      if (card.lead) article.appendChild(el(`p`, `card-note`, card.lead));

      /* display:flex / display:grid drops the implicit list semantics in some
         screen readers -- same explicit role as the OC index list. */
      var ul = el(`ul`, `branch-card__skills`);
      ul.setAttribute(`role`, `list`);
      (card.items || []).forEach(function (item) {
        var li = el(`li`, `skill-row`);
        var top = el(`div`, `skill-row__top`);
        top.appendChild(el(`span`, `skill-row__name`, item.name));
        li.appendChild(top);
        li.appendChild(el(`p`, `card-note`, item.note));
        ul.appendChild(li);
      });
      article.appendChild(ul);
      container.appendChild(article);
    });
  }

  function renderSoftSkills(dict) {
    var list = document.getElementById(`soft-skills-list`);
    if (!list) return;
    clearChildren(list);
    dict.competences.softSkills.forEach(function (skill) {
      var li = el(`li`, `soft-skill`);
      li.appendChild(el(`h4`, `soft-skill__title`, skill.title));
      li.appendChild(el(`p`, `soft-skill__proof`, skill.proof));
      list.appendChild(li);
    });
  }

  /* The architecture diagram is now a hand-drawn illustration (raster image,
     labels baked in), not a DOM-built diagram -- so this renderer no longer
     builds visible nodes. It assembles the same underlying archNodes data
     into a text-equivalent description for screen-reader users, wired to
     the image via aria-describedby. */
  function renderArchDescription(dict) {
    var container = document.getElementById(`arch-longdesc`);
    if (!container) return;
    var nodes = dict.projet.archNodes;
    var description = [
      nodes.terminalTitle + `: ` + nodes.terminalItems.join(`, `) + `.`,
      nodes.arrowOut + ` -> ` + nodes.serverTitle + `: ` + nodes.serverItems.join(`, `) + `.`,
      nodes.arrowBack + `. ` + nodes.privacyNote
    ].join(` `);
    container.textContent = description;
  }

  function renderPillarSteps(dict) {
    var list = document.getElementById(`pillar1-steps`);
    if (!list) return;
    clearChildren(list);
    dict.projet.pillar1.steps.forEach(function (step) {
      list.appendChild(el(`li`, null, step));
    });
  }

  function renderOCCards(dict) {
    var container = document.getElementById(`oc-cards`);
    if (!container) return;
    clearChildren(container);
    dict.projetsOC.cards.forEach(function (card) {
      var hasRepo = !!card.repo;
      var classNames = `oc-card` + (hasRepo ? ` oc-card--link` : ``) + (card.flagship ? ` oc-card--flagship` : ``);
      var article = el(hasRepo ? `a` : `article`, classNames);
      if (hasRepo) {
        article.href = card.repo;
        article.target = `_blank`;
        article.rel = `noopener noreferrer`;
      }
      if (card.flagship) {
        article.appendChild(el(`span`, `oc-card__flag`, dict.projetsOC.flagshipTag));
      }

      var head = el(`div`, `oc-card__head`);
      var glyph = el(`span`, `oc-card__glyph`);
      glyph.setAttribute(`aria-hidden`, `true`);
      glyph.innerHTML = OC_GLYPH[card.code] || ``;
      head.appendChild(glyph);
      head.appendChild(el(`span`, `oc-card__code`, card.code));
      article.appendChild(head);

      article.appendChild(el(`h3`, `oc-card__title`, card.title));
      article.appendChild(el(`p`, `oc-card__desc`, card.desc));

      var tags = el(`ul`, `oc-card__tags`);
      tags.setAttribute(`role`, `list`);
      card.tags.forEach(function (tag) {
        tags.appendChild(el(`li`, null, tag));
      });
      article.appendChild(tags);

      var foot = el(`p`, `oc-card__foot`);
      if (hasRepo) {
        var repoSpan = el(`span`, `oc-card__repo`, dict.projetsOC.viewRepoLabel);
        repoSpan.insertAdjacentHTML(`beforeend`, EXTERNAL_LINK_ICON);
        foot.appendChild(repoSpan);
        /* Non-decorative: survives without hover, exposes the tab-opening
           behavior to keyboard/screen-reader users. */
        foot.appendChild(el(`span`, `visually-hidden`, dict.projetsOC.opensNewTabHint));
      } else {
        foot.appendChild(el(`span`, `oc-card__private`, dict.projetsOC.privateLabel));
      }
      article.appendChild(foot);

      if (hasRepo) {
        var bubble = el(`span`, `oc-card__bubble`);
        bubble.setAttribute(`aria-hidden`, `true`);
        var bubbleMascot = el(`img`, `oc-card__bubble-mascot`);
        bubbleMascot.src = `assets/mascot/05_pointing.png`;
        bubbleMascot.alt = ``;
        bubble.appendChild(bubbleMascot);
        bubble.appendChild(el(`span`, `oc-card__bubble-text`, dict.projetsOC.repoAsk));
        article.appendChild(bubble);
      }
      container.appendChild(article);
    });
  }

  /* Compact full index (P2-P15): every project, not just the six featured
     ones, each a single-line entry linking straight to its repo. */
  function renderOCIndex(dict) {
    var container = document.getElementById(`oc-index-list`);
    if (!container) return;
    clearChildren(container);
    (dict.projetsOC.allProjects || []).forEach(function (proj) {
      var li = el(`li`, `oc-index__item`);
      li.appendChild(el(`span`, `oc-index__code`, proj.code));
      var link = el(`a`, `oc-index__link`, proj.title);
      link.href = proj.repo;
      link.target = `_blank`;
      link.rel = `noopener noreferrer`;
      link.appendChild(el(`span`, `visually-hidden`, ` ` + dict.projetsOC.opensNewTabHint));
      li.appendChild(link);
      container.appendChild(li);
    });
  }

  function renderQA(dict) {
    var container = document.getElementById(`qa-list`);
    if (!container) return;
    clearChildren(container);
    dict.reflexivite.items.forEach(function (item, index) {
      var details = el(`details`, `qa-item`);
      if (index === 0) details.setAttribute(`open`, ``);
      var summary = el(`summary`, `qa-item__question`, item.q);
      details.appendChild(summary);
      var body = el(`div`, `qa-item__body`);
      body.appendChild(el(`p`, null, item.a));
      if (item.aside) {
        body.appendChild(el(`blockquote`, `qa-item__aside`, item.aside));
      }
      details.appendChild(body);
      container.appendChild(details);
    });
  }

  function renderAll() {
    var dict = window.I18N.getDict();
    var lang = window.I18N.getLang();
    renderChapters(dict);
    renderLanguagesList(`contact-languages-list`, dict);
    renderBranches(dict, lang);
    renderSoftSkills(dict);
    renderSynthese(dict);
    renderArchDescription(dict);
    renderPillarSteps(dict);
    renderOCCards(dict);
    renderOCIndex(dict);
    renderQA(dict);
  }

  /* ---------- nav ---------- */

  function initNav() {
    var burger = document.getElementById(`nav-burger`);
    var nav = document.getElementById(`site-nav`);
    if (burger && nav) {
      burger.addEventListener(`click`, function () {
        var isOpen = nav.classList.toggle(`site-nav--open`);
        burger.setAttribute(`aria-expanded`, isOpen ? `true` : `false`);
      });
      nav.querySelectorAll(`a`).forEach(function (link) {
        link.addEventListener(`click`, function () {
          nav.classList.remove(`site-nav--open`);
          burger.setAttribute(`aria-expanded`, `false`);
        });
      });
    }

    document.querySelectorAll(`.lang-switch__btn`).forEach(function (button) {
      button.addEventListener(`click`, function () {
        window.I18N.setLang(button.getAttribute(`data-lang`));
      });
    });
  }

  /* ---------- anchor navigation (explicit, not left to native hash-jump) -
   * Every same-page `#id` link is handled here with an explicit
   * scrollIntoView so the initial hash scroll and in-session anchor jumps
   * behave the same way, honoring prefers-reduced-motion either way.
   * Scrolling itself stays fully native: no wheel/keyboard hijack, no
   * scroll-snap, sections size to their own content. */

  function scrollToSection(id, smooth) {
    var target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: smooth && !prefersReducedMotion ? `smooth` : `auto`, block: `start` });
  }

  function initAnchorNav() {
    document.addEventListener(`click`, function (event) {
      var link = event.target.closest ? event.target.closest(`a[href^="#"]`) : null;
      if (!link) return;
      var id = link.getAttribute(`href`).slice(1);
      if (!id || !document.getElementById(id)) return;
      event.preventDefault();
      scrollToSection(id, true);
      if (window.history && window.history.pushState) {
        window.history.pushState(null, ``, `#` + id);
      }
    });

    if (window.location.hash) {
      var initialId = window.location.hash.slice(1);
      window.setTimeout(function () { scrollToSection(initialId, false); }, 60);
    }
  }

  /* ---------- scroll reveal ---------- *
   * Each section (and, via CSS nth-child stagger, its direct children)
   * fades and lifts in ONCE the first time it enters the viewport, then
   * stays visible. This is a storytelling reveal (content arrives in
   * reading order as you scroll to it), not a repeating in/out toggle -
   * repeating the animation every time a section crosses the viewport
   * edge is what produced the earlier stutter/jank complaint. Once
   * revealed, a section is unobserved so it never re-hides on scroll-up.
   *
   * Chapter panels are rendered dynamically by renderChapters/renderAll,
   * so this observer also (re-)runs after renderAll to pick up the fresh
   * `.reveal` nodes it just created. */
  function initReveal() {
    armReveal();
    if (window.I18N) window.I18N.onChange(function () { window.setTimeout(armReveal, 0); });
  }

  var revealObserver = null;

  function armReveal() {
    var targets = document.querySelectorAll(`[data-reveal], .reveal:not(.is-visible)`);
    if (targets.length === 0) return;
    if (prefersReducedMotion || !(`IntersectionObserver` in window)) {
      targets.forEach(function (node) { node.classList.add(`is-visible`); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add(`is-visible`);
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: `0px 0px -8% 0px` });
    }
    targets.forEach(function (node) { revealObserver.observe(node); });
  }

  /* Safety net: some content (story panels) is rendered asynchronously
     after i18n.init(); if for any reason the observer never sees them
     (e.g. init ran before the DOM nodes existed), reveal everything after
     a short timeout so content is never permanently stuck at opacity 0. */
  function armRevealSafetyNet() {
    window.setTimeout(function () {
      document.querySelectorAll(`[data-reveal]:not(.is-visible), .reveal:not(.is-visible)`).forEach(function (node) {
        node.classList.add(`is-visible`);
      });
    }, 4000);
  }

  /* ---------- hero parallax --------------------------------------------
   * Motivated by hierarchy/storytelling: as the user scrolls away from the
   * hero, the mascot recedes slightly faster than the page, reinforcing the
   * transition into "Parcours" instead of just cutting away. Cheap: a
   * single rAF-throttled scroll listener, bounded to the hero's own height,
   * writes one transform (no layout reads other than getBoundingClientRect
   * on the already-cheap hero node). Fully skipped under reduced motion. */
  function initHeroParallax() {
    if (prefersReducedMotion) return;
    var img = document.querySelector(`.hero__imgstack`);
    var hero = document.getElementById(`hero`);
    if (!img || !hero) return;

    var ticking = false;
    function update() {
      ticking = false;
      var rect = hero.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      var progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      img.style.transform = `translateY(` + (progress * 34).toFixed(1) + `px)`;
    }
    window.addEventListener(`scroll`, function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
  }

  /* ---------- theme (light / dark, follows system, manual override) ------ */

  var THEME_STORAGE_KEY = `portfolio-theme`;

  function getStoredTheme() {
    try {
      var stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      return stored === `light` || stored === `dark` ? stored : null;
    } catch (e) {
      return null;
    }
  }

  function getEffectiveTheme() {
    var stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
  }

  function updateThemeToggleUI() {
    var button = document.getElementById(`theme-toggle`);
    var label = document.getElementById(`theme-toggle-label`);
    if (!button) return;
    var effective = getEffectiveTheme();
    button.setAttribute(`aria-pressed`, effective === `dark` ? `true` : `false`);
    if (label && window.I18N) {
      var dict = window.I18N.getDict();
      label.textContent = effective === `dark` ? dict.nav.themeToggleDark : dict.nav.themeToggleLight;
    }
  }

  function initTheme() {
    var button = document.getElementById(`theme-toggle`);
    updateThemeToggleUI();

    if (button) {
      button.addEventListener(`click`, function () {
        var next = getEffectiveTheme() === `dark` ? `light` : `dark`;
        document.documentElement.setAttribute(`data-theme`, next);
        try {
          window.localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch (e) {
          /* localStorage unavailable — theme choice stays session-only */
        }
        updateThemeToggleUI();
      });
    }

    var media = window.matchMedia(`(prefers-color-scheme: dark)`);
    var onSystemChange = function () {
      if (!getStoredTheme()) updateThemeToggleUI();
    };
    if (media.addEventListener) media.addEventListener(`change`, onSystemChange);

    if (window.I18N) window.I18N.onChange(updateThemeToggleUI);
  }

  /* ---------- boot ---------- *
   * initReveal runs FIRST and each step is isolated in its own try/catch:
   * if any later step throws (e.g. an i18n or render error), the reveal
   * must already be wired so sections still become visible on scroll
   * instead of staying permanently hidden behind [data-reveal]'s opacity:0. */

  function safeRun(fn) {
    try {
      fn();
    } catch (e) {
      /* One failing init step must not block the others (see comment
         above): content visibility and navigation should degrade
         independently rather than cascade-fail together. */
    }
  }

  document.addEventListener(`DOMContentLoaded`, function () {
    safeRun(initReveal);
    safeRun(armRevealSafetyNet);
    safeRun(function () {
      window.I18N.onChange(renderAll);
      window.I18N.init();
    });
    safeRun(initNav);
    safeRun(initAnchorNav);
    safeRun(initTheme);
    safeRun(initHeroParallax);
  });
})();
