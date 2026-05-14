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

**Primary categories (must assign one per article):**
- AI Strategy
- Digital Transformation
- Operational Excellence
- AI Adoption

**Cross-cutting themes (used as tags, not categories):**
- Operating Models
- Enterprise Agility
- AI Governance
- Banking & Financial Services Transformation
- Strategy Execution
- OKRs and QBRs
- Leadership
- Enterprise Transformation
- Transformation Governance

Every article must be assigned to one of the four primary categories. Cross-cutting themes enrich topical depth and support internal linking but do not determine the article's hub assignment. Articles outside these areas dilute focus and should not be published without a clear strategic reason.

---

## 3. Content Hubs

Every article must belong to one of the four **production category hubs**. The hub determines the `categorySlug` frontmatter value, internal linking, category page assignment and editorial focus.

> **Authoritative category list:** AI Strategy · Digital Transformation · Operational Excellence · AI Adoption
>
> These are the only four categories with live hub pages at `/insights/<slug>/`. Any article with a `categorySlug` outside this list will not appear on a category page.

### Hub: AI Strategy
- **`categorySlug`:** `ai-strategy`
- **Hub page:** `/insights/ai-strategy/`
- **Search intent:** Understand how to define, govern and scale AI as a strategic business capability
- **Example topics:**
  - Why most AI strategies fail before execution
  - How to build an AI governance framework for enterprises
  - Connecting AI investments to business outcomes
  - AI strategy for banking and financial services
  - Building an AI operating model
- **Primary advisory page:** `/advisory/#ai-strategy`
- **Relevant cross-cutting tags:** `ai-governance`, `operating-models`, `banking`, `enterprise-transformation`

### Hub: Digital Transformation
- **`categorySlug`:** `digital-transformation`
- **Hub page:** `/insights/digital-transformation/`
- **Search intent:** Understand how to design and execute transformation programs that deliver measurable outcomes
- **Example topics:**
  - Why digital transformation stalls after the pilot
  - Designing a transformation operating model
  - From transformation program to operating reality
  - How to govern a digital transformation portfolio
- **Primary advisory page:** `/advisory/#digital-transformation`
- **Relevant cross-cutting tags:** `operating-models`, `enterprise-agility`, `transformation-governance`, `leadership`

### Hub: Operational Excellence
- **`categorySlug`:** `operational-excellence`
- **Hub page:** `/insights/operational-excellence/`
- **Search intent:** Understand how to align OKRs, QBRs, process and execution systems to deliver sustainable business performance
- **Example topics:**
  - OKRs vs KPIs — what executives need to know
  - How to run effective QBRs in a transformation context
  - Process alignment for enterprise performance
  - Continuous improvement at enterprise scale
- **Primary advisory page:** `/advisory/#operational-excellence`
- **Relevant cross-cutting tags:** `okrs`, `qbrs`, `enterprise-agility`, `operating-models`

### Hub: AI Adoption
- **`categorySlug`:** `ai-adoption`
- **Hub page:** `/insights/ai-adoption/`
- **Search intent:** Understand how to move from AI awareness and pilots to embedded, scalable adoption
- **Example topics:**
  - Moving from AI pilots to embedded AI adoption
  - Building AI capabilities in enterprise teams
  - AI adoption roadmaps for regulated industries
  - Sustained behavior change in AI-enabled organizations
  - Prioritizing AI use cases by business impact
- **Primary advisory page:** `/advisory/#ai-adoption`
- **Relevant cross-cutting tags:** `ai-governance`, `operating-models`, `banking`, `enterprise-transformation`

---

### Cross-cutting themes (use as `tags`, not `categorySlug`)

These themes are used in article `tags[]` frontmatter to enrich topical depth and support future internal linking and tag-filtered views. They do **not** map to category hub pages and must **not** be used as `categorySlug` values.

| Theme | Recommended `tag` value | Notes |
|---|---|---|
| Operating Models | `operating-models` | Use in AI Strategy, Digital Transformation, Operational Excellence articles |
| Enterprise Agility | `enterprise-agility` | Use in Operational Excellence, Digital Transformation articles |
| AI Governance | `ai-governance` | Use in AI Strategy, AI Adoption articles |
| Banking & Financial Services | `banking` | Use when content is specific to regulated financial services |
| Strategy Execution | `strategy-execution` | **Deprecated as a category** — use as a tag only in Operational Excellence articles |
| Leadership | `leadership` | Use for articles on executive decision-making and organizational change |
| Enterprise Transformation | `enterprise-transformation` | Broad cross-hub theme |
| Transformation Governance | `transformation-governance` | Use in Digital Transformation, Operational Excellence articles |
| OKRs | `okrs` | Use in Operational Excellence articles |
| QBRs | `qbrs` | Use in Operational Excellence articles |

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
| Category / hub | One of the four production categories: `ai-strategy`, `digital-transformation`, `operational-excellence`, `ai-adoption` | — |
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

**Appropriate CTA examples by category:**

| Category | Primary CTA |
|---|---|
| AI Strategy | "Explore AI Strategy Advisory" → `/advisory/#ai-strategy` |
| Digital Transformation | "Explore Digital Transformation Advisory" → `/advisory/#digital-transformation` |
| Operational Excellence | "Explore Operational Excellence Advisory" → `/advisory/#operational-excellence` |
| AI Adoption | "Assess your AI readiness" → `/ai-assessment/` |

**CTAs for cross-cutting themes** (when the article is tagged with one of these but assigned to a primary category):

| Cross-cutting theme | Suggested CTA when prominent in article |
|---|---|
| Operating Models | "Discuss your operating model priorities" → `/contact/` |
| Banking & Financial Services | "Explore AI and Transformation Advisory" → `/advisory/` |
| AI Governance | "Explore AI Strategy Advisory" → `/advisory/#ai-strategy` |
| Enterprise Agility | "Explore Operational Excellence Advisory" → `/advisory/#operational-excellence` |
| Strategy Execution (deprecated as category) | "Discuss your strategy execution challenges" → `/contact/` |

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
  "timeRequired": "PT4M",
  "mainEntityOfPage": "https://facundogangemi.com/insights/<slug>/",
  "articleSection": "<hub name>",
  "keywords": "comma-separated list of primary and secondary keywords"
}
```

> **Implementation note (Phase 10C):** All fields above except `articleSection` and `keywords` are auto-generated by `src/pages/insights/[slug].astro` from frontmatter. Authors do not need to write JSON-LD manually. `timeRequired` is computed at build time from `article.body` at 220 wpm. `image` is included only when the `image` frontmatter field is set. `dateModified` falls back to `datePublished` when `updatedDate` is not in frontmatter. A BreadcrumbList schema is also emitted alongside the Article schema on every article page.

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
- [ ] Primary category defined (one of: `ai-strategy`, `digital-transformation`, `operational-excellence`, `ai-adoption`)
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
