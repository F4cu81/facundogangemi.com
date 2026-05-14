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
| Status | **Phase 10 complete** — Home remediation Phase 1 applied (2026-05-14) |
| SEO title | `AI Strategy & Transformation Advisor \| Facundo Gangemi` (54 chars displayed) — unchanged |
| Meta description | `Executive advisory for AI Strategy, Digital Transformation and Operating Models. Helping enterprise leaders build clarity and measurable business impact.` (153 chars) — unchanged |
| Canonical URL | `https://facundogangemi.com/` — unchanged |
| H1 | `AI Strategy & Digital Transformation Advisory.` — unchanged, unique |
| Main H2s | Strategic advisory for intelligent transformation. (Advisory Grid §3), A structured path from AI ambition to operating model reality. (Signature Framework §4), Industries Served (§5), Experience and authority (Metrics §6 — sr-only), **Transformation in Practice** (Case Preview §7), Executive advisory grounded in real transformation. (About Snapshot §8), Ready to turn AI and digital transformation into measurable business impact? (Final CTA §10) |
| Primary search intent | Find an AI strategy and digital transformation advisor |
| Primary keyword | AI Strategy & Digital Transformation Advisor |
| Secondary keywords | Enterprise Transformation, Operating Models, Business Impact, Banking & Financial Services, Signature Framework, Discover Design Deploy Evolve |
| OG title | Same as SEO title |
| OG description | Same as meta description |
| OG image | `https://facundogangemi.com/assets/og/og-home.webp` |
| Indexable | Yes |
| Structured data | Person (with `image` field added — Phase 10), WebSite, ProfessionalService (with `@id` added — Phase 10) |
| Key internal links | `/advisory/` (Signature Framework CTA + Final CTA secondary), `/advisory/#ai-strategy`, `/advisory/#digital-transformation`, `/advisory/#operational-excellence`, `/advisory/#ai-adoption`, `/about/` (About Snapshot CTA), `/insights`, `/contact/` |
| Improvement notes | **Phase 10 (2026-05-14):** Home remediation Phase 1 applied based on 7-agent multi-agent audit. Changes: (1) Section resequenced — TiP moved from §5 to §7, after Industries Served (§5) and Metrics (§6). (2) TiP case copy rewritten — ambiguous "10–15% targeted" metric removed, challenge reframed as business/regulatory pressure, outcome restructured to lead with organizational change. Case tag updated to "BANKING & FINANCIAL SERVICES · AI-ENABLED ENGINEERING GOVERNANCE". (3) AI diagram SVG updated — viewBox expanded to 340×280, center shifted to (170,138), all node positions recalculated, label font-size raised from 10.5 to 12, center label "AI Governance" raised from 16/11px to 18/13px, inner circle opacity strengthened (0.09 fill, 0.40 stroke). (4) Advisory Grid background changed from `#05070D` to `#080A10` to break triple-dark opening. (5) Advisory card outcome italic removed (now font-semibold upright). (6) Hero pull quote replaced: "AI adoption fails when it is treated as a tool rollout instead of an operating model redesign." (7) Final CTA secondary changed from "Contact Me → /contact" to "See Advisory Services → /advisory/". (8) "10+ Teams Enabled" KPI replaced with "9 Countries / International transformation footprint". (9) "€10M Estimated Portfolio Scope" KPI replaced with "5+ AI Opportunities Prioritized / Connecting business needs, governance requirements, operating model constraints and measurable business impact." (10) Person JSON-LD `image` field added. (11) ProfessionalService JSON-LD `@id` field added. No /case-studies/ body link added — case study page not yet ready. |

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
| Status | **Phase 8b complete** — About UX/UI + SEO Alignment validated (2026-05-13) |
| SEO title | `About \| AI Strategy Advisor \| Facundo Gangemi` (45 chars) |
| Meta description | `Facundo Gangemi advises enterprise leaders on AI strategy, digital transformation and operating models across banking, financial services and technology.` (153 chars) |
| Canonical URL | `https://facundogangemi.com/about/` |
| H1 | `AI Strategy & Transformation Leader` |
| Main H2s | AI Strategy Rooted in Enterprise Transformation, Strategic Capabilities, Domain Expertise, International Transformation Footprint, Experience Across Enterprise Environments, My Approach, Why It Matters Now, Let's connect strategy with operating reality. |
| Important H3 | `Operational Excellence & Execution` — present at H3 level inside Domain Expertise (from `EXPERIENCE_ITEMS[1].category`) |
| Primary search intent | Executive AI and Digital Transformation profile and background |
| Primary keyword | AI Strategy Advisor |
| Secondary keywords | Enterprise transformation, Banking digital transformation, Executive advisory, Operating Models, Operational Excellence |
| Indexable | Yes |
| OG image | `/assets/og/og-about.webp` — dedicated About OG image, confirmed at `public/assets/og/og-about.webp` |
| Structured data | Person (BaseLayout global) + Person (page-level via `structuredData` prop — `url: https://facundogangemi.com/about/`, jobTitle, description, image, knowsAbout, areaServed, worksFor). Dual Person schema accepted — complementary, not conflicting. |
| Key internal links | `/contact`, `/advisory/`, `/insights/`, `/speaking/` |
| SEO scores | SEO Page Audit: 75% → **90%**. Google Positioning Audit: 80% → **90%**. Combined SEO Readiness: 77% → **90%**. No must-fix SEO issues remain. |
| UX/UI scores | UX/UI alignment: 88% → **92%**. No must-fix UX/UI issues remain. Hero, card system, contrast, CTA hierarchy, internal links and focus states validated. |
| Improvement notes | **Phase 8b (2026-05-13):** Full About page UX/UI + SEO alignment completed. OG image replaced from fallback `og-home.webp` to dedicated `og-about.webp`. Title fixed from duplicated `About Facundo Gangemi \| Facundo Gangemi` to `About \| AI Strategy Advisor \| Facundo Gangemi` (45 chars, no duplication). Meta description corrected from 184 chars to 153 chars. Canonical trailing slash confirmed. Person schema URL updated to `https://facundogangemi.com/about/`. `/speaking/` internal link added to Closing CTA. `Operational Excellence & Execution` added at H3 level inside Domain Expertise. |
| Optional future refinements | Add "AI Strategy Advisor" as exact phrase naturally in body copy. Normalize `/contact` links to `/contact/` if site convention changes. Add `sameAs` (LinkedIn) to page-level Person schema. Add OKRs/QBRs to `knowsAbout`. Strengthen "My Approach" H2 in a future content pass. Expand `/speaking/` from placeholder to full page. Publish first Insights article to activate About → Insights → Advisory topical chain. |

---

### /advisory/

| Property | Value |
|---|---|
| Route | `/advisory/` |
| Page type | Service hub — full advisory page with anchor sections |
| Language | `en` |
| Status | **Phase 8.2 complete** — hero + Signature Framework + four anchor practice sections + final CTA |
| SEO title | `Advisory \| AI Strategy & Transformation \| Facundo Gangemi` (57 chars) |
| Meta description | `Executive advisory for AI strategy, digital transformation, operational excellence and AI adoption focused on measurable business impact.` (135 chars) |
| Canonical URL | `https://facundogangemi.com/advisory/` |
| H1 | `AI Strategy & Digital Transformation Advisory.` |
| Main anchors | `#advisory-framework`, `#ai-strategy`, `#digital-transformation`, `#operational-excellence`, `#ai-adoption` |
| Main H2s | A Framework Built for Enterprise Transformation, AI Strategy, Digital Transformation, Operational Excellence, AI Adoption, (CTA) Need to turn AI strategy into measurable execution? |
| Primary search intent | Advisory hub for AI strategy and digital transformation |
| Primary keyword | AI Strategy & Digital Transformation Advisory |
| Secondary keywords | Enterprise Transformation, Operating Models, Operational Excellence, AI Adoption |
| Indexable | Yes |
| Structured data | Person (BaseLayout), Service (page-level — name, provider, description, url, serviceType \[4 values\], areaServed) |
| Key internal links | `/advisory/#ai-strategy` (anchor), `/advisory/#digital-transformation` (anchor), `/advisory/#operational-excellence` (anchor), `/advisory/#ai-adoption` (anchor), `/contact/`, `/insights/` |
| Improvement notes | Phase 7: complete rebuild as a single-page advisory hub. Navigation and footer links use anchor-format URLs. Phase 8 (2026-05-13): orphaned and deprecated advisory sub-pages deleted — `/advisory/` is now the only advisory route. Service JSON-LD (serviceType: AI Strategy Advisory, Digital Transformation Advisory, Operational Excellence Advisory, AI Adoption Advisory). Hero image: `/images/Advisory/Advisory-hero-client-delivery.webp`. Phase 8.2 (2026-05-13): added Signature Framework section (`#advisory-framework`) between Hero and practice sections — editorial left column + vertical 5-step transformation timeline + 3 supporting statements. Background `#080A10`. |

---

### Advisory sub-pages — Deleted (2026-05-13)

The following advisory sub-pages were deleted as part of the Phase 8 advisory architecture consolidation. The decision was made to keep `/advisory/` as the single canonical advisory hub with anchor-based sections, rather than maintaining orphaned or thin sub-pages on disk.

| Route | Former status | Reason for deletion |
|---|---|---|
| `/advisory/ai-strategy/` | Orphaned since Phase 7 (unlinked from nav/footer) | Removed — practice now covered by `/advisory/#ai-strategy` |
| `/advisory/digital-transformation/` | Orphaned since Phase 7 (unlinked from nav/footer) | Removed — practice now covered by `/advisory/#digital-transformation` |
| `/advisory/enterprise-agility/` | Deprecated since Phase 7 (`noIndex={true}` applied) | Removed — practice replaced by `Operational Excellence` at `/advisory/#operational-excellence` |
| `/advisory/ai-adoption/` | Orphaned since Phase 7 (unlinked from nav/footer) | Removed — practice now covered by `/advisory/#ai-adoption` |

All four practices remain fully accessible through `/advisory/` anchor sections. No redirects were added (site is in development; no existing redirect mechanism configured).

---

### /contact/

| Property | Value |
|---|---|
| Route | `/contact/` |
| Page type | Contact / Strategic Conversion |
| Language | `en` |
| Status | **Phase 6b SEO complete** — full strategic conversion page + SEO pass |
| SEO title | `Contact \| AI Strategy & Advisory \| Facundo Gangemi` (50 chars) |
| Meta description | `Start a strategic conversation on AI strategy, digital transformation, operating models, enterprise agility and measurable business impact.` (139 chars) |
| Canonical URL | `https://facundogangemi.com/contact/` |
| H1 | `Let's shape your next transformation` |
| Main H2s | Strategic conversations I engage with, Start a strategic conversation |
| Primary search intent | Contact an AI Strategy Advisor; discuss transformation, advisory, speaking or strategic collaboration |
| Primary keyword | AI Strategy & Advisory |
| Secondary keywords | Digital Transformation Advisor, Operating Models, Enterprise Agility, OKRs and QBRs, Banking & Financial Services |
| Indexable | Yes |
| Structured data | Person (BaseLayout), ContactPage (page-level — name, description, url, author) |
| Primary conversion path | Calendly popup — 30-min strategic conversation (`https://calendly.com/facundo_gangemi/30min`) |
| Secondary conversion path | Formspree contact form with inline AJAX confirmation (user stays on page when JS is enabled; falls back to normal POST if JS is disabled) |
| Form backend | Formspree Basic HTML integration |
| Formspree endpoint | `https://formspree.io/f/xrejjrgj` |
| Form fields | Name (required), Email (required), Company/Organization, Conversation type (required, select), Message (required), hidden subject |
| Key internal links | `/about/`, `/insights/`, `/advisory/` |
| Improvement notes | Phase 6b: full strategic conversion page replacing the single-section placeholder. Sections: Hero, Conversation areas (6 cards), Form with sidebar (what to include + trust note), Final nav CTA. Formspree Basic HTML — no JS, no dependencies. ContactPage JSON-LD added. Background alternation: #05070D → bg-gray-950 → #05070D → bg-gray-950. Phase 6b SEO pass: title refined to 50 chars (was 56), meta description updated to action-oriented copy at 139 chars (was 145), H1 shortened to "Let's shape your next transformation", ContactPage schema name updated to align with advisory positioning. Calendly popup integration (Phase 6b): primary CTA in hero now opens Calendly 30-min scheduling popup; Formspree form retained as secondary path; fallback href opens Calendly in new tab if JS unavailable. Note: Calendly may set third-party cookies — review and update cookie policy when live analytics/cookie audit is performed. |

---

### /case-studies/

| Property | Value |
|---|---|
| Route | `/case-studies/` |
| Page type | Content hub — live (Phase 9B complete) |
| Language | `en` |
| Status | **Live** — 6 anonymized case studies loaded via Astro Content Collection (`case-studies`) |
| SEO title | `Case Studies \| AI Transformation \| Facundo Gangemi` (52 chars) |
| Meta description | `Explore selected transformation case studies on AI strategy, operating models, operational excellence and measurable business impact.` (133 chars) |
| Canonical URL | `https://facundogangemi.com/case-studies/` |
| H1 | `Proof of transformation impact across strategy, operating models and execution` |
| Primary search intent | AI strategy and digital transformation case studies |
| Primary keyword | Digital Transformation Case Studies |
| Secondary keywords | AI strategy case study, operating model transformation, operational excellence, enterprise agility |
| Indexable | Yes |
| Structured data | `CollectionPage` (page-level) + `Person` (inherited from BaseLayout) |
| Key internal links | `/contact/` (hero CTA + final CTA), `/advisory/` (hero secondary + final secondary) |
| Content source | Astro Content Collection `case-studies` — 6 Markdown files in `src/content/case-studies/**/*.md` |
| Confidentiality filter | `confidentiality !== 'internal'` — all 6 current cases are `anonymized` |
| Sections | Hero · Confidentiality note · Case cards (6) · Advisory method (5 steps) · Final CTA |
| Phase | Phase 9B — visual and experience upgrade complete (2026-05-14) |

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
| Key internal links | `/contact`, `/advisory/#ai-adoption` |
| Improvement notes | Placeholder — strong search intent target. Should be expanded into a detailed page describing the assessment methodology, scope and process. |

---

### /insights/

| Property | Value |
|---|---|
| Route | `/insights/` |
| Page type | Content hub — editorial index |
| Language | `en` |
| Status | **Phase 6a complete** — full editorial hub layout; no articles published yet |
| SEO title | `Insights \| AI Strategy & Transformation \| Facundo Gangemi` (57 chars) |
| Meta description | `Insights on AI strategy, digital transformation, operating models and execution for leaders driving measurable business impact.` (127 chars) |
| Canonical URL | `https://facundogangemi.com/insights/` |
| H1 | `Strategic Perspectives on AI, Transformation and Execution` |
| Main H2s | Explore Insights (Filters), Featured Insight (sr-only), Strategic Perspectives, Latest Insights (sr-only), Strategic Advisory (Final CTA) |
| Primary search intent | Read strategic perspectives on AI and transformation |
| Primary keyword | AI Strategy & Transformation Insights |
| Secondary keywords | Digital transformation insights, Operating models, Operational excellence, Enterprise agility, Strategy execution |
| Indexable | Yes |
| Structured data | Person (BaseLayout), CollectionPage (page-level — name, description, url, author) |
| Key internal links | `/insights/ai-strategy/`, `/insights/digital-transformation/`, `/insights/operational-excellence/`, `/insights/strategy-execution/`, `/advisory`, `/contact`, `/about` |
| Improvement notes | Phase 6a: hero with editorial image, filter chips, featured insight card, topic cards, article grid. Title fixed from 87-char overage to 57 chars. Meta description trimmed to 127 chars. Internal /about link added to Final CTA section. CollectionPage JSON-LD added. Static placeholder articles shown until real collection content is published. |

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
| Key internal links | `/insights/`, `/advisory/#ai-strategy` (once articles exist — currently no article links) |
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
| ~~`/advisory/`~~ | ~~Hub entry point~~ | **Complete — Phase 7** | — | — | Single-page hub with four anchor-section practices (AI Strategy, Digital Transformation, Operational Excellence, AI Adoption). Full hero, practice sections with focus area cards, final CTA. |
| ~~`/advisory/ai-strategy/`~~ | ~~Orphaned sub-page~~ | **Deleted — Phase 8** | — | — | Removed 2026-05-13. Practice covered by `/advisory/#ai-strategy`. |
| ~~`/advisory/digital-transformation/`~~ | ~~Orphaned sub-page~~ | **Deleted — Phase 8** | — | — | Removed 2026-05-13. Practice covered by `/advisory/#digital-transformation`. |
| ~~`/advisory/enterprise-agility/`~~ | ~~Deprecated sub-page~~ | **Deleted — Phase 8** | — | — | Removed 2026-05-13. Practice replaced by Operational Excellence at `/advisory/#operational-excellence`. |
| ~~`/advisory/ai-adoption/`~~ | ~~Orphaned sub-page~~ | **Deleted — Phase 8** | — | — | Removed 2026-05-13. Practice covered by `/advisory/#ai-adoption`. |
| ~~`/about/`~~ | ~~Executive profile and background~~ | **Complete — Phase 8b** | — | — | Full About page with UX/UI + SEO alignment validated (2026-05-13). H1, H2s, H3s, internal links, structured data, OG image and metadata finalized. See `/about/` entry above. |
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
| `/insights/` | Insights \| AI Strategy & Transformation | Phase 6a — full editorial hub; no articles yet |
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

Suggested topic: `"Why Most AI Strategies Fail Before Execution"` — targets a known executive search intent, aligns with the AI Strategy hub, and connects naturally to `/advisory/#ai-strategy`.

---

## 6. Structured Data Inventory

### Currently implemented

| Schema type | Where | Key fields |
|---|---|---|
| `Person` | All pages (via BaseLayout) | `name`, `url`, `jobTitle`, `description`, `sameAs` (LinkedIn) |
| `WebSite` | Homepage only (via `structuredData` prop) | `name`, `url`, `description` |
| `ProfessionalService` | Homepage only (via `structuredData` prop) | `name`, `url`, `description`, `areaServed`, `serviceType` (4 values — updated Phase 7: AI Strategy Advisory, Digital Transformation Advisory, Operational Excellence Advisory, AI Adoption Advisory) |
| `Service` | `/advisory/` (via `structuredData` prop) | `name`, `provider` (Person), `description`, `url`, `serviceType` (4 values), `areaServed` |
| `ContactPage` | `/contact/` (page-level) | `name`, `description`, `url`, `author` |
| `CollectionPage` | `/insights/` (page-level) | `name`, `description`, `url`, `author` |

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
| Advisory | `/advisory` | AI Strategy (`/advisory/#ai-strategy`), Digital Transformation (`/advisory/#digital-transformation`), Operational Excellence (`/advisory/#operational-excellence`), AI Adoption (`/advisory/#ai-adoption`) |
| Case Studies | `/case-studies` | — |
| Insights | `/insights` | — |
| About | `/about` | — |
| CTA: Book Advisory Call | `/contact` | — |

### Footer navigation

| Column | Links |
|---|---|
| Advisory | AI Strategy Advisory (`/advisory/#ai-strategy`), Digital Transformation (`/advisory/#digital-transformation`), Operational Excellence (`/advisory/#operational-excellence`), AI Adoption & Enablement (`/advisory/#ai-adoption`), Executive Advisory Hub (`/advisory/`) |
| Resources | Insights, Case Studies, Speaking, AI Assessment, Newsletter |
| About | About Facundo, Contact |
| Legal (bottom) | Legal Notice, Privacy Policy, Cookie Policy, Terms & Conditions |

### Advisory page cross-links (current)

| Page | Links to |
|---|---|
| `/advisory/` | `/advisory/#ai-strategy` (anchor), `/advisory/#digital-transformation` (anchor), `/advisory/#operational-excellence` (anchor), `/advisory/#ai-adoption` (anchor), `/contact/`, `/insights/` |

Note: All advisory sub-pages (`/advisory/ai-strategy/`, `/advisory/digital-transformation/`, `/advisory/ai-adoption/`, `/advisory/enterprise-agility/`) were deleted in Phase 8 (2026-05-13). `/advisory/` is the only advisory route. All internal links and navigation use anchor-based URLs.

### Required cross-links not yet present

Per `docs/seo/google-positioning-guardrails.md` (Section 10), the following required links are not yet in place:

| Source page | Missing link |
|---|---|
| `/advisory/` | → `/insights/ai-strategy/` (add once articles exist — currently links to `/insights/` hub) |
| `/advisory/` | → `/about/` (consider adding to final CTA or hero sub-copy) |
| `/insights/` | → relevant advisory page sections (links should be within article cards or intro copy) |
| Each insight article | → relevant advisory page anchor, related insight category |

### Home page internal links added — Phase 8

The Phase 8 Home Authority & Proof Layer introduced two new editorial CTA links from the Homepage:

| Source section | Link destination | Link label | Added |
|---|---|---|---|
| Signature Framework | `/advisory/` | Explore Advisory Practices | Phase 8 (2026-05-13) |
| About Snapshot | `/about/` | Explore my background | Phase 8 (2026-05-13) |

Both links are text-link CTAs (`sf-cta-link` pattern), not primary buttons. They strengthen the Home → Advisory and Home → About internal link signals, which previously existed only through navigation or the Final CTA.

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
| ~~High~~ | ~~Set `noIndex={true}` on `/advisory/enterprise-agility/`~~ | **Fixed Phase 7** — `noIndex={true}` applied. |
| ~~Medium~~ | ~~Decide fate of orphaned advisory sub-pages (`/advisory/ai-strategy/`, `/advisory/digital-transformation/`, `/advisory/ai-adoption/`)~~ | **Resolved Phase 8 (2026-05-13)** — all sub-pages deleted. `/advisory/` is the single advisory hub. |
| ~~Medium~~ | ~~Expand placeholder advisory pages into full strategic landing pages~~ | **Superseded Phase 8** — advisory sub-pages deleted; all practices consolidated under `/advisory/` with anchor sections. |
| Medium | Validate article JSON-LD with Google Rich Results Test on first article publish | Article schema not yet confirmed end-to-end. |
| Medium | Validate OG / social card previews with LinkedIn Post Inspector, Facebook Sharing Debugger and Twitter Card Validator after deployment | WebP generated — confirm actual social preview rendering. |
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
