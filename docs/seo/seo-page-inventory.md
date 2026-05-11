# SEO Page Inventory
## facundogangemi.com — Post Phase 4 Implementation

---

## 1. Purpose of This Document

This inventory documents the current SEO configuration of every page on `facundogangemi.com` as of Phase 4 implementation (Phase 4a through Phase 4d).

**What this document is:**
- A reference snapshot of each page's SEO state: title, description, canonical URL, H1, search intent, structured data and indexability.
- A coordination tool to prevent duplicate titles, duplicate meta descriptions and conflicting search intent across pages.
- A change log anchor — update this file whenever a page is added, deleted or significantly changed.

**What this document is not:**
- It does not control runtime behaviour. Metadata is defined in page `.astro` files and `src/data/site.ts`.
- It does not replace `docs/seo/google-positioning-guardrails.md` (SEO strategy) or `docs/seo/article-seo-guidelines.md` (article-level rules).

**Update triggers:**
- A new page is added or removed.
- A page title, meta description, canonical URL, H1 or search intent changes.
- Structured data is added, modified or removed from any page.
- A placeholder page is promoted to a full strategic landing page.

---

## 2. Global SEO Configuration

| Property | Value |
|---|---|
| Site URL | `https://facundogangemi.com` |
| Canonical domain | `https://facundogangemi.com` (never `github.io`) |
| Default title (no page title supplied) | `Facundo Gangemi — AI Strategy & Enterprise Transformation Advisor` |
| Title suffix pattern | `{Page Title} \| Facundo Gangemi` |
| Default meta description | `Executive advisory for AI Strategy, Digital Transformation and Operating Models. Helping enterprise leaders build clarity and measurable business impact.` (153 chars) |
| Default OG image | `/assets/og/og-home.webp` |
| OG image dimensions | 1200 × 630 px |
| OG image format | WebP (converted from SVG source via `sharp`; SVG retained as editable source) |
| `og:image:alt` | `Facundo Gangemi — AI Strategy & Transformation Advisory` |
| Twitter card type | `summary_large_image` |
| Twitter handle | `@facundogangemi` |
| `theme-color` | `#05070D` |
| hreflang — all pages | `hreflang="en"` → canonical URL; `hreflang="x-default"` → `/` |
| hreflang — homepage only | Additionally `hreflang="es"` → `https://facundogangemi.com/es/` |
| Sitemap | Generated via `@astrojs/sitemap`; available at `/sitemap-index.xml` |
| `robots.txt` | Present at `/robots.txt`; `Allow: /` for all agents; points to sitemap |
| Preload hint (homepage) | `<link rel="preload" as="image" href="/assets/portraits/facundo-hero-executive.webp" type="image/webp">` |
| Font loading | `<link rel="stylesheet">` in `<head>` (Inter 400/500/600/700, Manrope 500/600/700/800); CSS `@import` removed |

### Homepage structured data

Three JSON-LD schemas are emitted on the homepage (`/`) only:

| Schema type | Key fields |
|---|---|
| `Person` | name, url, jobTitle, description, sameAs (LinkedIn) |
| `WebSite` | name, url, description |
| `ProfessionalService` | name, url, description, areaServed (Europe, Latin America), serviceType (5 advisory services) |

No structured data is emitted on interior pages beyond what is inherited through BaseLayout (none currently).

---

## 3. Page Inventory

### Homepage

| Property | Value |
|---|---|
| Route | `/` |
| Page type | Homepage |
| Language | `en` |
| Status | **Final** |
| SEO title | `AI Strategy & Transformation Advisor \| Facundo Gangemi` (54 chars displayed) |
| Meta description | `Executive advisory for AI Strategy, Digital Transformation and Operating Models. Helping enterprise leaders build clarity and measurable business impact.` (153 chars) |
| Canonical URL | `https://facundogangemi.com/` |
| H1 | `AI Strategy & Digital Transformation Advisory.` |
| Main H2s | Strategic Advisory (sr-only), Experience and authority (sr-only), Industries Served, Strategic Perspectives, Insights |
| Primary search intent | Find an AI strategy and digital transformation advisor |
| Primary keyword | AI Strategy & Digital Transformation Advisor |
| Secondary keywords | Enterprise Transformation, Operating Models, Business Impact, Banking & Financial Services |
| OG title | Same as SEO title |
| OG description | Same as meta description |
| OG image | `https://facundogangemi.com/assets/og/og-home.webp` |
| Indexable | Yes |
| Structured data | Person, WebSite, ProfessionalService |
| Key internal links | `/advisory`, `/advisory/ai-strategy`, `/advisory/digital-transformation`, `/advisory/enterprise-agility`, `/advisory/ai-adoption`, `/insights`, `/contact`, `/about`, `/case-studies` |
| Improvement notes | Consider adding `og:locale:alternate` for `es_ES`. Consider adding `email` to Person schema if intentionally public. |

---

### /es/ — Spanish placeholder

| Property | Value |
|---|---|
| Route | `/es/` |
| Page type | Language redirect / placeholder |
| Language | `es` |
| Status | **Placeholder** — Spanish version not yet developed |
| SEO title | `Estrategia de IA y Transformación Empresarial \| Facundo Gangemi` |
| Meta description | `Asesoría ejecutiva en Estrategia de IA, Transformación Digital y Modelos Operativos Inteligentes.` |
| Canonical URL | `https://facundogangemi.com/es/` |
| H1 | `Versión en español en desarrollo.` |
| Primary search intent | Spanish-language AI strategy advisory |
| Primary keyword | Estrategia de IA |
| Indexable | **No — temporarily `noindex, nofollow`** (set Phase 4d; thin placeholder content; re-enable when Spanish version is developed) |
| Structured data | Person (inherited via BaseLayout) |
| Improvement notes | `noIndex={true}` added to BaseLayout call in Phase 4d. hreflang from homepage to `/es/` remains in place so hreflang structure is preserved. Remove `noIndex` when full Spanish content is ready. |

---

### /about/

| Property | Value |
|---|---|
| Route | `/about/` |
| Page type | About / Profile |
| Language | `en` |
| Status | **Placeholder** — content present, can be expanded |
| SEO title | `About Facundo Gangemi \| Facundo Gangemi` (40 chars) |
| Meta description | `AI Strategy and Digital Transformation Advisor. Enterprise experience across banking, financial services, technology and operating model transformation.` (151 chars) |
| Canonical URL | `https://facundogangemi.com/about/` |
| H1 | `Facundo Gangemi — AI Strategy & Digital Transformation Advisor` |
| Primary search intent | Executive AI and Digital Transformation profile and background |
| Primary keyword | AI Strategy and Digital Transformation Advisor |
| Secondary keywords | Enterprise transformation, Banking digital transformation, Executive advisory |
| Indexable | Yes |
| Structured data | Person (inherited via BaseLayout) |
| Key internal links | `/contact`, `/advisory` |
| Improvement notes | H1 updated in Phase 4d to include primary keyphrase. Title produces a visible duplication (`About Facundo Gangemi \| Facundo Gangemi`) — acceptable for a placeholder; address when full About page is written. |

---

### /advisory/

| Property | Value |
|---|---|
| Route | `/advisory/` |
| Page type | Service hub |
| Language | `en` |
| Status | **Placeholder** — structural content present, expansion recommended |
| SEO title | `Enterprise Transformation Advisory \| Facundo Gangemi` (52 chars) |
| Meta description | `Enterprise advisory spanning AI Strategy, Digital Transformation, Enterprise Agility and AI Adoption — operating models and measurable business impact.` (151 chars) |
| Canonical URL | `https://facundogangemi.com/advisory/` |
| H1 | `Enterprise Transformation Advisory` |
| Primary search intent | Advisory hub for enterprise transformation |
| Primary keyword | Enterprise Transformation Advisory |
| Secondary keywords | AI Strategy Advisory, Digital Transformation Advisory, Operating Model Design |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/advisory/ai-strategy`, `/advisory/digital-transformation`, `/advisory/enterprise-agility`, `/advisory/ai-adoption`, `/contact` |
| Improvement notes | Meta description fixed in Phase 4d — 151 chars, within the 145–155 target range. |

---

### /advisory/ai-strategy/

| Property | Value |
|---|---|
| Route | `/advisory/ai-strategy/` |
| Page type | Service landing page |
| Language | `en` |
| Status | **Placeholder** — structural content present, expansion recommended |
| SEO title | `AI Strategy Advisory \| Facundo Gangemi` (39 chars) |
| Meta description | `AI Strategy Advisory for enterprise leaders. Build AI strategies connected to operating models, governance frameworks and measurable business outcomes.` (151 chars) |
| Canonical URL | `https://facundogangemi.com/advisory/ai-strategy/` |
| H1 | `AI Strategy Advisory` |
| Primary search intent | Find an AI strategy advisor or consultant |
| Primary keyword | AI Strategy Advisory (also: AI Strategy Consultant) |
| Secondary keywords | AI governance, AI roadmap, AI operating model, enterprise AI strategy |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/advisory`, `/contact`, `/ai-assessment` (secondary CTA) |
| Improvement notes | Placeholder content — should be expanded into a full advisory service page with approach, scope, outcomes and a case reference. Links to `/insights/ai-strategy/` should be added once articles exist. |

---

### /advisory/digital-transformation/

| Property | Value |
|---|---|
| Route | `/advisory/digital-transformation/` |
| Page type | Service landing page |
| Language | `en` |
| Status | **Placeholder** |
| SEO title | `Digital Transformation Advisory \| Facundo Gangemi` (50 chars) |
| Meta description | `Digital Transformation Advisory for enterprise leaders. Design operating models that scale beyond the pilot and deliver measurable transformation outcomes.` (154 chars) |
| Canonical URL | `https://facundogangemi.com/advisory/digital-transformation/` |
| H1 | `Digital Transformation Advisory` |
| Primary search intent | Find a digital transformation advisor or consultant |
| Primary keyword | Digital Transformation Advisory (also: Digital Transformation Consultant) |
| Secondary keywords | Operating model transformation, Digital operating model, Enterprise digital strategy |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/advisory`, `/contact` |
| Improvement notes | Placeholder — needs full content expansion. Internal links to `/insights/digital-transformation/` should be added once articles exist. |

---

### /advisory/enterprise-agility/

| Property | Value |
|---|---|
| Route | `/advisory/enterprise-agility/` |
| Page type | Service landing page |
| Language | `en` |
| Status | **Placeholder** |
| SEO title | `Enterprise Agility Advisory \| Facundo Gangemi` (46 chars) |
| Meta description | `Enterprise Agility Advisory. Build adaptive operating models, strengthen OKR and QBR governance and improve execution discipline at enterprise scale.` (149 chars) |
| Canonical URL | `https://facundogangemi.com/advisory/enterprise-agility/` |
| H1 | `Enterprise Agility Advisory` |
| Primary search intent | Enterprise agility and operating model advisor |
| Primary keyword | Enterprise Agility Advisory |
| Secondary keywords | Organisational agility, Agile operating models, OKRs, QBRs, Portfolio governance |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/advisory`, `/contact` |
| Improvement notes | Placeholder — must not position primarily around Scrum or coaching. Framing is operating model agility, which current copy reflects. Expand with approach and outcomes. |

---

### /advisory/ai-adoption/

| Property | Value |
|---|---|
| Route | `/advisory/ai-adoption/` |
| Page type | Service landing page |
| Language | `en` |
| Status | **Placeholder** |
| SEO title | `AI Adoption Strategy \| Facundo Gangemi` (39 chars) |
| Meta description | `AI Adoption Strategy Advisory. Guide your organization from AI awareness through use-case prioritization to embedded, scalable AI practices and governance.` (155 chars) |
| Canonical URL | `https://facundogangemi.com/advisory/ai-adoption/` |
| H1 | `AI Adoption Strategy Advisory` |
| Primary search intent | AI adoption strategy and enablement advisory |
| Primary keyword | AI Adoption Strategy (also: AI Adoption Advisor) |
| Secondary keywords | AI readiness, AI use-case prioritisation, AI enablement, Enterprise AI rollout |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/advisory`, `/ai-assessment`, `/contact` |
| Improvement notes | Placeholder — links to `/ai-assessment` as a secondary CTA, which is a good cross-link. Full content expansion needed. |

---

### /contact/

| Property | Value |
|---|---|
| Route | `/contact/` |
| Page type | Contact / Conversion |
| Language | `en` |
| Status | **Functional** — contains real contact mechanisms |
| SEO title | `Book an Advisory Call \| Facundo Gangemi` (39 chars) |
| Meta description | `Book an advisory call with Facundo Gangemi — AI Strategy and Digital Transformation Advisor. Discuss transformation priorities and operating model focus.` (153 chars) |
| Canonical URL | `https://facundogangemi.com/contact/` |
| H1 | `Book an Advisory Call` |
| Primary search intent | Contact an AI strategy advisor; book a consulting call |
| Primary keyword | Book an AI Strategy Advisory Call |
| Secondary keywords | Contact digital transformation advisor, Executive advisory consultation |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/advisory` |
| Improvement notes | Meta description fixed in Phase 4d — 153 chars, within the 145–155 target range. |

---

### /case-studies/

| Property | Value |
|---|---|
| Route | `/case-studies/` |
| Page type | Content hub — placeholder |
| Language | `en` |
| Status | **Placeholder** — no case studies published yet |
| SEO title | `Transformation Case Studies \| Facundo Gangemi` (46 chars) |
| Meta description | `Transformation experiences in AI strategy, digital transformation, enterprise agility and operating model redesign across banking and financial services.` (152 chars) |
| Canonical URL | `https://facundogangemi.com/case-studies/` |
| H1 | `Transformation Case Studies` |
| Primary search intent | Digital transformation and AI strategy case studies |
| Primary keyword | Digital Transformation Case Studies |
| Secondary keywords | Enterprise agility case study, Banking transformation, AI strategy results |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/contact`, `/advisory` |
| Improvement notes | Placeholder — copy states case studies are being prepared. No invented content. When real case studies exist, each should link back to this hub. |

---

### /speaking/

| Property | Value |
|---|---|
| Route | `/speaking/` |
| Page type | Service — placeholder |
| Language | `en` |
| Status | **Placeholder** |
| SEO title | `AI Strategy Speaker \| Facundo Gangemi` (37 chars) |
| Meta description | `AI Strategy and Digital Transformation speaking for executive audiences — operating models, enterprise agility, AI governance and business impact.` (146 chars) |
| Canonical URL | `https://facundogangemi.com/speaking/` |
| H1 | `Speaking & Executive Events` |
| Primary search intent | Hire an AI strategy or digital transformation speaker |
| Primary keyword | AI Strategy Speaker |
| Secondary keywords | Enterprise transformation keynote, AI leadership talk, Executive speaker |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/contact`, `/about` |
| Improvement notes | Meta description fixed in Phase 4d — 146 chars, within the 145–155 target range. Only include real speaking engagements when available. |

---

### /newsletter/

| Property | Value |
|---|---|
| Route | `/newsletter/` |
| Page type | Newsletter — placeholder |
| Language | `en` |
| Status | **Placeholder** |
| SEO title | `AI Insights Newsletter \| Facundo Gangemi` (40 chars) |
| Meta description | `Strategic insights on AI strategy, digital transformation, operating models and enterprise agility — for executive leaders navigating organizational change.` (155 chars) |
| Canonical URL | `https://facundogangemi.com/newsletter/` |
| H1 | `AI & Transformation Insights` |
| Primary search intent | AI strategy and transformation insights newsletter |
| Primary keyword | AI Strategy Newsletter |
| Secondary keywords | Digital transformation newsletter, Enterprise transformation insights, AI leadership newsletter |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/insights`, `/contact` |
| Improvement notes | Subscription mechanism not yet live. Copy states this clearly. Update when newsletter platform is integrated. |

---

### /ai-assessment/

| Property | Value |
|---|---|
| Route | `/ai-assessment/` |
| Page type | Service / Assessment — placeholder |
| Language | `en` |
| Status | **Placeholder** |
| SEO title | `AI Readiness Assessment \| Facundo Gangemi` (41 chars) |
| Meta description | `AI Readiness Assessment to evaluate your organization's AI maturity, use-case readiness and operating model alignment for strategic AI adoption.` (143 chars) |
| Canonical URL | `https://facundogangemi.com/ai-assessment/` |
| H1 | `AI Readiness Assessment` |
| Primary search intent | Enterprise AI readiness and maturity assessment |
| Primary keyword | AI Readiness Assessment |
| Secondary keywords | Enterprise AI assessment, AI strategy evaluation, AI adoption readiness, AI maturity |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/contact`, `/advisory/ai-adoption` |
| Improvement notes | Placeholder — strong search intent target. Should be expanded into a detailed page describing the assessment methodology, scope and process. |

---

### /insights/

| Property | Value |
|---|---|
| Route | `/insights/` |
| Page type | Content hub — editorial index |
| Language | `en` |
| Status | **Hub** — no articles published yet |
| SEO title | `Strategic Insights \| Facundo Gangemi` (37 chars) |
| Meta description | `Strategic perspectives on AI strategy, digital transformation, operational excellence and execution discipline for enterprise leaders.` (133 chars) |
| Canonical URL | `https://facundogangemi.com/insights/` |
| H1 | `Insights` |
| Main H2s | Editorial categories (sr-only), Latest Insights / Coming Soon |
| Primary search intent | Read strategic perspectives on AI and transformation |
| Primary keyword | Strategic Insights |
| Secondary keywords | AI strategy perspectives, Transformation insights, Executive thought leadership |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/insights/ai-strategy/`, `/insights/digital-transformation/`, `/insights/operational-excellence/`, `/insights/strategy-execution/`, `/about` |
| Improvement notes | H1 is `Insights` — does not include a primary keyphrase. Title is `Strategic Insights` which is better. Consider aligning H1 to `Strategic Insights` for consistency. No articles published yet; listing shows "Coming Soon" state. |

---

### /insights/ai-strategy/

| Property | Value |
|---|---|
| Route | `/insights/ai-strategy/` |
| Page type | Content hub — category index |
| Language | `en` |
| Status | **Hub** — no articles in this category yet |
| SEO title | `AI Strategy Insights \| Facundo Gangemi` (38 chars) |
| Meta description | `Perspectives on how organizations define, govern and scale AI initiatives with clear business ownership and measurable impact.` (125 chars) |
| Canonical URL | `https://facundogangemi.com/insights/ai-strategy/` |
| H1 | `AI Strategy` |
| Primary search intent | Read AI strategy perspectives and articles |
| Primary keyword | AI Strategy |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Key internal links | `/insights/`, `/advisory/ai-strategy/` (once articles exist — currently no article links) |
| Improvement notes | H1 is `AI Strategy` while SEO title is `AI Strategy Insights`. Consider aligning H1. No articles published; shows "Coming Soon" state. |

---

### /insights/digital-transformation/

| Property | Value |
|---|---|
| Route | `/insights/digital-transformation/` |
| Page type | Content hub — category index |
| Language | `en` |
| Status | **Hub** — no articles yet |
| SEO title | `Digital Transformation Insights \| Facundo Gangemi` (49 chars) |
| Meta description | `Insights on digital transformation program design, operating model evolution, execution discipline and measurable business impact for enterprise leaders.` (153 chars) |
| Canonical URL | `https://facundogangemi.com/insights/digital-transformation/` |
| H1 | `Digital Transformation` |
| Primary keyword | Digital Transformation |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Improvement notes | Meta description expanded in Phase 4d — 153 chars, within the 145–155 target range. Aligned to digital transformation, operating model evolution, execution discipline and measurable business impact. |

---

### /insights/operational-excellence/

| Property | Value |
|---|---|
| Route | `/insights/operational-excellence/` |
| Page type | Content hub — category index |
| Language | `en` |
| Status | **Hub** — no articles yet |
| SEO title | `Operational Excellence Insights \| Facundo Gangemi` (49 chars) |
| Meta description | `Ideas on how organizations improve execution, reduce friction and create operating discipline through better processes, metrics and management systems.` (149 chars) |
| Canonical URL | `https://facundogangemi.com/insights/operational-excellence/` |
| H1 | `Operational Excellence` |
| Primary keyword | Operational Excellence |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Improvement notes | No articles yet. Hub page complies with guardrails for category structure. |

---

### /insights/strategy-execution/

| Property | Value |
|---|---|
| Route | `/insights/strategy-execution/` |
| Page type | Content hub — category index |
| Language | `en` |
| Status | **Hub** — no articles yet |
| SEO title | `Strategy Execution Insights \| Facundo Gangemi` (45 chars) |
| Meta description | `Perspectives on connecting strategy, OKRs, QBRs and portfolio decisions to execution routines that create measurable business outcomes.` (135 chars) |
| Canonical URL | `https://facundogangemi.com/insights/strategy-execution/` |
| H1 | `Strategy Execution` |
| Primary keyword | Strategy Execution |
| Indexable | Yes |
| Structured data | Person (inherited) |
| Improvement notes | No articles yet. Hub page complies with guardrails for category structure. |

---

### Legal pages

| Route | SEO title | Meta description | Status | Indexable | Notes |
|---|---|---|---|---|---|
| `/legal/legal-notice/` | `Legal Notice \| Facundo Gangemi` | `Legal notice and site ownership information for facundogangemi.com.` | Draft | Yes | Working draft — must be reviewed before treated as legally final. Contains placeholder fields. |
| `/legal/privacy-policy/` | `Privacy Policy \| Facundo Gangemi` | `Privacy policy for facundogangemi.com. Data protection and user rights.` | Draft | Yes | Working draft — review before finalizing. |
| `/legal/cookie-policy/` | `Cookie Policy \| Facundo Gangemi` | `Cookie policy for facundogangemi.com. Use of cookies and consent information.` | Draft | Yes | Working draft. No analytics or tracking scripts currently active. |
| `/legal/terms-and-conditions/` | `Terms and Conditions \| Facundo Gangemi` | `Terms and conditions for using facundogangemi.com.` | Draft | Yes | Working draft. |

All legal pages are linked from the footer on every page. All are currently indexed (no `noIndex` set). Legal pages are working drafts and must be reviewed by a qualified legal professional before being treated as final.

---

### /404/

| Property | Value |
|---|---|
| Route | `/404` (static file: `dist/404.html`) |
| Page type | Error page |
| Language | `en` |
| Status | Functional |
| SEO title | `Page Not Found \| Facundo Gangemi` |
| Meta description | `The page you are looking for does not exist or has been moved.` |
| Indexable | **No** — `noindex, nofollow` |
| Structured data | Person (inherited via BaseLayout) |
| Improvement notes | Correctly noindexed. Links to homepage. |

---

## 4. Placeholder Pages

The following pages were created during Phase 4a as structural placeholders. Each has real copy and correct metadata but does not yet have full strategic content depth.

| Route | Purpose | Future role | Primary keyword | Expand to full page? | Recommended expansion |
|---|---|---|---|---|---|
| `/advisory/` | Hub entry point for all advisory services | Full advisory overview with approach, domain experience and cross-links | Enterprise Transformation Advisory | Yes | Add full approach narrative, domain expertise section, and cross-links to service sub-pages and insights categories |
| `/advisory/ai-strategy/` | AI Strategy service entry point | Full service landing page | AI Strategy Advisory | Yes | Add advisory approach, AI governance framework, operating model integration, outcomes, and link to `/insights/ai-strategy/` |
| `/advisory/digital-transformation/` | Digital Transformation service entry point | Full service landing page | Digital Transformation Advisory | Yes | Add transformation approach, operating model evolution content, sector experience, and link to `/insights/digital-transformation/` |
| `/advisory/enterprise-agility/` | Enterprise Agility service entry point | Full service landing page | Enterprise Agility Advisory | Yes | Add agility beyond frameworks narrative, OKR/QBR governance content, portfolio alignment approach |
| `/advisory/ai-adoption/` | AI Adoption service entry point | Full service landing page | AI Adoption Strategy | Yes | Add AI adoption lifecycle, readiness framework, link to `/ai-assessment/` |
| `/about/` | Executive profile and background | Full executive profile with experience narrative, credentials, sector expertise | AI Strategy and Digital Transformation Advisor | Yes | Expand bio with 20+ years experience narrative, sector contexts, advisory philosophy, links to services and speaking |
| `/case-studies/` | Case studies hub | Library of real transformation experiences | Digital Transformation Case Studies | Yes — when real content available | Populate with documented transformation experiences; do not invent client names or metrics |
| `/speaking/` | Speaking enquiry page | Full speaking page with topics, formats and past engagements | AI Strategy Speaker | Yes | Add real speaking topics, formats (keynote, panel, workshop), event contexts once available |
| `/newsletter/` | Newsletter landing page | Newsletter signup with subscription mechanism | AI Strategy Newsletter | Yes — when platform ready | Integrate newsletter platform (configured in `SITE.makeNewsletterWebhook`); add subscription form |
| `/ai-assessment/` | AI Readiness Assessment entry point | Full assessment description page | AI Readiness Assessment | Yes | Expand with methodology, scope, what is assessed, outcomes format, timeline, and how to engage |
| `/es/` | Spanish language placeholder | Full Spanish version of the site | Estrategia de IA | Yes — when Spanish content is ready | Either translate the full site or noindex this page until translation is complete |

---

## 5. Insights and Article SEO Readiness

### Current state

The Insights section has four category hub pages and one main index page, all structurally complete:

| Hub route | Title | Status |
|---|---|---|
| `/insights/` | Strategic Insights | Active hub — no articles yet |
| `/insights/ai-strategy/` | AI Strategy Insights | Active hub — no articles yet |
| `/insights/digital-transformation/` | Digital Transformation Insights | Active hub — no articles yet |
| `/insights/operational-excellence/` | Operational Excellence Insights | Active hub — no articles yet |
| `/insights/strategy-execution/` | Strategy Execution Insights | Active hub — no articles yet |

**Individual articles:** None published yet. The article template (`src/pages/insights/[slug].astro`) is implemented and ready.

### Article SEO requirements

All articles published to `/insights/` must follow `docs/seo/article-seo-guidelines.md` before publication. Key requirements:

- Assign to one of the eight defined content hubs.
- Title under 60 chars including ` | Facundo Gangemi` suffix.
- Meta description 120–155 chars.
- Primary keyphrase in title, H1, and first 100 words.
- Article JSON-LD (`Article` or `BlogPosting` schema) — not yet validated end-to-end.
- Internal links: at minimum one link to the relevant advisory page and one back to the category hub.
- Pre-publish checklist in `docs/seo/article-seo-guidelines.md` must be completed before any article goes live.

### Article JSON-LD validation status

Article JSON-LD (`Article` schema) has **not yet been validated end-to-end** because no articles have been published. The `[slug].astro` template exists but its structured data output must be confirmed with Google's Rich Results Test tool when the first article is published.

### Recommended first article

Publish one substantive article (800+ words) in the **AI Strategy** hub (`/insights/ai-strategy/`) to validate:

1. The full article template renders correctly.
2. Article JSON-LD (`Article` schema) is valid in Google Rich Results Test.
3. The category hub (`/insights/ai-strategy/`) correctly lists the article.
4. Internal links between article → hub → advisory page work as expected.
5. OG image, Twitter card and social preview work as expected.

Suggested topic: `"Why Most AI Strategies Fail Before Execution"` — targets a known executive search intent, aligns with the AI Strategy hub, and connects naturally to `/advisory/ai-strategy/`.

---

## 6. Structured Data Inventory

### Currently implemented

| Schema type | Where | Key fields |
|---|---|---|
| `Person` | All pages (via BaseLayout) | `name`, `url`, `jobTitle`, `description`, `sameAs` (LinkedIn) |
| `WebSite` | Homepage only (via `structuredData` prop) | `name`, `url`, `description` |
| `ProfessionalService` | Homepage only (via `structuredData` prop) | `name`, `url`, `description`, `areaServed`, `serviceType` (5 values) |

### Not yet implemented

| Schema type | Recommended for | Notes |
|---|---|---|
| `Article` / `BlogPosting` | Each `/insights/[slug]/` article | Template exists but not yet validated. Required before first article goes live. |
| `BreadcrumbList` | Interior advisory and insights pages | Improves Google's understanding of site hierarchy. Add when advisory pages are expanded to full content. |
| `FAQPage` | Advisory or assessment pages only if real FAQ content exists | Do not add unless genuine Q&A content is written. Never invent FAQ entries for SEO purposes alone. |

---

## 7. Internal Linking Notes

### Main navigation

| Nav item | Route | Dropdown children |
|---|---|---|
| Advisory | `/advisory` | AI Strategy, Digital Transformation, Enterprise Agility, AI Adoption |
| Case Studies | `/case-studies` | — |
| Insights | `/insights` | — |
| About | `/about` | — |
| CTA: Book Advisory Call | `/contact` | — |

### Footer navigation

| Column | Links |
|---|---|
| Advisory | AI Strategy Advisory, Digital Transformation, Enterprise Agility, AI Adoption & Enablement, Executive Advisory Hub |
| Resources | Insights, Case Studies, Speaking, AI Assessment, Newsletter |
| About | About Facundo, Contact |
| Legal (bottom) | Legal Notice, Privacy Policy, Cookie Policy, Terms & Conditions |

### Advisory page cross-links (current)

| Page | Links to |
|---|---|
| `/advisory/` | All four sub-pages, `/contact` |
| `/advisory/ai-strategy/` | `/advisory`, `/contact`, `/advisory/ai-adoption` (secondary CTA) |
| `/advisory/digital-transformation/` | `/advisory`, `/contact` |
| `/advisory/enterprise-agility/` | `/advisory`, `/contact` |
| `/advisory/ai-adoption/` | `/advisory`, `/ai-assessment`, `/contact` |

### Required cross-links not yet present

Per `docs/seo/google-positioning-guardrails.md` (Section 10), the following required links are not yet in place — primarily because target pages (Insights articles) do not yet exist:

| Source page | Missing link |
|---|---|
| `/advisory/ai-strategy/` | → `/insights/ai-strategy/` (when articles exist) |
| `/advisory/digital-transformation/` | → `/insights/digital-transformation/` (when articles exist) |
| `/advisory/enterprise-agility/` | → `/insights/strategy-execution/` (when articles exist) |
| `/insights/` | → relevant advisory pages (links should be within article cards or intro copy) |
| Each insight article | → relevant advisory page, related insight category |
| `/about/` | → `/speaking/` (currently not linked) |

### Internal linking risks

- `/es/` has no internal links to English advisory pages. If kept indexed, it is an orphan for cross-language navigation.
- `/newsletter/` links to `/insights` but has no back-link from `/insights` to `/newsletter`. Consider adding a subscribe CTA to the Insights index.

---

## 8. Known Remaining Recommendations

These are non-blocking improvements identified during Phase 4. None are urgent but all should be addressed before major public promotion of the site.

| Priority | Item | Notes |
|---|---|---|
| ~~High~~ | ~~Fix `/advisory/` meta description (165 chars)~~ | **Fixed Phase 4d** — now 151 chars. |
| ~~High~~ | ~~Fix `/contact/` meta description (156 chars)~~ | **Fixed Phase 4d** — now 153 chars. |
| ~~High~~ | ~~Fix `/speaking/` meta description (157 chars)~~ | **Fixed Phase 4d** — now 146 chars. |
| ~~High~~ | ~~Expand `/insights/digital-transformation/` meta description (108 chars)~~ | **Fixed Phase 4d** — now 153 chars. |
| ~~High~~ | ~~Fix `/about/` H1 — does not include a primary keyphrase~~ | **Fixed Phase 4d** — H1 is now `Facundo Gangemi — AI Strategy & Digital Transformation Advisor`. |
| ~~Medium~~ | ~~Consider `noIndex` on `/es/` until Spanish content is ready~~ | **Fixed Phase 4d** — `noIndex={true}` added; hreflang structure preserved. Remove when Spanish content is ready. |
| Medium | Validate article JSON-LD with Google Rich Results Test on first article publish | Article schema not yet confirmed end-to-end. |
| Medium | Validate OG / social card previews with LinkedIn Post Inspector, Facebook Sharing Debugger and Twitter Card Validator after deployment | WebP generated — confirm actual social preview rendering. |
| Medium | Expand placeholder advisory pages into full strategic landing pages | Particularly `/advisory/ai-strategy/`, `/advisory/digital-transformation/` — highest organic traffic potential. |
| Medium | Add `og:locale:alternate` for `es_ES` on the homepage | Minor signal improvement for international SEO. |
| Low | Consider adding `email` to Person JSON-LD on homepage | Only if intentionally public-facing — check preference before implementing. |
| Low | Consider `BreadcrumbList` JSON-LD on advisory and insights pages | Useful once pages have full content and depth. |
| Low | Add subscribe CTA on `/insights/` linking to `/newsletter/` | Improves cross-link between content hub and newsletter. |
| Low | Consider `SearchAction` in WebSite schema | Only if site search is ever implemented. |
| Low | Add speaking engagements to `/speaking/` once real events exist | Do not invent past engagements. |

---

## 9. Maintenance Rules

These rules apply to all future changes to pages, routes, metadata and content:

1. **Update this inventory** whenever a page is added, deleted or significantly changed in title, description, H1, canonical URL, search intent or structured data.

2. **No duplicate SEO titles.** Every strategic page must have a unique `<title>`. If a title is already used by another page, change one before publishing.

3. **No duplicate meta descriptions.** Every strategic page must have a unique `<meta name="description">`. Run a duplicate check in this inventory before adding or changing descriptions.

4. **Every strategic page must have one clear primary search intent.** Do not try to optimise a single page for more than one primary intent.

5. **Meta descriptions must be 120–155 characters.** Check length before publishing. Update this inventory with the confirmed character count.

6. **Placeholder pages must be replaced with full content before major public promotion** — including before social advertising, email campaigns or PR that would drive significant traffic.

7. **Legal pages must be reviewed by a qualified legal professional** before being treated as final. The current legal pages are working drafts.

8. **All new articles must complete the pre-publish checklist** defined in `docs/seo/article-seo-guidelines.md` before going live.

9. **Do not add structured data that claims unsupported facts** — no invented client names, fake testimonials, unverified metrics, credentials not held.

10. **Confirm internal links point to existing routes** before publishing any new page. Do not link to pages that return 404.
