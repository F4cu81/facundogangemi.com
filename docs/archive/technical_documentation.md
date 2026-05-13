# Technical Documentation — facundogangemi.com

## Project structure

### Root layout
- `astro.config.mjs`: Astro configuration for the site.
  - `site`: `https://facundogangemi.com`
  - `base`: `/`
  - `output`: `static`
  - `integrations`: Tailwind, MDX

### Source folders
- `src/layouts/`: shared page layout files.
  - `BaseLayout.astro`: central layout, `<head>` metadata, Open Graph, hreflang, global styles, and page wrapper.
- `src/components/`: reusable UI components.
  - `global/`: global page chrome components such as `Navbar.astro`, `MobileMenu.astro`, `Footer.astro`.
  - `ui/`: UI primitives like `Container.astro`, `CTAButton.astro`, `SectionHeader.astro`, `SectionWrapper.astro`, `TextLink.astro`.
- `src/pages/`: Astro route pages.
  - `index.astro`: homepage.
  - `404.astro`: custom 404 page.
  - `es/index.astro`: Spanish homepage placeholder.
  - `advisory/`, `case-studies/`, `insights/`: currently empty route directories.
- `src/data/`: site constants and navigation.
  - `site.ts`: site-level metadata and placeholder contact values.
  - `navigation.ts`: navigation items and footer navigation.
  - Additional data files: `advisoryPillars.ts`, `framework.ts`, `kpis.ts`, `logos.ts`.
- `src/content/`: content collections and config.
  - `config.ts`
  - `case-studies/`
  - `insights/`
- `src/styles/`: global CSS and token definitions.
  - `global.css`
  - `tokens.css`

### Public assets
- `public/robots.txt`: crawler directives.
- `public/manifest.webmanifest`: web manifest.
- `public/assets/`: static assets for the build.
  - `backgrounds/`, `case-studies/`, `documents/`, `favicon/`, `icons/`, `images/`, `insights/`, `logos/`, `og/`, `portraits/`, `speaking/`

### Top-level support files
- `package.json`: dependencies and scripts.
- `tsconfig.json`: TypeScript configuration with path aliases.
- `tailwind.config.mjs`: Tailwind theme and custom tokens.
- `CLAUDE.md` and `MASTER_CONTEXT.md`: project guidance and brand requirements.
- `legal/legal-context.md`: legal implementation source.

## Build environment

### Scripts
- `npm run dev`: starts Astro development server.
- `npm run build`: builds the static site.
- `npm run preview`: previews the build.
- `npm run astro`: Astro CLI.
- `npm run check`: Astro type and diagnostics.

### Dependencies
- `astro`
- `@astrojs/mdx`
- `@astrojs/sitemap`
- `@astrojs/tailwind`
- `tailwindcss`
- `typescript`
- `lightningcss`

## Data and metadata flow

- `src/data/site.ts` contains site-wide metadata used across pages and components.
- `BaseLayout.astro` reads `SITE` constants and page props to generate canonical URLs, Open Graph metadata, and hreflang links.
- Navigation and footer links are driven by `src/data/navigation.ts`.
- Page templates pass `title`, `description`, `ogImage`, `locale`, and `noIndex` props into `BaseLayout`.

## Page framework

- Pages are standard Astro components.
- No page-level server-side data fetching is currently present.
- `BaseLayout.astro` imports `@/styles/global.css` for global styles.
- Pages may pass `structuredData` and `canonical` props, though this is not widely used yet.

## Styling and theme

- Tailwind is configured in `tailwind.config.mjs` and is the primary utility framework.
- `global.css` imports Google fonts and applies base styles.
- `tokens.css` defines CSS custom properties that mirror Tailwind tokens.
- `darkMode` is configured as `class` in Tailwind but no explicit dark-mode toggle is currently present.

## Known gaps in technical implementation

- Sitemap integration is currently commented out.
- No CNAME file exists for the custom domain.
- Legal route pages are absent.
- Several routes are defined in navigation but not implemented.
- The homepage includes a duplicate header implementation.
- The Spanish homepage is a placeholder with no full localization support.

## Recommended documentation use

- Use this file as the central technical guide for project structure and build conventions.
- Keep `site.ts` values production-ready once contact and webhook configuration are finalized.
- Update this document whenever route structure, launch configuration, or architecture changes.

## Phase 0: Baseline validation (2026-05-09)

### Build status
- `npm run build`: **PASS** — The Astro static site builds successfully, and all static routes are generated.

### Type and diagnostics status
- `npm run check`: **FAIL** — 7 type errors detected, all related to the use of the `key` prop on `<li>` elements in Astro components.

#### Error summary
- `src/components/global/Footer.astro`: Type '{ children: any; key: string; }' is not assignable to type 'LiHTMLAttributes'. Property 'key' does not exist on type 'LiHTMLAttributes'. (3 occurrences)
- `src/components/global/MobileMenu.astro`: Type '{ children: any; key: string; }' is not assignable to type 'LiHTMLAttributes'. Property 'key' does not exist on type 'LiHTMLAttributes'. (2 occurrences)
- `src/components/global/Navbar.astro`: Type '{ children: any; key: string; }' is not assignable to type 'LiHTMLAttributes'. Property 'key' does not exist on type 'LiHTMLAttributes'. (2 occurrences)

#### Warnings and hints
- Several unused variable warnings and script processing hints are present, but do not block the build.

### Conclusion
- The project is not ready for Phase 1 refactor until type errors are addressed.
- No source code was changed in this phase.

## Minimal safe fix phase (2026-05-09)

### Type and diagnostics status
- All type errors related to the `key` prop on `<li>` elements in Astro components have been resolved.
- `npm run check` now passes with no errors; only non-blocking warnings and hints remain.

### Build status
- `npm run build` passes successfully after the fix.

### Conclusion
- The project is now ready for Phase 1 refactor. No UI or logic changes were made; only the invalid `key` prop was removed from affected components.

## 2026-05-09 — Phase 1: Compliance & SEO Stabilization

- @astrojs/sitemap enabled in astro.config.mjs for automated sitemap.xml generation.
- robots.txt updated to reference /sitemap.xml at custom domain.
- public/CNAME added for GitHub Pages custom domain support.
- Legal page scaffolds created in src/pages/legal/ (see functional documentation).
- Footer updated to link all legal pages.
- BaseLayout.astro updated for robust hreflang/alternate support (en, es, x-default).
- All changes preserve static deployment and visual design.
- Validation: run `npm run check` and `npm run build`.
