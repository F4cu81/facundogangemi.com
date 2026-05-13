# WIREFRAME SPECIFICATIONS — Homepage
**facundogangemi.com · Phase 2 · Executive AI Premium**
Version 1.0 — UX Architecture (pre-visual, pre-code)

---

## Document Purpose

This document defines the structural wireframe specification for the homepage.
It governs layout logic, section intent, content slots, interaction model, and CTA placement.
No final visual design decisions are made here. Visual system follows in Phase 3.

---

## Homepage Structural Overview

```
┌─────────────────────────────────────────────────┐
│  [W01] UTILITY STRIP (optional, dismissible)    │
├─────────────────────────────────────────────────┤
│  [W02] STICKY NAVIGATION                        │
├─────────────────────────────────────────────────┤
│  [W03] HERO — Strategic Statement               │
├─────────────────────────────────────────────────┤
│  [W04] TRUST SIGNAL — Enterprise Logo Bar       │
├─────────────────────────────────────────────────┤
│  [W05] ADVISORY PILLARS — Four-Pillar Grid      │
├─────────────────────────────────────────────────┤
│  [W06] AUTHORITY BAND — KPI Block               │
├─────────────────────────────────────────────────┤
│  [W07] SIGNATURE FRAMEWORK — Teaser             │
├─────────────────────────────────────────────────┤
│  [W08] CASE STUDIES — Proof Grid                │
├─────────────────────────────────────────────────┤
│  [W09] INSIGHTS — Latest Thinking               │
├─────────────────────────────────────────────────┤
│  [W10] ABOUT SNAPSHOT — Personal Authority      │
├─────────────────────────────────────────────────┤
│  [W11] SPEAKING — Stage Presence                │
├─────────────────────────────────────────────────┤
│  [W12] AI ASSESSMENT — Lead Magnet              │
├─────────────────────────────────────────────────┤
│  [W13] NEWSLETTER — Executive Briefing          │
├─────────────────────────────────────────────────┤
│  [W14] CLOSING CTA BAND                         │
├─────────────────────────────────────────────────┤
│  [W15] FOOTER                                   │
└─────────────────────────────────────────────────┘
```

---

## Block-by-Block Specification

---

### W01 — UTILITY STRIP
**Purpose:** Urgency signal + micro-conversion. Creates immediate perception of activity and relevance.

```
┌──────────────────────────────────────────────────────────────────┐
│  ● Now advising banking & enterprise leaders on AI Transformation  │
│    → Book a discovery call                          [✕ dismiss]  │
└──────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Height: 40px
- Background: `#00274C` (navy)
- Text: white, Inter 13px
- Accent dot: orange `#F57C00`
- CTA link: underlined, orange on hover
- Dismissible: yes, via [✕] icon, cookie-persisted for 7 days
- Visibility: show on homepage and advisory pages only
- Mobile: hide on < 768px (space constraint)

**Content slot:**
- Copy: rotating or static message tied to current engagement signal
- CTA: routes to `/contact#discovery`

---

### W02 — STICKY NAVIGATION
**Purpose:** Persistent wayfinding + primary conversion anchor.

**Desktop layout (1024px+):**
```
┌──────────────────────────────────────────────────────────────────┐
│  [F·G logo]    Advisory ▾    Frameworks    Case Studies    About  │
│                                             Insights       ──────│
│                                              [Book Advisory Call]│
└──────────────────────────────────────────────────────────────────┘
```

**Interaction states:**
- Default: transparent background, white text (on dark hero)
- After 80px scroll: frosted glass blur + light navy `#001D38` bg, 1px border-bottom
- Active page: orange underline indicator, 2px, `#F57C00`
- CTA button: solid orange, white text, hover = lift + darken

**Advisory mega-menu (triggered on hover/click):**
```
┌──────────────────────────────────────────────────────────────────┐
│  ADVISORY SERVICES                                               │
│  ─────────────────────────────────────────────────────────────  │
│  AI Strategy         Digital Trans.      AI Adoption    FEATURED │
│  Advisory            Consulting          Programs                │
│                                                        ┌───────┐│
│  Intelligent         Enterprise          Executive      │Exec.  ││
│  Operations          Agility             Enablement     │AI     ││
│                                                        │Program││
│  Operating Model     Product Trans.      Workshops      └───────┘│
│  Design              Advisory            & Keynotes              │
└──────────────────────────────────────────────────────────────────┘
```
- Panel: dark navy `#001D38`, subtle box shadow
- Hover state per item: left orange bar indicator + bg lighten
- Featured card: distinct styling, links to `/programs/executive-ai-program`

**Mobile nav (< 768px):**
```
┌──────────────────────────┐
│  [F·G]           [≡ Menu]│
└──────────────────────────┘
↓ (on hamburger tap)
┌──────────────────────────┐
│                    [✕]   │
│  Advisory ›              │
│  Frameworks              │
│  Case Studies            │
│  Insights                │
│  About                   │
│  ────────────────────    │
│  [Book Advisory Call]    │  ← sticky bottom CTA
└──────────────────────────┘
```
- Slide from right, full-height, dark overlay behind
- Sub-menu: expand in-place, not separate page

---

### W03 — HERO — Strategic Statement
**Purpose:** Authority declaration. 8-second perception window. CEO-level impact.

**Layout: 2-column, 60/40 split (desktop)**
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────┐  ┌──────────────────────────────┐ │
│  │ EYEBROW                  │  │                              │ │
│  │ AI Strategy · Digital    │  │   [EXECUTIVE PORTRAIT]       │ │
│  │ Transformation           │  │                              │ │
│  │                          │  │   Navy gradient bg           │ │
│  │ H1: Helping              │  │   Subtle AI particle layer   │ │
│  │ organizations            │  │   (ambient, pausable)        │ │
│  │ transform with AI        │  │                              │ │
│  │ and operating            │  │   ┌────────────────────────┐ │ │
│  │ models that              │  │   │ " The future belongs   │ │ │
│  │ deliver results.         │  │   │   to organizations     │ │ │
│  │                          │  │   │   that combine intel-  │ │ │
│  │ SUBHEAD:                 │  │   │   ligence, adaptabi-   │ │ │
│  │ Executive advisory for   │  │   │   lity and execution." │ │ │
│  │ AI strategy, digital     │  │   └────────────────────────┘ │ │
│  │ transformation and       │  │                              │ │
│  │ intelligent operations.  │  └──────────────────────────────┘ │
│  │                          │                                   │
│  │ [Book Advisory Call →]   │                                   │
│  │ [Explore Services]       │                                   │
│  └──────────────────────────┘                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Content slots:**
- **Eyebrow:** "AI Strategy · Digital Transformation · Executive Advisory"
  - Style: Inter 12px, uppercase, letter-spacing 2px, orange `#F57C00`
- **H1:** "Helping organizations transform with AI and operating models that deliver results."
  - Style: Manrope 64px (desktop) / 42px (mobile), weight 700, white, max 12 words
- **Subhead:** 18px Inter, weight 400, white 80% opacity, max 2 lines
- **CTA 1 (Primary):** "Book an Advisory Call" — solid orange, 52px height, arrow icon
- **CTA 2 (Secondary):** "Explore Services" — navy outline, white text
- **Pull-quote chip:** floating card, white bg on dark, italic, attributed to Facundo
- **Portrait:** executive photo, professional, warm lighting against dark bg

**Background:**
- Full-section: deep navy `#00274C`
- Subtle geometric/particle layer: low-opacity, CSS or lightweight canvas, <60kb
- No video, no heavy animation

**Mobile (< 768px):**
- Single column, portrait below headline
- Pull-quote chip: hidden or collapsed
- CTA stack: vertical, full-width

**Minimum height:** 90vh (desktop), 80vh (mobile)
**Section role in narrative:** HOOK

---

### W04 — TRUST SIGNAL — Enterprise Logo Bar
**Purpose:** Instant credibility via named clients. Signals enterprise scale, not freelance.

```
┌─────────────────────────────────────────────────────────────────┐
│  TRUSTED BY LEADING ORGANIZATIONS                               │
│  ─────────────────────────────────────────────────────────────  │
│  [SANTANDER]  [BBVA]  [CAIXABANK]  [KRUGER]  [TELEFÓNICA]  ... │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Logos: monochrome (white or mid-gray, not colorful)
- Size: 80–120px width, auto height, consistent optical weight
- Spacing: 48–64px gap between logos
- Animation: static on desktop; auto-scroll on mobile (no pause required)
- Caption: "Trusted by leading organizations." — Inter 13px, uppercase, letter-spacing, gray
- Background: white `#FFFFFF` or very light gray `#F8F8F8`
- Height: 100px content area, 48px padding top/bottom

**Mobile:** horizontal scroll, 3 logos visible, fade edge mask
**Section role in narrative:** TRUST

---

### W05 — ADVISORY PILLARS — Four-Pillar Grid
**Purpose:** Define the offer. Four strategic services at a glance.

```
┌─────────────────────────────────────────────────────────────────┐
│  STRATEGIC ADVISORY             (eyebrow)                       │
│  Strategic advisory for intelligent transformation.   (H2)      │
│  For CEOs, CIOs and Heads of Transformation.         (sub)      │
│  ─────────────────────────────────────────────────────────────  │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────────┐  │
│  │  [Icon]        │  │  [Icon]        │  │  [Icon]          │  │
│  │  AI Strategy   │  │  Digital       │  │  Enterprise      │  │
│  │                │  │  Transformation│  │  Agility         │  │
│  │  From AI       │  │  Strategy that │  │  Operating       │  │
│  │  experiments   │  │  scales beyond │  │  models that     │  │
│  │  to enterprise │  │  the pilot.    │  │  drive results.  │  │
│  │  adoption.     │  │                │  │                  │  │
│  │  Learn more →  │  │  Learn more →  │  │  Learn more →    │  │
│  └────────────────┘  └────────────────┘  └──────────────────┘  │
│  ┌────────────────┐                                             │
│  │  [Icon]        │                                             │
│  │  Executive     │                                             │
│  │  Advisory      │                                             │
│  │                │                                             │
│  │  Peer-level    │                                             │
│  │  guidance for  │                                             │
│  │  transformation│                                             │
│  │  leaders.      │                                             │
│  │  Learn more →  │                                             │
│  └────────────────┘                                             │
└─────────────────────────────────────────────────────────────────┘
```

**Card specs:**
- Background: white with 1px border `#E5E7EB`, 12px radius
- Icon: outlined, 32px, navy color
- Title: Manrope SemiBold 20px, navy
- Description: Inter 15px, gray, 2–3 lines max
- CTA link: "Learn more →" — orange on hover, animated arrow
- Hover state: subtle lift (4px translateY), orange top border (3px)
- Grid: 4 columns desktop, 2 columns tablet, 1 column mobile

**Section role in narrative:** WHAT (offer definition)
**CTA:** each card links to respective advisory page

---

### W06 — AUTHORITY BAND — KPI Block
**Purpose:** Quantify credibility. Executive perception of scale and depth.

```
┌─────────────────────────────────────────────────────────────────┐
│                   [DARK NAVY BAND]                              │
│                                                                 │
│   20+              50+             10+             AI-First     │
│   Years of         Enterprise      Industries      Strategic    │
│   Experience       Engagements     Transformed     Alignment    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `#00274C` full-width
- Numbers: Manrope 56px, weight 800, orange `#F57C00`
- Labels: Inter 14px, white 70% opacity, uppercase
- Optional subtle background: low-opacity line-grid or dot pattern
- No icons — numbers carry the weight
- 4 columns desktop, 2×2 tablet, vertical stack mobile
- Padding: 72px top/bottom desktop, 48px mobile
- Counter animation: count-up on scroll-into-view (optional, reduced-motion fallback)

**Section role in narrative:** SCALE (credibility reinforcement)

---

### W07 — SIGNATURE FRAMEWORK — Teaser
**Purpose:** Demonstrate IP ownership. Position Facundo as a methodologist with proprietary thinking.

```
┌─────────────────────────────────────────────────────────────────┐
│  SIGNATURE FRAMEWORK            (eyebrow)                       │
│  The AI Strategy Framework.     (H2)                           │
│  Real business impact through intelligent adoption.  (sub)     │
│  ─────────────────────────────────────────────────────────────  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                  [4-STEP DIAGRAM]                        │  │
│  │                                                          │  │
│  │    ┌──────────┐       ┌──────────┐                      │  │
│  │    │ DISCOVER │──────▶│  DESIGN  │                      │  │
│  │    │          │       │          │                      │  │
│  │    └──────────┘       └──────────┘                      │  │
│  │          ▲                   │                           │  │
│  │          │                   ▼                           │  │
│  │    ┌──────────┐       ┌──────────┐                      │  │
│  │    │  EVOLVE  │◀──────│  DEPLOY  │                      │  │
│  │    │          │       │          │                      │  │
│  │    └──────────┘       └──────────┘                      │  │
│  │                                                          │  │
│  │  Each step: 1 outcome line beneath the label            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│           [Explore the Framework →]    (secondary CTA)          │
└─────────────────────────────────────────────────────────────────┘
```

**Diagram specs:**
- SVG-based, inline, no external dependency
- Steps: 4 boxes with connectors (circular flow, not linear)
- Each box: navy bg, white title, 12px sub-label in gray
- Active connector: orange arrow `#F57C00`
- Hover state on each box: glow outline, tooltip appears with 1-line description
- Background: light gray `#F8F9FA` section, provides contrast from white cards above

**Section role in narrative:** HOW (intellectual property, methodology depth)

---

### W08 — CASE STUDIES — Proof Grid
**Purpose:** Demonstrate real outcomes with named/anonymized enterprise clients.

```
┌─────────────────────────────────────────────────────────────────┐
│  CASE STUDIES                   (eyebrow)                       │
│  Ideas and results from real transformations.    (H2)           │
│  ─────────────────────────────────────────────────────────────  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────┐ │
│  │ [HERO IMAGE]     │  │ [HERO IMAGE]     │  │ [HERO IMAGE]  │ │
│  │                  │  │                  │  │               │ │
│  │ [BANKING]  tag   │  │ [INSURANCE] tag  │  │ [TELCO]  tag  │ │
│  │                  │  │                  │  │               │ │
│  │ Operating model  │  │ From traditional │  │ Executive     │ │
│  │ redesign for     │  │ delivery to      │  │ enablement    │ │
│  │ AI adoption      │  │ intelligent ops  │  │ for AI-driven │ │
│  │                  │  │                  │  │ strategy      │ │
│  │ ↑ 40% faster     │  │ ↑ 3x delivery    │  │ 12 exec teams │ │
│  │ delivery         │  │ velocity         │  │ AI-enabled    │ │
│  │                  │  │                  │  │               │ │
│  │ Read case →      │  │ Read case →      │  │ Read case →   │ │
│  └──────────────────┘  └──────────────────┘  └───────────────┘ │
│                                                                 │
│              [View all Case Studies →]   (tertiary CTA)         │
└─────────────────────────────────────────────────────────────────┘
```

**Card specs:**
- Image: 16:9 ratio, dark overlay gradient bottom-to-top, 1px border `#E5E7EB`
- Industry tag: pill chip, `#F0F4F8` bg, navy text, Inter 11px uppercase
- Headline: Manrope SemiBold 17px, navy, 2 lines max
- Key metric: orange text, Inter Bold 14px, 1 line
- CTA link: animated arrow, orange on hover
- Hover: image scale 1.03, card lift 4px
- Grid: 3 columns desktop, 2 columns tablet, 1 column mobile

**Section role in narrative:** PROOF (social proof, outcome evidence)

---

### W09 — INSIGHTS — Latest Thinking
**Purpose:** Editorial authority. SEO signal. Nurture path for non-ready buyers.

```
┌─────────────────────────────────────────────────────────────────┐
│  INSIGHTS                       (eyebrow)                       │
│  Strategic perspectives on AI and transformation.  (H2)        │
│  ─────────────────────────────────────────────────────────────  │
│  ┌────────────────────┐  ┌────────────────────┐  ┌───────────┐ │
│  │ [FEATURED IMAGE]   │  │ [FEATURED IMAGE]   │  │ [IMAGE]   │ │
│  │                    │  │                    │  │           │ │
│  │ AI Strategy   tag  │  │ Transformation tag │  │ Agility   │ │
│  │                    │  │                    │  │      tag  │ │
│  │ Why AI strategy    │  │ The 5 operating    │  │ Beyond    │ │
│  │ fails at the       │  │ model shifts that  │  │ Scrum:    │ │
│  │ execution layer    │  │ define enterprise  │  │ enterprise│ │
│  │                    │  │ AI readiness       │  │ agility   │ │
│  │ 6 min read ·       │  │ 8 min read ·       │  │ evolved   │ │
│  │ Apr 2026           │  │ Mar 2026           │  │           │ │
│  │                    │  │                    │  │ 4 min     │ │
│  │ Read →             │  │ Read →             │  │ Read →    │ │
│  └────────────────────┘  └──────────────────  ┘  └───────────┘ │
│                                                                 │
│                  [View all Insights →]  (tertiary CTA)          │
└─────────────────────────────────────────────────────────────────┘
```

**Card specs:**
- Image: 3:2 ratio, full-width within card
- Category tag: color-coded by pillar (see UX_PRINCIPLES.md for tag system)
- Title: Manrope SemiBold 16px, 2 lines max
- Meta: read time + date, Inter 12px, gray
- CTA: "Read →" text link, orange on hover

**Section role in narrative:** THINKING (thought leadership)

---

### W10 — ABOUT SNAPSHOT — Personal Authority
**Purpose:** Human connection. Bridge from advisor to person. Executive credibility chips.

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────┐   ┌──────────────────────────────────┐  │
│  │                   │   │  ABOUT FACUNDO       (eyebrow)   │  │
│  │  [PORTRAIT]       │   │                                  │  │
│  │  Professional,    │   │  H2: AI strategist and           │  │
│  │  warm, executive  │   │  enterprise transformation       │  │
│  │                   │   │  leader with 20+ years of        │  │
│  │                   │   │  experience.                     │  │
│  │                   │   │                                  │  │
│  │                   │   │  [MIT Digital Transformation]    │  │
│  │                   │   │  [Founder, Berater Digital]      │  │
│  │                   │   │  [Management 3.0 Facilitator]    │  │
│  │                   │   │  [Enterprise Advisor]            │  │
│  │                   │   │  (credential chips)              │  │
│  │                   │   │                                  │  │
│  │                   │   │  " AI is not a technology        │  │
│  │                   │   │    decision — it's an            │  │
│  │                   │   │    operating model decision."    │  │
│  │                   │   │                                  │  │
│  │                   │   │  [About Facundo →]               │  │
│  └───────────────────┘   └──────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**Credential chip specs:**
- Small pill: border 1px orange, orange text, Inter 12px
- 4 chips maximum visible (no overflow)
- Hover: fill orange, white text

**Pull-quote:**
- Italic, Manrope 18px, navy, left border 3px orange, 16px left padding

**Section role in narrative:** WHO (personal authority anchor)
**Layout:** 40/60 split (portrait/text), reverse on mobile

---

### W11 — SPEAKING — Stage Presence
**Purpose:** Speaking authority signal. Generates keynote inquiries.

```
┌─────────────────────────────────────────────────────────────────┐
│  SPEAKING & KEYNOTES            (eyebrow)                       │
│  Bringing AI strategy to the executive stage.    (H2)          │
│  ─────────────────────────────────────────────────────────────  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────┐ │
│  │ [EVENT PHOTO]    │  │ [EVENT PHOTO]    │  │ [PLACEHOLDER] │ │
│  │ Event Name       │  │ Event Name       │  │               │ │
│  │ City, Year       │  │ City, Year       │  │ [Topic Area]  │ │
│  │ Topic summary    │  │ Topic summary    │  │               │ │
│  └──────────────────┘  └──────────────────┘  └───────────────┘ │
│                                                                 │
│         [Invite as Speaker →]    (primary-secondary CTA)        │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Photos: landscape 16:9, dark overlay with event name overlay
- If no photos available: dark navy cards with topic + event name text
- CTA: routes to `/contact#speaking`, medium-intent action

**Section role in narrative:** AUTHORITY (amplification credibility)

---

### W12 — AI ASSESSMENT — Lead Magnet
**Purpose:** Mid-funnel lead capture. Qualifies intent. Generates MQL via interactive tool.

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  [AI ASSESSMENT CARD — Full-width, contrasting style]    │  │
│  │                                                          │  │
│  │  AI MATURITY ASSESSMENT          (eyebrow, orange)       │  │
│  │                                                          │  │
│  │  Where does your organization stand                      │  │
│  │  in AI transformation?            (H2)                   │  │
│  │                                                          │  │
│  │  Take the 5-minute diagnostic. Get a                     │  │
│  │  personalized AI readiness report.   (sub)               │  │
│  │                                                          │  │
│  │  ✓ 12 diagnostic questions                               │  │
│  │  ✓ Personalized PDF report                               │  │
│  │  ✓ Benchmark against industry peers                      │  │
│  │  ✓ Actionable recommendations                            │  │
│  │                                                          │  │
│  │  [Take the Assessment →]   (primary CTA, orange)         │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Card bg: deep navy `#00274C` (high contrast against light sections around it)
- Eyebrow + CTA: orange `#F57C00`
- Benefit list: checkmarks, Inter 15px white
- CTA: routes to `/ai-assessment` (interactive, gated by email)
- Minimum height: 360px
- Orange micro-interaction: hover glow on CTA, pulse animation on checkmarks (subtle)

**Section role in narrative:** DIAGNOSE (lead capture, intent qualification)

---

### W13 — NEWSLETTER — Executive Briefing
**Purpose:** Low-commitment nurture capture. Builds audience for future activation.

```
┌─────────────────────────────────────────────────────────────────┐
│  EXECUTIVE BRIEFING             (eyebrow)                       │
│                                                                 │
│  Strategic perspectives on AI and enterprise transformation.    │
│  Monthly. For executives and transformation leaders.   (H2)    │
│                                                                 │
│  ┌─────────────────────────────┐  ┌──────────────────────────┐ │
│  │  your@email.com             │  │  Subscribe →             │ │
│  └─────────────────────────────┘  └──────────────────────────┘ │
│                                                                 │
│  No spam. Unsubscribe anytime. Private. Executive-only cadence. │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Section bg: light gray `#F5F5F5` (distinct from white)
- Single email field, no extra fields (reduces friction)
- CTA: "Subscribe" — solid navy, white text
- Privacy line: Inter 12px, gray, centered
- Mobile: stack field + button vertically

**Section role in narrative:** STAY CLOSE (nurture, list building)

---

### W14 — CLOSING CTA BAND
**Purpose:** Final conversion opportunity before footer. Full-width, high authority.

```
┌─────────────────────────────────────────────────────────────────┐
│  [FULL-WIDTH NAVY BAND]                                         │
│                                                                 │
│         Let's build the future of your organization.           │
│         (H2 — Manrope 40px, white)                             │
│                                                                 │
│  Strategic advisory for organizations that want to lead        │
│  in the AI era — not follow.   (sub — Inter 18px, white 70%)   │
│                                                                 │
│     [Book an Advisory Call →]      [Send a strategic inquiry]  │
│     (primary CTA, orange)          (secondary CTA, outline)    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `#00274C` full-width
- Optional subtle texture: diagonal line pattern, 5% opacity
- CTA spacing: 24px gap between primary and secondary
- Primary CTA: solid orange, same spec as hero
- Secondary CTA: white outline, white text, hover = orange fill
- Height: 280px desktop, 360px mobile (more vertical space)
- Section role in narrative: CONVERT (final conversion)

---

### W15 — FOOTER
**Purpose:** Navigation fallback. Trust signals. Legal compliance.

```
┌─────────────────────────────────────────────────────────────────┐
│  [F·G Logo]        Advisory     Resources    About    Connect   │
│  Facundo Gangemi   AI Strategy  Insights     Bio      LinkedIn  │
│  AI Strategy &     Dig.Trans.   Frameworks   Speaking  Email   │
│  Enterprise        Ent.Agility  Case Studies Press    Newsletter│
│  Transformation    Exec.Adv.    Assessment   Contact  AI Assess.│
│  Advisor           ─────────    Newsletter   ──────   ─────────│
│                    Programs     ─────────                       │
│  ──────────────────────────────────────────────────────────────│
│  © 2026 Facundo Gangemi  ·  Privacy  ·  Terms  ·  Cookies      │
│  Made with intelligence in Barcelona / Buenos Aires            │
└─────────────────────────────────────────────────────────────────┘
```

**Specs:**
- 4-column layout, dark navy bg `#001D38`
- Logo column: full company identity + 1-liner tagline
- Column headers: Inter 11px, uppercase, letter-spacing, white 50% opacity
- Links: Inter 14px, white 70% opacity, hover = white 100% + underline
- Legal bar: 1px top border `#FFFFFF15`, gray text, 14px
- "Made with intelligence" line: brand voice, subtle, not intrusive

---

## Section Narrative Summary

| # | Block | Narrative Role | Primary KPI |
|---|-------|---------------|-------------|
| W03 | Hero | HOOK | Time to CTA visibility < 2s |
| W04 | Logo Bar | TRUST | Subconscious credibility signal |
| W05 | Pillars | WHAT | Advisory page CTR |
| W06 | KPI Band | SCALE | Scroll depth > 40% |
| W07 | Framework | HOW | Framework page CTR |
| W08 | Case Studies | PROOF | Case study page CTR |
| W09 | Insights | THINKING | Newsletter opt-in, SEO |
| W10 | About | WHO | About page CTR |
| W11 | Speaking | AUTHORITY | Speaking inquiry CTR |
| W12 | Assessment | DIAGNOSE | Assessment start CTR > 8% |
| W13 | Newsletter | NURTURE | Email capture rate > 3% |
| W14 | CTA Band | CONVERT | Advisory inquiry CTR |

---

## Interaction Principles (homepage scope)

- **Scroll-triggered reveals:** fade + 8px translateY, 400ms ease-out, stagger children 80ms
- **Hover micro-interactions:** 200ms ease-out, 2–4px translate, color shift to orange
- **No pop-ups:** scroll-triggered, dismissible banners only
- **No autoplay video or audio**
- **Reduced-motion fallback:** all animations wrapped in `prefers-reduced-motion` media query
- **Focus states:** visible 2px orange ring on all interactive elements
- **Loading:** no skeleton screens for homepage; server-rendered above-fold, lazy-load below

---

*End of WIREFRAME_SPECS.md — Phase 2 · facundogangemi.com*
*Next: CONVERSION_FLOW.md · PAGE_ARCHITECTURE.md · UX_PRINCIPLES.md*
