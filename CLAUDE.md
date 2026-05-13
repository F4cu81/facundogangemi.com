# CLAUDE.md

## 1. Project Overview

This repository contains the source code for `facundogangemi.com`, a professional personal brand and consulting website.

The website represents Facundo Gangemi as an executive advisor focused on:

- AI Strategy
- Digital Transformation
- Enterprise Agility
- Product Transformation
- Technology-driven business evolution
- Strategic consulting for enterprise organizations

The website must communicate executive credibility, strategic clarity, technical professionalism and business impact.

The primary audience includes:

- CEOs
- Directors
- Transformation leaders
- Technology leaders
- Product leaders
- Enterprise decision-makers
- Organizations evaluating AI and digital transformation initiatives

The site must be built as a high-quality static website, optimized for Google indexing, performance, accessibility and maintainability.

## Context Files

This project may include additional context files such as `MASTER_CONTEXT.md`.

Use them as follows:

- `CLAUDE.md`: development rules, coding standards, SEO, deployment, quality gates and workflow.
- `MASTER_CONTEXT.md`: strategic project context, business positioning, brand direction and high-level decisions.
- `docs/seo/google-positioning-guardrails.md`: SEO positioning rules, keyword strategy, page-level metadata rules, content tone and internal linking rules.
- `docs/seo/article-seo-guidelines.md`: article-level SEO rules, content hub structure, search intent, metadata, schema, readability and pre-publish checklist for all Insights and MDX content.
- `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md`: executive brand strategy — web strategy, strategic positioning, executive personal brand, conversion strategy, offer architecture and thought leadership direction. Consult when working on homepage, advisory pages, about page, insights strategy, service copy or conversion paths.

If there is a conflict between files:
1. Follow `CLAUDE.md` for technical implementation rules.
2. Follow `MASTER_CONTEXT.md` for business and strategic context.
3. Follow `docs/seo/google-positioning-guardrails.md` for site-wide SEO, content and metadata decisions.
4. Follow `docs/seo/article-seo-guidelines.md` for article-level SEO and editorial decisions.
5. Follow `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md` for brand positioning, conversion architecture and thought leadership direction.
6. Ask for clarification before making changes when the conflict affects architecture, branding, legal content or positioning.

---

## Living Project Memory

The project maintains a living memory file:

- `CEREBRO.md`: practical session memory — approved decisions, validated patterns, protected choices, known issues and pending improvements.

**Read `CEREBRO.md` at the start of every session before touching any page, component or style.**

`CEREBRO.md` records what has been built and approved across sessions. It prevents:
- Accidentally reversing approved design decisions.
- Re-debating validated patterns.
- Repeating known mistakes.

**File authority:**
- `CEREBRO.md` documents practical decisions and approved patterns — update it after sessions where meaningful decisions are made.
- `CLAUDE.md` and `MASTER_CONTEXT.md` remain the source of truth for rules and strategy — `CEREBRO.md` does not override them.
- If `CEREBRO.md` conflicts with source code, trust the source code and update `CEREBRO.md`.

---

## SEO Positioning Guardrails

Before creating or modifying any page, route, metadata, heading structure, internal link, CTA or SEO-related content, Claude Code must read and follow:

```
docs/seo/google-positioning-guardrails.md
```

This document is the source of truth for Google positioning. It defines:
- Primary and secondary positioning terms per page
- Homepage H1 and meta description rules
- Advisory page positioning map
- Internal linking strategy and anchor text rules
- Content tone rules
- E-E-A-T guidance
- Anti-patterns to avoid

**Document authority:**
- `docs/seo/google-positioning-guardrails.md` — source of truth for Google positioning and content strategy
- `CLAUDE.md` — source of truth for technical development rules
- `MASTER_CONTEXT.md` — source of truth for strategic brand context

If there is a conflict between the SEO guardrails and `MASTER_CONTEXT.md`, preserve the technical rules in `CLAUDE.md` and align the content strategy with `docs/seo/google-positioning-guardrails.md`.

---

## Article SEO Guidelines

Before creating or modifying any article, insight, MDX/Markdown post, article metadata, article schema, article title, article CTA or article internal links, Claude Code must read and follow:

```
docs/seo/article-seo-guidelines.md
```

This document is the source of truth for article-level SEO. It defines:
- Content hub assignment (eight defined hubs)
- Search intent classification before writing
- Keyword planning rules (primary, secondary, long-tail)
- Article metadata rules (title, description, OG, schema)
- Article structure and heading rules
- Introduction rules and first-100-words requirements
- E-E-A-T guidance and what must never be invented
- Internal linking requirements per article
- CTA rules aligned by content hub
- Article JSON-LD schema requirements
- Readability standards for executive audiences
- Anti-patterns to avoid
- Pre-publish checklist (must be completed before any article goes live)

**Document authority for article work:**
- `docs/seo/article-seo-guidelines.md` — source of truth for article-level SEO and editorial decisions
- `docs/seo/google-positioning-guardrails.md` — source of truth for overall Google positioning (read first; article guidelines operate within it)
- `CLAUDE.md` — source of truth for technical implementation rules
- `MASTER_CONTEXT.md` — source of truth for strategic brand context

---

## 2. Core Objectives

Every change in this project must support at least one of these goals:

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

The project uses:

- Astro
- TypeScript
- Tailwind CSS
- MDX / Markdown when applicable
- Static site generation
- GitHub Pages for deployment
- Custom domain: `https://facundogangemi.com`

Assume this is a static site unless explicitly instructed otherwise.

Do not introduce server-side dependencies, databases, authentication systems, API runtimes or backend logic unless explicitly approved.

---

## 4. Deployment Context

The site is deployed using GitHub Pages and must remain compatible with static hosting.

Important deployment rules:

- The public domain is always `https://facundogangemi.com`.
- Never use the GitHub Pages internal URL as the canonical public URL.
- Do not generate canonical URLs using a `github.io` domain.
- Do not rely on iframe masking, hidden forwarding or domain masking.
- The custom domain must work through DNS and GitHub Pages configuration.
- Preserve or create the `CNAME` file when needed for GitHub Pages.
- Preserve HTTPS compatibility.
- Avoid runtime features unsupported by GitHub Pages.

Expected Astro configuration:

```js
site: 'https://facundogangemi.com'
base: '/'
output: 'static'
```

If the configuration differs, report the issue before changing it.

---

## 5. Project Structure Rules

Before creating new folders or files, inspect the current repository structure.

Prefer using the existing structure when it is reasonable. Do not reorganize the entire project without approval.

Recommended structure:

```txt
/
  CLAUDE.md
  astro.config.mjs
  package.json
  public/
  src/
    pages/
    layouts/
    components/
    content/
  assets/
  branding/
  design-system/
  references/
  prompts/
  legal/
```

Use these folders as follows:

- `src/pages`: Astro route pages.
- `src/layouts`: shared page layouts.
- `src/components`: reusable UI components.
- `src/content`: structured content collections when applicable.
- `public`: static public files such as `robots.txt`, favicon, social images and other assets that must be served from root.
- `assets`: source assets when used by the build pipeline.
- `branding`: brand rules, visual guidelines and tone documentation.
- `design-system`: design tokens, UI foundations or documentation for visual consistency.
- `references`: technical references, SEO guidance, accessibility notes and deployment notes.
- `prompts`: reusable prompts used for content, automation or AI-assisted workflows.
- `legal`: legal context and compliance source notes. Legal pages should use this information and must never invent missing details.

### Content Collections Structure

The project uses structured Astro content collections.

Primary editorial collections:

/src/content/insights/
/src/content/case-studies/

Do NOT create alternative editorial folders such as:
- /blog
- /posts
- /articles
- /thoughts

Purpose:
- `insights`: executive thought leadership and strategic articles.
- `case-studies`: practical transformation experiences and implementation stories.

Recommended subcategories:

Insights:
- ai-strategy
- operating-models
- operational-excellence
- enterprise-transformation
- banking
- leadership

Case Studies:
- financial-services
- agile-transformations
- ai-adoption
- delivery-operations

---

## 6. AI Collaboration Workflow

For any non-trivial task, follow this workflow:

1. Inspect the current project.
2. Identify affected files.
3. Explain the current situation.
4. Propose a short implementation plan.
5. Identify risks and assumptions.
6. Wait for approval before large architectural changes.
7. Implement the smallest safe change.
8. Validate the result.
9. Summarize what changed and why.

For small, isolated fixes, implementation can proceed directly if the scope is clear and risk is low.

For large changes, do not modify files until a plan is approved.

Large changes include:

- restructuring folders
- changing layouts
- changing global styling
- modifying routing strategy
- adding new dependencies
- changing Astro configuration
- changing deployment configuration
- refactoring multiple components
- generating legal pages
- changing SEO architecture

---

## 7. Initial Audit Requirement

When this repository is first opened after this file is added, perform an audit before making changes.

The audit must check:

1. Current project structure.
2. Astro configuration.
3. GitHub Pages compatibility.
4. Existing SEO implementation.
5. Existing metadata and canonical URLs.
6. Existing sitemap and robots configuration.
7. Existing legal pages.
8. Existing accessibility issues.
9. Existing performance risks.
10. Existing duplicated components or inconsistent UI patterns.
11. Existing TypeScript, lint or build problems.
12. Existing responsive design problems.

Return:

1. Current diagnosis.
2. Missing files and folders.
3. Files that should be modified.
4. Risks or inconsistencies.
5. Prioritized implementation plan.

Do not modify files during the audit unless explicitly instructed.

---

## 8. Coding Standards

Act as a senior software engineer.

Prioritize:

- simplicity
- maintainability
- readability
- performance
- accessibility
- security
- consistency with the existing codebase

Development rules:

- Keep functions small and focused.
- Use clear and explicit names.
- Prefer composition over inheritance.
- Avoid premature abstraction.
- Avoid duplicated logic.
- Reuse existing utilities, components and patterns before creating new ones.
- Keep pages thin and delegate reusable UI to components.
- Keep component responsibilities clear.
- Avoid unnecessary dependencies.
- Avoid changing public APIs unless required.
- Avoid rewriting unrelated files.
- Avoid formatting-only changes in unrelated files.
- Avoid dead code.
- Avoid commented-out code unless it documents a specific temporary decision.
- Avoid `any` in TypeScript unless strictly justified.
- Prefer strict typing.
- Prefer explicit interfaces for shared data structures.
- Prefer readable code over clever code.

Never:

- rewrite the entire project unnecessarily
- introduce a new framework without approval
- create duplicated components
- remove SEO metadata accidentally
- remove accessibility attributes accidentally
- remove legal links from the footer
- hardcode secrets or credentials
- add tracking scripts before consent requirements are defined
- create production pages with lorem ipsum
- invent business, legal, tax or regulatory information

---

## 9. Architecture Rules

Follow the current architecture unless there is a strong reason to change it.

Architecture principles:

- Keep routing predictable.
- Keep layouts reusable.
- Keep UI components modular.
- Keep content separate from layout where possible.
- Keep SEO metadata centralized where practical.
- Keep design tokens and repeated style decisions centralized.
- Keep business positioning content easy to update.
- Keep legal and compliance content sourced from documented legal notes.

When creating new pages:

- Use shared layouts.
- Use shared metadata helpers if available.
- Use existing design system components if available.
- Avoid duplicating complete page sections if a component can be reused.

---

## 10. Frontend and UI Standards

The visual style must feel:

- executive
- premium
- modern
- strategic
- minimal
- credible
- enterprise-oriented
- approachable but not casual

UI rules:

- Use responsive-first design.
- Prioritize mobile usability.
- Maintain consistent spacing.
- Maintain consistent typography hierarchy.
- Use semantic HTML.
- Use Tailwind consistently.
- Avoid random one-off styles.
- Avoid excessive animations.
- Use animations only when they support clarity or perceived quality.
- Ensure all interactive elements have clear hover, focus and active states.
- Ensure contrast is sufficient.
- Ensure visual hierarchy supports scanning.

Do not make the website look like a generic SaaS template. It must support a high-trust executive advisory brand.

### Section Spacing System

The project uses three spacing utility classes defined in `src/styles/global.css`:

| Class | Desktop | Tablet (≤1023px) | Mobile (≤639px) |
|---|---|---|---|
| `.section-py` | 96px | 80px | 64px |
| `.section-py-lg` | 120px | 96px | 80px |
| `.section-py-sm` | 64px | 56px | 48px |

**Spacing rule for consecutive dark-background sections:**

When two or more sections share the same dark background, the total visual gap between their content areas equals the sum of their adjacent padding values. Use `.section-py` (96px/80px/64px) as the default for homepage sections. This produces the following total gaps between consecutive sections:

- Desktop: ~192px
- Tablet: ~160px
- Mobile: ~128px

Do not use `.section-py-lg` (120px) for consecutive same-background sections — it produces 240px gaps which feel excessive.

The KPI Band and other accent sections may use explicit Tailwind padding classes (`py-16 lg:py-20`) to break the rhythm intentionally.

---

## 11. Branding Guidelines

The website represents a professional executive brand.

Preferred brand attributes:

- strategic clarity
- enterprise credibility
- innovation
- transformation leadership
- practical execution
- AI-enabled business evolution

Preferred visual direction:

- dark navy / deep blue foundations
- neutral grays
- controlled use of orange as an accent or CTA color
- clean white space
- premium corporate imagery
- modern geometric structure
- subtle technology-inspired details

Avoid:

- childish visuals
- excessive gradients
- excessive neon effects
- overused AI clichés
- generic stock-like layouts
- exaggerated marketing claims
- inconsistent colors
- inconsistent button styles

If brand documentation exists under `/branding`, follow it.

The website should position Facundo Gangemi as:

- AI Strategy & Transformation Leader
- Enterprise Transformation Advisor
- Executive Consultant
- Technology and Operating Model Strategist

The visual and content direction must support high-trust enterprise positioning rather than generic coaching or freelancer branding.

---

## 12. Content and Writing Standards

The website content must sound:

- strategic
- professional
- precise
- credible
- clear
- executive-oriented
- business-focused

Content should connect technology with business value.

Preferred themes:

- AI transformation readiness
- operating model evolution
- product and technology strategy
- organizational transformation
- enterprise agility
- leadership in digital change
- measurable impact
- operational excellence
- enterprise execution
- delivery excellence
- organizational efficiency
- AI-enabled operations

Avoid:

- vague buzzwords without explanation
- inflated claims
- unsupported results
- generic AI hype
- overly academic language
- overly casual tone
- long paragraphs that reduce readability

When writing content:

- Use clear headings.
- Use short paragraphs.
- Prioritize clarity over complexity.
- Explain business relevance.
- Use concrete examples when possible.
- Prefer active voice.
- Avoid keyword stuffing.

The website should avoid sounding like:
- a generic marketing agency
- a startup landing page
- a personal lifestyle blog
- a generic Agile coaching website

The tone should resemble:
- executive advisory firms
- enterprise transformation consultancies
- strategic technology leadership publications
---

## 13. SEO Standards

All public pages must be SEO-ready.

Each indexable page must include:

- unique title
- unique meta description
- one clear H1
- canonical URL
- Open Graph metadata
- Twitter/X card metadata when applicable
- semantic HTML structure
- meaningful internal links
- descriptive image alt text
- clean readable URL
- mobile-friendly layout

Technical SEO rules:

- Use `https://facundogangemi.com` as the canonical domain.
- Never use the `github.io` URL in canonical metadata.
- Avoid duplicate titles.
- Avoid duplicate meta descriptions.
- Avoid duplicate content where possible.
- Avoid hidden text.
- Avoid keyword stuffing.
- Avoid manipulative SEO tactics.
- Use structured data where it makes sense.
- Use valid JSON-LD when structured data is added.
- Keep metadata consistent with the actual page content.

Recommended structured data types when appropriate:

- `Person`
- `Organization`
- `WebSite`
- `WebPage`
- `Article`
- `BreadcrumbList`
- `ProfessionalService`

Do not add structured data that claims unsupported facts.

Editorial URLs must remain executive-oriented and SEO-friendly.

Preferred examples:

/insights/ai-strategy/why-most-ai-transformations-fail
/case-studies/financial-services/scaling-enterprise-agility

Avoid generic blog-style URLs.

---

## 14. Google Indexing Requirements

The site must be easy for Google to crawl and index.

Required files and behavior:

- `public/robots.txt` must exist.
- `sitemap.xml` must be generated or available in production.
- Sitemap must use the custom domain.
- Public pages must not accidentally include `noindex`.
- Canonical URLs must point to the custom domain.
- Internal links must use clean routes.
- Broken links must be avoided.

Expected `robots.txt` content unless there is a reason to change it:

```txt
User-agent: *
Allow: /

Sitemap: https://facundogangemi.com/sitemap.xml
```

If Astro sitemap integration is not configured, recommend enabling it before manually creating sitemap files.

If the Astro sitemap integration is used, ensure:

- `@astrojs/sitemap` is installed.
- `site` is correctly set in `astro.config.mjs`.
- the generated sitemap uses `https://facundogangemi.com`.

---

## 15. Legal and Compliance Pages

The website must include legal and compliance pages.

Expected pages:

```txt
/legal/legal-notice
/legal/privacy-policy
/legal/cookie-policy
/legal/terms-and-conditions
```

Recommended source files:

```txt
src/pages/legal/legal-notice.astro
src/pages/legal/privacy-policy.astro
src/pages/legal/cookie-policy.astro
src/pages/legal/terms-and-conditions.astro
```

Legal source context should be stored separately under:

```txt
/legal/legal-context.md
```

Additional legal reference files may be created later, for example:

```txt
/legal/privacy-notes.md
/legal/cookie-policy-notes.md
/legal/data-processing.md
```

Rules for legal pages:

- Never invent legal, fiscal, tax, registration or address information.
- Never invent data processors, analytics tools or cookie providers.
- Never invent company registration numbers.
- Never invent legal representative information.
- Never invent user rights workflows.
- Use placeholders when information is missing.
- Ask for missing legal information before finalizing production-ready legal pages.
- Legal pages must be linked from the footer.
- Legal pages must use clear and professional language.
- Legal pages must be easy to find.
- Legal pages must be indexable unless explicitly instructed otherwise.

The legal pages should consider:

- GDPR / RGPD
- cookies and consent
- identification of website owner
- contact information
- terms of use
- privacy policy
- data processing
- analytics and tracking
- newsletter or email marketing if used
- forms and lead capture if used
- third-party services if used

Important: generated legal text is a working draft and must be reviewed before being considered legally final.

---

## 16. Cookies, Analytics and Tracking Rules

Do not add analytics, pixels, heatmaps, remarketing tags or tracking scripts without explicit approval.

If analytics or tracking are added later:

- Document the tool.
- Document the purpose.
- Document what data it collects.
- Document whether cookies are used.
- Document whether consent is required.
- Do not load non-essential tracking before consent if consent is required.
- Keep configuration centralized.
- Ensure the cookie policy reflects the actual tools in use.

Potential tools that require explicit confirmation before implementation:

- Google Analytics
- Google Tag Manager
- Meta Pixel
- LinkedIn Insight Tag
- Hotjar
- Microsoft Clarity
- Calendly embeds
- YouTube embeds
- Vimeo embeds
- chatbots
- AI assistants
- newsletter platforms
- CRM integrations

---

## 17. Accessibility Standards

Target WCAG AA alignment where practical.

Accessibility rules:

- Use semantic HTML.
- Use one H1 per page.
- Preserve logical heading hierarchy.
- Add descriptive alt text to meaningful images.
- Use empty alt text for decorative images when appropriate.
- Ensure keyboard navigation works.
- Ensure visible focus states.
- Ensure sufficient color contrast.
- Avoid relying only on color to communicate meaning.
- Use ARIA only when semantic HTML is insufficient.
- Ensure buttons and links have accessible names.
- Avoid inaccessible custom controls.
- Avoid excessive motion.
- Respect reduced motion preferences when possible.

Quality target:

- Lighthouse Accessibility score should remain high.
- Do not knowingly introduce accessibility regressions.

---

## 18. Performance Standards

The site must be fast and lightweight.

Performance rules:

- Prefer static rendering.
- Minimize client-side JavaScript.
- Avoid unnecessary hydration.
- Avoid heavy dependencies.
- Optimize images.
- Prefer modern image formats such as WebP or AVIF when practical.
- Use responsive images where appropriate.
- Lazy load below-the-fold images.
- Avoid oversized hero images.
- Avoid excessive animations.
- Avoid unnecessary API calls.
- Avoid layout shifts.
- Keep CSS maintainable and lean.

Core Web Vitals should be considered when modifying UI or assets.

---

## 19. Image and Asset Standards

Image rules:

- Use descriptive filenames.
- Use compressed files.
- Avoid uploading unnecessarily large assets.
- Use appropriate dimensions.
- Add alt text for meaningful images.
- Do not use generic filenames like `image1.png` or `final-final.png`.
- Keep visual style aligned with the brand.
- Avoid generic stock imagery when it weakens credibility.

Recommended naming examples:

```txt
ai-strategy-consulting-hero.webp
facundo-gangemi-executive-profile.webp
digital-transformation-framework-diagram.svg
```

---

## 20. Security Standards

Even though this is a static site, apply secure development practices.

Security rules:

- Never commit secrets.
- Never expose API keys.
- Never hardcode credentials.
- Never include private tokens in the repository.
- Never include private personal data unless explicitly approved.
- Avoid unsafe inline scripts.
- Avoid `eval` or eval-like behavior.
- Validate external URLs before adding them.
- Use `rel="noopener noreferrer"` for external links opened in a new tab.
- Avoid unnecessary third-party scripts.

If a secret or credential is found in the repository, report it immediately and do not propagate it.

---

## 21. Git and Change Management Rules

Work in small, controlled changes.

Rules:

- Make atomic changes.
- Do not modify unrelated files.
- Do not reformat unrelated files.
- Do not remove working functionality without explanation.
- Do not rename files or folders without a reason.
- Explain why each relevant file changed.
- Keep changes reviewable.
- Preserve existing behavior unless the task requires changing it.

When proposing commits, use clear messages such as:

```txt
feat: add legal pages structure
fix: correct canonical URLs for custom domain
chore: enable Astro sitemap integration
refactor: extract shared hero component
```

---

## 22. Quality Gates

Before marking a task complete, check the relevant gates.

Minimum quality gates:

- Project builds successfully.
- TypeScript has no avoidable errors.
- Lint has no avoidable errors.
- No broken imports.
- No broken routes.
- No console errors introduced.
- No dead code introduced.
- No hardcoded secrets.
- Responsive behavior is preserved.
- SEO metadata is preserved or improved.
- Accessibility is preserved or improved.
- GitHub Pages compatibility is preserved.

When available, run:

```bash
npm run build
npm run preview
npm run lint
npm run typecheck
npm run format:check
```

If a script does not exist, do not invent that it was run. Report that the script is missing and suggest adding it if useful.

---

## 23. Recommended Commands

Before running commands, inspect `package.json` to confirm the available scripts.

Common commands may include:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Optional quality commands may include:

```bash
npm run lint
npm run typecheck
npm run format
npm run format:check
```

Do not assume scripts exist. Verify first.

---

## 24. Hooks and Automation Notes

If Claude Code hooks or local automation are configured, they should support quality gates.

Recommended automated checks:

- format check
- lint
- typecheck
- build
- broken link check if available

Do not add strict automation that blocks development without explaining its impact.

If GitHub Actions are configured, they should validate:

- install
- build
- typecheck if available
- lint if available
- deployment compatibility

---

## 25. Documentation Standards

Document important decisions.

Use `/references` for technical documentation such as:

```txt
/references/seo-guidelines.md
/references/accessibility-guidelines.md
/references/github-pages-deployment.md
/references/architecture-notes.md
```

Use `/branding` for brand documentation such as:

```txt
/branding/visual-guidelines.md
/branding/tone-of-voice.md
```

Use `/prompts` for reusable prompts such as:

```txt
/prompts/content-generation.md
/prompts/article-creation.md
/prompts/seo-review.md
```

Documentation should be concise, practical and useful for future development.

---

## 26. Content Architecture

The site may evolve to include:

- homepage
- about page
- services pages
- AI strategy pages
- digital transformation pages
- blog/articles
- case studies
- speaking/training pages
- contact page
- legal pages

When creating new content sections, maintain consistent content structure.

Recommended structure for service pages:

1. Clear value proposition.
2. Business problem.
3. Strategic approach.
4. What the service includes.
5. Expected outcomes.
6. Who it is for.
7. CTA.
8. Supporting credibility.

Recommended structure for articles:

1. Clear title.
2. Short introduction.
3. Practical insight.
4. Structured sections.
5. Examples or implications.
6. Final reflection or CTA.

---

## 27. Future Scalability

The architecture should support future growth.

Design with future needs in mind:

- multilingual content
- larger blog/article library
- service landing pages
- case studies
- newsletter integration
- analytics with consent
- CMS integration
- AI assistant integration
- downloadable resources
- lead capture forms

Do not implement these future capabilities unless requested. Just avoid architectural decisions that make them difficult later.

The content architecture should support future expansion into:
- executive insights hub
- enterprise case study library
- AI strategy frameworks
- downloadable strategic assets
- research-style publications
- newsletter integration

---

## 28. Multilingual Readiness

The website may support multiple languages in the future.

Current primary language should be treated as English unless the project structure indicates otherwise.

When adding content:

- Keep strings organized where practical.
- Avoid hardcoding assumptions that prevent future `/es` routes.
- Avoid URL structures that make future localization difficult.
- Keep metadata language-aware when localization is introduced.

Do not implement a multilingual system unless explicitly requested.

---

## 29. Forms and Lead Capture

Do not add forms without confirming:

- destination
- data collected
- storage location
- email notification flow
- privacy implications
- consent requirements

If forms are added later:

- minimize collected data
- clearly explain purpose
- link to privacy policy
- avoid collecting sensitive data unless necessary
- validate fields
- prevent spam where possible

---

## 30. Things Claude Must Never Do

Never:

- rewrite the whole project without approval
- change the technology stack without approval
- introduce backend functionality without approval
- add dependencies without explaining why
- use the `github.io` domain as canonical
- break GitHub Pages static deployment
- remove or damage SEO metadata
- remove or damage the sitemap configuration
- remove or damage `robots.txt`
- remove or damage the `CNAME` file if it exists
- create legal pages using invented legal details
- add analytics or tracking without approval
- add cookies without updating cookie documentation
- expose secrets or credentials
- add placeholder lorem ipsum to production pages
- create inaccessible UI components
- ignore mobile responsiveness
- duplicate components unnecessarily
- refactor unrelated files
- silently suppress errors
- claim tests passed if they were not run
- Never create generic SaaS-looking pages that weaken executive positioning.
- Never generate exaggerated AI hype content.
- Never position the brand as a low-cost freelancer profile.

---

## 31. Completion Response Format

After implementing a task, provide a concise summary:

1. What changed.
2. Files modified.
3. Validation performed.
4. Any risks or follow-up actions.

If validation could not be performed, state clearly why.

Do not over-explain obvious implementation details unless asked.

---

## 32. Preferred First Task After Adding This File

After this file is added, the preferred next task is an audit.

Use this prompt:

```txt
Read CLAUDE.md and audit the existing Astro project.

Do not modify files yet.

Analyze the current structure, configuration and codebase. Identify what must be adjusted to comply with:
- clean code standards
- SEO requirements
- Google indexing requirements
- GitHub Pages deployment
- sitemap and robots.txt generation
- legal pages
- accessibility
- performance
- responsive design

Return:
1. Current project diagnosis.
2. Missing files and folders.
3. Existing files that should be modified.
4. Risks or inconsistencies.
5. A prioritized implementation plan by phases.

Do not make changes until I approve the plan.
```

---

## 33. Final Principle

This project must remain clean, strategic and technically reliable.

Every implementation should make the website easier to maintain, easier to index, easier to evolve and more credible for an executive consulting audience.

---

## 34. SEO, Accessibility and Content Quality Rules

These rules extend sections 13 and 14. They define per-page and per-component quality checks that must be applied when writing or reviewing any page, section, or content block.

### Technical SEO — Per-Page Checklist

Before marking any new or updated page complete, verify:

- `<title>` is unique, under 60 characters, and includes the primary keyphrase.
- `<meta name="description">` is unique, under 155 characters, and summarizes the page clearly.
- `<link rel="canonical">` points to `https://facundogangemi.com/<path>` — never a `github.io` URL.
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) are present.
- `og:image` references a valid, existing file — do not use placeholder paths.
- The page has exactly one `<h1>` that contains the primary keyphrase.
- The page uses a logical heading hierarchy: H1 → H2 → H3. No skipped levels.
- The page renders correctly on mobile.
- No `noindex` meta tag is present unless explicitly required.
- Structured data (JSON-LD), if added, is valid and does not claim unsupported facts.

### Keyphrase and Content Rules

When writing or generating page content:

- The primary keyphrase must appear in the `<title>`, `<h1>`, and within the first 100 words of the main body text.
- Do not repeat the keyphrase more than is natural. Keyword stuffing harms both readability and ranking.
- Support the primary keyphrase with semantically related terms. Avoid forced repetition.
- Each page should target one primary topic. Do not try to rank a single page for unrelated keyphrases.

Primary strategic keyphrases for this website:

- AI Strategy Consultant
- Digital Transformation Advisor
- Enterprise Transformation
- AI Adoption
- Intelligent Operating Models
- Executive AI Advisory
- Organizational Transformation
- Enterprise Agility

Use these themes consistently across pages and editorial content. Do not invent positioning that conflicts with these topics.

### Heading Hierarchy Rules

- Every page must have exactly one `<h1>`. It must be visible to users, not hidden.
- `<h2>` elements introduce main sections. They must be descriptive, not decorative.
- `<h3>` elements introduce subsections under an `<h2>`. Do not use them as decorative labels.
- Do not use headings solely for visual sizing. Use semantic purpose and apply CSS for visual treatment.
- Eyebrow labels (small uppercase labels above headings) are `<span>` elements, not headings.

### Image SEO Rules

When adding any image:

- Use a descriptive filename that reflects content: `ai-strategy-consulting-meeting.webp`, not `image-01.webp`.
- Add meaningful `alt` text for all images that convey information or context.
- Use empty `alt=""` for purely decorative images (backgrounds, abstract textures, atmospheric dividers).
- Prefer WebP format. Convert PNG or JPEG source files to WebP before committing.
- Target file sizes below 200 KB for hero images. Use 80–120 KB for card and editorial images where possible.
- Do not add `loading="eager"` unless the image is above the fold and critical for LCP.
- All below-the-fold images must use `loading="lazy"`.

### Content Readability Rules

When writing copy for any page or section:

- Use short paragraphs. A paragraph longer than 4 lines on desktop should be split.
- Use active voice. "We transform organizations" not "Organizations are transformed by us."
- Use transition words between ideas to improve logical flow.
- Avoid dense jargon blocks. Every technical term must serve clarity, not signal complexity.
- Use bullet points or numbered lists when presenting 3 or more parallel items.
- Avoid walls of text. Visual breathing room improves both readability and perceived quality.

### Internal Link Quality Rules

When adding internal links:

- Use descriptive link text that explains the destination. "Explore AI Strategy Advisory" not "click here" or "learn more" alone.
- Link to related pages where it adds value for the reader.
- Do not add links to pages that do not yet exist. Use descriptive text without a link until the target page is ready.
- Avoid excessive internal links on a single page. Prioritize quality over volume.

### Accessibility Quality Rules

When implementing any UI component, page, or section:

- All interactive elements (buttons, links, form fields) must have an accessible name — visible text or `aria-label`.
- Color alone must not be the only way to communicate meaning.
- Text must meet WCAG AA contrast requirements: 4.5:1 for body text, 3:1 for large text (18px+ bold or 24px+ regular).
- Focus styles must be visible. Do not remove `:focus-visible` outlines without providing a custom equivalent.
- Respect `prefers-reduced-motion`. Animations triggered by scroll or interaction must be suppressed or reduced when this preference is active.
- Use ARIA attributes only when native HTML semantics are insufficient. Do not add ARIA roles or attributes that duplicate what semantic HTML already communicates.
- Every `<img>` must have an `alt` attribute, even if the value is empty (`alt=""`).
- Form labels must be explicitly associated with their input via `for`/`id` or wrapping.

### Pre-Completion Verification

Before reporting any page or section as complete:

1. Run `npm run build` and confirm zero errors.
2. Confirm no console errors are introduced at runtime.
3. Confirm the heading hierarchy is correct.
4. Confirm `<title>`, `<meta name="description">`, and canonical URL are present and correct.
5. Confirm mobile layout renders correctly at 375px and 768px viewport widths.
6. Confirm all images have appropriate `alt` text.
7. Confirm internal links point to existing routes.

