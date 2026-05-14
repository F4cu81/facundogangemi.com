# CLAUDE.md

## 1. Project Overview

This repository contains the source code for `facundogangemi.com`, a professional personal brand and consulting website.

The website represents Facundo Gangemi as an executive advisor focused on AI Strategy, Digital Transformation, Enterprise Agility, Product Transformation and strategic consulting for enterprise organizations.

The site must be built as a high-quality static website optimized for Google indexing, performance, accessibility and maintainability. It must communicate executive credibility, strategic clarity and business impact.

---

## Context Files

Read only the files relevant to the current task. Use `PROJECT_CONTEXT_INDEX.md` to decide which files to load.

Document authority order when files conflict:

1. `CLAUDE.md` — technical implementation rules
2. `MASTER_CONTEXT.md` — business and strategic context
3. `docs/seo/google-positioning-guardrails.md` — site-wide SEO, content and metadata decisions
4. `docs/seo/article-seo-guidelines.md` — article-level SEO and editorial decisions
5. `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md` — brand positioning, conversion architecture and thought leadership

Ask for clarification before making changes that affect architecture, branding, legal content or positioning.

---

## Context Loading Guide

Before loading additional Markdown documentation, read `PROJECT_CONTEXT_INDEX.md`.

Use it to determine which project documents are relevant for the current task. Do not load archived documents unless the user explicitly asks for historical context. Do not scan the full repository unless the task explicitly requires it.

Before modifying any source file, follow the **Pre-Coding Expectations** in `CEREBRO.md`.

Active guidance is governed by `CLAUDE.md`, `MASTER_CONTEXT.md` and `CEREBRO.md`.

---

## Response Efficiency

Follow the response style rules defined in `CLAUDE_RESPONSE_STYLE.md`. Use concise, execution-focused responses by default.

---

## Living Project Memory

Read `CEREBRO.md` at the start of every session before touching any page, component or style.

`CEREBRO.md` records approved decisions, validated patterns, protected choices and pending improvements across sessions. If it conflicts with the source code, trust the source code and update `CEREBRO.md`.

---

## SEO Documentation

All SEO rules live in `docs/seo/`. Do not duplicate SEO guidance in `CLAUDE.md`.

| Work type | File to read |
|---|---|
| Any page, metadata, heading, CTA or link change | `docs/seo/google-positioning-guardrails.md` |
| Any page title, description or canonical URL change | `docs/seo/seo-page-inventory.md` |
| Any article, insight or MDX content | `docs/seo/article-seo-guidelines.md` + guardrails |

After any page-level SEO change, update `docs/seo/seo-page-inventory.md`.

Do not invent SEO rules. `docs/seo/google-positioning-guardrails.md` is the source of truth for Google positioning, internal linking, E-E-A-T guidance and anti-patterns.

---

## 2. Core Objectives

Every change must support at least one of these goals:

1. Improve professional positioning.
2. Improve SEO and Google discoverability.
3. Improve technical quality and maintainability.
4. Improve conversion toward consulting, speaking, content or contact actions.
5. Improve performance, accessibility and user experience.
6. Preserve brand consistency.
7. Preserve GitHub Pages compatibility.

Do not introduce changes that add complexity without a clear strategic or technical reason.

---

## 3. Technology Stack

- Astro, TypeScript, Tailwind CSS
- MDX / Markdown for content collections
- Static site generation
- GitHub Pages deployment
- Custom domain: `https://facundogangemi.com`

Assume static site. Do not introduce server-side dependencies, databases, authentication, API runtimes or backend logic unless explicitly approved.

---

## 4. Deployment Context

The site is deployed on GitHub Pages and must remain compatible with static hosting.

- The public domain is always `https://facundogangemi.com`.
- Never use the GitHub Pages internal URL as canonical.
- Do not generate canonical URLs using a `github.io` domain.
- Preserve the `CNAME` file at all times.
- Preserve HTTPS compatibility.

Expected Astro configuration:

```js
site: 'https://facundogangemi.com'
base: '/'
output: 'static'
```

If the configuration differs, report the issue before changing it.

---

## 5. Project Structure Rules

Before creating new folders or files, inspect the current repository structure. Prefer the existing structure. Do not reorganize the project without approval.

```txt
/
  CLAUDE.md
  astro.config.mjs
  package.json
  public/         ← robots.txt, CNAME, favicon, OG images, static assets
  src/
    pages/        ← Astro route pages
    layouts/      ← shared page layouts
    components/   ← reusable UI components
    content/      ← content collections
    data/         ← site data, navigation constants
    styles/       ← global CSS, spacing utilities
  branding/       ← brand, visual, tone and spacing documentation
  references/     ← visual direction and design references
  legal/          ← legal source notes (never delete)
  docs/seo/       ← active SEO rules
  strategy/       ← active brand strategy reference
```

### Content Collections

Primary editorial collections — do not rename or relocate:

```
src/content/insights/      ← executive thought leadership articles
src/content/case-studies/  ← transformation case studies
```

Do NOT create `/blog`, `/posts`, `/articles` or `/thoughts`.

Subcategories for insights: `ai-strategy`, `operating-models`, `operational-excellence`, `enterprise-transformation`, `banking`, `leadership`.

Subcategories for case-studies: `financial-services`, `agile-transformations`, `ai-adoption`, `delivery-operations`.

**Multilingual:** The `/es/` route is a placeholder. Do not implement a multilingual system unless explicitly requested.

---

## 6. AI Collaboration Workflow

For any non-trivial task:

1. Inspect the current project.
2. Identify affected files.
3. Explain the current situation.
4. Propose a short implementation plan.
5. Identify risks and assumptions.
6. Wait for approval before large architectural changes.
7. Implement the smallest safe change.
8. Validate the result.
9. Summarize what changed and why.

For small, isolated fixes, proceed directly if scope and risk are clear.

Large changes requiring approval before touching files:

- restructuring folders or routing
- changing layouts or global styling
- adding new dependencies
- changing Astro or deployment configuration
- refactoring multiple components
- generating or modifying legal pages
- changing SEO architecture

---

## 7. Coding Standards

Act as a senior software engineer. Prioritize simplicity, maintainability, readability, performance, accessibility, security and consistency with the existing codebase.

Development rules:

- Keep functions small and focused.
- Use clear and explicit names.
- Prefer composition over inheritance.
- Avoid premature abstraction and duplicated logic.
- Reuse existing utilities, components and patterns before creating new ones.
- Keep pages thin; delegate reusable UI to components.
- Avoid unnecessary dependencies.
- Avoid rewriting or reformatting unrelated files.
- Avoid dead code and commented-out code (unless documenting a specific temporary decision).
- Avoid `any` in TypeScript unless strictly justified. Prefer strict typing and explicit interfaces.
- Prefer readable code over clever code.

Never:

- rewrite the entire project unnecessarily
- introduce a new framework without approval
- create duplicated components
- remove SEO metadata, accessibility attributes or legal footer links accidentally
- hardcode secrets or credentials
- add tracking scripts before consent is defined
- create production pages with lorem ipsum
- invent business, legal, tax or regulatory information

---

## 8. Architecture Rules

Follow the current architecture unless there is a strong reason to change it.

- Keep routing predictable.
- Keep layouts reusable.
- Keep UI components modular.
- Keep content separate from layout where possible.
- Keep SEO metadata centralized where practical.
- Keep design tokens and style decisions centralized.
- Keep legal content sourced from `legal/legal-context.md`.

When creating new pages: use shared layouts, shared metadata helpers and existing components. Avoid duplicating complete page sections.

---

## 9. Frontend and UI Standards

UI implementation rules:

- Use responsive-first design. Prioritize mobile usability.
- Use semantic HTML throughout.
- Use Tailwind consistently. Avoid random one-off styles.
- Maintain consistent spacing using the approved utility classes (see `branding/SPACING_SYSTEM.md`).
- Maintain consistent typography hierarchy (see `branding/TYPOGRAPHY_SYSTEM.md`).
- Avoid excessive animations. Use motion only when it supports clarity or perceived quality.
- Respect `prefers-reduced-motion` — suppress or reduce animations when active.
- Ensure all interactive elements have clear hover, focus and active states.
- Ensure sufficient color contrast (WCAG AA: 4.5:1 body text, 3:1 large text).
- Ensure visual hierarchy supports scanning.

Do not make the website look like a generic SaaS template. It must support a high-trust executive advisory brand.

### Section Spacing — Quick Reference

Four-tier system defined in `src/styles/global.css`. Full rules in `branding/SPACING_SYSTEM.md`.

| Class | Desktop | Tablet ≤1023px | Mobile ≤639px | Use for |
|---|---|---|---|---|
| `.section-py-xs` | 48px | 40px | 32px | Compact accent bands (proof bars, KPI strips) |
| `.section-py-sm` | 64px | 56px | 48px | Secondary sections, compact CTAs |
| `.section-py` | 96px | 80px | 64px | Default for all primary content sections |
| `.section-py-lg` | 120px | 96px | 80px | Standalone page heroes only |

Default: use `.section-py`. Do not use `.section-py-lg` for consecutive same-background sections.

---

## 10. Branding, Visual and Content

Do not duplicate branding or voice guidance in `CLAUDE.md`. Read the relevant branding file for the task.

| Topic | File |
|---|---|
| Strategic positioning and brand identity | `MASTER_CONTEXT.md` |
| Full visual direction (aesthetic, photography, page direction) | `references/visual-direction.md` |
| Live production color palette | `branding/COLOR_SYSTEM.md` |
| Section spacing system | `branding/SPACING_SYSTEM.md` |
| Typography (fonts, hierarchy) | `branding/TYPOGRAPHY_SYSTEM.md` |
| Voice, tone and writing style | `branding/VOICE_AND_TONE.md` |
| UI principles | `branding/UI_PRINCIPLES.md` |
| Advisory positioning and conversion strategy | `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md` |

**Key rules (enforced here for all tasks):**

- Primary backgrounds are near-black (`#05070D`, `#080A10`). Do not use `#00274C` as a primary background.
- Orange (`#F57C00`) is the CTA and accent color only. Never use it as a section background fill.
- Content must sound executive, strategic, clear and credible. Never hype-driven, coaching-oriented or startup-casual.
- Positioning must never lead with Scrum, Agile coaching or generic consulting. Always lead with AI Strategy and Digital Transformation.

---

## 11. SEO Standards

All detailed SEO rules live in `docs/seo/`. Do not add SEO rules to `CLAUDE.md`.

**What the SEO files govern:**

- `google-positioning-guardrails.md`: primary positioning terms, page-level metadata rules, heading structure, internal linking rules, E-E-A-T guidance, content tone, anti-patterns, future content hub direction.
- `seo-page-inventory.md`: live per-page state (titles, descriptions, canonical URLs, structured data, internal linking). Update this file after any page-level SEO change.
- `article-seo-guidelines.md`: hub assignment, search intent, keyword planning, article schema, CTA rules, pre-publish checklist. Read before creating or modifying any article.

**Non-negotiable SEO rules (applied to every page):**

- Canonical URL must always point to `https://facundogangemi.com/<path>`. Never a `github.io` URL.
- Each page must have a unique `<title>` (≤60 chars) and unique `<meta description>` (120–155 chars).
- Each page must have exactly one visible `<h1>` containing the primary keyphrase.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) must be present.
- `public/robots.txt` must exist and point to `https://facundogangemi.com/sitemap-index.xml`.
- Do not accidentally add `noindex` to public pages.
- Structured data must be valid JSON-LD and must not claim unsupported facts.

---

## 12. Legal and Compliance Pages

Expected routes: `/legal/legal-notice`, `/legal/privacy-policy`, `/legal/cookie-policy`, `/legal/terms-and-conditions`.

Source file: `legal/legal-context.md` — never delete this file, never invent its contents.

Rules:

- Never invent legal, fiscal, tax, registration or address information.
- Never invent data processors, analytics tools, cookie providers or credentials.
- Use placeholders when information is missing; ask before finalizing production-ready legal pages.
- Legal pages must be linked from the footer on every page.
- Generated legal text is a working draft — it must be reviewed before going live.

---

## 13. Cookies, Analytics and Tracking

Do not add analytics, pixels, heatmaps, remarketing tags or tracking scripts without explicit approval.

Before adding any tracking tool, document: the tool, its purpose, what data it collects, whether cookies are used, whether consent is required. Do not load non-essential tracking before consent.

Tools requiring explicit confirmation: Google Analytics, GTM, Meta Pixel, LinkedIn Insight Tag, Hotjar, Microsoft Clarity, Calendly embeds, YouTube/Vimeo embeds, chatbots, newsletter platforms, CRM integrations.

---

## 14. Accessibility Standards

Target WCAG AA alignment.

- Use semantic HTML. One `<h1>` per page. Preserve logical heading hierarchy.
- Add descriptive `alt` text to meaningful images. Use `alt=""` for decorative images.
- Ensure keyboard navigation and visible focus states.
- Ensure sufficient color contrast (4.5:1 body, 3:1 large text).
- Do not rely only on color to communicate meaning.
- Use ARIA only when semantic HTML is insufficient.
- Ensure buttons and links have accessible names.
- Respect `prefers-reduced-motion`.

---

## 15. Performance Standards

- Prefer static rendering. Minimize client-side JavaScript.
- Avoid unnecessary hydration and heavy dependencies.
- Optimize images: prefer WebP/AVIF, use responsive images, lazy load below-the-fold images, keep hero images under 200 KB.
- Avoid layout shifts. Keep CSS maintainable and lean.
- Consider Core Web Vitals when modifying UI or assets.

---

## 16. Image and Asset Standards

- Use descriptive filenames: `ai-strategy-consulting-hero.webp`, not `image1.png`.
- Compress files to appropriate dimensions.
- Add meaningful `alt` text. Use `alt=""` for decorative images.
- Prefer WebP. Avoid generic stock imagery that weakens credibility.
- Use `loading="lazy"` for below-the-fold images. Use `loading="eager"` only for above-the-fold LCP images.

### Mobile Hero Image Behavior

On mobile viewports, hero/editorial images must not appear as large standalone blocks below the hero content.

Rules:

- Keep desktop hero image layouts unchanged.
- On mobile, convert hero/editorial images into subtle background or ambient layers when appropriate. Apply a strong dark overlay to preserve readability. Keep image opacity low. Prevent the image from adding extra vertical height.
- If background treatment reduces readability or creates layout issues, hide the image on mobile instead.
- Do not add JavaScript to implement this behavior. Use CSS media queries only.

This rule applies to: Home, Advisory, About, Insights, Contact, Case Studies, and any future page that uses a hero or editorial image.

Current implementation: hero image containers on Advisory, About, Insights, Contact and Case Studies use `display: none` below `1024px`. The Home page portrait is already an absolutely-positioned background layer with a `lg:hidden` dark overlay.

---

## 17. Security Standards

- Never commit secrets, API keys, credentials or private tokens.
- Avoid unsafe inline scripts and `eval`-like behavior.
- Validate external URLs before adding them.
- Use `rel="noopener noreferrer"` for external links opened in a new tab.
- Report any found secret immediately and do not propagate it.

---

## 18. Git and Change Management

Work in small, controlled, atomic changes.

- Do not modify unrelated files.
- Do not reformat unrelated files.
- Do not remove working functionality without explanation.
- Explain why each file changed.

Commit message format:

```
feat: add legal pages structure
fix: correct canonical URLs for custom domain
chore: enable Astro sitemap integration
refactor: extract shared hero component
```

---

## 19. Quality Gates

Before marking any task complete:

- Project builds successfully (`npm run build` — zero errors).
- TypeScript has no avoidable errors (`npm run check`).
- No broken imports or routes.
- No console errors introduced.
- No dead code or hardcoded secrets introduced.
- Responsive behavior preserved (test at 375px and 768px).
- SEO metadata preserved or improved.
- Accessibility preserved or improved.
- GitHub Pages compatibility preserved.
- Internal links point to existing routes only.
- `<title>`, `<meta description>` and canonical URL are present and correct on any modified page.

Do not claim a script was run if it does not exist. Report missing scripts and suggest adding them.

---

## 20. Recommended Commands

Verify available scripts in `package.json` before running.

```bash
npm run dev       # local development server
npm run build     # production build
npm run preview   # preview production build
npm run check     # Astro + TypeScript check
```

---

## 21. Forms and Lead Capture

Do not add forms without confirming: destination, data collected, storage location, notification flow, privacy implications and consent requirements.

If forms are added: minimize collected data, link to privacy policy, validate fields and prevent spam.

Current contact form: Formspree (`https://formspree.io/f/xrejjrgj`), static HTML, no JavaScript. See `CEREBRO.md` §9 for implementation details.

---

## 22. Things Claude Must Never Do

- Rewrite the whole project without approval.
- Change the technology stack without approval.
- Introduce backend functionality without approval.
- Add dependencies without explaining why.
- Use the `github.io` domain as canonical.
- Break GitHub Pages static deployment.
- Remove or damage SEO metadata, the sitemap, `robots.txt` or the `CNAME` file.
- Create legal pages using invented legal details.
- Add analytics or tracking without approval.
- Expose secrets or credentials.
- Add lorem ipsum to production pages.
- Create inaccessible UI components.
- Ignore mobile responsiveness.
- Duplicate components unnecessarily.
- Refactor unrelated files.
- Silently suppress errors.
- Claim tests passed if they were not run.
- Create generic SaaS-looking pages that weaken executive positioning.
- Generate exaggerated AI hype content.
- Position the brand as a low-cost freelancer profile.
- Recreate deleted advisory sub-pages (`/advisory/ai-strategy/`, `/advisory/digital-transformation/`, `/advisory/ai-adoption/`, `/advisory/enterprise-agility/`).

---

## 23. Final Principle

This project must remain clean, strategic and technically reliable.

Every implementation should make the website easier to maintain, easier to index, easier to evolve and more credible for an executive consulting audience.
