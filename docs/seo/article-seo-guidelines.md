# Article SEO Guidelines
## facundogangemi.com — Insights & Thought Leadership Content

---

## 1. Purpose

This document defines the SEO, structure, search intent, metadata, internal linking, E-E-A-T and content quality rules for all articles, insights, thought leadership pieces, MDX posts and Markdown posts published on `facundogangemi.com`.

**Relationship to other documents:**
- `docs/seo/google-positioning-guardrails.md` — defines the overall site positioning, primary search terms, audience, advisory page map and site-wide content rules. Read it first.
- `docs/seo/article-seo-guidelines.md` (this document) — defines how individual articles must be planned, written, structured and optimized for Google Search.
- `CLAUDE.md` — defines technical development rules. Takes precedence on implementation decisions.
- `MASTER_CONTEXT.md` — defines strategic brand context and business positioning.

All four documents must be read in combination when creating or modifying article content or metadata.

---

## 2. Strategic Article Objective

Articles published on this site serve two purposes simultaneously:

1. **Build topical authority** — signal to Google that this site is a credible, substantive source on the topics it covers
2. **Support conversion** — guide executive readers toward an advisory inquiry, AI assessment or contact

Articles must accumulate authority around these core topics:

- AI Strategy
- Digital Transformation
- Operating Models
- Enterprise Agility
- Operational Excellence
- Strategy Execution
- AI Governance
- Banking & Financial Services Transformation
- AI Adoption
- OKRs and QBRs

Every article published should advance authority in at least one of these areas. Articles outside these topics dilute focus and should not be published without a clear strategic reason.

---

## 3. Content Hubs

Every article must belong to one primary content hub. The hub determines internal linking, category tagging, sitemap organization and editorial focus.

### Hub: AI Strategy
- **Search intent:** Understand how to define, govern and scale AI as a strategic business capability
- **Example topics:**
  - Why most AI strategies fail before execution
  - How to build an AI governance framework for enterprises
  - Connecting AI investments to business outcomes
  - AI strategy for banking and financial services
  - Building an AI operating model
- **Primary advisory page:** `/advisory/#ai-strategy`

### Hub: Digital Transformation
- **Search intent:** Understand how to design and execute transformation programs that deliver measurable outcomes
- **Example topics:**
  - Why digital transformation stalls after the pilot
  - Designing a transformation operating model
  - From transformation program to operating reality
  - How to govern a digital transformation portfolio
- **Primary advisory page:** `/advisory/#digital-transformation`

### Hub: Operating Models
- **Search intent:** Understand how to design organizational structures and processes that scale with transformation
- **Example topics:**
  - What is an intelligent operating model
  - Platform operating models for enterprise organizations
  - Operating model design for AI-enabled organizations
  - Outcome-based operating structures
- **Primary advisory page:** `/advisory`, `/advisory/#digital-transformation`

### Hub: Enterprise Agility
- **Search intent:** Understand how to move beyond Scrum and Agile ceremonies toward an adaptive enterprise operating model
- **Example topics:**
  - Enterprise agility beyond frameworks
  - OKR implementation in complex organizations
  - Portfolio governance for adaptive organizations
  - Why Agile transformations fail at scale
- **Primary advisory page:** `/advisory/#operational-excellence`

### Hub: Operational Excellence
- **Search intent:** Understand how to align OKRs, QBRs, process and execution systems to deliver sustainable business performance
- **Example topics:**
  - OKRs vs KPIs — what executives need to know
  - How to run effective QBRs in a transformation context
  - Process alignment for enterprise performance
  - Continuous improvement at enterprise scale
- **Primary advisory page:** `/advisory/#operational-excellence`

### Hub: Strategy Execution
- **Search intent:** Understand how to translate strategy into delivery without losing clarity or momentum
- **Example topics:**
  - The gap between strategy and execution
  - Governance models that connect strategy to delivery
  - How to align enterprise initiatives with strategic intent
  - OKR-linked execution frameworks
- **Primary advisory page:** `/advisory`, `/advisory/#operational-excellence`

### Hub: AI Governance
- **Search intent:** Understand how to manage AI risk, accountability and responsible adoption at enterprise scale
- **Example topics:**
  - Building an AI risk framework
  - Responsible AI in financial services
  - AI accountability structures for enterprise organizations
  - Governing AI across business units
- **Primary advisory page:** `/advisory/#ai-strategy`, `/advisory/#ai-adoption`

### Hub: Banking & Financial Services Transformation
- **Search intent:** Understand how AI, agility and operating model evolution apply specifically in banking and financial services
- **Example topics:**
  - AI transformation in regulated banking environments
  - Digital operating models for financial services
  - Agile transformation in compliance-heavy organizations
  - Portfolio governance in banking transformation programs
- **Primary advisory page:** `/advisory/#ai-strategy`, `/advisory/#digital-transformation`

---

## 4. Search Intent Rules

Every article must define one clear search intent before writing begins. Publishing without a defined intent produces unfocused content that ranks for nothing.

**Supported search intents:**

| Intent type | Description | When to use |
|---|---|---|
| Informational | Reader wants to understand a concept or topic | "What is an intelligent operating model" |
| Strategic advisory | Reader wants expert perspective on a strategic decision | "Should we build an AI strategy before or after transformation?" |
| Problem-aware | Reader knows they have a problem but not the solution | "Why AI initiatives fail before they scale" |
| Solution-aware | Reader is evaluating approaches to a known problem | "How to design an AI governance framework" |
| Executive decision support | Reader needs to justify a decision or investment | "The business case for enterprise agility" |
| Comparison | Reader is weighing two approaches or frameworks | "OKRs vs KPIs for transformation governance" |
| Framework / methodology | Reader wants a structured approach they can apply | "A five-step AI adoption roadmap for enterprises" |
| Case-based learning | Reader wants to learn from a real or generic example | "How a financial services firm rebuilt its operating model around AI" |

**Before writing any article, answer these four questions:**

1. What problem is the reader trying to solve?
2. Why does this problem matter at executive level?
3. What strategic insight does this article provide that the reader cannot easily find elsewhere?
4. What practical decision or next step should the reader take after reading?

If these four questions cannot be answered clearly, the article should not be written yet.

---

## 5. Keyword Rules

Every article must define its keyword strategy before writing.

**Required keyword definitions:**
- **One primary keyword** — the single term the article is most directly optimized for
- **Three to seven secondary keywords** — related terms that appear naturally in the article
- **Optional long-tail keywords** — specific phrases with lower search volume but high intent
- **Related strategic terms** — semantic variations that reinforce topical authority

**Usage rules:**
- The primary keyword must appear naturally in the SEO title, H1, opening paragraph and at least one H2 where appropriate
- Secondary keywords should appear in H2s and body text without forcing them
- Do not repeat the primary keyword more than once per 200 words of body text
- Use semantic variations — not the exact keyword string repeatedly
- Prefer executive and business-oriented keywords over generic Agile buzzwords or AI marketing language
- Avoid: "cutting-edge", "revolutionary", "AI-powered", "game-changing", "transformative" as primary keyword modifiers — they are overused and signal low expertise

**Example keyword plan for an article:**
```
Article: "Why Most AI Strategies Fail Before They Scale"
Primary keyword: AI strategy execution
Secondary keywords: AI transformation, enterprise AI governance, AI operating model, AI program failure
Long-tail: why AI initiatives fail in large organizations
Related terms: AI strategy advisory, intelligent operating model, AI adoption, AI roadmap
```

---

## 6. Article Metadata Rules

Each article must include complete, unique metadata. No two articles should share the same title or meta description.

**Required metadata fields:**

| Field | Rule | Length |
|---|---|---|
| SEO title | Primary keyword present; unique; readable | 50–60 characters |
| Meta description | Summarizes the article; includes primary keyword; no truncation | 145–155 characters |
| Canonical URL | `/insights/<slug>/` — trailing slash required | — |
| Open Graph title | Same as SEO title or a short variation | ≤70 characters |
| Open Graph description | Same as meta description or a variation | ≤200 characters |
| Open Graph image | Assigned per article; must exist on disk | 1200×630px recommended |
| Twitter Card type | `summary_large_image` | — |
| `datePublished` | ISO 8601 format (`YYYY-MM-DD`) | — |
| `dateModified` | Updated whenever the article is substantially revised | — |
| Author | `Facundo Gangemi` | — |
| Category / hub | One of the eight defined hubs | — |
| Tags | Two to five relevant tags | — |

**Metadata must be:**
- Unique across all articles — check before publishing
- Accurate — reflects the actual content of the article
- Not duplicated from the site description or other pages
- Free of keyword stuffing

---

## 7. Article Structure

All articles should follow this recommended structure. Adapt as needed — do not apply it rigidly if the content calls for a different approach.

```
H1: Article title — primary keyword present when natural

Opening paragraph (100–150 words):
  - State the business problem
  - Include primary keyword if natural
  - Establish why this matters at executive level
  - Preview the strategic perspective the article will offer

[H2] Executive context / Why this matters now
  - Broaden the problem: why this is a common and important challenge
  - Reference real patterns without inventing specific clients

[H2] Core analysis — main argument section 1
  - Depth of insight
  - Strategic framing

[H2] Core analysis — main argument section 2 (if needed)
  - Second key insight or perspective

[H2] Common mistakes or anti-patterns
  - What organizations typically get wrong
  - Grounded in observable patterns, not invented scenarios

[H2] Strategic recommendations
  - Practical, executive-level guidance
  - Concrete enough to be actionable; abstract enough to be broadly applicable

[H2] Internal links to related content (woven into text, not a heading)

[H2] Final executive takeaway or reflection
  - Synthesize the core insight
  - Leave the reader with a clear perspective

CTA:
  - One clear link to the most relevant advisory page or /contact
  - Descriptive anchor text aligned with the article topic
```

---

## 8. Heading Rules

- **Exactly one H1 per article** — the article title, containing the primary keyword when natural
- **H2s structure the main argument** — each H2 should represent a distinct point or section
- **H3s support detailed breakdowns** — use only when an H2 section has genuinely distinct sub-sections
- **No heading level skips** — do not jump from H2 to H4
- **No generic headings** — avoid "Introduction", "Conclusion", "Overview" when a descriptive heading is possible
- **Headings must be readable** — they should make sense when read in sequence as a table of contents
- **No keyword stuffing in headings** — headings must read naturally; they are not keyword slots

**Acceptable H2 examples:**
- "Why AI Strategies Stall Before They Scale"
- "The Operating Model Gap in Digital Transformation"
- "What OKRs Actually Require to Work at Enterprise Scale"

**Unacceptable H2 examples:**
- "AI Strategy AI Strategy Advisor AI Consulting"
- "Introduction to AI"
- "More Information"

---

## 9. Introduction Rules

The opening paragraph is the highest-value body text on the page. Google weighs it heavily for relevance signals.

**The first 100 words must:**
- Include the primary keyword naturally — not forced
- State the business problem clearly and specifically
- Establish why the problem matters at executive or organizational level
- Indicate the perspective or angle the article will take
- Avoid filler phrases ("In today's fast-paced world...", "AI is transforming everything...")
- Avoid listing the article structure ("In this article, we will cover...")

**Example opening — do this:**
> "Most AI strategies fail not because of bad technology choices, but because the organization was never redesigned to execute them. The operating model — how decisions are made, how work flows, how AI outputs connect to business processes — is left untouched. This article examines why that gap exists and what needs to change for AI strategy to move from roadmap to reality."

**Example opening — avoid this:**
> "In today's rapidly evolving digital landscape, AI is transforming the way organizations work. AI strategy is more important than ever. This article will cover the key aspects of AI strategy and how to implement it successfully."

---

## 10. E-E-A-T Guidance for Articles

Google evaluates articles against Experience, Expertise, Authoritativeness and Trustworthiness. Every article must actively support these signals.

### Experience
- Reference real transformation patterns, not theoretical frameworks only
- Describe observable organizational behaviors and failure modes
- Frame insights as coming from advisory work in banking, financial services, technology and enterprise transformation
- Use specific contexts: "In large financial services transformation programs..." rather than "Companies often..."

### Expertise
- Demonstrate depth — go beyond surface-level definitions
- Connect technology, organizational design and business outcomes in the same argument
- Reference real disciplines: OKRs, QBRs, portfolio governance, operating model design, AI governance
- Avoid shallow how-to lists that any marketer could write

### Authoritativeness
- Every article must be internally linked to from the relevant content hub and advisory page
- Reference related articles within the same hub to build topical depth
- Avoid one-off articles that are not part of a coherent hub strategy

### Trustworthiness
- All claims must be supportable — do not state things that cannot be verified
- Legal pages must remain linked in the footer on all article pages
- The author (Facundo Gangemi) must be named on every article
- `datePublished` and `dateModified` must be accurate and present in the schema

**What must never be invented in articles:**
- Client names or organization names
- Specific financial outcomes attributed to named clients
- Testimonials or quotes from clients or executives
- Engagement metrics that were not actually achieved
- Credentials, certifications or awards not held
- Conference or speaking appearances not attended
- Research or statistics without a credible, citable source

**When using examples, describe them generically:**
- "In a financial services organization undergoing core banking modernization..."
- "In enterprise transformation programs we have observed..."
- "A common pattern in large operating model redesign initiatives..."

---

## 11. Internal Linking Rules

Each article must include internal links that support both the reader and Google's understanding of site structure.

**Required internal links per article:**

| Link target | When to include |
|---|---|
| Most relevant advisory page | Always — every article must link to one advisory page |
| Insights index (`/insights/`) | Always — builds hub authority |
| Content hub category page | Always — connects article to its pillar |
| Related article | When one exists — cross-links build topical depth |
| `/contact` or `/ai-assessment` | When the article content naturally leads to an advisory conversation |

**Anchor text rules:**
- Use descriptive anchor text that explains the destination and includes relevant keywords
- Correct: `"Explore AI Strategy Advisory"`, `"Read about enterprise agility and operating models"`, `"Discuss your transformation priorities"`
- Incorrect: `"click here"`, `"read more"`, `"this page"`, `"learn more"` alone
- Do not repeat the same anchor text for different destinations within the same article
- Do not link the same destination more than once per article (except footer/nav links)
- Do not add internal links to pages that do not yet exist

**Quantity rule:** Maximum 5–7 contextual internal links per article body. More than this dilutes click-through relevance.

---

## 12. Article CTA Rules

Every article must end with a clear, relevant call to action. The CTA should feel like a natural next step from the article's topic — not a generic sales pitch.

**CTA format:**
- One primary CTA link — the most relevant advisory page or `/contact`
- Optional secondary CTA — `/ai-assessment` or a related article
- CTA text must be descriptive and aligned with the article topic

**Appropriate CTA examples by hub:**

| Hub | Primary CTA |
|---|---|
| AI Strategy | "Explore AI Strategy Advisory" → `/advisory/#ai-strategy` |
| Digital Transformation | "Explore Digital Transformation Advisory" → `/advisory/#digital-transformation` |
| Enterprise Agility | "Explore Operational Excellence Advisory" → `/advisory/#operational-excellence` |
| AI Adoption | "Assess your AI readiness" → `/ai-assessment` |
| Operating Models | "Discuss your operating model priorities" → `/contact` |
| Operational Excellence | "Explore Operational Excellence Advisory" → `/advisory/#operational-excellence` |
| Strategy Execution | "Discuss your strategy execution challenges" → `/contact` |
| Banking & Financial Services | "Explore AI and Transformation Advisory for Financial Services" → `/advisory` |

**Do not use:**
- "Buy now" or transactional sales language
- "Sign up" when there is no product
- Generic "Contact us" without context
- Aggressive urgency language ("Act now", "Don't miss out")

---

## 13. Schema Rules

All article pages must include Article JSON-LD structured data. This enables rich result eligibility in Google Search and signals content type clearly.

**Required JSON-LD properties:**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article title — must match H1",
  "description": "Meta description — must match <meta name=description>",
  "author": {
    "@type": "Person",
    "name": "Facundo Gangemi",
    "url": "https://facundogangemi.com"
  },
  "publisher": {
    "@type": "Person",
    "name": "Facundo Gangemi",
    "url": "https://facundogangemi.com"
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "image": "https://facundogangemi.com/assets/og/<image>.webp",
  "mainEntityOfPage": "https://facundogangemi.com/insights/<slug>/",
  "articleSection": "<hub name>",
  "keywords": "comma-separated list of primary and secondary keywords"
}
```

**Rules:**
- `headline` must match the article H1 exactly
- `description` must match the `<meta name="description">` exactly
- `dateModified` must be updated whenever the article is substantially revised
- `image` must reference a file that actually exists on disk
- Do not claim `@type: Organization` for publisher — use `Person` consistently with the site's `Person` schema
- Do not add schema properties that claim facts not present in the article

---

## 14. Readability Rules

Articles are written for executive readers with limited time. They must be easy to scan and efficient to read.

**Formatting rules:**
- Paragraphs: maximum 4 lines on desktop. Split longer paragraphs.
- Use bullet points when presenting three or more parallel items — not for narrative flow
- Bold text for key terms or takeaways — sparingly, not as decoration
- Avoid tables unless presenting genuinely comparative or structured data
- No walls of text — visual breathing room is part of the reading experience

**Voice and style:**
- Active voice: "Organizations that invest in AI governance outperform those that don't" — not "AI governance investment is associated with outperformance"
- Present tense for strategic observations: "Most transformation programs fail at the operating model layer" — not "Most transformation programs have been failing"
- Concrete over abstract: "OKRs without quarterly reviews become decorative metrics" — not "Lack of alignment mechanisms reduces effectiveness"
- Strategic takeaways should be memorable and repeatable — not academic summaries

**What this is not:**
- A blog post about productivity or personal development
- A listicle of "10 tips for AI success"
- A press release or announcement
- A generic explainer that any consulting firm could publish

---

## 15. Anti-Patterns

Avoid these patterns in every article:

| Anti-pattern | Why it is harmful |
|---|---|
| Generic AI hype ("AI is revolutionizing everything") | Signals low expertise; indistinguishable from low-quality marketing content |
| Generic Agile coaching content | Misaligns with executive positioning; weakens brand differentiation |
| Keyword stuffing | Penalized by Google; degrades readability |
| Thin articles under 600 words | Insufficient depth for topical authority; dilutes domain quality |
| Duplicated metadata across articles | Google filters duplicate titles/descriptions; hurts ranking eligibility |
| Invented case studies with fake specifics | Legal and reputational risk; violates E-E-A-T |
| Unsupported claims ("This approach increases ROI by 40%") | Reduces trust; cannot be substantiated |
| Overpromising business outcomes | Contradicts executive credibility positioning |
| Articles written only for search engines | Thin content with forced keywords; poor user experience; likely to be ignored |
| Long introductions that circle the topic | Wastes executive reader's time; increases bounce rate |
| Articles disconnected from the site's advisory positioning | Dilutes topical authority; confuses both readers and Google |
| Publishing without completing the pre-publish checklist | Introduces metadata gaps, broken links or schema errors |

---

## 16. Article SEO Pre-Publish Checklist

Before publishing any article, verify every item on this checklist:

**Planning:**
- [ ] Primary content hub defined (one of the eight hubs)
- [ ] Search intent defined (one of the eight intent types)
- [ ] Primary keyword defined
- [ ] Secondary keywords defined (3–7)
- [ ] Four intent questions answered in writing before drafting

**Metadata:**
- [ ] SEO title written — 50–60 characters, primary keyword present
- [ ] Meta description written — 145–155 characters, unique
- [ ] Canonical URL set — `/insights/<slug>/` with trailing slash
- [ ] Open Graph title and description set
- [ ] Open Graph image assigned and file exists on disk
- [ ] Twitter Card metadata present
- [ ] `datePublished` set in ISO format
- [ ] `dateModified` set (same as published on first publish)
- [ ] No metadata duplicated from another article or page

**Content:**
- [ ] H1 aligns with SEO title and contains primary keyword when natural
- [ ] First 100 words include primary keyword and state the business problem
- [ ] Heading hierarchy is correct (H1 → H2 → H3, no skips)
- [ ] No generic headings ("Introduction", "Conclusion")
- [ ] Active voice used throughout
- [ ] No fabricated clients, metrics, testimonials or credentials
- [ ] No keyword stuffing

**Linking:**
- [ ] Link to most relevant advisory page included
- [ ] Link to Insights index or hub category included
- [ ] Link to related article included (if one exists)
- [ ] CTA link included — descriptive anchor text
- [ ] All linked pages actually exist on the site
- [ ] No broken internal links

**Schema:**
- [ ] Article JSON-LD present with all required properties
- [ ] `headline` matches H1
- [ ] `description` matches meta description
- [ ] `image` references a file that exists
- [ ] `datePublished` and `dateModified` accurate

**Quality:**
- [ ] Article is at least 600 words of substantive body text
- [ ] Tone is executive, strategic and credible
- [ ] No AI hype language or generic marketing copy
- [ ] Article connects clearly to the site's advisory positioning
- [ ] `npm run check` and `npm run build` pass with zero errors
