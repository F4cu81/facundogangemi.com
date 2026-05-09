# Functional Documentation — facundogangemi.com

## Purpose of the site

This site is intended to serve as a personal executive brand and advisory platform for Facundo Gangemi.
Its main goals are:
- Generate consulting and advisory leads.
- Build executive authority in AI Strategy and Enterprise Transformation.
- Showcase thought leadership and enterprise-grade services.
- Support contact and speaking inquiries.

---

## Current functional scope

### Supported functionality
- Static homepage with hero messaging and CTA links.
- Global layout with shared header, mobile menu, and footer components.
- Custom 404 page for missing routes.
- Placeholder Spanish homepage route at `/es/`.

### Intended user flows
- Visitor lands on homepage and reads core positioning.
- Visitor can explore advisory, case studies, or insights through navigation.
- Visitor can use footer links to access legal information and contact paths.
- Visitor can request an advisory call via the CTA.

### Functional requirements from `MASTER_CONTEXT.md`
- Present AI Strategy, Digital Transformation, Enterprise Agility, AI Adoption, and Executive Advisory services.
- Communicate executive-level positioning and strategic business outcomes.
- Support global audience with English as primary language and Spanish as future secondary language.
- Keep the experience premium, modern, and accessible.

### Functional requirements from `legal/legal-context.md`
- Provide legal notice, privacy policy, cookie policy, and terms and conditions pages.
- Include contact form functionality compatible with GitHub Pages.
- Implement consent handling for analytics and cookies.
- Publish legal links in the footer on every page.

---

## Current functional gaps

### Navigation and routing
- Main site sections advertised in navigation are not backed by actual page content.
- Footer is not linking to the legally required route structure.
- Spanish localization is only present as a placeholder and not integrated with page navigation.

### Lead capture
- No contact form implementation is available.
- No Formspree integration or webhook/contact destination is active.
- Site data uses placeholders instead of real contact configuration.

### Compliance
- No GDPR cookie consent banner or analytics consent flow is present.
- Legal documentation is not implemented on the site.
- Privacy and terms pages are absent, though they are required.

### SEO / structured data
- Missing sitemap generation and likely missing `sitemap.xml`.
- No manifest of structured data or schema objects in the current content.
- Hreflang support is not fully implemented for the Spanish route.

---

## Functional components

### Homepage
- Hero section with executive positioning copy.
- CTA buttons to `/contact` and `/advisory`.
- Trust bar and advisory section (placeholder) intended for strategic content.
- Portrait design placeholder and background brand styling.

### Navbar and mobile menu
- Desktop navigation with a dropdown for advisory items.
- Mobile overlay menu with toggle behavior.
- Language switcher showing `EN / ES Coming Soon`.
- Primary CTA button for booking advisory calls.

### Footer
- Four-column layout with advisory links, resources, about links, and social connect.
- Copyright and legal link section.
- Contact social link to LinkedIn and a Twitter/X link derived from `SITE.twitterHandle`.

---

## User experience status

### What is working
- Core page rendering through Astro.
- Shared global layout, metadata handling, and styling system.
- Hero and CTA presentation on the homepage.
- Navigation components implemented at the component level.

### What is incomplete
- Advisory, case studies, insights, about, contact, speaking content.
- Legal compliance pages and consent behavior.
- Spanish translation beyond a single homepage placeholder.
- Production-ready contact routes and lead capture flow.

---

## Functional recommendations

1. Build the minimum viable page set before launch: home, about, advisory, case studies, insights, contact, legal pages.
2. Add a working contact form and privacy-consented lead flow.
3. Implement the legal footer and required `/legal/*` routes.
4. Keep the Spanish route as a future translation scaffold until the full bilingual experience is ready.
5. Ensure all CTA links point to operational pages, not placeholders.

## 2026-05-09 — Phase 1: Compliance & SEO Stabilization

- Legal pages scaffolded: /legal/legal-notice, /legal/privacy-policy, /legal/cookie-policy, /legal/terms-and-conditions
- Footer now links to all legal pages with clear labels
- Hreflang/alternate tags implemented for English and Spanish (future) in BaseLayout
- Sitemap.xml and robots.txt now fully aligned for Google indexing
- CNAME file ensures correct custom domain on GitHub Pages
- No changes to user flows or visual design
