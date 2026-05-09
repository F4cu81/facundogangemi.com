# Refactor Strategy — facundogangemi.com

## Objective
Create a refactor strategy that aligns the repository with the project standards in `CLAUDE.md`, the business positioning in `MASTER_CONTEXT.md`, and the legal compliance plans in `legal/legal-context.md`.

This strategy is focused on incremental, low-risk improvements that preserve the current static site architecture while closing launch and compliance gaps.

---

## 1. Core strategy principles

- Preserve the Astro + Tailwind architecture.
- Keep the site static and GitHub Pages compatible.
- Avoid adding new dependencies unless strictly required.
- Implement production-ready routes before adding new features.
- Align navigation, footer, and legal structure with documented plans.
- Fix SEO and accessibility gaps first.

---

## 2. Refactor phases

### Phase 1: Compliance and SEO stabilization

1. Enable sitemap support.
   - Activate `@astrojs/sitemap` in `astro.config.mjs`.
   - Confirm the generated sitemap URL and update `public/robots.txt` accordingly.
2. Add `CNAME` for `https://facundogangemi.com`.
3. Implement the legal page scaffold.
   - Add `src/pages/legal/legal-notice.astro`
   - Add `src/pages/legal/privacy-policy.astro`
   - Add `src/pages/legal/cookie-policy.astro`
   - Add `src/pages/legal/terms-and-conditions.astro`
4. Correct footer legal links to the required routes.

### Phase 2: Route completion and content scaffolding

1. Implement required public pages or redirect placeholders:
   - `/about`
   - `/contact`
   - `/speaking`
   - `/advisory`
   - `/case-studies`
   - `/insights`
2. Review `src/data/navigation.ts` and align it with actual supported routes.
3. Remove or document empty root-level directories that are not part of the current build.
4. Remove duplicate header placeholder from `src/pages/index.astro` and reuse `Navbar.astro`.

### Phase 3: Design and usability cleanup

1. Audit shared component usage across pages.
   - Standardize CTA button styling and text link components.
   - Ensure `SectionHeader`, `Container`, and card components are reusable.
2. Replace placeholder assets and verify manifest icons.
3. Improve Spanish readiness.
   - Retain `/es/` as a future translation placeholder.
   - Add explicit `alternateUrl` support in `BaseLayout` for translated pages.

### Phase 4: Performance and polish

1. Remove unused dependencies and configurations.
2. Refactor inline client-side scripts to dedicated utility components or scripts.
3. Confirm color contrast, keyboard navigation, and accessible form behavior.
4. Validate build output and verify live link health.

---

## 3. Recommended architecture adjustments

- Centralize route metadata in a single source of truth (e.g. `src/data/navigation.ts`).
- Use page-specific metadata passed into `BaseLayout` for SEO and social previews.
- Keep legal page creation separate from marketing/content routes.
- Avoid duplicate navigation markup in page templates.
- Keep placeholder or draft pages clearly labeled and route-disabled if not ready.

---

## 4. Launch readiness checklist

- [ ] Required pages implemented
- [ ] Legal routes added and linked in footer
- [ ] Sitemap generated and robots file correct
- [ ] `CNAME` present
- [ ] No broken core navigation links
- [ ] Hero assets exist or placeholders are removed
- [ ] Contact form or lead flow path defined
- [ ] No placeholder webhook/email values in production config

---

## 5. Long-term maintenance recommendations

- Maintain an audit log for route and compliance changes.
- Keep legal context and page content synced.
- Avoid adding features before core page structure and legal compliance are complete.
- Use the `docs/` folder as the canonical project health reference for future work.
