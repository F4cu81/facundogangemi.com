# Google Positioning Guardrails
## facundogangemi.com

---

## 1. Purpose of This Document

This document defines how `facundogangemi.com` must be positioned for Google Search.

It is the authoritative reference for all decisions related to:
- Page titles and meta descriptions
- Heading structure (H1, H2, H3)
- Primary and secondary keywords per page
- Internal linking and anchor text
- Structured data
- Content tone and editorial direction
- Future content hub strategy

All new pages, updated pages, metadata changes, heading revisions, CTA text, and internal link text must align with the rules defined here before implementation.

**Relationship to other documents:**
- `CLAUDE.md` — technical development rules. Takes precedence on technical implementation.
- `MASTER_CONTEXT.md` — strategic brand context and business positioning.
- This document — SEO positioning rules and Google search strategy. Applies to all content and metadata decisions.

If there is a conflict between this document and `MASTER_CONTEXT.md`, preserve the technical rules in `CLAUDE.md` and align content strategy with this document.

---

## 2. Primary Google Positioning

The website must position Facundo Gangemi as:

> **AI Strategy & Digital Transformation Advisory for enterprise leaders, focused on operating models, execution and measurable business impact.**

This positioning must be reflected coherently and consistently across:
- The homepage H1 and meta description
- Advisory service pages
- Insights articles
- About page
- Structured data (JSON-LD)
- Internal anchor text

---

## 3. Primary Search Positioning Terms

These are the terms the site must credibly compete for in Google Search. Every primary page should be designed to support at least one of these.

| Term | Target page |
|---|---|
| AI Strategy Advisor | `/advisory/#ai-strategy`, homepage |
| Digital Transformation Advisor | `/advisory/#digital-transformation`, homepage |
| Enterprise Transformation Advisor | `/advisory`, homepage |
| Operational Excellence Advisor | `/advisory/#operational-excellence` |
| AI Adoption Advisor | `/advisory/#ai-adoption` |
| AI Strategy Consultant | `/advisory/#ai-strategy`, insights |
| Digital Transformation Consultant | `/advisory/#digital-transformation`, insights |

**Note on advisory architecture (Phase 7):** The four advisory practices are consolidated into a single `/advisory/` page with anchor sections: `#ai-strategy`, `#digital-transformation`, `#operational-excellence`, `#ai-adoption`. There are no separate standalone sub-pages in the main navigation. References in this document use anchor URLs (`/advisory/#practice`) to reflect this structure.

**Usage rule:** At least one primary positioning term must appear in the `<title>` and `<h1>` of the homepage and each advisory page. It must also appear naturally within the first 100 words of body text. Do not force it — integrate it into clear, readable copy.

---

## 4. Strategic SEO Themes

These themes represent the broader content territory the site must cover and rank for over time. They inform article topics, advisory page copy, case study framing, and insight pillars.

**Core themes:**
- AI Strategy
- Digital Transformation
- Enterprise Agility
- Operating Models
- Operational Excellence
- OKRs
- QBRs
- Business Impact
- Banking & Financial Services
- Strategy Execution
- AI Adoption
- AI Governance
- Transformation Roadmaps
- Portfolio Alignment

**Usage rule:** These themes should appear as natural language across page body text, H2/H3 headings, article titles, and internal link anchor text. They must never be listed as a keyword block. Each page should focus on one or two themes — not all of them.

---

## 5. Audience and Search Intent

### Target Audience

- CEOs and executive leadership
- Directors of transformation, technology and product
- Transformation leaders managing enterprise-scale programs
- Technology leaders evaluating AI investment and governance
- Product leaders designing AI-enabled product strategies
- Banking and financial services leaders navigating digital change
- Enterprise decision-makers assessing AI readiness

### Primary Search Intents

Content and metadata must be designed to match these user intents. Each intent maps to a specific section of the site:

| Search intent | Primary page |
|---|---|
| Find an AI strategy advisor | `/advisory/#ai-strategy`, homepage |
| Connect AI strategy with execution | `/advisory/#ai-strategy`, insights |
| Improve digital transformation outcomes | `/advisory/#digital-transformation` |
| Build better operating models | `/advisory`, `/advisory/#digital-transformation` |
| Align OKRs, QBRs and execution governance | `/advisory/#operational-excellence`, insights |
| Improve operational discipline and execution systems | `/advisory/#operational-excellence` |
| Assess AI readiness and adoption strategy | `/advisory/#ai-adoption`, `/ai-assessment` |
| Read strategic perspectives on AI and transformation | `/insights` |
| Hire an executive AI advisor or speaker | `/advisory`, `/speaking`, `/contact` |

---

## 6. Page-Level SEO Rules

Every indexable page must follow these rules before publication:

**Metadata:**
- One unique `<title>` per page — never duplicated across the site
- Title must be ≤60 characters (including the ` | Facundo Gangemi` suffix)
- One unique `<meta name="description">` per page — never duplicated
- Meta description must be between 120 and 155 characters
- `<link rel="canonical">` must point to `https://facundogangemi.com/<path>/`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) must be present on all pages
- Twitter Card metadata must be present

**Heading structure:**
- Exactly one `<h1>` per page — visible to users, not hidden
- H1 must contain the primary keyphrase naturally
- H2 elements introduce main sections — must be descriptive, not decorative
- H3 elements introduce subsections under H2 — must not skip levels
- Eyebrow labels are `<span>` elements — not headings

**Content:**
- Primary keyphrase must appear in the `<title>`, `<h1>`, and within the first 100 words of body text
- Secondary keywords should appear naturally in H2s and body copy
- No keyword repetition that reads unnaturally
- No duplicate content across pages
- No thin pages (fewer than 200 meaningful words of body text)

**Internal linking:**
- Every page must link to at least one other relevant page
- Anchor text must be descriptive — never "click here" or "learn more" alone
- Links must point to existing routes only

---

## 7. Homepage Positioning Rules

The homepage is the highest-authority page and the primary entry point for most organic traffic. It must clearly communicate:

- **AI Strategy** — as the primary advisory practice
- **Digital Transformation** — as the second major practice
- **Operating Models** — as the strategic lens that connects both
- **Business Impact** — measurable, execution-driven outcomes
- **Enterprise advisory** — seniority and organizational scale
- **Banking and Financial Services** — deep domain relevance

**H1 rule:** The homepage H1 must include at least one of the primary positioning terms naturally. Acceptable examples:
- `"AI Strategy & Digital Transformation Advisory"`
- `"Executive Advisory for AI Strategy and Enterprise Transformation"`
- A hybrid that integrates a term without sounding forced

**What the homepage must NOT do:**
- Lead with Agile coaching or Scrum methodology as the primary framing
- Use a generic consulting tagline with no positioning specificity
- Omit AI Strategy from the H1 or the first 100 words

---

## 8. Advisory Page Positioning Map

The advisory offering is consolidated into a single `/advisory/` page with four anchor-based practice sections (Phase 7 architecture). All advisory sub-pages (`/advisory/ai-strategy/`, `/advisory/digital-transformation/`, `/advisory/ai-adoption/`, `/advisory/enterprise-agility/`) were deleted in Phase 8 (2026-05-13). `/advisory/` is the only advisory route. All SEO, internal linking and content rules below apply to the consolidated page and its anchor sections.

Each practice section has a defined primary search intent. The `<h2>` heading of each section, the meta description and body copy of `/advisory/` must collectively cover all four practices.

### `/advisory` (consolidated hub)
- **Primary intent:** AI Strategy and Transformation Advisory hub
- **Primary keyphrase:** Enterprise Transformation Advisory (or AI Strategy & Digital Transformation Advisory)
- **Secondary:** AI Strategy Advisory, Digital Transformation Advisory, Operational Excellence Advisory, AI Adoption Advisory, Operating Model Design
- **Purpose:** Single entry point for all four advisory practices; must allow visitors to self-identify which practice is relevant and navigate to the corresponding anchor section

### `/advisory/#ai-strategy`
- **Primary intent:** AI Strategy Advisor
- **Primary keyphrase:** AI Strategy Advisor (or AI Strategy Consultant)
- **Secondary:** AI governance, AI roadmap, AI operating model, enterprise AI strategy
- **Purpose:** Converts visitors searching for an AI strategy advisor; the section H2 and opening copy carry the primary keyphrase weight for this practice

### `/advisory/#digital-transformation`
- **Primary intent:** Digital Transformation Advisor
- **Primary keyphrase:** Digital Transformation Advisor (or Digital Transformation Consultant)
- **Secondary:** operating model transformation, digital operating model, enterprise digital strategy
- **Purpose:** Converts visitors searching for a digital transformation advisor

### `/advisory/#operational-excellence`
- **Primary intent:** Operational Excellence Advisory
- **Primary keyphrase:** Operational Excellence (or Operational Excellence Advisor)
- **Secondary:** OKRs, QBRs, execution governance, delivery discipline, organizational agility, operating model agility
- **Note:** "Operational Excellence" is the preferred label for this practice. "Enterprise Agility" may appear as a secondary search theme in Insights content but must not be used as the primary label for this advisory section. The focus is execution systems, discipline and measurable delivery — not Scrum or agile coaching.

### `/advisory/#ai-adoption`
- **Primary intent:** AI Adoption Strategy
- **Primary keyphrase:** AI Adoption Strategy (or AI Adoption Advisor)
- **Secondary:** AI readiness, AI use-case prioritization, AI enablement, enterprise AI rollout

### `/about`
- **Primary intent:** Executive AI and Digital Transformation Profile
- **Primary keyphrase:** AI Strategy and Digital Transformation Advisor (combined with name)
- **Secondary:** enterprise transformation, banking digital transformation, executive advisory
- **Purpose:** Builds credibility, E-E-A-T signals, and trust for visitors evaluating the advisor before contacting

### `/contact`
- **Primary intent:** Contact an AI Strategy Advisor
- **Primary keyphrase:** Book an AI Strategy Advisory Call
- **Secondary:** contact digital transformation advisor, executive advisory consultation
- **Note:** Keep the page concise. The form or contact mechanism is the conversion goal.

### `/case-studies`
- **Primary intent:** Digital Transformation Case Studies
- **Primary keyphrase:** Digital Transformation Case Studies (or AI Transformation Case Studies)
- **Secondary:** operational excellence case study, banking transformation, AI strategy results, enterprise transformation outcomes
- **Note:** Only include real, documented experiences. Do not invent clients or outcomes.

### `/speaking`
- **Primary intent:** AI Strategy Speaker
- **Primary keyphrase:** AI Strategy Speaker (or Digital Transformation Speaker)
- **Secondary:** enterprise transformation keynote, AI leadership talk, executive speaker
- **Note:** Only include real speaking engagements. Do not invent events.

### `/newsletter`
- **Primary intent:** AI Strategy Insights Newsletter
- **Primary keyphrase:** AI Strategy Newsletter (or Digital Transformation Newsletter)
- **Secondary:** enterprise transformation insights, AI leadership newsletter

### `/ai-assessment`
- **Primary intent:** AI Readiness Assessment
- **Primary keyphrase:** AI Readiness Assessment (or AI Maturity Assessment)
- **Secondary:** enterprise AI assessment, AI strategy evaluation, AI adoption readiness

---

## 9. E-E-A-T Guidance

Google evaluates content against Experience, Expertise, Authoritativeness and Trustworthiness. Every page must support these signals.

### Experience
- Reference real transformation contexts: banking, financial services, technology, product organizations
- Reference real disciplines: operating models, OKRs, QBRs, portfolio governance, agile delivery
- Use specific and concrete language — not vague generalities

### Expertise
- Demonstrate depth of advisory knowledge through insights and service descriptions
- Avoid presenting advisory as entry-level coaching or generic facilitation
- Reference enterprise-scale contexts, not startup or SME framing

### Authoritativeness
- Build domain authority through the Insights hub — consistent, substantive editorial content
- Use consistent positioning terms across all pages
- Maintain coherent internal linking between advisory, insights, about and contact

### Trustworthiness
- Legal pages must be present and complete
- Contact information must be accurate
- No invented client names, fake testimonials, fake metrics, or unverified credentials
- No confidential client information
- No exaggerated AI outcome claims
- The legal notice, privacy policy, cookie policy and terms must be linked from the footer on every page

**What must never be invented:**
- Client or organization names
- Engagement outcomes or financial results attributed to specific clients
- Testimonials or quotes from clients
- Credentials, certifications or awards not held
- Speaking engagements not attended
- Publications not authored

---

## 10. Internal Linking Rules

Internal links distribute authority and help Google understand site structure. Follow these rules:

**Required cross-links:**
- Homepage → `/advisory`, `/advisory/#ai-strategy`, `/advisory/#operational-excellence`, `/insights`, `/contact`
- `/advisory` → each practice anchor (`#ai-strategy`, `#digital-transformation`, `#operational-excellence`, `#ai-adoption`), `/contact`, `/insights`
- `/advisory/#ai-strategy` section → contextual links to `/insights/ai-strategy/`, `/contact`
- `/advisory/#digital-transformation` section → contextual links to `/insights/digital-transformation/`, `/contact`
- `/advisory/#operational-excellence` section → contextual links to `/insights/operational-excellence/`, `/contact`
- `/advisory/#ai-adoption` section → contextual links to `/ai-assessment`, `/contact`
- `/insights` → relevant advisory anchor sections, `/about`
- Each insight article → relevant advisory anchor section (`/advisory/#ai-strategy`, etc.), related insight category
- `/about` → `/advisory`, `/contact`, `/speaking`
- `/contact` → `/advisory`

**Anchor text rules:**
- Use descriptive anchor text that explains the destination: `"Explore AI Strategy Advisory"`, not `"click here"` or `"learn more"` alone
- Anchor text should naturally include secondary keywords where appropriate
- Do not link to pages that do not exist yet — use plain text until the target page is created
- Do not repeat the same anchor text for different destinations on the same page
- Maximum 6–8 contextual internal links per page (excluding navigation and footer)

---

## 11. Content Tone

All content on the site must reflect this voice:

**The tone is:**
- Executive — written for C-level and director-level readers
- Strategic — connects technology choices to business outcomes
- Clear — no jargon without explanation; no walls of text
- Credible — grounded in real-world transformation experience
- Direct — states the value proposition without hesitation
- Premium — confident, not boastful; authoritative, not academic

**The tone is NOT:**
- Hype-driven — no "revolutionary AI", "transformative disruption", "game-changing"
- Generic marketing copy — no "we're passionate about helping you succeed"
- Coaching-oriented — this is executive advisory, not personal development facilitation
- Startup-casual — no informal CTAs, no emoji, no conversational filler
- Academic — no dense methodology language without business context

**Writing rules:**
- Short paragraphs — maximum 4 lines on desktop
- Active voice — "I help organizations build AI strategies" not "AI strategies are built for organizations"
- Concrete language — reference operating models, OKRs, QBRs, transformation programs — not abstract concepts alone
- No lorem ipsum or placeholder copy on any live or staged page

---

## 12. Anti-Patterns

These patterns actively harm the site's SEO positioning and brand credibility. Avoid them in all content and implementation:

| Anti-pattern | Why it is harmful |
|---|---|
| Keyword stuffing | Reduces readability; triggers Google spam signals |
| Thin pages with under 200 words of body text | Low-value pages dilute domain authority |
| Duplicate `<title>` or `<meta description>` across pages | Confuses Google about which page to rank |
| Generic AI buzzwords ("AI-powered", "cutting-edge AI") | Signals low expertise; indistinguishable from thousands of similar sites |
| Overpromising AI outcomes ("AI will transform everything") | Reduces trust; contradicts E-E-A-T principles |
| Leading with Scrum or Agile coaching as the main message | Positions the site as a coaching business, not executive advisory |
| Invented client names, case studies or metrics | Legal and reputational risk; violates E-E-A-T |
| Pages that exist only in navigation but return 404 | Breaks crawl paths; harms user trust; wastes crawl budget |
| H1 that contains no primary keyphrase | The most important on-page SEO signal is wasted |
| Multiple `<h1>` elements per page | Dilutes heading authority; invalid semantics |
| `noindex` on important landing pages | Prevents Google from indexing conversion-critical content |
| Hreflang pointing to wrong pages | Sends incorrect language signals; wastes international SEO potential |

---

## 13. Future Content Hub Direction

The Insights section should evolve into a structured content hub. Each hub is a pillar topic supported by multiple articles, with consistent internal linking back to the relevant advisory page.

| Hub | Target advisory section | Example article topics |
|---|---|---|
| AI Strategy | `/advisory/#ai-strategy` | AI governance frameworks, AI roadmap design, AI operating models, AI strategy for banking |
| Digital Transformation | `/advisory/#digital-transformation` | Operating model redesign, digital strategy execution, transformation program governance |
| Operating Models | `/advisory`, `/advisory/#digital-transformation` | Intelligent operating models, platform operating models, outcome-based operating structures |
| Operational Excellence | `/advisory/#operational-excellence` | OKRs, QBRs, execution governance, delivery discipline, operational discipline, continuous improvement |
| Strategy Execution | `/advisory/#operational-excellence` | Translating strategy to delivery, OKR-linked execution, governance for transformation |
| AI Governance | `/advisory/#ai-strategy`, `/advisory/#ai-adoption` | AI risk, responsible AI, AI accountability frameworks |
| Banking & Financial Services Transformation | `/advisory/#ai-strategy`, `/advisory/#digital-transformation` | AI in banking, digital operating models for financial services, transformation in regulated industries |
| AI Adoption | `/advisory/#ai-adoption` | AI readiness assessment, use-case prioritization, change management for AI, scaling AI beyond pilots |

**Content hub rules:**
- Each hub page (category index) must have a clear H1 aligned to its primary keyphrase
- Each article within a hub must link back to the hub index and to the relevant advisory page
- Hub topics must not overlap in their primary keyphrase — keep them distinct
- Publish substantive content (800+ words) rather than thin posts
- Do not create hub pages until at least two articles exist within the hub
