# TRIUM BPO — Design System

The brand and UI system for **TRIUM BPO** (triumbpo.com.br), a Brazilian
business-process-outsourcing firm that takes over **payroll (folha de
pagamento)** and the **personnel department (departamento pessoal / DP)** for
small and mid-sized companies — specifically those with **10 to 99 CLT
employees** that don't run an internal HR function.

- **Product line:** *FOPA* is the first and flagship service line — end-to-end
  payroll + DP + eSocial compliance, with a digital client/employee portal
  bundled into the contract.
- **Positioning:** a boutique, specialist alternative to having payroll run as a
  bolt-on service by your accountant. Trust, compliance, and "we answer in one
  business day" are the core promises.
- **Market:** Brazil; everything is in **Brazilian Portuguese (pt-BR)** and
  anchored in Brazilian labor/tax mechanics (eSocial, FGTS, INSS, IRRF, CLT,
  convenções coletivas, LGPD).
- **Audience:** owners/managers of 10–99-person companies in retail, services,
  clinics, restaurants, light industry, and logistics.

## Sources used to build this system

This system was reverse-engineered from the company's production website:

- **GitHub:** `talktorobson/site-trium` — the landing page repo
  (`https://github.com/talktorobson/site-trium`). The live site is a single
  `index.html` (HTML + CSS + inline JS, no build step), fonts via Google Fonts
  (Sora + Inter), icons as inline SVGs. `index-v1-backup.html` is a prior
  version kept for reference.

> If you have access, explore that repository to go deeper — it is the single
> source of truth for the brand's tokens, copy voice, and section structure.
> Everything here (colors, type, spacing, components, the UI kit) is derived
> from it.

There is **one product** (the marketing website). No mobile app, design files,
or slide template were provided, so this system covers the website surface only.

---

## CONTENT FUNDAMENTALS — how TRIUM writes

The voice is **confident, plain-spoken, and reassuring** — a specialist talking
directly to a busy business owner, never corporate-stiff and never salesy-hype.

- **Person & address:** second person, informal Brazilian **"você"**, and a
  collective **"a gente / nós"** for TRIUM. It speaks *to* the owner about
  *their* problem: *"Você cuida do negócio. A burocracia fica com a gente."*
- **Tone:** calm authority with light, grounded metaphors for pain — *"Sua folha
  sem erro, sem multa e sem ocupar o seu dia"*, *"Seu tempo escorrendo pelo
  ralo"*, *"merece mais que um anexo de planilha"*. Pain is named honestly, then
  immediately resolved.
- **Concrete over abstract:** copy leans on real Brazilian DP vocabulary —
  eSocial, FGTS Digital, DCTFWeb, INSS, IRRF, rescisão, homologação, convenção
  coletiva, 13º, VT/VR. This signals genuine expertise to the reader.
- **Structure:** short headline (Sora) + one supporting sentence; benefit lists
  use 3–4 tight bullets. Eyebrow labels frame every section ("O problema", "Como
  funciona", "Por que a TRIUM", "Perguntas frequentes").
- **Sentence case** everywhere in prose; **UPPERCASE only** for the tracked
  eyebrow tags and small role labels ("SÓCIA · OPERAÇÃO DE DP").
- **Numbers as proof, sparingly:** "30 dias", "100%", "10 a 99", "1 dia útil" —
  used as a four-up strip, not scattered.
- **Trust & legal:** LGPD is referenced respectfully and repeatedly ("dados
  sensíveis", "acordo de tratamento de dados") — it reassures, never scares.
- **No emoji. No exclamatory hype. No English jargon** unless it's the actual
  Brazilian term of art (BPO, eSocial, WhatsApp).
- **CTAs** are action + reassurance: *"Pedir diagnóstico gratuito"*, *"Quero meu
  diagnóstico gratuito"*, *"Falar no WhatsApp"*. The diagnostic is always framed
  as **free and yours to keep**.

---

## VISUAL FOUNDATIONS

**Overall vibe:** premium-corporate fintech-adjacent. Deep navy authority, a
single confident teal accent, a warm amber highlight, lots of cool white space.
Clean, trustworthy, a little technical — never playful, never decorative.

### Color
- **Navy `#0B2540`** is the brand anchor: hero, dark sections, headings, footer
  (`#081A2E`, deepest). Navy gradients run navy → `#0D2C4E` → `#0A3A52`.
- **Teal `#00C896`** is the one accent — buttons, the logo, checkmarks, "ok"
  states, links on navy. **`#00A87E`** is the accessible teal for text/hover.
- **Amber `#F2B441`** is the warm third note (the third logo bar); `#D98E1B` is
  the readable amber for warning icons on light.
- **Brick red `#B8552F`** marks the negative column in comparisons — the only
  "bad" color, used sparingly.
- **WhatsApp green `#1FB35B`** is reserved strictly for WhatsApp CTAs.
- **Neutrals are cool:** page `#F6F9FC`, white cards, hairline `#E3EAF1`, body
  ink `#13293F`, muted `#5C6F82`. Nothing is warm-grey.
- On navy, text is white at **.82 / .72 / .60** alpha; borders at ~.10.

### Typography
- **Sora** (display) for all headings, the logo, big numerals, and buttons —
  weights 700/800, tight line-height **1.18**, occasionally slightly negative
  tracking on the hero.
- **Inter** (text) for body, leads, form fields — weights 400/500/600,
  comfortable **1.6** line-height.
- **Eyebrow tags** are the signature type device: Inter 600, **.12em** tracking,
  uppercase, teal, in a soft pill.
- Type scale tops out around **3.1rem** (hero, `clamp(2rem,4.2vw,3.1rem)`) and
  **2.3rem** for section headings (`clamp(1.6rem,3vw,2.3rem)`).

### Spacing & layout
- **4px base scale**; generous **96px** vertical section rhythm (64px on mobile).
- Centered container **max 1160px**, 24px gutters. Sticky 74px header.
- Card grids use a consistent **24px gap**; card padding **1.8–2.2rem**.

### Corners, borders, shadows
- **Radii:** inputs 10px, buttons/icon-wells 12–13px, cards **18px**, the hero
  mock 20px, chips/pills **999px**, avatars/FAB circular.
- **Borders:** 1px hairline `#E3EAF1` on light cards; on navy, 1px white-.10
  that **glows teal (.5) on hover**. Form fields use a 1.5px border that turns
  teal on focus.
- **Shadows:** one signature soft navy-tinted lift —
  `0 10px 40px rgba(11,37,64,.10)` — on card hover and floating chips. Deeper
  pops (`0 30px 70px rgba(0,0,0,.3)`) for the hero mock and the form over navy.
  Cards rest **flat** (no shadow) and gain the shadow + a `-5px` lift on hover.

### Backgrounds & texture
- The hero is a **navy diagonal gradient** with a faint **56px grid** masked by
  a radial fade, plus a soft teal radial glow bleeding off the top-right corner.
  This is the one "decorated" surface — most sections are flat white or flat
  navy. **No photography, no illustration, no heavy gradients elsewhere.**
- A small **"holerite" (payslip) mock card** with two floating status chips is
  the hero's product visual — white, rotated 2°, deep shadow.

### Motion
- Restrained and functional. Buttons/cards **`transitionY(-2px)` / `-5px`** on
  hover over **.2–.25s ease**; FAQ answers slide via `max-height` **.35s**;
  on-scroll sections fade-up **.6s** (`reveal`). The WhatsApp FAB scales 1.08 on
  hover. **No bounces, no infinite loops, no parallax.**

### Hover / press conventions
- **Primary button:** teal → teal-dark, text navy → white, lifts 2px.
- **Ghost button (on navy):** border + text go teal.
- **Cards:** lift + soft shadow (light) or teal border-glow + lighter fill (navy).
- **Links on navy:** white-.78 → teal.

---

## ICONOGRAPHY

- **System:** the brand uses **Lucide / Feather-family line icons** — 24×24
  viewBox, **2px stroke**, round caps and joins, `fill="none"`. They are
  inlined as SVG in the source (no icon font, no sprite, no PNG icons).
- **Tinting:** icons inherit context color — **teal `#00C896`** for positive/
  service icons (often in a teal-tint rounded "well"), **amber `#D98E1B`** for
  the "pain/warning" icons (in an amber-tint well), white on navy.
- **The one solid glyph:** the **WhatsApp** logo is a filled brand mark (not a
  line icon) — used on the green contact CTAs and the floating action button.
- **No emoji, ever.** No unicode-character icons. The only non-Lucide marks are
  the WhatsApp glyph and the TRIUM monogram.
- **In this system:** the full icon set is reproduced in
  `ui_kits/website/icons.jsx` (exposed as `window.TriumIcons`), copied verbatim
  from the production SVGs so they match exactly. If you need an icon that isn't
  there, add the matching Lucide path (same 2px-stroke, round-cap style) — or
  link Lucide from CDN (`https://unpkg.com/lucide@latest`); it is the exact
  family and a safe substitution.
- **Logo:** the monogram (`assets/logo-mark-on-dark.svg` /
  `logo-mark-on-light.svg`) is **three equal rounded pillars** (white/navy, teal,
  amber) — **one per founding partner, identical in size and weight** to signal
  an equal stake and equal impact; the three brand colors keep each partner
  distinct. Wordmark is "TRIUM" in Sora 800 with a tracked "B P O" subscript in
  teal.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the tokens + base.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for portable use.

**`tokens/`** — CSS custom properties (`@import`ed by `styles.css`)
- `fonts.css` — Sora + Inter via Google Fonts.
- `colors.css` — brand, status, neutral, on-dark palettes + semantic aliases.
- `typography.css` — families, weights, scale, line-heights, tracking.
- `spacing.css` — spacing scale, radii, shadows, layout, motion.
- `base.css` — light reset, base element defaults, `.ds-eyebrow` / `.ds-container`.

**`assets/`**
- `logo-mark-on-dark.svg`, `logo-mark-on-light.svg` — the TRIUM monogram.

**`components/`** — React primitives (compiled into the runtime bundle)
- `buttons/` — **Button** (primary · navy · ghost · outline · whatsapp; sizes; icons).
- `forms/` — **Input**, **Select**, **Checkbox** (teal focus, LGPD consent).
- `core/` — **Tag** (eyebrow), **Badge** (status pill), **Card** (light + navy glass), **Avatar**.
- `data/` — **StatItem** (the navy numbers-strip unit).
- `feedback/` — **FaqItem** (accordion row).

**`guidelines/`** — Design-System-tab specimen cards (Colors, Type, Spacing, Brand).

**`ui_kits/website/`** — full interactive recreation of the TRIUM landing page.
See its own `README.md`.

---

## Caveats
- **Fonts** are loaded from **Google Fonts** (Sora + Inter), exactly as the
  production site does, so no font binaries are vendored here.
- **Partner details** (surnames, full bios) are placeholders in the source and
  remain placeholders here.
- The system covers the **single website product**; there is no app, portal UI,
  or slide template in the source to model.
