# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Landing page and Portal do Cliente (demo) for TRIUM BPO (triumbpo.com.br) — payroll/DP outsourcing for Brazilian companies with 10–99 employees. All user-facing content is in **Brazilian Portuguese (pt-BR)**.

## Running locally

There is no build step, no `npm install`, no bundler, and no test suite. React 18 + Babel standalone are loaded from CDN and JSX is transpiled in the browser. Serve the repo root with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/ (landing) and /client-portal.html (portal demo)
```

Opening `index.html` via `file://` will not work reliably because the JSX files are fetched via `<script src>`.

Deploy: publish the repo root to any static host. Production is the Vercel project `site-trium`.

## Architecture — script globals, no modules

There are no ES modules or imports. Each HTML entry point loads scripts in a fixed order, and files communicate exclusively through `window` globals:

- `index.html` (landing) loads: design-system CSS + `trium/site.css`, React/ReactDOM/`_ds_bundle.js`/Babel from CDN, then `trium/config.js` → `icons.jsx` → `sections-top.jsx` → `sections-mid.jsx` → `sections-bottom.jsx` → `app.jsx`.
- `client-portal.html` (portal demo) loads: design-system CSS + `trium/portal.css`, same CDN scripts, then `config.js` → `icons.jsx` → `portal.jsx`.

Consequences of this structure:

- Section files export by ending with `Object.assign(window, { Header, Hero, ... })`; `app.jsx` destructures them from `window` and renders `<App />` into `#app`. A new section must be added to its file's `Object.assign`, destructured in `app.jsx`, and its script must load before `app.jsx`.
- All files share one global scope, so React hooks are aliased per-file to avoid redeclaration errors (`const { useState: useStateA } = React` in `app.jsx`, `useStateP` in `portal.jsx`, etc.). Follow this pattern for any new top-level `const`.
- Script order in the HTML matters: `config.js` must precede everything; `icons.jsx` must precede anything using `window.TriumIcons`.
- CDN `<script>` tags are pinned with SRI `integrity` hashes — bumping a version requires updating the hash.

Key files:

- `trium/config.js` — `window.TRIUM` runtime config: `WA_NUMBER` (WhatsApp, currently a placeholder), `PORTAL_URL` (if `"#"`, the Portal button shows an "em implantação" toast instead of navigating), `FORM_EMAIL` (FormSubmit destination), and `waLink(text)` helper.
- `trium/app.jsx` — app shell: `TWEAK_DEFAULTS` (layout-variant flags between `/*EDITMODE-BEGIN*/`…`/*EDITMODE-END*/` markers, leftover from a removed prototyping "Tweaks" panel — several components take variant props like `heroViz`, `servicesLayout`, `compareStyle` keyed off it), scroll-reveal via IntersectionObserver (`.reveal` → `.in`), toast state, header scroll state.
- `trium/icons.jsx` — Lucide-style line icons (24×24, 2px stroke, round caps) exposed as `window.TriumIcons`; add new icons here in the same style, no emoji or icon fonts.
- `trium/sections-bottom.jsx` — includes the Contact form: posts JSON to `https://formsubmit.co/ajax/<FORM_EMAIL>`; on failure it falls back to opening WhatsApp with the form data pre-filled.
- `trium/portal.jsx` — the Portal do Cliente demo (static mock data, no backend).
- `index-v1-backup.html`, `index-v2-backup.html` — previous single-file versions kept for reference only; do not edit them.

## Design system (`_ds/trium-bpo-design-system-…/`)

The brand source of truth. `styles.css` is the entry point (pure `@import` list of `tokens/*.css` — fonts, colors, typography, spacing, base) and `_ds_bundle.js` exposes `window.TriumLogo`. `trium/site.css` builds on those tokens (use `var(--navy)`, `var(--teal)`, etc., not raw hex where a token exists) and defines a density scale via `.site[data-density]` CSS variables.

Read `_ds/…/readme.md` before writing copy or styling — it defines the brand in detail. The non-negotiables:

- **Copy voice:** confident, plain-spoken pt-BR; informal "você" for the reader, "a gente/nós" for TRIUM; real DP vocabulary (eSocial, FGTS, INSS, rescisão…); sentence case everywhere; UPPERCASE only for eyebrow tags; no emoji, no exclamatory hype, no English jargon beyond established terms (BPO, eSocial, WhatsApp).
- **Color roles:** navy `#0B2540` anchor; teal `#00C896` as the single accent (`#00A87E` for accessible text/hover); amber for warnings; brick red only for negative comparison columns; WhatsApp green `#1FB35B` strictly for WhatsApp CTAs.
- **Type:** Sora for headings/buttons/numerals, Inter for body.
- **Motion:** restrained — small hover lifts, fade-up reveals; no bounces, loops, or parallax.

## Known placeholders

`WA_NUMBER` in `config.js` and the partners' surnames/bios in the Team section are intentional placeholders — leave them unless explicitly asked to fill them in.
