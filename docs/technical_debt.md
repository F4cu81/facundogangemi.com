# Technical Debt — facundogangemi.com

## Summary
This document catalogs the key technical debt items identified during the audit. These items affect launch readiness, maintainability, SEO, and compliance.

---

## 1. SEO and deployment debt

- `@astrojs/sitemap` is installed but commented out in `astro.config.mjs`.
- `public/robots.txt` references `https://facundogangemi.com/sitemap-index.xml`, creating a sitemap mismatch.
- No `CNAME` file exists for the custom domain `https://facundogangemi.com`.
- Root `pages/` directory is present but unused, adding confusion for future developers.

## 2. Route and content debt

- `src/pages/advisory`, `src/pages/case-studies`, `src/pages/insights` are empty.
- Required frontend routes from navigation and legal documentation are missing:
  - `/about`
  - `/contact`
  - `/speaking`
  - `/legal/legal-notice`
  - `/legal/privacy-policy`
  - `/legal/cookie-policy`
  - `/legal/terms-and-conditions`
- Footer links currently point to `/privacy` and `/terms` instead of the documented legal routes.

## 3. Asset and manifest debt

- The homepage references `/assets/portraits/facundo-hero-executive.webp`, but the file is missing.
- `public/manifest.webmanifest` references `assets/favicon/icon-192.png` and `assets/favicon/icon-512.png`, but only `favicon.svg` exists.
- `public/assets/portraits` contains only `.gitkeep`, confirming the portrait asset is absent.

## 4. Content placeholder debt

- `src/pages/index.astro` is a Phase 1 scaffold with placeholder copy and a placeholder hero design.
- `site.ts` contains placeholder contact and webhook values such as `REPLACE_WITH_FACUNDO_EMAIL` and `REPLACE_WITH_MAKE_WEBHOOK_URL`.
- `/es/` homepage is a placeholder without translated content or full localization support.

## 5. Component and maintainability debt

- Duplicate header implementation: `src/pages/index.astro` contains a manual header while `BaseLayout.astro` already injects `Navbar.astro` and `MobileMenu.astro`.
- The mobile menu behavior is implemented inline in `MobileMenu.astro`, increasing client-side complexity and reducing reuse potential.
- Empty directories at the repository root and within `src/pages` create uncertainty about valid route structure.

## 6. Compliance and legal debt

- No legal pages are implemented despite legal context requirements.
- No evidence of a cookie consent system or conditional analytics/GA4 loading, yet the legal context states GA4 is part of the plan.
- The footer lacks links to the required legal pages and does not follow the legal footer recommendations from `legal/legal-context.md`.

## 7. Accessibility and UX debt

- The inline `img` `onerror` handler in the hero is not ideal for progressive enhancement.
- The mobile menu script attaches events globally and may require refinement for accessibility and performance.
- The `Coming Soon` language switcher is present visually but not implemented functionally.

---

## Recommended technical debt remediation order

1. Fix critical launch debt
   - Add missing legal pages and align footer links.
   - Enable sitemap generation and fix `robots.txt`.
   - Add `CNAME`.
2. Repair route and content debt
   - Implement or temporarily remove dead navigation routes.
   - Add missing contact and advisory content.
3. Address asset debt
   - Provide hero portrait asset or remove placeholder reference.
   - Fix manifest icon references.
4. Remove duplicate code and cleanup
   - Consolidate header/navigation implementation.
   - Remove empty and unused folders.
5. Finalize compliance debt
   - Add consent management before activating analytics.
   - Ensure legal text and site behavior match.
