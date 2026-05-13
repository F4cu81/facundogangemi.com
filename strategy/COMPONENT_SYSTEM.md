# COMPONENT SYSTEM — facundogangemi.com

## Document Purpose

This document defines the reusable component system for the homepage and future pages of facundogangemi.com.

It translates the approved UX architecture, wireframe specification and UI direction into a practical component structure for frontend development.

This document should guide the implementation in Claude Code / VS Code using a static website architecture compatible with GitHub Pages.

The component system must support:

- premium executive UI
- reusable layouts
- content-driven pages
- markdown-based Insights
- markdown or JSON-based Case Studies
- responsive behavior
- SEO-friendly structure
- high performance
- future automation with Make.com

The component system must follow the visual direction:

> Executive AI Premium

---

# 1. Component System Principles

## 1.1 Reusability

Components should be reusable across multiple pages whenever possible.

A component should not be created only for one visual detail unless that detail is part of the brand experience.

Recommended approach:

- create reusable section components
- create reusable card components
- create reusable CTA components
- create reusable layout wrappers
- separate content from presentation

---

## 1.2 Content-Driven Architecture

The website should avoid hardcoding content directly inside visual components when the content is likely to change.

Recommended content sources:

- navigation items as data
- advisory pillars as data
- KPIs as data
- case studies as Markdown or JSON
- insights as Markdown with frontmatter
- logos as asset list
- speaking topics as data

This supports future automation and content scalability.

---

## 1.3 Static Website Compatibility

The component system must work for a static site deployed to GitHub Pages.

The website should not depend on:

- WordPress
- server-side CMS behavior
- dynamic backend rendering
- database calls at runtime

Preferred approach:

- static build
- markdown content files
- local JSON/config files
- reusable static components
- optimized static assets

---

## 1.4 Premium UI Consistency

Every component must feel:

- clean
- executive
- modern
- minimal
- strategic
- enterprise-grade

Avoid:

- inconsistent spacing
- too many border styles
- too many animation patterns
- random icon families
- excessive visual effects
- generic template-like components

---

# 2. Recommended Technology Assumption

The component system should be compatible with a modern static frontend stack.

Recommended stack:

- Next.js static export or Astro static site
- TailwindCSS or CSS Modules
- Framer Motion only if the final stack supports it efficiently
- Markdown / MDX for Insights
- JSON or Markdown for Case Studies
- GitHub Pages deployment

If using plain HTML/CSS/JS, the same component logic should be translated into reusable partials or consistent section patterns.

---

# 3. Global Layout Components

---

# 3.1 PageShell

## Purpose

Provides the global layout structure for every page.

## Used On

- All pages

## Contains

- Navbar
- Main content slot
- Footer

## Responsibilities

- maintain page-level consistency
- provide global background structure
- ensure footer and header are consistent
- support SEO metadata injection if framework allows

## Suggested Props / Data

```ts
interface PageShellProps {
  children: React.ReactNode;
  pageTheme?: "dark" | "light" | "mixed";
}
```

## Responsive Behavior

No special responsive behavior beyond wrapping global layout.

## Development Notes

Keep PageShell lightweight.

Do not place page-specific content logic inside this component.

---

# 3.2 Container

## Purpose

Standardizes horizontal content width and spacing.

## Used On

- All sections

## Responsibilities

- apply max width
- control horizontal padding
- maintain consistent alignment

## Suggested Props

```ts
interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}
```

## Recommended Values

Default:

- max-width: 1200px to 1280px

Narrow:

- max-width: 720px to 860px

Wide:

- max-width: 1440px

## Responsive Behavior

- desktop padding: 32px to 48px
- mobile padding: 20px to 24px

---

# 3.3 SectionWrapper

## Purpose

Provides consistent vertical spacing and background treatment per section.

## Used On

- All homepage and page sections

## Suggested Props

```ts
interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: "dark" | "light" | "white" | "gradient";
  spacing?: "compact" | "default" | "large";
  id?: string;
}
```

## Visual Variants

Dark:

- deep navy background
- white text

Light:

- #F2F2F2 background
- navy/dark text

White:

- near-white background
- navy/dark text

Gradient:

- deep navy with subtle radial gradient
- optional AI-inspired background detail

## Spacing

Compact:

- desktop: 64px to 80px
- mobile: 48px to 56px

Default:

- desktop: 96px
- mobile: 56px to 72px

Large:

- desktop: 128px
- mobile: 72px to 88px

---

# 4. Navigation Components

---

# 4.1 Navbar

## Purpose

Provides primary site navigation and persistent access to the main conversion action.

## Used On

- All pages

## Content

Navigation items:

- Advisory
- Case Studies
- Insights
- Speaking
- About
- Contact

Primary CTA:

- Book Advisory Call

## Suggested Props / Data

```ts
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface NavbarProps {
  items: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}
```

## Visual States

Initial state:

- transparent or dark navy
- height: 72px
- white text on hero

Scrolled state:

- glass blur or solid navy
- height: 64px
- subtle bottom border

Mobile state:

- logo left
- hamburger right
- full-screen or slide-down menu
- CTA shown clearly inside menu

## Interaction Behavior

- sticky top navigation
- smooth background transition after scroll
- dropdown optional for Advisory
- keyboard accessible menu

## Accessibility Requirements

- semantic nav element
- visible focus states
- aria-expanded for mobile menu
- escape key closes mobile menu if implemented

---

# 4.2 MobileMenu

## Purpose

Provides mobile navigation experience.

## Used On

- Mobile and tablet breakpoints if needed

## Content

- all main nav items
- primary CTA
- optional social link

## Visual Direction

- full-screen dark navy or slide-down panel
- large readable links
- strong CTA separation

## Interaction Behavior

- opens from hamburger
- closes on link click
- locks body scroll while open
- supports keyboard navigation

---

# 5. Shared Content Components

---

# 5.1 SectionHeader

## Purpose

Standardizes section titles and supporting text.

## Used On

- Advisory grid
- Case studies
- Insights
- About
- Speaking
- Assessment block

## Suggested Props

```ts
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  action?: {
    label: string;
    href: string;
  };
}
```

## Visual Rules

- eyebrow is uppercase, small, letter-spaced
- title uses Manrope
- description uses Inter
- action link should be visually secondary unless section requires strong CTA

## Responsive Behavior

- desktop: can use split layout with title left and description/action right
- mobile: stacked layout

---

# 5.2 Eyebrow

## Purpose

Provides consistent small section labels.

## Used On

- hero
- section headers
- cards
- content pages

## Visual Style

- uppercase
- letter spacing: 0.08em to 0.12em
- size: 11px to 13px
- weight: 600
- accent color or muted gray depending on background

---

# 5.3 CTAButton

## Purpose

Provides consistent button styling across the website.

## Suggested Props

```ts
interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: "arrow" | "calendar" | "download" | "none";
  fullWidthMobile?: boolean;
}
```

## Variants

Primary:

- accent background
- white text
- strong hover state

Secondary:

- transparent background
- 1px border
- text adapts to surface

Ghost:

- text only
- arrow movement on hover

## Visual States

- default
- hover
- active
- focus-visible
- disabled
- loading if used in forms

## Accessibility Requirements

- strong focus-visible outline
- sufficient color contrast
- descriptive label

---

# 5.4 TextLink

## Purpose

Provides consistent inline and card-level links.

## Visual Behavior

- subtle arrow icon
- arrow shifts slightly on hover
- underline optional
- accent color on hover

## Used On

- cards
- article previews
- footer links
- framework links

---

# 5.5 LogoStrip

## Purpose

Displays trusted organizations in a clean and premium way.

## Suggested Props

```ts
interface LogoItem {
  name: string;
  src: string;
  alt: string;
  href?: string;
}

interface LogoStripProps {
  label?: string;
  logos: LogoItem[];
  theme?: "dark" | "light";
}
```

## Visual Rules

- use monochrome logos when possible
- equalize visual height
- avoid colorful clutter
- keep spacing generous

## Responsive Behavior

- desktop: horizontal row
- mobile: 2-column grid or horizontal scroll

---

# 6. Homepage Section Components

---

# 6.1 HeroSection

## Purpose

Establish immediate authority, positioning and conversion intent.

## Used On

- Homepage

## Suggested Props

```ts
interface HeroSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  quote?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  portrait: {
    src: string;
    alt: string;
  };
}
```

## Content Requirements

Must include:

- clear AI Strategy / Enterprise Transformation positioning
- short subheadline
- two CTAs maximum
- executive portrait
- optional strategic quote chip

## Visual States

- desktop two-column layout
- mobile single-column layout
- loading image state should not shift layout

## Motion

- headline fade-up
- subtitle fade-up
- CTAs stagger
- portrait subtle parallax
- background subtle glow

## Development Notes

Use optimized image formats.

Avoid heavy background animation.

Hero must remain readable before all animations complete.

---

# 6.2 TrustBar

## Purpose

Establish enterprise credibility immediately after the hero.

## Suggested Props

```ts
interface TrustBarProps {
  label: string;
  logos: LogoItem[];
}
```

## Content Requirements

Recommended label:

Trusted by organizations transforming at enterprise scale.

Recommended logos:

- Santander
- BBVA
- CaixaBank
- Kruger
- Mercantil Andina
- Telefónica

## Visual States

- dark band or hero continuation
- logo hover opacity

---

# 6.3 AdvisoryGrid

## Purpose

Display the four primary advisory pillars.

## Suggested Props

```ts
interface AdvisoryPillar {
  title: string;
  description: string;
  outcome?: string;
  icon: string;
  href: string;
}

interface AdvisoryGridProps {
  eyebrow: string;
  title: string;
  description: string;
  pillars: AdvisoryPillar[];
}
```

## Required Pillars

- AI Strategy
- Digital Transformation
- Enterprise Agility & Operating Models
- Executive Advisory

## Component Dependencies

- SectionHeader
- AdvisoryPillarCard

---

# 6.4 AdvisoryPillarCard

## Purpose

Communicates one advisory pillar.

## Suggested Props

```ts
interface AdvisoryPillarCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  outcome?: string;
}
```

## Visual Rules

- white or dark card depending on section theme
- minimal line icon
- short copy
- arrow link

## Interaction States

- hover lift
- border accent
- arrow shift
- icon accent transition

## Responsive Behavior

- full-width card on mobile
- 2x2 or 4-column on desktop

---

# 6.5 KPIBand

## Purpose

Communicate experience, scale and seniority.

## Suggested Props

```ts
interface KPIItem {
  value: string;
  label: string;
  description?: string;
}

interface KPIBandProps {
  items: KPIItem[];
}
```

## Recommended Items

- 20+ years driving transformation
- 50+ enterprise engagements
- 10+ industries impacted
- AI-First strategy aligned to outcomes

## Visual Rules

- dark background
- large values
- short labels
- accent color reserved for value

## Motion

- count-up only for numeric values
- do not animate non-numeric labels aggressively

---

# 6.6 FrameworkTeaser

## Purpose

Introduce the AI Strategy Framework and show proprietary thinking.

## Suggested Props

```ts
interface FrameworkPhase {
  title: string;
  description: string;
  outcome?: string;
}

interface FrameworkTeaserProps {
  eyebrow: string;
  title: string;
  description: string;
  phases: FrameworkPhase[];
  cta: {
    label: string;
    href: string;
  };
}
```

## Required Phases

- Discover
- Design
- Deploy
- Evolve

## Visual Options

- circular 4-phase loop
- horizontal stepper
- connected node system

## Interaction

- desktop: hover/click phase reveals detail
- mobile: stacked phase cards or accordion

## Development Notes

Use SVG for diagram when possible.

Avoid canvas unless strictly necessary.

---

# 6.7 CaseStudiesPreview

## Purpose

Preview proof and route users to detailed case studies.

## Suggested Props

```ts
interface CaseStudyPreview {
  title: string;
  slug: string;
  industry: string;
  pillar: string;
  heroMetric?: string;
  summary: string;
  image?: string;
}

interface CaseStudiesPreviewProps {
  eyebrow: string;
  title: string;
  description?: string;
  cases: CaseStudyPreview[];
  cta: {
    label: string;
    href: string;
  };
}
```

## Component Dependencies

- SectionHeader
- CaseStudyCard

## Required Behavior

- show 3 featured cases on homepage
- cards link to detail pages
- preserve possibility of filtering on the Case Studies page later

---

# 6.8 CaseStudyCard

## Purpose

Display one case study preview.

## Suggested Props

```ts
interface CaseStudyCardProps {
  title: string;
  industry: string;
  pillar: string;
  heroMetric?: string;
  summary: string;
  href: string;
  image?: string;
}
```

## Visual Rules

- outcome-led headline
- strong hero metric
- industry and pillar chips
- premium dark or editorial card treatment

## Interaction States

- hover lift
- reveal secondary outcome if available
- arrow movement

---

# 6.9 InsightsPreview

## Purpose

Preview editorial authority and route users to Insights.

## Suggested Props

```ts
interface InsightPreview {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readingTime?: string;
  date?: string;
  image?: string;
}

interface InsightsPreviewProps {
  eyebrow: string;
  title: string;
  description?: string;
  insights: InsightPreview[];
  cta: {
    label: string;
    href: string;
  };
}
```

## Component Dependencies

- SectionHeader
- InsightCard

## Required Behavior

- show 3 latest or featured articles
- preserve future markdown automation compatibility

---

# 6.10 InsightCard

## Purpose

Display one article preview.

## Suggested Props

```ts
interface InsightCardProps {
  title: string;
  category: string;
  excerpt: string;
  href: string;
  readingTime?: string;
  date?: string;
  image?: string;
}
```

## Visual Rules

- editorial card style
- 16:9 image area if image exists
- category chip
- strong title
- short excerpt
- reading time metadata

## Interaction States

- hover title or card
- image subtle scale optional
- arrow movement

---

# 6.11 AboutSnapshot

## Purpose

Humanize the brand and reinforce seniority.

## Suggested Props

```ts
interface CredentialChip {
  label: string;
}

interface AboutSnapshotProps {
  eyebrow: string;
  title: string;
  body: string;
  credentials: CredentialChip[];
  image: {
    src: string;
    alt: string;
  };
  cta: {
    label: string;
    href: string;
  };
  secondaryLink?: {
    label: string;
    href: string;
  };
}
```

## Visual Rules

- editorial two-column layout
- short bio only
- credential chips
- avoid CV density

---

# 6.12 CredentialChips

## Purpose

Display compact credibility signals.

## Suggested Props

```ts
interface CredentialChipsProps {
  items: CredentialChip[];
  theme?: "dark" | "light";
}
```

## Visual Rules

- pill shape
- subtle border
- compact text
- optional accent dot

---

# 6.13 SpeakingStrip

## Purpose

Promote keynote and speaking opportunities without distracting from advisory.

## Suggested Props

```ts
interface TalkTheme {
  title: string;
  bestFor?: string;
}

interface SpeakingStripProps {
  eyebrow: string;
  title: string;
  description: string;
  talks: TalkTheme[];
  cta: {
    label: string;
    href: string;
  };
}
```

## Visual Rules

- compact section
- talk titles as mini cards or clean list
- CTA to Speaking page

---

# 6.14 AssessmentCTA

## Purpose

Present the AI Maturity Assessment as a mid-funnel premium diagnostic.

## Suggested Props

```ts
interface AssessmentDimension {
  title: string;
  description: string;
  icon?: string;
}

interface AssessmentCTAProps {
  eyebrow: string;
  title: string;
  description: string;
  dimensions: AssessmentDimension[];
  cta: {
    label: string;
    href: string;
  };
}
```

## Recommended Dimensions

- Strategy readiness
- Operating model readiness
- Adoption and execution readiness

## Visual Rules

- dark gradient block
- premium diagnostic feeling
- strong CTA
- no quiz-like visuals

---

# 6.15 NewsletterSignup

## Purpose

Capture low-intent visitors into Executive Briefing.

## Suggested Props

```ts
interface NewsletterSignupProps {
  title: string;
  description: string;
  placeholder?: string;
  buttonLabel: string;
}
```

## Visual Rules

- minimal form
- one email field
- one button
- calm editorial style

## States

- default
- focus
- loading
- success
- error

## Development Notes

For static site launch, form can connect later to:

- Make.com webhook
- Formspree
- Netlify Forms if hosting changes
- custom serverless function if needed

For GitHub Pages, a third-party form endpoint or Make webhook is likely needed.

---

# 6.16 FinalCTABand

## Purpose

Close the homepage with one decisive conversion action.

## Suggested Props

```ts
interface FinalCTABandProps {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}
```

## Visual Rules

- deep navy background
- strong headline
- one CTA only
- subtle abstract background line or gradient

---

# 6.17 ContactForm

## Purpose

Provides the main contact mechanism for qualified advisory, workshop, speaking and partnership inquiries.

Because the website will be deployed as a static site on GitHub Pages, the form must submit to an external endpoint, preferably a Make.com webhook.

## Used On

- Contact page
- Optional final CTA modal or embedded contact section

## Suggested Props

```ts
interface ContactFormOption {
  label: string;
  value: string;
}

interface ContactFormProps {
  endpoint: string;
  inquiryTypes: ContactFormOption[];
  roleOptions: ContactFormOption[];
  successMessage: string;
  errorMessage: string;
}
```

## Recommended Fields

Required fields:

- Name
- Email
- Company / Organization
- Role
- Type of inquiry
- Message

Optional fields:

- Website / LinkedIn / organization URL
- Phone number
- Preferred contact method

Hidden fields:

- page source
- timestamp
- honeypot field for spam prevention

## Inquiry Type Options

- Advisory
- AI Strategy
- Digital Transformation
- Workshop
- Speaking
- Press / Media
- Partnership
- Other

## Behavior

On submit:

1. Validate required fields client-side.
2. Send data to Make.com webhook.
3. Show loading state.
4. Show success or error state.
5. Optionally trigger confirmation email through Make.com.

## Visual Rules

The form must feel:

- executive
- clean
- trustworthy
- premium
- simple

Use:

- large fields
- clear labels
- subtle borders
- accent focus states
- generous spacing
- concise helper text

Avoid:

- too many fields
- generic form templates
- low-trust visual design
- aggressive captcha unless necessary

## Accessibility Requirements

- Every input must have a visible label.
- Error messages must be associated with fields.
- Submit button must communicate loading state.
- Success and error states must be announced clearly.
- Keyboard navigation must work across all fields.

## Development Notes

Preferred integration:

- HTML/JS form submission to Make.com webhook.

Fallback integrations:

- Formspree
- Basin
- Getform
- serverless endpoint if hosting changes later

Do not rely on GitHub Pages to process forms server-side.

---

# 6.18 EmailButton

## Purpose

Provides a direct email action for visitors who prefer to contact Facundo using their email client.

## Used On

- Contact page
- Footer
- Optional final CTA section

## Suggested Props

```ts
interface EmailButtonProps {
  email: string;
  label?: string;
  subject?: string;
  body?: string;
  variant?: "primary" | "secondary" | "ghost";
}
```

## Recommended Behavior

Use a `mailto:` link.

Example:

```html
<a href="mailto:hello@example.com?subject=Advisory%20Inquiry">Send Email</a>
```

## Recommended Labels

- Send an Email
- Email Facundo
- Contact by Email

## Visual Rules

EmailButton should visually match CTAButton styles.

Recommended variants:

- secondary button on Contact page
- ghost link in Footer
- optional text link in final CTA

## UX Notes

This button is useful as a low-friction fallback, but it should not replace the structured ContactForm because the form enables lead qualification and automation.

---

# 6.19 FormStatusMessage

## Purpose

Displays success, loading and error states for forms.

## Used On

- ContactForm
- NewsletterSignup
- future AI Maturity Assessment

## Suggested Props

```ts
interface FormStatusMessageProps {
  status: "idle" | "loading" | "success" | "error";
  successMessage?: string;
  errorMessage?: string;
}
```

## Visual Rules

Success:

- calm confirmation
- subtle check icon
- short message

Error:

- clear explanation
- no blame language
- allow retry

Loading:

- subtle spinner or text change
- no layout shift

---

# 6.20 Footer

## Purpose

Provide navigation closure, trust reinforcement and secondary capture.

## Suggested Props

```ts
interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

interface FooterProps {
  tagline: string;
  linkGroups: FooterLinkGroup[];
  socialLinks: {
    label: string;
    href: string;
    icon?: string;
  }[];
}
```

## Footer Columns

1. Advisory
2. Resources
3. About
4. Connect

## Required Elements

- logo / wordmark
- tagline: Transforming ambition into results.
- newsletter capture or link
- LinkedIn link
- legal links
- copyright

---

# 7. Future Page Components

These components are not required only for the homepage, but should be considered early.

---

# 7.1 ArticleLayout

## Purpose

Renders Insights articles from Markdown.

## Required Elements

- pillar/category eyebrow
- H1
- meta strip
- strategic TL;DR
- article body
- author card
- related articles
- newsletter signup
- soft advisory CTA

## Suggested Frontmatter

```yaml
title: "Article title"
slug: "article-slug"
date: "YYYY-MM-DD"
category: "AI Strategy"
tags:
  - AI
  - Transformation
metaDescription: "SEO description"
featuredImage: "/assets/images/example.webp"
author: "Facundo Gangemi"
readingTime: "7 min"
```

---

# 7.2 CaseStudyLayout

## Purpose

Renders case study detail pages.

## Required Elements

- industry
- pillar
- hero metric
- context
- approach
- framework applied
- results
- executive quote
- related cases
- CTA

---

# 7.3 PageHero

## Purpose

Reusable hero for internal pages.

## Used On

- About
- Advisory
- Case Studies
- Insights
- Speaking
- Contact

## Suggested Props

```ts
interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "dark" | "light";
  cta?: {
    label: string;
    href: string;
  };
}
```

---

# 8. Data Structure Recommendations

## 8.1 Advisory Pillars Data

Recommended file:

/data/advisoryPillars.ts or /data/advisory-pillers.json

Example structure:

```ts
// Phase 7 architecture: all practices link to anchor sections on /advisory/
// Sub-pages /advisory/ai-strategy/, /advisory/digital-transformation/,
// /advisory/ai-adoption/, /advisory/enterprise-agility/ were deleted in Phase 8.
export const advisoryPillars = [
  {
    title: "AI Strategy",
    description: "Define AI strategies aligned to business goals and build scalable roadmaps for adoption.",
    icon: "brain-circuit",
    href: "/advisory/#ai-strategy"
  },
  {
    title: "Digital Transformation",
    description: "Design and lead transformation programs that modernize capabilities and drive growth.",
    icon: "network",
    href: "/advisory/#digital-transformation"
  },
  {
    title: "Operational Excellence",
    description: "Build execution discipline through OKRs, QBRs, operating routines and delivery governance.",
    icon: "layers",
    href: "/advisory/#operational-excellence"
  },
  {
    title: "AI Adoption",
    description: "Guide your organization from AI awareness through use-case prioritization to embedded AI practices.",
    icon: "briefcase-business",
    href: "/advisory/#ai-adoption"
  }
];
```

---

## 8.2 KPI Data

```ts
export const homepageKpis = [
  {
    value: "20+",
    label: "Years driving transformation"
  },
  {
    value: "50+",
    label: "Enterprise engagements"
  },
  {
    value: "10+",
    label: "Industries impacted"
  },
  {
    value: "AI-First",
    label: "Strategy aligned to outcomes"
  }
];
```

---

## 8.3 Framework Data

```ts
export const aiStrategyFramework = [
  {
    title: "Discover",
    description: "Identify opportunities, constraints and strategic priorities."
  },
  {
    title: "Design",
    description: "Define the AI strategy, roadmap and operating model."
  },
  {
    title: "Deploy",
    description: "Activate capabilities, governance and adoption mechanisms."
  },
  {
    title: "Evolve",
    description: "Measure, learn and scale AI-enabled transformation."
  }
];
```

---

# 9. Visual State Standards

## 9.1 Hover States

Cards:

- lift 4px
- subtle shadow
- border changes to accent color

Buttons:

- slight brightness shift
- arrow moves right
- no aggressive scaling

Links:

- underline or arrow motion
- accent color

---

## 9.2 Focus States

All interactive components must have visible focus states.

Recommended:

- 2px outline
- accent color
- offset 2px

Do not remove focus outlines without replacing them.

---

## 9.3 Loading States

For forms and future dynamic components:

- button text can change to loading
- spinner should be subtle
- no layout shift

---

## 9.4 Empty States

For future Insights or Case Studies filters:

Empty state should include:

- short explanation
- reset filter option
- link to main Insights or Case Studies page

---

# 10. Responsive Component Rules

## 10.1 Cards

Desktop:

- 3 or 4 columns depending on context

Tablet:

- 2 columns

Mobile:

- 1 column

---

## 10.2 CTAs

Desktop:

- inline button groups

Mobile:

- stacked buttons
- primary CTA can be full width

---

## 10.3 Framework Diagrams

Desktop:

- circular or horizontal diagram allowed

Mobile:

- convert to vertical step list or accordion

---

## 10.4 Header

Desktop:

- full nav visible

Tablet/Mobile:

- hamburger menu
- CTA inside menu

---

# 11. Accessibility Requirements

Every component must support:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient color contrast
- aria labels where needed
- reduced-motion preferences
- descriptive alt text

Specific requirements:

- Navbar must be keyboard accessible.
- Mobile menu must communicate open/closed state.
- Forms must have labels, not only placeholders.
- Cards that are clickable must have clear link semantics.
- Icons must be decorative or labelled correctly.

---

# 12. Performance Requirements

The component system must support premium performance.

Requirements:

- optimized images
- lazy loading for below-the-fold images
- minimal JavaScript
- no heavy animation by default
- SVGs for icons and diagrams
- avoid loading multiple icon libraries
- avoid heavy carousel libraries
- avoid runtime CMS calls

Performance principle:

> Speed is part of the brand experience.

---

# 13. SEO Component Requirements

Components must support SEO-friendly output.

Requirements:

- one H1 per page
- logical heading hierarchy
- semantic article elements for Insights
- semantic section elements
- descriptive link text
- alt text for meaningful images
- metadata per page
- structured data where appropriate

Future structured data:

- Person schema
- ProfessionalService schema
- Article schema
- BreadcrumbList schema
- FAQPage schema on service pages

---

# 14. Make.com Automation Compatibility

The component system must support two future automation streams:

1. Automated content publishing.
2. Automated contact and lead management.

---

## 14.1 Content Publishing Automation

Key decision:

Make.com should generate structured Markdown with frontmatter, not raw HTML pages.

Preferred flow:

Make.com → creates Markdown article → commits or saves file into /content/insights → static build renders article and listing page.

This ensures:

- consistent design
- reusable templates
- clean SEO
- easy publishing
- lower risk of broken layouts

Components affected:

- InsightsPreview
- InsightCard
- ArticleLayout
- NewsletterSignup
- RelatedInsights

---

## 14.2 Contact Form Automation

The website must include a contact form that submits to an external automation endpoint.

Preferred flow:

ContactForm → Make.com webhook → email notification to Facundo → lead storage → optional auto-response to visitor.

Recommended Make.com scenario:

1. Custom webhook receives form submission.
2. Validate and normalize form fields.
3. Send notification email to Facundo.
4. Store lead in Google Sheets, Airtable, Supabase or CRM.
5. Send confirmation email to the visitor.
6. Optionally tag lead by inquiry type.

Recommended captured fields:

- name
- email
- company
- role
- inquiryType
- message
- sourcePage
- submittedAt
- consent

Security and spam prevention:

- honeypot field
- client-side validation
- server-side validation inside Make scenario where possible
- optional reCAPTCHA or Turnstile if spam increases

Components affected:

- ContactForm
- EmailButton
- FormStatusMessage
- NewsletterSignup
- FinalCTABand
- Footer

---

# 15. Implementation Priority

Recommended implementation order:

1. Global layout components
   - PageShell
   - Container
   - SectionWrapper
   - Navbar
   - Footer

2. Shared UI components
   - SectionHeader
   - CTAButton
   - TextLink
   - LogoStrip

3. Homepage-specific sections
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

4. Contact and lead capture components
   - ContactForm
   - EmailButton
   - FormStatusMessage

5. Content system components
   - InsightCard
   - ArticleLayout
   - CaseStudyCard
   - CaseStudyLayout

6. Enhancements
   - motion
   - filtering
   - newsletter integration
   - contact form integration
   - Make.com publishing automation



---

# 16. Development Handoff Notes

When moving to Claude Code / VS Code, provide these documents:

- MASTER_CONTEXT.md
- BRAND_GUIDELINES.md
- CONTENT_BRIEFS.md
- HOMEPAGE_UX_ARCHITECTURE.md
- WIREFRAME_SPECIFICATION.md
- HOMEPAGE_UI_DIRECTION.md
- COMPONENT_SYSTEM.md

Then request development in phases:

1. Create project structure.
2. Create global layout components.
3. Create homepage components without animations.
4. Add responsive behavior.
5. Add motion and polish.
6. Add content system.
7. Prepare GitHub Pages deployment.

Do not ask Claude Code to build everything in one prompt.

---

# 17. Component Approval Checklist

Before frontend development starts, validate:

- Are all homepage sections mapped to components?
- Are reusable components separated from content?
- Can cards be reused across pages?
- Can Insights be powered by Markdown?
- Can Case Studies be powered by Markdown or JSON?
- Is the component system static-site compatible?
- Are responsive behaviors defined?
- Are visual states defined?
- Are accessibility requirements explicit?
- Are performance constraints clear?
- Is Make.com automation compatibility preserved?
- Is ContactForm defined for static-site integration?
- Is EmailButton available as a fallback contact path?
- Is the Make.com webhook flow considered for lead capture?

---

# 18. Next Deliverable

The next document should be:

DEVELOPMENT_PROMPT.md

It should provide Claude Code with clear implementation instructions, including:

- project setup
- technology choice
- folder structure
- component build order
- styling rules
- responsive requirements
- accessibility requirements
- GitHub Pages deployment constraints
- what not to do

After DEVELOPMENT_PROMPT.md is approved, the project can move from documentation into implementation.

