# Project Audit — facundogangemi.com

## Overview
This audit reviews the current Astro project against the repository's guiding documents: `CLAUDE.md`, `MASTER_CONTEXT.md`, and `legal/legal-context.md`.

It also evaluates the current implementation for technical debt, SEO, accessibility, performance, naming conventions, and deploy readiness.

---

## 1. Current Architecture

### Detected architecture
- Framework: Astro
- Language: TypeScript
- Styling: Tailwind CSS + global CSS
- Data/content structure: `src/data`, `src/content`, `src/components`, `src/layouts`
- Key layout: `src/layouts/BaseLayout.astro`
- Primary page content entry: `src/pages/index.astro`
- Global UI components: `src/components/global/Navbar.astro`, `MobileMenu.astro`, `Footer.astro`
- SEO metadata centralized in `BaseLayout.astro`
- Site constants in `src/data/site.ts`

### Good architectural decisions
- Clear separation of layout, components, and page content
- Centralized metadata handling in `BaseLayout.astro`
- `site` set to `https://facundogangemi.com` in `astro.config.mjs`
- Tailwind custom theme aligns with brand palette and typography

### Key architecture gaps
- `src/pages/advisory`, `src/pages/case-studies`, `src/pages/insights` are empty and provide no actual route content.
- Required business routes such as `/about`, `/contact`, `/speaking`, and `/legal/*` are missing.
- `src/pages/index.astro` contains a manual header placeholder, while `BaseLayout` already provides `Navbar` and `MobileMenu`.
- The site uses placeholder page content and hrefs to unimplemented routes.
- Root-level `pages/` directory exists but is empty and appears unused.

---

## 2. Inconsistencies with CLAUDE.md and MASTER_CONTEXT.md

### Missing pages and navigation
- `MASTER_CONTEXT.md` and `CLAUDE.md` expect main sections such as Home, About, Services, AI Transformation, Executive Advisory, Case Studies, Speaking, Insights, Contact.
- Current implementation only includes a homepage and empty route directories.
- The footer and navigation reference routes that do not exist.

### Legal and compliance requirements
- `CLAUDE.md` and `legal/legal-context.md` require legal pages under `/legal/legal-notice`, `/legal/privacy-policy`, `/legal/cookie-policy`, `/legal/terms-and-conditions`.
- These legal routes are not implemented.
- Footer links currently point to `/privacy` and `/terms`, which are inconsistent with the required URL structure.

### SEO and indexing requirements
- `public/robots.txt` is present, but it points to `https://facundogangemi.com/sitemap-index.xml` while `astro.config.mjs` has the sitemap plugin commented out.
- This creates a mismatch between the declared sitemap location and actual sitemap generation.

### Content / brand positioning gaps
- The homepage is clearly a scaffold with placeholder hero imagery and a partial navigation design.
- Business positioning from `MASTER_CONTEXT.md` is not fully realized in live routes or content structure.
- Spanish localization is planned but currently only has a placeholder `/es/` homepage.

---

## 3. Inconsistencies with legal/legal-context.md

### Missing required legal pages
- No `src/pages/legal` directory or legal Astro pages exist.
- Required legal route structure is missing entirely.

### Compliance implementation gap
- Legal context explicitly calls for Formspree-based contact forms, cookie consent, and conditional GA4 loading.
- The codebase has no evidence of Formspree, consent banner, or conditional analytics loading.

### Footer/legal links mismatch
- Footer links use `/privacy` and `/terms`, not `/legal/privacy-policy` or `/legal/terms-and-conditions`.
- This indicates the legal page architecture is not aligned with the documented legal plan.

---

## 4. Technical debt and implementation issues

### SEO and deployment
- `@astrojs/sitemap` is installed in `package.json` but not activated in `astro.config.mjs`.
- `public/robots.txt` points to a sitemap file that is likely not generated.
- No `CNAME` file exists in the repository root, despite GitHub Pages custom domain requirements.

### Missing production assets
- `src/pages/index.astro` references `/assets/portraits/facundo-hero-executive.webp`, but the file does not exist.
- `public/manifest.webmanifest` references `icon-192.png` and `icon-512.png`, but `public/assets/favicon` contains only `favicon.svg`.

### Placeholder and incomplete routing
- Navigation data in `src/data/navigation.ts` includes advisory child links and other sections with no actual page implementation.
- `Footer.astro` contains legal links to non-existent pages.
- `src/pages/es/index.astro` is only a placeholder and lacks alternate URL/hreflang cross-linking.

### Code consistency and maintainability
- `src/pages/index.astro` duplicates navigation markup instead of reusing `Navbar.astro`.
- There are empty top-level directories (`pages/`, `assets/`, `design-system/`, `roadmap/`, `wireframes/`, `prompts/`, `src/pages/advisory`, `src/pages/case-studies`, `src/pages/insights`).
- `site.ts` includes placeholder values for email and webhook URLs.

---

## 5. SEO issues

- Sitemap generation appears disabled while robots references a sitemap.
- Footer and site navigation contain dead or missing links.
- No canonical or alternate hreflang support for Spanish pages beyond the base layout defaults.
- Legal pages required for compliance and SEO trust signals are missing.
- No evidence of structured data or schema beyond BaseLayout props support.

---

## 6. Accessibility and performance issues

### Accessibility
- The homepage uses an inline `onerror` handler on the hero image; this is not ideal for progressive enhancement.
- The mobile menu script is embedded inline in `MobileMenu.astro`; while functional, it increases client-side JS and may complicate maintainability.
- Presence of hidden language switcher labels like `Coming Soon` may confuse screen reader users if not managed carefully.

### Performance
- The homepage hero references a missing image and may degrade experience if the fallback is not rendered.
- Inline script in `MobileMenu.astro` adds client-side behavior that should ideally be modularized.
- Static site configuration is correct, but current scaffolding contains incomplete pages and unused dependencies.

---

## 7. Duplicated, obsolete or unnecessary files

- `pages/` root directory is empty and likely obsolete.
- `assets/`, `design-system/`, `roadmap/`, `wireframes/`, `prompts/` are empty and appear to be placeholders.
- `src/pages/advisory`, `src/pages/case-studies`, `src/pages/insights` are empty route directories.
- `public/assets/portraits` contains only `.gitkeep`, but the homepage references a missing portrait.

---

## 8. Naming and folder structure issues

- `Footer.astro` legal URLs do not match legal documentation.
- `site.ts` uses placeholder constants, which increases risk of accidental publishing with invalid contact data.
- `BaseLayout.astro` expects `alternateUrl` for hreflang cross-links, but the Spanish page does not provide it.
- The Spanish route exists as a placeholder but the global navigation does not support localized paths or translations.

---

## 9. Recommended next steps

1. Establish compliance and SEO baseline.
   - Create required legal pages and align footer links.
   - Enable sitemap generation and fix `robots.txt` sitemap URL.
   - Add `CNAME` file for `https://facundogangemi.com`.
2. Close route and content gaps.
   - Implement `/about`, `/contact`, `/speaking`, `/advisory`, `/case-studies`, `/insights` pages or temporarily remove broken links until ready.
   - Replace placeholder hero asset or remove broken image reference.
3. Simplify site structure.
   - Remove unused root directories or clearly document them as future placeholder folders.
   - Consolidate navigation and header components to avoid duplicate markup.
4. Align with legal context.
   - Document and implement consent requirement handling before any analytics or tracking.
   - Ensure contact forms, data processing, and cookie policy match the legal notes.

---

## 10. Summary

The repository is structurally sound for a static Astro site, but it is currently an early scaffold rather than a production-ready website. The highest-risk gaps are missing legal pages, mismatched SEO configuration, missing asset references, and many navigation routes that are unimplemented.

The next phase should focus on closing those compliance and launch gaps before adding richer content.
