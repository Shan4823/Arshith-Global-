# Audit Report — Tailwind CSS Migration

## Overview
All hand-written CSS in the Arshith Group Vite + React site (~8,006 lines across 8
files) has been migrated to Tailwind CSS v3.4.x, with **zero visual or behavioral
change**. The migration was completed across 14 phases; this report summarizes the
resulting changes. See [MIGRATION_REPORT.md](MIGRATION_REPORT.md) for full
phase-by-phase detail, cascade-merge specifics, and verification methodology.

## Final File Structure
```
postcss.config.js                  (new)
tailwind.config.js                 (new — shared by all 3 ecosystems)

src/styles/
  tailwind-home.css       2,555 lines  — Home, AboutCeo, Internship, LatestNews
  tailwind-infotech.css   2,335 lines  — InfoTech, AboutInfoTech
  tailwind-arshith.css      864 lines  — ArshithInfoTech
```
Total: 5,754 lines across 3 files (down from 8,006 lines across 8 files).

Each of the 7 page entry files (`Home`, `AboutCeo`, `Internship`, `LatestNews`,
`InfoTech`, `AboutInfoTech`, `ArshithInfoTech`) now imports exactly one
`tailwind-*.css` file and nothing else. No component `.jsx` file under
`src/components/**` needed its `className` values changed — every original class
name has a corresponding rule in the relevant `@layer components` block, so all
existing `className` usages continue to resolve to the same (or
cascade-equivalent) styles.

Production build (`npm run build`, 138 modules) produces 3 CSS chunks totalling
~96 KB minified (~17.4 KB gzip):
- `Header-*.css` (~41.6 KB) — `tailwind-home.css`, shared by Home/AboutCeo/
  Internship/LatestNews via the shared `Header`/`Footer` components.
- `useStatCounters-*.css` (~36.4 KB) — `tailwind-infotech.css`, shared by
  InfoTech/AboutInfoTech via the shared `useStatCounters` hook.
- `arshithinfotech-*.css` (~17.8 KB) — `tailwind-arshith.css`, used only by
  ArshithInfoTech (fully self-contained).

## Architecture
- **3 ecosystems, 1 shared `tailwind.config.js`.** Each ecosystem's
  `@layer base { :root { ... } }` defines the concrete values for shared
  semantic tokens (`--primary`, `--text-main`, `--shadow-sm`, etc.) referenced
  by `tailwind.config.js`'s `colors`/`boxShadow`/`borderRadius`/`fontFamily`
  extensions. `corePlugins.container` is disabled so each ecosystem's own
  `.container` class (with its own max-width) doesn't collide with Tailwind's
  built-in container utility.
- **`footer-premium.css` duplication**: ported into `tailwind-home.css` and
  `tailwind-arshith.css` (both ecosystems render the shared
  `components/layout/Footer.jsx`, which uses `.ag-footer*`/`.footer_bg*`/
  `.car-logo`/`.cyclist-logo`). `tailwind-infotech.css` does **not** include
  this content — `InfoTechFooter.jsx` is a separate custom component that never
  used those class names.
- Original class names were preserved in every `.jsx` component (no
  `className` rewrites); styles were ported into `@layer components`,
  including cascade-resolution merges where legacy CSS redefined the same
  selector multiple times.

## Files Removed
- `src/styles/legacy/` (entire directory: `styles.css`, `styles2.css`,
  `footer-premium.css`, `infotech.css`) — deleted
- `src/pages/home/home.css` — deleted
- `src/pages/aboutceo/aboutceo.css` — deleted
- `src/pages/internship/internship.css` — deleted
- `src/pages/arshith-infotech/arshithinfotech.css` — deleted

## Cascade-Resolution Merges
Several legacy files redefined the same selector multiple times with
overlapping/conflicting properties. Each was merged into a single rule using
"later-definition-wins per property", for example (ArshithInfoTech ecosystem):
- `.container` — 3 definitions → merged to
  `{ max-width:1200px; margin:auto; padding:0 20px; width:90%; text-align:center; }`
- `.section-title` — 3 definitions → merged to
  `{ text-align:center; margin-bottom:1rem; font-size:2.5rem; font-weight:700; color:var(--primary); }`
- `.section-subtitle` — 2 definitions → merged (keeps `line-height:1.6` from
  the first def, `color`/`margin`/`font-size` from the second)
- `.section` — 2 definitions (`60px 0` then `80px 0`) → `padding: 80px 0`
- `.service-card` — 2 definitions (a "stack card" flex layout + a "detailed
  services" card) → merged into one rule combining `display:flex` +
  `min-height:280px` with `border-radius:20px`, `padding:40px 30px`,
  `box-shadow:var(--shadow-sm)`, `border`, `transition`, `position:relative`
- `.hero-content` — 2 near-identical definitions (`color: white` vs
  `color: #fff`) → merged, last wins (`#fff`)

Equivalent multi-definition merges were performed for `tailwind-home.css` and
`tailwind-infotech.css` (e.g. AboutInfoTech's `.about-stats`,
`.about-hero-title` responsive overrides). Full details for all ecosystems are
in [MIGRATION_REPORT.md](MIGRATION_REPORT.md).

## Dead CSS Removed (Not Ported)
Confirmed via grep across component JSX — these rules were unreachable by any
current markup and were dropped rather than ported:

- **ArshithInfoTech**: `.hero-bg`, `.bg`, `.bg1`, `.bg3` + `@keyframes fade`
  (old image-crossfade hero variant, superseded by `.bg-video`); `.content`
  (alternate hero-content class, never rendered); `.services-grid` (alternate
  services layout, unused); bare `.icon` (always shadowed by the more specific
  `.service-card .icon`, which was ported); `.footer`, `.footer-links`,
  `.social-icons`, `.copyright` (alternate footer markup — the page actually
  renders the shared `Footer.jsx` with `.ag-footer*` classes); `.logo a` and
  `.hero h1` (both `@media` occurrences — selectors that can never match the
  current markup)
- **InfoTech / AboutInfoTech**: `.service-link` and `.service-link:hover` —
  no component renders this class

The image files these rules referenced (`Background.png`, `bg1.jpg.webp`,
`bg3.webp`) remain in `public/logos/` but are no longer referenced anywhere.
The production build is now clean — no warnings about unresolved/unused asset
references.

## Deviations from the Original Migration Plan
1. **Per-class conversion to inline Tailwind utilities was not done.** Every
   original class name — simple or complex — was ported verbatim
   (cascade-resolved where needed) into `@layer components` under its original
   name. JSX `className` strings were left untouched everywhere except the CSS
   `import` lines in the 7 page files. This was a deliberate risk-reduction
   choice given the zero-visual-change requirement.
2. **Keyframes were not centralized into `tailwind.config.js`'s
   `theme.extend.keyframes`/`animation`.** Since inline-utility conversion was
   dropped, every `@keyframes` block was instead placed directly inside the
   relevant ecosystem's `@layer components`, next to the rule that uses it.
   The `keyframes`/`animation` extensions in `tailwind.config.js` remain empty
   placeholders.
3. **Responsive breakpoints were kept as raw `@media` blocks** inside
   `@layer components`, positioned after all base (non-media) rules per a
   "base rules before `@media` overrides" ordering rule, rather than being
   converted to `max-[Npx]:`/`min-[Npx]:` utility variants.
4. **`!important` flags from `footer-premium.css`** were dropped in all
   ecosystems. Verified safe: in every ecosystem the `.ag-footer*` rules are
   placed after `.container`/`.section` in `@layer components`, so
   same-specificity, later-source-order non-`!important` declarations still
   win the cascade correctly.

## Known/Unavoidable Visual Quirks Preserved (Not "Fixed")
These are pre-existing artifacts of the original cascade that the migration
deliberately preserves, per the zero-visual-change requirement:
- **ArshithInfoTech `.hero`** has *two* stacked dark overlays: the
  `.hero-overlay` div (`background: rgba(0,0,0,0.5)`) and a `.hero::after`
  pseudo-element (also `rgba(0,0,0,0.5)`) — both rules existed in the original
  CSS and both still apply.
- **ArshithInfoTech `.container`** resolves to `text-align: center`, which
  also applies to `.container.ag-footer-inner`/`.container.ag-footer-bottom-inner`
  in the shared footer (inherited by descendants that don't set their own
  `text-align`) — already true of the pre-migration cascade and preserved
  as-is.

## Verification
- `npm run build` succeeds for all 7 pages with **zero errors and zero
  warnings**.
- `npm run dev` serves all pages and assets correctly (HTTP 200 checks
  performed for every route and key static asset, including
  `arshithinfoTech.html`, `main.jsx`, `ArshithInfoTech.jsx`, and
  `tailwind-arshith.css`).
- For cascade-resolved/merged selectors, a postcss-based cascade simulator
  parsed the production build output, walked rules in document order tracking
  nested `@media` conditions as a stack, and resolved "last matching rule
  wins" per property/viewport-width — used to confirm `.container`,
  `.section-title`, `.section-subtitle`, `.service-card`, `.hero-content`,
  `.about-container`, `.nav-list`/`.hamburger`, `.card-image`, and
  `.ag-footer-cols`/`.ag-footer-inner`/`.ag-footer-brand p` all resolve to the
  expected cascade-merged values at both desktop and mobile viewport widths.


