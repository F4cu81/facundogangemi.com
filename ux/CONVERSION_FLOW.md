# CONVERSION FLOW — Executive Conversion Architecture
**facundogangemi.com · Phase 2 · Executive AI Premium**
Version 1.0

---

## Purpose

This document maps the full conversion architecture: how visitors of different intent levels move from first touch to qualified lead. Every touchpoint, path, and decision gate is defined here.

---

## Conversion Model Overview

```
AWARENESS          CONSIDERATION          INTENT             CONVERSION
─────────          ─────────────          ──────             ──────────
Blog / SEO         Homepage               Service detail     Advisory call
LinkedIn           About page             Case study         Workshop form
Speaking           Framework              Assessment         Speaking inquiry
Referral           Insights               Advisory hub       Newsletter
```

**Core conversion goal:** qualified advisory inquiry.
**Supporting conversions:** newsletter subscription, assessment completion, framework download.

---

## Visitor Intent Segments

### Segment A — High Intent Executive
**Profile:** CIO/CTO who was referred or saw Facundo speak. Ready to evaluate.
**Behavior:** Goes directly to About or Advisory. Scans credentials. Looks for pricing signals.
**Need:** Credibility confirmation + low-friction next step.
**Flow:** Direct → About or Advisory → Contact

### Segment B — Problem-Aware Decision Maker
**Profile:** Head of Transformation exploring options. Has a mandate, no solution yet.
**Behavior:** Lands on homepage or Insights article. Reads framework. Compares options.
**Need:** Strategic alignment + proof of execution.
**Flow:** Insights/Search → Homepage → Case Studies → Advisory → Contact

### Segment C — Passive Authority Tracker
**Profile:** CxO who follows Facundo on LinkedIn. Not ready to buy. Building familiarity.
**Behavior:** Reads Insights. May take assessment. Subscribes to newsletter.
**Need:** Consistent high-value signal. Low pressure.
**Flow:** LinkedIn → Insights → Newsletter or Assessment

### Segment D — Talent / Partnership Scout
**Profile:** Headhunter, corporate program director, event organizer.
**Behavior:** Goes to About and Speaking. Looks for credentials and past stages.
**Need:** Bio information, speaking topics, contact.
**Flow:** Search/LinkedIn → About → Speaking → Contact

---

## Lead Commitment Ladder

```
LOWEST COMMITMENT                                    HIGHEST COMMITMENT
─────────────────────────────────────────────────────────────────────────
[Newsletter]  →  [Assessment]  →  [Framework]  →  [Workshop]  →  [Advisory Call]
     ↓                ↓               ↓               ↓                ↓
  Email only    Email + intent   Email + deep     Qualified       Sales-ready
               signal + data     interest         prospect           lead
```

**Ladder strategy:** each step increases commitment AND qualification. Never skip levels for cold traffic.

---

## Primary Conversion Flow — Advisory Call

### Flow Map

```
ENTRY POINT
    │
    ├── Homepage Hero CTA "Book Advisory Call"
    │       └──▶ Contact page → Booking form → Calendly embed
    │
    ├── Advisory Hub CTA
    │       └──▶ Service detail → Qualifying form → Discovery call
    │
    ├── Case Study "Plan a similar transformation"
    │       └──▶ Contact page → Short form → Email reply
    │
    └── Sticky mobile CTA
            └──▶ Contact page → Full form
```

### Contact Page Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  BOOK AN ADVISORY CALL                                          │
│  ─────────────────────────────────────────────────────────────  │
│  STEP 1: What describes you best?                               │
│  ○ CEO / C-Suite Executive                                      │
│  ○ CIO / CTO / Head of Transformation                          │
│  ○ Enterprise Program Director                                  │
│  ○ Event Organizer / Speaking Inquiry                           │
│  ○ Other                                                        │
│                                                                 │
│  STEP 2: What's your main challenge?                            │
│  ○ AI Strategy — where to start or accelerate                   │
│  ○ Digital Transformation — execution and operating model       │
│  ○ Enterprise Agility — evolving the operating model            │
│  ○ Executive Enablement — AI fluency for leadership             │
│  ○ Speaking / Keynote engagement                                │
│                                                                 │
│  STEP 3: Your details                                           │
│  [Full name]          [Company]                                 │
│  [Work email]         [LinkedIn (optional)]                     │
│  [Brief context — 2–3 lines]                                    │
│                                                                 │
│  [Send inquiry →]  (primary orange CTA)                         │
│                                                                 │
│  OR: schedule directly                                          │
│  [Calendly embed — 30-min discovery call]                       │
└─────────────────────────────────────────────────────────────────┘
```

**Qualification logic:**
- Role selector → routes to specific follow-up sequence (Make.com automation)
- Challenge selector → pre-populates email with relevant service context
- LinkedIn field → enables pre-call research, increases show rate
- No phone number required (executive friction)

**Post-submission:**
- Redirect to thank-you page `/contact/thank-you`
- Confirmation email (Make.com): personalized by role + challenge
- CRM entry (future): tag with source, role, challenge
- Facundo notified: summary email with lead details

---

## Secondary Conversion Flow — AI Maturity Assessment

### Entry Points
- Homepage W12 block CTA
- Advisory service pages (sidebar or inline)
- Insights articles (soft CTA at end)
- LinkedIn posts (direct link)

### Assessment Flow

```
STEP 1: Gating
┌────────────────────────────────────────────────────────────────┐
│  Take the AI Maturity Assessment                               │
│                                                                │
│  Get a personalized diagnostic of your organization's AI       │
│  readiness across 5 strategic dimensions.                      │
│                                                                │
│  [Work email]  [Company name]  [Role]                          │
│  [Start Assessment →]                                          │
│  3-second gate, no password, instant access                    │
└────────────────────────────────────────────────────────────────┘

STEP 2: Assessment (12 questions, ~5 min)
  Dimension 1: AI Strategy Clarity (Q1–3)
  Dimension 2: Data Readiness (Q4–5)
  Dimension 3: Operating Model Alignment (Q6–8)
  Dimension 4: Executive AI Fluency (Q9–10)
  Dimension 5: Change Adoption Capability (Q11–12)

  UX: 1 question per screen, progress bar, no back button
      Multiple choice (3–4 options), no text input
      Mobile-first layout

STEP 3: Results page
┌────────────────────────────────────────────────────────────────┐
│  AI MATURITY SCORE: 2.4 / 5.0 (DEVELOPING)                    │
│  ─────────────────────────────────────────────────────────────│
│  ████████░░░░░░░░░░░░░░ 48%                                    │
│                                                                │
│  Your organization shows early AI intent but lacks the         │
│  operating model alignment needed for sustainable adoption.    │
│                                                                │
│  KEY GAPS:                                                     │
│  ◆ AI strategy is technology-led, not outcome-led             │
│  ◆ Executive AI fluency is below transformation threshold      │
│  ◆ Operating model not yet redesigned for AI                  │
│                                                                │
│  [Download Full Report →]  (PDF, branded, gated by email ✓)   │
│  [Book a 30-min Advisory Call] (primary CTA, orange)           │
│                                                                │
│  Benchmark: industry average for your sector = 2.9            │
└────────────────────────────────────────────────────────────────┘
```

**Automation triggers (Make.com):**
- Score < 2.5 → "Developing" report + "Book call" email sequence (3 emails, 7 days)
- Score 2.5–3.5 → "Progressing" report + Insights content sequence
- Score > 3.5 → "Leading" report + Framework download + Advisory CTA
- All completions → tagged in CRM, added to newsletter unless opted out

---

## Tertiary Conversion Flow — Newsletter Subscription

### Entry Points
- Homepage W13 block
- Insights article end-of-post section
- Assessment results page
- /newsletter dedicated landing page

### Subscription Flow

```
ENTRY → Email field → Submit → Confirm page → Welcome email (Make.com)
                                                    │
                                                    └─ Links to:
                                                       - Last 3 Insights
                                                       - AI Assessment
                                                       - About page
```

**Welcome email content:**
- Personal greeting from Facundo (first person, not corporate)
- What to expect: frequency, topics, format
- 3 recommended Insights to start
- Soft CTA: "When you're ready, I'd love to learn about your transformation challenge."

**Nurture sequence (30-day onboarding):**
- Day 1: Welcome + content starter pack
- Day 7: "One perspective on AI adoption in your sector"
- Day 14: Framework teaser (Intelligent Operating Model)
- Day 21: Case Notes — short-form real story
- Day 30: "Are you facing a transformation decision? Let's talk."

---

## CTA Decision Matrix

| Visitor | Where | Intent | Best CTA | Fall-back CTA |
|---------|-------|--------|----------|---------------|
| First visit, any | Homepage hero | Unknown | Book Advisory Call | Explore Services |
| Returning, reading | Insights article | Research | Newsletter | Assessment |
| High intent, reading case | Case study | Evaluating | Plan a similar transformation | Book Advisory Call |
| Clicked advisory page | Service detail | Considering | Book Advisory Call | Framework download |
| Taking assessment | Assessment result | Intent signal | Book 30-min call | Download report |
| Mobile, scrolling | Sticky bar | Any | Book Advisory Call | — |
| Referral, direct | Contact page | High | Calendly embed | Contact form |

---

## Conversion Gate Design Principles

### 1. No Cold Pop-Ups
- Pop-ups only after: 90+ seconds on page OR exit-intent detection (desktop only)
- Always dismissible, no dark patterns
- Mobile: no pop-ups, sticky bottom bar instead

### 2. Progressive Disclosure
- Don't show full contact form until segment + challenge are selected
- Reduces cognitive load, increases completion rate
- Pre-fills context for Facundo, increases call quality

### 3. Intent-Specific CTAs
Never "Contact Us." Always:
- "Book an Advisory Call" (high intent)
- "Take the Assessment" (medium intent)
- "Read Case Study" (low intent, building toward medium)
- "Subscribe to Executive Briefing" (lowest, nurture)

### 4. Trust Signals Near CTAs
Every CTA button should have at minimum one nearby trust element:
- Near "Book Advisory Call": "Trusted by Santander, BBVA, CaixaBank"
- Near newsletter form: "500+ executives. Monthly. Unsubscribe anytime."
- Near assessment: "5 minutes. No account required. Personalized report."

### 5. No Mandatory Phone
- Phone field: never required
- Executive audience considers phone number collection aggressive before trust is established

---

## Conversion Funnel KPIs

| Stage | Metric | Target |
|-------|--------|--------|
| Homepage → Advisory page | CTR from W05 | > 8% |
| Homepage → Assessment | CTR from W12 | > 6% |
| Homepage → Newsletter | Opt-in from W13 | > 3% |
| Advisory page → Contact | CTA CTR | > 10% |
| Assessment start → Complete | Completion rate | > 35% |
| Contact form → Qualified lead | Qualification rate | > 60% |
| Newsletter open rate | Weekly/monthly | > 40% |
| Discovery call → Advisory proposal | Conversion | > 50% |

---

## Automation Map (Make.com)

```
TRIGGER                   SCENARIO                    OUTPUT
───────                   ────────                    ──────
Form submit (contact)  →  Route by role+challenge  →  Email to Facundo + auto-reply
Assessment complete    →  Score-based routing      →  PDF report + email sequence
Newsletter subscribe   →  Onboarding sequence      →  7-email drip, 30 days
Speaking inquiry       →  Speaking brief request   →  Topic form + calendar link
Workshop inquiry       →  Program info packet      →  PDF + qualification call invite
```

---

## Thank-You Page Strategy

**URL:** `/contact/thank-you`

```
┌────────────────────────────────────────────────────────────────┐
│  ✓  Thank you, [First Name].                                   │
│                                                                │
│  I've received your inquiry and will respond within            │
│  1 business day.                                               │
│                                                                │
│  In the meantime:                                              │
│  → Read: [Latest Insights article]                             │
│  → Explore: [AI Strategy Framework]                            │
│  → Connect: [LinkedIn profile]                                 │
│                                                                │
│  — Facundo                                                     │
└────────────────────────────────────────────────────────────────┘
```

- No bounce. Keep visitor engaged with 3 relevant next steps.
- LinkedIn link: builds social connection before discovery call.
- Tone: personal, not corporate. First person, signed by Facundo.

---

*End of CONVERSION_FLOW.md — Phase 2 · facundogangemi.com*
