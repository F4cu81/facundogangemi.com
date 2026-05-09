# PAGE ARCHITECTURE — Full Site Structure
**facundogangemi.com · Phase 2 · Executive AI Premium**
Version 1.0

---

## Information Architecture — Three Tiers

```
TIER 1: AUTHORITY          TIER 2: OFFER              TIER 3: CONVERSION
─────────────────          ─────────────              ─────────────────────
/ (Home)                   /advisory                  /case-studies
/about                     /advisory/ai-strategy      /case-studies/[slug]
/insights                  /advisory/digital-trans.   /ai-assessment
/speaking                  /advisory/enterprise-ag.   /contact
/press (future)            /advisory/ai-adoption      /newsletter
                           /frameworks                /contact/thank-you
                           /frameworks/ai-strategy
                           /programs (future)
```

---

## Complete URL Map

```
facundogangemi.com/
│
├── [HOME]
│
├── about/
│
├── advisory/
│   ├── (hub)
│   ├── ai-strategy/
│   ├── digital-transformation/
│   ├── enterprise-agility/
│   └── ai-adoption/
│
├── frameworks/
│   ├── (hub)
│   ├── ai-strategy-framework/
│   └── intelligent-operating-model/ [Phase 2]
│
├── programs/ [Phase 2]
│   ├── (hub)
│   ├── executive-ai-program/
│   └── transformation-bootcamp/
│
├── case-studies/
│   ├── (index)
│   ├── banking-operating-model-ai/
│   ├── enterprise-intelligent-operations/
│   └── executive-ai-enablement/
│
├── insights/
│   ├── (index + filter)
│   ├── category/ai-strategy/
│   ├── category/digital-transformation/
│   ├── category/enterprise-agility/
│   ├── category/executive-leadership/
│   ├── category/intelligent-automation/
│   ├── category/case-notes/
│   └── [article-slug]/
│
├── speaking/
│
├── ai-assessment/
│
├── newsletter/
│
├── contact/
│   └── thank-you/
│
├── press/ [Phase 2]
│
└── legal/
    ├── privacy/
    ├── terms/
    └── cookies/
```

---

## Page-Level Specifications

---

### HOME `/`

**Goal:** Position + generate first-action.
**Template:** `home.php` (custom)
**Sections:** W01–W15 (see WIREFRAME_SPECS.md)
**Primary KPI:** Bounce rate < 45%, hero CTA CTR > 4%

**SEO anchors:**
- H1: AI Strategy Consultant + Digital Transformation
- Meta description: executive advisory positioning statement
- Schema: Person + Organization + WebSite

---

### ABOUT `/about`

**Goal:** Personal authority + credibility confirmation. Converts high-intent visitors.
**Template:** `about.php`
**Primary KPI:** Contact page CTR > 12%

**Section flow:**
```
1. HERO
   ├── Eyebrow: "About Facundo Gangemi"
   ├── H1: "Advisor at the intersection of AI strategy
   │        and enterprise transformation."
   ├── Executive portrait (full-width right column)
   └── CTA: "Book an Advisory Call" + "Download Bio PDF"

2. EXECUTIVE SUMMARY
   ├── 3-paragraph narrative (personal voice, first person)
   ├── Focus: transformation arc, philosophy, approach
   └── No CV-style bullets here

3. CREDENTIAL BLOCK
   ├── MIT Digital Transformation — alumnus
   ├── Founder, Berater Digital
   ├── Founder, Berater Digital Lab
   ├── Management 3.0 Licensed Facilitator
   └── 20+ years enterprise experience
   Layout: 2-column credential cards with icons

4. EXPERIENCE TIMELINE
   ├── Visual horizontal/vertical timeline
   ├── Key engagements: Santander · BBVA · CaixaBank · Kruger
   └── Milestones: company founding, MIT, keynotes, transformations

5. PHILOSOPHY — "How I think about transformation"
   ├── 3 strategic POV statements (pull-quote style)
   ├── Example: "AI is an operating model decision, not a tech one."
   └── Connects to framework page

6. SPEAKING SNAPSHOT
   ├── 3 recent speaking engagements
   └── CTA: "Invite as Speaker →"

7. CLOSING CTA
   ├── "Let's work together"
   ├── Primary: Book Advisory Call
   └── Secondary: Download Executive Bio (PDF)
```

**SEO anchors:**
- H1: Facundo Gangemi — AI Strategy Advisor
- Schema: Person (full structured data: works for, alumni of, award, sameAs LinkedIn)

---

### ADVISORY HUB `/advisory`

**Goal:** Overview of the full advisory offer. Routes visitors to specific service.
**Template:** `advisory-hub.php`
**Primary KPI:** Service detail page CTR > 20%

**Section flow:**
```
1. HERO
   ├── Eyebrow: "Executive Advisory"
   ├── H1: "Strategic advisory for organizations transforming
   │        with AI."
   └── Sub: "Four advisory tracks. Tailored to executive context."

2. ADVISORY TRACKS — 4 cards (full specs)
   Each card: icon · title · 2-line description · outcome statement · Link

3. HOW IT WORKS
   ├── 3-step process: Diagnose → Design → Deploy
   ├── Each step: 2-line description
   └── Tone: partnership, not vendor

4. WHO IT'S FOR
   ├── Target roles: CEO · CIO · CTO · Head of Transformation · Innovation Director
   └── Industry focus: Banking · Insurance · Telco · Enterprise · Technology

5. PROOF STRIP
   ├── 2 inline mini-case-studies (outcome-focused, 3 lines each)
   └── CTA: "View full case studies →"

6. CLOSING CTA
   ├── Primary: Book Advisory Call
   └── Secondary: Take the AI Assessment
```

---

### SERVICE DETAIL — AI STRATEGY `/advisory/ai-strategy`

**Goal:** Qualify high-intent executives on AI Strategy track. Generate inquiry.
**Template:** `service-detail.php` (reused for all 4 service pages)
**Primary KPI:** Form/call CTR > 8%

**Section flow:**
```
1. HERO
   ├── Eyebrow: "AI Strategy Advisory"
   ├── H1: "From AI experiments to enterprise-wide adoption."
   └── Sub: "AI Strategy advisory for executives who need
             outcomes, not pilots."

2. THE CHALLENGE (executive pain framing)
   ├── "Most organizations fail at AI not because of technology —
   │   but because of missing strategy and operating model."
   ├── 3 bullets (pain points):
   │   · AI pilots don't scale beyond the proof of concept
   │   · Executive teams lack AI fluency to make strategic decisions
   │   · Technology investment without organizational readiness
   └── (No solution here — builds tension)

3. THE APPROACH
   ├── Facundo's philosophy on AI strategy (2 paragraphs)
   ├── Framework reference: AI Strategy Framework
   └── Link: "Explore the Framework →"

4. WHAT YOU GET (deliverables)
   ├── AI Strategy Diagnostic & Maturity Assessment
   ├── Executive AI Roadmap (18–24 month horizon)
   ├── Operating Model Alignment Plan
   ├── Executive AI Enablement Sessions
   └── Ongoing Advisory (monthly strategic reviews)
   Layout: icon + title + 1-line description per item

5. WHO IT'S FOR
   ├── Role tags: CEO · CIO · CTO · CDO · Transformation Director
   └── Org size: 500+ employees, enterprise complexity

6. PROOF
   ├── 1 inline case study (banking, outcome-focused)
   └── Executive testimonial (if available)

7. FAQ (4 questions)
   ├── "How long does an AI strategy engagement typically run?"
   ├── "Do you work with technology vendors or independently?"
   ├── "What industries do you have most experience in?"
   └── "What's the difference between this and a consulting project?"
   Format: accordion expand/collapse

8. CLOSING CTA
   ├── "Ready to define your AI strategy?"
   ├── Primary: Book Advisory Call
   └── Secondary: Take the AI Assessment
```

**Duplicate template for:**
- `/advisory/digital-transformation` — same structure, different pain/approach/deliverables
- `/advisory/enterprise-agility` — same structure
- `/advisory/ai-adoption` — same structure

---

### FRAMEWORKS HUB `/frameworks`

**Goal:** Establish Facundo as a methodologist with proprietary IP. Authority amplifier.
**Template:** `frameworks-hub.php`
**Primary KPI:** Framework detail CTR > 15%

**Section flow:**
```
1. HERO
   ├── Eyebrow: "Proprietary Frameworks"
   ├── H1: "Frameworks built from enterprise transformations."
   └── Sub: "Structured approaches derived from 20+ years
             of real engagement, not theory."

2. FRAMEWORKS GRID
   ├── AI Strategy Framework card (available now)
   └── Intelligent Operating Model card (coming soon label)

3. WHY FRAMEWORKS MATTER
   ├── 2-paragraph POV on the value of structured transformation
   └── Links to advisory pages

4. FRAMEWORK DOWNLOAD TEASER
   ├── "Download: AI Strategy Framework Overview"
   ├── Email gate (not full form)
   └── "PDF · 12 pages · Executive summary"
```

---

### FRAMEWORK DETAIL `/frameworks/ai-strategy-framework`

**Goal:** Deep IP showcase. Lead generation via PDF download.
**Template:** `framework-detail.php`
**Primary KPI:** PDF download CTR > 25% of visitors

**Section flow:**
```
1. HERO
   ├── H1: "The AI Strategy Framework"
   └── Sub: "A structured path from AI ambition to enterprise adoption."

2. FRAMEWORK VISUAL
   ├── Full 4-step diagram: Discover · Design · Deploy · Evolve
   ├── Each step expanded: 3 sub-activities listed
   └── Interactive hover states

3. STEP-BY-STEP BREAKDOWN
   ├── Step 1 — Discover: AI Maturity Assessment + Opportunity mapping
   ├── Step 2 — Design: Strategy definition + Operating model blueprint
   ├── Step 3 — Deploy: Pilot-to-scale execution + Organizational alignment
   └── Step 4 — Evolve: Measurement + Continuous optimization

4. HOW IT'S APPLIED
   ├── 1 mini case study: how the framework was used in practice
   └── Outcome metrics

5. DOWNLOAD
   ├── "Download the framework overview"
   ├── Email gate
   └── PDF: executive summary, 12 pages

6. CLOSING CTA
   └── "Apply this framework to your organization → Book Advisory Call"
```

---

### CASE STUDIES INDEX `/case-studies`

**Goal:** Outcome evidence. Decision support for evaluating executives.
**Template:** `case-studies-index.php`
**Primary KPI:** Case detail CTR > 30%

**Section flow:**
```
1. HERO
   ├── H1: "Enterprise Transformations. Real Outcomes."
   └── Sub: "Advisory engagements across banking, insurance,
             telco and technology."

2. FILTER BAR
   └── [All] [Banking] [Insurance] [Telco] [Technology] [Enterprise]

3. CASE STUDY GRID
   └── Cards: industry · headline · 1 metric · Read →

4. INDUSTRIES SERVED STRIP
   └── Visual representation of sector coverage
```

---

### CASE STUDY DETAIL `/case-studies/[slug]`

**Goal:** Maximum credibility evidence. Removes final sales objection.
**Template:** `case-study-detail.php`
**Primary KPI:** Scroll depth > 75%, Contact CTR > 5%

**Section flow:**
```
1. HERO
   ├── Industry tag
   ├── H1: Outcome headline
   ├── Key metric: large, orange
   ├── Engagement scope: duration · role · team size
   └── Client: logo (if permitted) or "Tier-1 European bank, 12k employees"

2. CONTEXT — THE CHALLENGE
   ├── Business situation (2 paragraphs)
   └── Pain points framed in executive language

3. APPROACH
   ├── Methodology applied (framework reference)
   ├── Key decisions made
   └── How Facundo's role was structured

4. OPERATING MODEL CHANGES
   ├── What changed organizationally
   └── Visual: before/after comparison (simple table or two columns)

5. RESULTS
   ├── 3–5 metrics: quantified, named, attributed
   ├── Visual: large orange numbers, labeled
   └── Timeline of results

6. EXECUTIVE PERSPECTIVE
   └── Pull quote (attributed with role, not always by name)

7. RELATED CASE STUDIES
   └── 2 cards, adjacent industries

8. CLOSING CTA
   ├── "Planning a similar transformation?"
   ├── Primary: Book Advisory Call
   └── Secondary: Explore Advisory →
```

---

### INSIGHTS INDEX `/insights`

**Goal:** Editorial authority. SEO traffic. Nurture non-ready buyers.
**Template:** `insights-index.php`
**Primary KPI:** Newsletter opt-in > 3% of visitors

**Section flow:**
```
1. HERO
   ├── H1: "Strategic Insights on AI and Enterprise Transformation"
   └── Sub: "Perspectives from the advisory front line."

2. EDITORIAL FILTER
   └── [All] [AI Strategy] [Digital Transformation]
         [Enterprise Agility] [Executive Leadership]
         [Intelligent Automation] [Case Notes]

3. FEATURED ARTICLE (large card, top)
   └── Latest long-form piece, prominent placement

4. ARTICLES GRID
   └── 6 cards per page, 2-column layout

5. NEWSLETTER INLINE CAPTURE
   └── After card 6: inline subscription prompt, no pop-up

6. PAGINATION / LOAD MORE
   └── "Load more insights" button (lazy load, no page reload)
```

---

### ARTICLE TEMPLATE `/insights/[slug]`

**Goal:** Thought leadership + newsletter capture + soft advisory CTA.
**Template:** `article-single.php`
**Primary KPI:** Newsletter opt-in > 5% per article

**Layout:**
```
┌─────────────────────────────────────────────┬─────────────────┐
│  ARTICLE CONTENT (70%)                      │ SIDEBAR (30%)   │
│  ─────────────────────────────────────────  │ ─────────────── │
│  Category eyebrow                           │ About Facundo   │
│  H1: Article title                          │ (chip + 2 lines │
│  Read time · Date · Author chip             │  + link)        │
│                                             │                 │
│  TL;DR: 3-bullet strategic summary          │ Book a Call     │
│  ─────────────────────────────────────────  │ (CTA card)      │
│  Article body                               │                 │
│  · Short paragraphs                         │ Related         │
│  · Pull quotes (Manrope italic, orange bar) │ Insights        │
│  · Executive callout boxes                  │ (3 links)       │
│  · No stock photos inside article           │                 │
│                                             │ Assessment CTA  │
│  Author bio card (bottom)                   │ (soft)          │
│  Related insights (3 cards)                 │                 │
│  Newsletter capture (inline)                │                 │
│  Soft advisory CTA                          │                 │
└─────────────────────────────────────────────┴─────────────────┘
```

**Mobile:** sidebar collapses, shows after article body

---

### SPEAKING `/speaking`

**Goal:** Generate keynote/speaking inquiries. Reinforce authority.
**Template:** `speaking.php`
**Primary KPI:** Speaking inquiry CTR > 8%

**Section flow:**
```
1. HERO
   ├── H1: "Bringing AI and Transformation to the Executive Stage"
   └── Sub: "Keynotes and executive sessions on AI strategy,
             digital transformation and intelligent organizations."

2. SPEAKING TOPICS (3–4 topic cards)
   ├── Topic 1: "The AI-Enabled Enterprise: From Strategy to Adoption"
   ├── Topic 2: "Operating Models for the Intelligent Organization"
   ├── Topic 3: "Why Most AI Strategies Fail — and How to Fix Yours"
   └── Topic 4: "Leading Transformation in the AI Era"
   Each card: title · 2-line description · duration indicator · audience

3. PAST EVENTS GALLERY
   ├── Event photos or dark cards (if no photos)
   └── Event name · Location · Year · Topic

4. FORMATS OFFERED
   ├── Keynote (45–60 min)
   ├── Executive Workshop (half-day / full-day)
   ├── Panel Moderation
   └── Corporate Event / Off-site

5. SOCIAL PROOF
   └── Quote from event organizer or attendee

6. INQUIRY FORM
   ├── Event name / company
   ├── Event date / format
   ├── Expected audience size and role
   ├── Topic area of interest
   └── Contact email + CTA: "Submit Speaking Inquiry"
```

---

### AI ASSESSMENT `/ai-assessment`

**Goal:** MQL generation via interactive diagnostic tool.
**Template:** `ai-assessment.php` (JavaScript-heavy, SPA-like)
**Primary KPI:** Completion rate > 35%

**States:**
- Landing (pre-start): value prop + gate form
- Question flow (12 screens, 1 per screen)
- Results page: score + breakdown + CTA
- Thank-you: download link + next steps

---

### CONTACT `/contact`

**Goal:** Final conversion. Reduce friction. Quality over quantity.
**Template:** `contact.php`
**Primary KPI:** Form submit > 50% of page visits

**Section flow:**
```
1. HEADER
   ├── H1: "Let's talk about your transformation."
   └── Sub: "I typically respond within 1 business day."

2. MULTI-STEP FORM (see CONVERSION_FLOW.md)
   ├── Step 1: Role selector
   ├── Step 2: Challenge selector
   └── Step 3: Contact details

3. OR: Direct booking
   └── Calendly embed (30-min discovery call)

4. SIDEBAR TRUST
   ├── "Trusted by Santander, BBVA, CaixaBank, Kruger"
   ├── Response time: "< 24 hours"
   └── "All inquiries are confidential"
```

---

## Redirect Map (Legacy URLs)

| Old URL | New URL | Type |
|---------|---------|------|
| /blog | /insights | 301 |
| /blog/[slug] | /insights/[slug] | 301 |
| /projects | /case-studies | 301 |
| /proyectos | /case-studies | 301 |
| /servicios | /advisory | 301 |
| /services | /advisory | 301 |
| /contacto | /contact | 301 |

---

## Template Inventory

| Template | Pages |
|----------|-------|
| `home.php` | / |
| `about.php` | /about |
| `advisory-hub.php` | /advisory |
| `service-detail.php` | All 4 advisory subpages |
| `frameworks-hub.php` | /frameworks |
| `framework-detail.php` | Each framework page |
| `case-studies-index.php` | /case-studies |
| `case-study-detail.php` | Each case study |
| `insights-index.php` | /insights |
| `article-single.php` | Each insights article |
| `speaking.php` | /speaking |
| `ai-assessment.php` | /ai-assessment |
| `newsletter.php` | /newsletter |
| `contact.php` | /contact |
| `thank-you.php` | /contact/thank-you |
| `legal.php` | /legal/* |

---

## Page Priority for Launch (Phase 1 — MVP)

| Priority | Page | Reason |
|----------|------|--------|
| P0 | Home | Primary conversion surface |
| P0 | Advisory hub + 4 service pages | Core offer |
| P0 | Contact | Conversion gate |
| P1 | About | High-intent visitor landing |
| P1 | Case Studies (index + 3 detail) | Credibility evidence |
| P1 | AI Assessment | Lead generation |
| P1 | Framework (AI Strategy) | IP + lead magnet |
| P2 | Insights (index + template) | SEO + nurture |
| P2 | Speaking | Secondary conversion |
| P2 | Newsletter | Nurture |
| P3 | Legal pages | Compliance |
| Post-launch | Programs | Phase 2 expansion |
| Post-launch | Press | Phase 2 expansion |

---

*End of PAGE_ARCHITECTURE.md — Phase 2 · facundogangemi.com*
