# DEVELOPMENT PROMPT — facundogangemi.com

## Purpose

This document is the implementation handoff for Claude Code / VS Code.

Use it to build the new facundogangemi.com website as a premium static website compatible with GitHub Pages.

The website must follow the strategy, UX, UI and component documentation already defined in the project.

Required source documents:
- MASTER_CONTEXT.md
- BRAND_GUIDELINES.md
- PLATFORM_STRATEGY.md
- CONTENT_BRIEFS.md
- HOMEPAGE_UX_ARCHITECTURE.md
- WIREFRAME_SPECIFICATION.md
- HOMEPAGE_UI_DIRECTION.md
- COMPONENT_SYSTEM.md
- HOMEPAGE_COPY_DECK_EN.md
- ASSET_INVENTORY.md

## Document Priority Rule

> **Status — Phase 1 implementation handoff only.**
> This override rule applied to the original build phase. The website has been fully implemented. For all ongoing development and content decisions, `CLAUDE.md` is the authoritative technical source of truth and takes precedence over this document. Use this document as historical context only.

If there is any conflict between documents regarding launch language, routing, technology stack, visible homepage copy or implementation decisions, DEVELOPMENT_PROMPT.md overrides previous strategic documents.

Current implementation decisions:
- Launch language: English
- Future secondary language: Spanish under `/es/`
- Static site stack: Astro + TypeScript + TailwindCSS
- Hosting target: GitHub Pages
- Blog becomes Insights
- Projects become Case Studies
- Contact form submits to Make.com webhook
- Homepage visible copy must follow HOMEPAGE_COPY_DECK_EN.md
- Do not use WordPress
- Visual and media asset paths must follow ASSET_INVENTORY.md

Do not improvise a new strategy.
Do not create a generic consulting website.
Do not start from a WordPress mental model.

---

# 1. Project Objective

Build a new static website for facundogangemi.com that positions Facundo Gangemi as a premium executive authority in:

- AI Strategy
- Digital Transformation
- Enterprise Transformation
- Enterprise Agility
- Intelligent Operating Models
- Executive Advisory

The website must preserve and elevate the current:

- Blog section → transformed into Insights
- Projects section → transformed into Case Studies

The final site must feel:

- executive
- premium
- modern
- AI-native
- enterprise-grade
- fast
- strategic
- sophisticated

The site must not feel like:

- a freelancer portfolio
- a generic template
- a traditional Agile Coach website
- a startup hype landing page
- a WordPress blog clone
- a cyberpunk AI website

---

# 2. Preferred Technical Stack

Use a modern static website stack optimized for GitHub Pages.

Preferred stack:

- Astro
- TypeScript
- TailwindCSS
- Markdown / MDX content collections
- Vanilla JavaScript only where needed
- SVG for diagrams and icons
- GitHub Pages deployment through GitHub Actions

Why Astro is preferred:

- excellent for static sites
- excellent for content-driven websites
- Markdown support is native
- fast performance
- SEO-friendly output
- ideal for GitHub Pages
- simpler than Next.js for static content publishing

Do not use:

- WordPress
- server-side backend
- database runtime dependency
- heavy CMS architecture
- unnecessary JavaScript frameworks unless justified

If React components are needed, use Astro islands sparingly and only for interactive components.

---

# 3. Expected Project Structure

Create or align the project with the following structure:

```text
facundogangemi.com/
   MASTER_CONTEXT.md

   branding/
      BRAND_GUIDELINES.md

   strategy/
      PLATFORM_STRATEGY.md
      CONTENT_BRIEFS.md
      HOMEPAGE_UX_ARCHITECTURE.md
      WIREFRAME_SPECIFICATION.md
      HOMEPAGE_UI_DIRECTION.md
      COMPONENT_SYSTEM.md
      HOMEPAGE_COPY_DECK_EN.md
      DEVELOPMENT_PROMPT.md

   references/
      visual references, screenshots, mockups

   public/
      assets/
         logos/
         images/
         portraits/
         backgrounds/
         icons/
         case-studies/
         insights/

   src/
      components/
         global/
         layout/
         sections/
         cards/
         forms/
         ui/

      content/
         insights/
         case-studies/

      data/
         navigation.ts
         advisoryPillars.ts
         kpis.ts
         logos.ts
         framework.ts
         speakingTopics.ts

      layouts/
         BaseLayout.astro
         ArticleLayout.astro
         CaseStudyLayout.astro

      pages/
         index.astro
         about.astro
         advisory.astro
         advisory/
            ai-strategy.astro
            ai-adoption.astro
            digital-transformation.astro
            enterprise-agility.astro
         case-studies/
            index.astro
            [slug].astro
         insights/
            index.astro
            [slug].astro
         speaking.astro
         contact.astro

      styles/
         global.css
         tokens.css

   astro.config.mjs
   tailwind.config.mjs
   package.json
   README.md
```

If the current project has a different structure, propose the safest migration path before making destructive changes.

---

# 4. Build Strategy

Implement the website in controlled phases.

Do not build everything in one pass.

## Phase 1 — Project Setup

Create:

- Astro project setup
- TailwindCSS configuration
- global CSS
- design tokens
- base layout
- global metadata structure
- folder structure
- asset folders

Deliverable:

- project runs locally
- empty homepage renders successfully
- Tailwind is working
- global styles are loaded

---

## Phase 2 — Global Layout

Create:

- BaseLayout
- Navbar
- MobileMenu
- Footer
- Container
- SectionWrapper
- SectionHeader
- CTAButton
- TextLink

Deliverable:

- global shell works across pages
- navigation is responsive
- footer is ready
- CTA styles are consistent

---

## Phase 3 — Homepage Static Build

Create homepage sections without complex animation first:

- HeroSection
- TrustBar
- AdvisoryGrid
- KPIBand
- FrameworkTeaser
- CaseStudiesPreview
- InsightsPreview
- AboutSnapshot
- SpeakingStrip
- AssessmentCTA
- NewsletterSignup
- FinalCTABand

Deliverable:

- full homepage structure implemented
- responsive layout working
- content-driven section data where appropriate
- no heavy animation yet

---

## Phase 4 — Content System

Implement content-driven architecture for:

- Insights
- Case Studies

Use Markdown / MDX content collections.

Create:

- /src/content/insights
- /src/content/case-studies
- article frontmatter schema
- case study frontmatter schema
- Insights index page
- Insights detail page
- Case Studies index page
- Case Studies detail page

Deliverable:

- sample articles render correctly
- sample case studies render correctly
- homepage pulls latest/featured insights and cases

---

## Phase 5 — Contact System

Create:

- Contact page
- ContactForm component
- EmailButton component
- FormStatusMessage component
- Make.com webhook integration placeholder
- honeypot spam prevention
- client-side validation
- success / error / loading states

Deliverable:

- form can submit to a configurable Make.com webhook URL
- direct email button works through mailto
- form is accessible
- no backend required

---

## Phase 6 — UI Polish and Motion

Add lightweight motion and polish:

- navbar scroll transition
- card hover states
- CTA hover states
- fade-up section reveals
- KPI count-up if lightweight
- framework SVG reveal if simple

Deliverable:

- premium interaction feel
- respects prefers-reduced-motion
- no performance degradation

---

## Phase 7 — SEO, Performance and Accessibility

Implement:

- page titles
- meta descriptions
- Open Graph metadata
- canonical URLs
- sitemap
- robots.txt
- semantic headings
- alt text
- keyboard navigation
- color contrast validation
- optimized images
- lazy loading
- Lighthouse review

Deliverable:

- production-ready static site
- strong SEO foundation
- strong accessibility baseline
- fast performance

---

## Phase 8 — GitHub Pages Deployment

Prepare:

- GitHub Actions workflow
- static build command
- deployment instructions
- custom domain readiness
- README instructions

Deliverable:

- site can be deployed to GitHub Pages
- build process documented

---

# 5. Design System Rules

Follow the approved visual direction:

> Executive AI Premium

## Colors

Primary:

- Deep Navy: #00274C

Secondary:

- Light Gray: #F2F2F2

Accent Option A:

- Orange: #F57C00

Accent Option B:

- Electric Blue: #129BFF

Important:

Use one dominant accent direction.

If using both:

- orange = action / transformation / CTA
- blue = ambient AI / technology / subtle background

Do not use both as competing primary accents.

## Typography

Use:

- Manrope for major headings and strategic statements
- Inter for body, UI, buttons and navigation

Typography must feel:

- executive
- calm
- readable
- premium
- modern

Avoid:

- decorative fonts
- dense paragraphs
- oversized startup typography

## Spacing

Desktop:

- max width: 1200px to 1280px
- horizontal padding: 32px to 48px
- section padding: 96px to 128px

Mobile:

- horizontal padding: 20px to 24px
- section padding: 56px to 72px

## Cards

Use:

- rounded corners: 16px to 24px
- subtle 1px borders
- restrained shadows
- hover lift around 4px
- clean internal spacing

Avoid:

- noisy cards
- thick borders
- colorful card clutter

## Motion

Use subtle motion only:

- fade-up reveals
- hover lift
- arrow movement
- navbar blur on scroll
- optional SVG line draw

Respect:

- prefers-reduced-motion

Avoid:

- scroll hijacking
- heavy particle systems
- complex 3D
- constant movement

---

# 6. Required Pages

Build these pages:

## Home

Route:

/

Purpose:

- immediate executive positioning
- main conversion page
- access to services, proof, insights and contact

## About

Route:

/about

Purpose:

- executive credibility
- personal narrative
- transition from Agile Coach to AI Strategy Advisor

## Advisory Hub

Route:

/advisory

Purpose:

- single consolidated advisory hub (Phase 7 architecture)
- contains four anchor sections covering all four practices

Anchor sections (do not create separate sub-pages):

- /advisory/#ai-strategy — AI Strategy practice
- /advisory/#digital-transformation — Digital Transformation practice
- /advisory/#operational-excellence — Operational Excellence practice (fourth pillar; replaces Enterprise Agility sub-page)
- /advisory/#ai-adoption — AI Adoption practice

> **Note:** The advisory sub-pages `/advisory/ai-strategy/`, `/advisory/digital-transformation/`, `/advisory/ai-adoption/`, `/advisory/enterprise-agility/` were deleted in Phase 8 (2026-05-13). Do not recreate them.

## Case Studies

Route:

/case-studies

Purpose:

- transform legacy Projects section into proof-driven case studies

## Case Study Detail

Route:

/case-studies/[slug]

Purpose:

- render individual case studies from Markdown or MDX

## Insights

Route:

/insights

Purpose:

- transform legacy Blog into executive thought leadership platform

## Insight Detail

Route:

/insights/[slug]

Purpose:

- render articles from Markdown / MDX

## Speaking

Route:

/speaking

Purpose:

- generate keynote and event opportunities

## Contact

Route:

/contact

Purpose:

- form submission
- direct email option
- advisory/speaking/workshop inquiry path

---

# 7. Homepage Requirements

The homepage must include the following sections in this order:

1. HeroSection
2. TrustBar
3. AdvisoryGrid
4. KPIBand
5. FrameworkTeaser
6. CaseStudiesPreview
7. InsightsPreview
8. AboutSnapshot
9. SpeakingStrip
10. AssessmentCTA
11. NewsletterSignup
12. FinalCTABand

The homepage must answer in under 8 seconds:

- who Facundo is
- what he helps organizations transform
- why he is credible
- what the visitor should do next

Primary CTA:

- Book Advisory Call

Secondary CTAs:

- Explore Services
- View Case Studies
- Take AI Maturity Assessment
- Subscribe to Executive Briefing

---

# 8. Content Model

## 8.1 Insights Markdown Schema

Each article should use frontmatter like:

```yaml
---
title: "Why AI does not transform organizations by itself"
slug: "ai-does-not-transform-organizations-by-itself"
date: "2026-05-08"
language: "en"
translationKey: "ai-does-not-transform-alone"
category: "AI Strategy"
tags:
  - AI
  - Transformation
  - Operating Models
metaDescription: "Executive perspective on why AI requires strategy, operating models and adoption to create real business impact."
featuredImage: "/assets/insights/ai-operating-model.webp"
author: "Facundo Gangemi"
readingTime: "7 min"
featured: true
---
```

Article body should be Markdown.

The article layout must include:

- H1
- metadata strip
- strategic TL;DR
- article body
- author card
- related insights
- newsletter signup
- advisory CTA

---

## 8.2 Case Study Markdown Schema

Each case study should use frontmatter like:

```yaml
---
title: "Accelerating transformation in a financial institution"
slug: "financial-institution-transformation"
language: "en"
translationKey: "financial-institution-transformation"
industry: "Banking"
pillar: "Enterprise Transformation"
heroMetric: "40% faster delivery cycles"
summary: "How leadership alignment, agile operating models and transformation governance accelerated enterprise execution."
featuredImage: "/assets/case-studies/banking-transformation.webp"
client: "Anonymized financial institution"
duration: "12 months"
featured: true
---
```

Case body should include:

- Context
- Challenge
- Approach
- Framework applied
- Results
- Lessons learned
- Related services

---

# 9. Contact Form Requirements

Because the website will be hosted on GitHub Pages, there is no server-side backend available in the website itself.

The contact form must submit to an external endpoint.

Preferred endpoint:

- Make.com Custom Webhook

## Required Contact Components

Create:

- ContactForm
- EmailButton
- FormStatusMessage

## Required Form Fields

Required:

- Name
- Email
- Company / Organization
- Role
- Type of inquiry
- Message

Optional:

- Website / LinkedIn / Organization URL
- Preferred contact method
- Phone number

Hidden:

- sourcePage
- submittedAt
- honeypot field

## Inquiry Type Options

- Advisory
- AI Strategy
- Digital Transformation
- Workshop
- Speaking
- Press / Media
- Partnership
- Other

## Form Behavior

On submit:

1. Prevent default form behavior.
2. Validate required fields.
3. Check honeypot field.
4. Send JSON payload to Make.com webhook.
5. Show loading state.
6. Show success message if response succeeds.
7. Show error message if response fails.
8. Do not redirect unless explicitly configured later.

## Webhook Configuration

Use a placeholder config value:

```ts
const MAKE_CONTACT_WEBHOOK_URL = "REPLACE_WITH_MAKE_WEBHOOK_URL";
```

Do not hardcode a real webhook URL in documentation.

If using environment variables, ensure the static build can access the value appropriately.

## Email Button

Add a direct email fallback using mailto.

Use placeholder:

```text
REPLACE_WITH_FACUNDO_EMAIL
```

Example:

```html
<a href="mailto:REPLACE_WITH_FACUNDO_EMAIL?subject=Advisory%20Inquiry">Email Facundo</a>
```

The email button should be present on:

- Contact page
- Footer or Connect section

## Contact Page UX

The Contact page should include:

- clear headline
- short reassurance line
- form
- direct email button
- optional Calendly placeholder
- confidentiality note

Recommended copy direction:

Headline:

Let's discuss your transformation.

Supporting text:

Share a few details and I will respond within 24 hours.

Confidentiality note:

All inquiries are handled personally and confidentially.

---

# 10. Make.com Integration Notes

## 10.1 Contact Form Flow

Recommended Make scenario:

```text
Custom Webhook
→ Validate fields
→ Send email notification to Facundo
→ Store lead in Google Sheets / Airtable / Supabase
→ Send confirmation email to visitor
→ Optional lead tagging by inquiry type
```

Recommended payload:

```json
{
  "name": "",
  "email": "",
  "company": "",
  "role": "",
  "inquiryType": "",
  "message": "",
  "sourcePage": "",
  "submittedAt": "",
  "consent": true
}
```

## 10.2 Future Insights Publishing Flow

Preferred future flow:

```text
Article idea
→ Make automation
→ AI article draft
→ human review
→ Markdown with frontmatter
→ commit to /src/content/insights
→ GitHub Pages rebuild
→ article appears in Insights
```

Do not generate raw HTML articles from Make.

---

# 11. SEO Requirements

Implement SEO from the beginning.

Each page must support:

- title
- meta description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata
- language metadata
- hreflang-ready structure

Required schema later:

- Person
- ProfessionalService
- Article
- BreadcrumbList
- FAQPage where relevant

Heading rules:

- one H1 per page
- logical H2/H3 hierarchy
- no skipped heading levels for visual reasons

Insights SEO:

- every article links to its relevant advisory page
- every article links to related insights
- every article can link to one relevant case study

Case Studies SEO:

- every case links to its related service pillar
- every case includes industry and transformation tags

---

# 12. Legacy SEO and Redirect Notes

The current site has existing Spanish blog/category/project URLs.

The new site will launch primarily in English, but must still preserve Spanish SEO equity where possible.

Create a future redirect map for:

- legacy Spanish blog categories
- legacy Spanish article URLs
- legacy Spanish project URLs
- old service pages if any

Preferred future strategy:

- English primary pages live at root-level routes.
- Spanish legacy content should eventually map to `/es/insights/` or `/es/case-studies/` where appropriate.
- High-value Spanish legacy URLs should either be preserved, redirected to Spanish equivalents, or redirected to the closest English equivalent only when no Spanish equivalent exists.

Important:

GitHub Pages has limited native redirect handling.

Possible approaches:

- preserve important legacy slugs where possible
- create static redirect HTML pages for high-value legacy URLs
- use Cloudflare Pages or Netlify later if advanced redirect management becomes necessary
- configure domain-level redirects if supported by DNS/CDN layer

Do not ignore legacy SEO.

---

# 13. Accessibility Requirements

Every page and component must follow accessibility best practices.

Requirements:

- semantic HTML
- keyboard navigation
- visible focus states
- alt text for meaningful images
- aria labels where needed
- color contrast validation
- reduced-motion support
- form labels visible
- form errors accessible
- mobile menu accessible

Do not remove browser focus outlines unless replacing them with accessible focus styles.

---

# 14. Performance Requirements

Performance is part of the premium experience.

Requirements:

- optimize all images
- use WebP or AVIF where possible
- define image dimensions to avoid layout shift
- lazy-load below-the-fold images
- avoid heavy JavaScript
- avoid heavy animation libraries if not necessary
- use SVG for icons and simple diagrams
- load only required fonts
- minimize unused CSS

Target:

- fast first load
- strong Lighthouse score
- no janky scrolling
- clean mobile performance

---

# 15. Responsive Requirements

The website must work beautifully on:

- desktop
- laptop
- tablet
- mobile

Responsive rules:

- desktop can use multi-column layouts
- tablet should reduce to two-column layouts where appropriate
- mobile should use single-column flow
- CTAs should be full width on mobile where useful
- framework diagrams should become vertical steps on mobile
- card grids should stack on mobile
- navigation should become hamburger menu on mobile

Do not simply shrink desktop layouts.

Mobile must feel intentionally designed.

---

# 16. Content Language Direction and i18n Readiness

Primary launch language:

- English

Secondary future language:

- Spanish

Strategic rationale:

The new website is intended to strengthen Facundo Gangemi's international executive positioning as an AI Strategy and Enterprise Transformation Advisor.

The website should launch in English as the default experience while preserving the ability to add Spanish content later without redesigning the architecture.

Code, component names, data files and developer-facing naming must remain in English.

Visible launch copy should be in English.

## i18n Requirements

The website must be i18n-ready from the beginning.

Preferred routing model:

- `/` = English primary experience
- `/es/` = future Spanish experience

Future Spanish routes should include:

- `/es/`
- `/es/about`
- `/es/advisory`
- `/es/case-studies`
- `/es/insights`
- `/es/speaking`
- `/es/contact`

## Language Switcher

Prepare a simple language switcher structure for future use:

- EN
- ES

At launch, the switcher can be hidden or can show Spanish as "Coming soon" if the Spanish pages are not ready.

If implemented, the language switcher should route users to the equivalent translated page when available.

## SEO / hreflang Readiness

Prepare metadata architecture to support:

- canonical URLs
- `hreflang="en"`
- `hreflang="es"` later
- `x-default` pointing to the English default route

Do not rely on automatic browser translation or translation widgets as the main internationalization strategy.

Future Spanish content should be manually translated or AI-assisted and human-reviewed before publication.

---

# 17. What Not To Do

Do not:

- use WordPress
- create raw HTML blog articles generated by Make
- hardcode all article content into page components
- ignore existing Blog and Projects value
- make the website look like a generic template
- overuse Agile/Scrum language in primary sections
- use AI hype language
- create excessive animation
- use heavy JavaScript unnecessarily
- build all pages in one uncontrolled pass
- ignore mobile
- ignore accessibility
- ignore SEO
- hardcode real secrets or webhook URLs

---

# 18. Initial Implementation Prompt for Claude Code

Use this prompt to start the implementation phase:

```text
You are working on the facundogangemi.com redesign project.

Read and follow these documents before writing code:
- MASTER_CONTEXT.md
- branding/BRAND_GUIDELINES.md
- strategy/PLATFORM_STRATEGY.md
- strategy/CONTENT_BRIEFS.md
- strategy/HOMEPAGE_UX_ARCHITECTURE.md
- strategy/WIREFRAME_SPECIFICATION.md
- strategy/HOMEPAGE_UI_DIRECTION.md
- strategy/COMPONENT_SYSTEM.md
- strategy/HOMEPAGE_COPY_DECK_EN.md
- strategy/DEVELOPMENT_PROMPT.md
- strategy/ASSET_INVENTORY.md

Your task is to start Phase 1 only: Project Setup.

Set up a static website using Astro + TypeScript + TailwindCSS, prepared for GitHub Pages deployment.

Create the recommended folder structure, base layout, global styles, design tokens, and placeholder homepage.

Do not implement the full website yet.
Do not create all pages yet.
Do not add complex animations yet.
Do not ignore the documentation.

After setup, explain:
- what files you created
- how to run the project locally
- what the next implementation phase should be
```

---

# 19. Phase 2 Implementation Prompt

After Phase 1 is complete, use:

```text
Continue the facundogangemi.com project.

Now implement Phase 2: Global Layout.

Create:
- BaseLayout
- Navbar
- MobileMenu
- Footer
- Container
- SectionWrapper
- SectionHeader
- CTAButton
- TextLink

Follow:
- BRAND_GUIDELINES.md
- HOMEPAGE_UI_DIRECTION.md
- COMPONENT_SYSTEM.md

Requirements:
- responsive
- accessible
- premium Executive AI visual style
- no page-specific content yet beyond placeholders
- no heavy animation yet

After implementation, explain what changed and what should be implemented next.
```

---

# 20. Phase 3 Implementation Prompt

After Phase 2 is complete, use:

```text
Continue the facundogangemi.com project.

Now implement Phase 3: Homepage Static Build.

Build the homepage using these components:
- HeroSection
- TrustBar
- AdvisoryGrid
- KPIBand
- FrameworkTeaser
- CaseStudiesPreview
- InsightsPreview
- AboutSnapshot
- SpeakingStrip
- AssessmentCTA
- NewsletterSignup
- FinalCTABand

Use content-driven data files where appropriate.

Use HOMEPAGE_COPY_DECK_EN.md as the primary source for all visible homepage copy.
Use ASSET_INVENTORY.md as the primary source for asset paths, placeholder image names, portrait requirements, logos, OG images and favicon structure.
Do not invent random asset names. If an asset is missing, use the placeholder path defined in ASSET_INVENTORY.md and report it as missing.
Do not replace homepage copy with generic placeholder marketing text.

Follow:
- CONTENT_BRIEFS.md
- HOMEPAGE_UX_ARCHITECTURE.md
- WIREFRAME_SPECIFICATION.md
- HOMEPAGE_UI_DIRECTION.md
- COMPONENT_SYSTEM.md
- HOMEPAGE_COPY_DECK_EN.md

Requirements:
- responsive
- premium Executive AI design
- no heavy animation yet
- static content is acceptable for now
- components must be reusable

After implementation, explain what changed and identify any missing assets required.
```

---

# 21. Phase 4 Implementation Prompt

After Phase 3 is complete, use:

```text
Continue the facundogangemi.com project.

Now implement Phase 4: Content System.

Create Markdown / MDX content collections for:
- Insights
- Case Studies

Create:
- Insights index page
- Insight detail template
- Case Studies index page
- Case Study detail template
- sample content files

The homepage should pull featured Insights and Case Studies from content data when possible.

Do not generate raw HTML articles.

Keep the system compatible with future Make.com automation that creates Markdown files with frontmatter.
```

---

# 22. Phase 5 Implementation Prompt

After Phase 4 is complete, use:

```text
Continue the facundogangemi.com project.

Now implement Phase 5: Contact System.

Create:
- Contact page
- ContactForm component
- EmailButton component
- FormStatusMessage component

Requirements:
- form submits to a configurable Make.com webhook placeholder
- direct mailto email button
- client-side validation
- honeypot anti-spam field
- loading state
- success state
- error state
- accessible labels and errors
- no backend dependency
- GitHub Pages compatible

Use placeholders:
- REPLACE_WITH_MAKE_WEBHOOK_URL
- REPLACE_WITH_FACUNDO_EMAIL

Do not hardcode real secrets.
```

---

# 23. Final Delivery Definition

The implementation is considered ready for review when:

- homepage is fully implemented
- global layout works
- Insights system renders Markdown articles
- Case Studies system renders Markdown case studies
- Contact form is ready for Make webhook
- Email button works
- site is responsive
- site is accessible
- SEO metadata is implemented
- GitHub Pages deployment is configured
- README explains how to run and deploy

---

# End of DEVELOPMENT_PROMPT.md

