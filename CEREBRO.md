# CEREBRO.md — Living Project Memory
## facundogangemi.com

> **Purpose:** This file is the practical memory of the project. It records approved decisions, validated patterns, protected choices, and open questions accumulated across development sessions. It is not a specification — it is a live record of what has been built, approved, and learned.
>
> Read this file at the start of every session before touching any component, page or style. Update it after every session where a meaningful decision is made or approved.

---

## 1. Purpose

CEREBRO.md bridges the gap between sessions. It exists because:

- Decisions made in one session can be reversed accidentally in the next.
- Approved visual patterns get re-debated when context is lost.
- Subtle layout fixes are unknowingly undone when similar sections are edited.
- The same mistakes tend to repeat without memory of what was tried.

This file answers: *"What has already been decided? What has already been tried? What must not change?"*

---

## 2. How to Use

**At the start of every session:**
1. Read this file before reading any source file.
2. Check the Protected Decisions section before proposing changes.
3. Check the relevant page section before editing that page.
4. Check Reusable Components before creating new ones.

**When in doubt:** trust CEREBRO.md over your assumptions. Verify against source files to confirm the current state still matches.

**Authority:** CEREBRO.md documents approved decisions, not specifications. The source code is always the final truth. If a conflict exists between this file and the code, update this file — the code won the argument.

---

## 3. How to Update

Update CEREBRO.md at the end of any session where:
- A design decision was approved by the user.
- A layout pattern was validated.
- A bug was fixed that required understanding a non-obvious constraint.
- A visual refinement was explicitly kept after user review.
- A protected decision was added or reversed.
- An open question was resolved.

**Write style:**
- Be precise and specific. Avoid vague descriptions.
- Record what it is, not just that it was approved.
- Include measurement values, colors, class names and structural notes where relevant.
- Add the date when significant decisions are recorded.

---

## Pre-Coding Expectations

Before modifying any source file, Claude Code must:

1. **Identify the page or section being changed.** Know exactly which Astro page, component or layout is in scope before opening files.
2. **Identify the relevant phase or initiative.** Check CEREBRO.md for the current approved section order, background rhythm and layout decisions for that page.
3. **Read only the relevant context files.** Use `PROJECT_CONTEXT_INDEX.md` to determine which documentation is needed. Do not load the full documentation set unless the task explicitly requires it.
4. **Reuse approved visual, SEO and technical patterns.** Check §11 (components), §13 (protected decisions) and §4 (global visual system) before inventing a new approach.
5. **Avoid modifying unrelated files.** A task scoped to a single section must not trigger changes in other pages, layouts or global styles unless a shared dependency makes it unavoidable — in which case, flag it before acting.
6. **Avoid creating new routes unless explicitly requested.** Do not add pages, advisory sub-pages or content collection entries outside the task scope.
7. **Preserve approved copy, SEO metadata and canonical URLs** unless the task explicitly requires changes to them. Never overwrite a unique `<title>`, `<meta description>` or `<link rel="canonical">` without instruction.
8. **Report after implementation:** list files changed, validation performed (`npm run check`, `npm run build`), and any remaining risks or follow-up actions.

---

## 4. Global Visual System

### Colors

| Role | Value | Notes |
|---|---|---|
| Primary background | `#05070D` | All major section backgrounds |
| Alternate background | `#080A10` | Subtle contrast for alternating sections |
| Footer background | `#02030A` | Slightly darker than body |
| Elevated surface | `#0A0F1A` | Cards, modals, secondary surfaces |
| Navy atmospheric tone | `#00274C` | Sparingly only — must not dominate |
| Accent / CTA orange | `#F57C00` | Links, markers, highlights, CTAs |
| Secondary color | `#F2F2F2` | Light text, labels |

**Background rhythm rule:** Consecutive dark sections alternate between `#05070D` and `#080A10`. The visual contrast is intentionally subtle — approximately `#080A10` reads as elevated, not a strong stripe. Do NOT increase this contrast.

### Typography

| Font | Role |
|---|---|
| Manrope | Headings (`font-heading`) |
| Inter | Body text |

### Spacing System

| Class | Desktop | Tablet (≤1023px) | Mobile (≤639px) |
|---|---|---|---|
| `.section-py` | 96px | 80px | 64px |
| `.section-py-lg` | 120px | 96px | 80px |
| `.section-py-sm` | 64px | 56px | 48px |

**Rule:** Never use `.section-py-lg` for consecutive same-background sections — produces 240px gap which feels excessive. Use `.section-py` as the default.

### Orange Usage

- Approved for: CTA buttons, hover accents, approach step numbers, world map markers, card top borders, link arrows, eyebrow accents.
- Never use as a background fill for large areas.
- Typical opacity levels for non-CTA uses: `0.70`–`0.95` on markers; `0.18`–`0.42` on borders; `0.13` on decorative network lines.

---

## 5. Global Layout Learnings

### Two-Column Editorial Grid

Standard two-column pattern used across About, service pages, and content sections:

```css
/* Mobile-first */
display: grid;
grid-template-columns: 1fr;
gap: 2.5rem;

/* Desktop (≥1024px) */
grid-template-columns: 38fr 62fr;   /* title-left / body-right */
gap: 6rem;
align-items: start;
```

Alternate ratio for balanced layouts: `36fr 64fr`.

**Critical lesson:** Never set explicit `grid-column` / `grid-row` on children unless absolutely required. DOM order is the intent signal — explicit placement silently reverses layout when columns or content change. This caused the Phase 5a Why It Matters Now bug (title appeared right, body left).

### Map + Countries Two-Column

Used in About — International Footprint section:

```css
/* Desktop */
grid-template-columns: 65fr 35fr;
gap: 3.5rem;
align-items: start;
```

Map (SVG) occupies the left 65%; country chips occupy the right 35%.

### Marquee Pattern (Enterprise Contexts)

Infinite horizontal scroll for logo/tag strips. Key properties:
- Content is duplicated (`strip` + `strip aria-hidden`) so the loop is seamless.
- Animation: `@keyframes marquee-scroll { to { transform: translateX(-50%); } }`
- Edge fade: `mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent)`
- `prefers-reduced-motion`: animation paused.
- The container clips overflow — the strip must be at least 2× wider than the visible area.

---

## 6. Homepage Learnings

Current approved homepage structure (Phase 8 — updated):
1. Hero (`min-h-[92svh]`, bg `#05070D`, cinematic portrait)
2. **Proof Logo Banner** — enterprise credibility band (Phase 8, `py-12 lg:py-14`, bg `#05070D`)
3. Advisory Grid — 4 service pillars (bg `#05070D`)
4. Metrics / KPI Band — 4 counters (accent, explicit `py-16 lg:py-20`)
5. Industries Served — asymmetric image grid (bg `#05070D`)
6. Strategic Perspectives — Insights section
7. Final CTA
8. Footer

### Proof Logo Banner (Phase 8)

Component: `src/components/sections/ProofLogoBanner.astro`

Assets: `public/images/proof/logos/webp/` (8 WebP files)
Processing script: `scripts/process-logos.mjs` — run with `node scripts/process-logos.mjs` to regenerate

Logos displayed (in order): BBVA, Santander, CaixaBank, BNP Paribas Cardif, Chubb, AIG, Enel, Telefónica

Visual pattern:
- Section bg: `#05070D` — matches Hero for visual continuity
- Feathered 1px top separator (`rgba(255,255,255,0.07)`)
- Card: `rgba(10,15,26,0.55)` dark surface, 1px border `rgba(255,255,255,0.055)`, 8px radius, 72px height
- Logo images: max 120px × 40px, `object-fit: contain`
- CSS: `filter: grayscale(1) brightness(1.05)` + `opacity: 0.55` default → `0.82` on hover
- WebP assets are already monochrome (#D8DCE3) — CSS grayscale is a safety net
- Responsive grid: 2 cols (mobile) → 4 cols (≥480px) → 8 cols (≥900px)
- Section copy positions these as *enterprise experience*, NOT as direct client portfolio
- `prefers-reduced-motion`: transitions disabled

---

## 7. Featured Insights Learnings

*To be populated when Insights list pages and article templates are built.*

Insights content lives at: `src/content/insights/`
Insights pages live at: `src/pages/insights/`

Approved pillar categories (from `src/data/insightPillars.ts`):
- AI Strategy
- Digital Transformation
- Operational Excellence
- Strategy Execution

---

## 8. CTA Learnings

*To be populated after CTA sections are reviewed and approved.*

Current approved CTA: **"Book Advisory Call"** → `/contact`

CTA button style: orange fill (`#F57C00`), white text, hover darkens fill.

---

## 9. Contact Page Learnings (Phase 6b)

### Approved Section Order and Backgrounds

| # | Section | Background |
|---|---|---|
| 1 | Hero | `#05070D` (inline style) |
| 2 | Conversation areas (6 cards) | `bg-gray-950` |
| 3 | Form + sidebar | `#05070D` (inline style) |
| 4 | Final nav CTA | `bg-gray-950` |

### Form Integration

Contact pages on this site act as strategic conversion pages, not generic form pages. They clarify conversation fit, reduce friction, reinforce executive positioning and guide high-quality inbound messages.

For static GitHub Pages deployments, the Contact page uses **Formspree Basic HTML integration**:
- Form action: `https://formspree.io/f/xrejjrgj`
- Method: `method="POST"`
- Hidden subject field: `name="subject"` (NOT `name="_subject"` — Formspree changed the field name)
- No React, no AJAX, no `@formspree/react`, no `@formspree/ajax`, no custom JS submission logic
- Formspree handles the post-submit redirect/confirmation natively

### Layout

Form section uses two-column grid (60fr 40fr desktop, stacked mobile):
- Left column: form fields and submit button
- Right column: sidebar with "What to include" bullets + trust note

Card grid (conversation areas): 1 col → 2 col (≥640px) → 3 col (≥1024px).

Cards use the orange top-border accent pattern: `border-top: 2px solid rgba(245, 124, 0, 0.38)`.

### Form Field Styling (dark backgrounds)

```css
/* Select needs custom arrow — browser default arrow not visible on dark bg */
.form-select { appearance: none; }
.form-select-arrow { /* absolutely positioned SVG inside wrapper */ }

/* Options need explicit dark bg for cross-browser consistency */
.form-select option { background-color: #05070D; color: #ffffff; }

/* Focus uses orange glow */
:focus { border-color: rgba(245,124,0,0.55); box-shadow: 0 0 0 3px rgba(245,124,0,0.1); }
```

---

## 10. About Page Learnings

### Approved Section Order and Backgrounds

| # | Section | Background |
|---|---|---|
| 1 | Page Hero | `bg-[#05070D]` |
| 2 | From Agile Transformation to AI Strategy | `bg-gray-950` (`#121212`) |
| 3 | What I Bring (value blocks) | `bg-[#05070D]` |
| 4 | Experience & Expertise | `bg-gray-950` (`#121212`) |
| 5 | International Footprint (map + countries) | `bg-[#05070D]` |
| 6 | Selected Enterprise Contexts (marquee) | `bg-gray-950` (`#121212`) |
| 7 | My Approach (4 steps) | `bg-[#05070D]` |
| 8 | Why It Matters Now | `bg-gray-950` (`#121212`) |
| 9 | Closing CTA | `bg-[#05070D]` |

**Background grouping rationale:** Sections 2, 4, 6 and 8 share `bg-gray-950` — these are the narrative/detail sections. This avoids visual fragmentation and creates consistent rhythm. The hero, capabilities, map and CTA sections keep the deeper near-black `#05070D`.

### Layout Details

**Who I Am / From Agile to AI (§2):** Two-column, `38fr 62fr`. Left: large heading. Right: 3 body paragraphs. Background: `bg-gray-950` = `#121212` (visibly distinct dark charcoal — **not** `#080A10` which is imperceptibly close to `#05070D`). Body paragraphs use `text-align: justify` at `min-width: 768px` for an editorial/executive reading style; left-aligned on mobile for readability. No breadcrumb above hero (removed and protected).

**Why It Matters Now (§4):** Two-column, `38fr 62fr`. Title and eyebrow in LEFT column, body paragraphs in RIGHT column. DOM order: title column first, body column second. No explicit `grid-column` on children.

**International Footprint (§5):** Two-column, `65fr 35fr`. World map SVG left, countries chips right.

**Enterprise Contexts (§6):** Marquee strip (not chip grid). Heading styled with `.enterprise-heading` class at `1.35rem` mobile / `1.6rem` desktop — NOT `text-section`. The heading was intentionally reduced to integrate with the marquee rather than dominate it.

**Approach (§7):** Orange step numbers (`#F57C00`), two-column card grid on desktop.

### World Map

File: `src/components/sections/AboutWorldMap.astro`

- ViewBox: `0 0 1200 580`
- Projection: equirectangular — `x = (lon+180)/360*1200`, `y = (80-lat)/160*580`
- **Implementation: WebP image** — current asset is `/images/about/about-world-map-transparent-white.webp`
- `<img>` uses `loading="lazy"` `decoding="async"` `width="1200"` `height="580"` `aspect-ratio: 1200/580` to prevent layout shift
- Alt text communicates the footprint (not `aria-hidden`) for accessibility
- Border, border-radius and overflow remain on the `.international-map` parent wrapper in `about.astro`
- **Do not revert to SVG implementation** — the WebP is the approved final asset

**Interactive marker system (approved):**
- A `.map-container` (`position: relative`) wraps the `<AboutWorldMap />` image
- An absolutely-positioned `.map-markers` overlay (`aria-hidden="true"`) holds `<button>` hit areas
- Each button has `data-country`, `type="button"`, and `aria-label`; positioned with `left/top` as % of image
- Each `.country-chip` has a `data-country` attribute matching the button
- Vanilla JS (`<script>` module) connects `mouseenter/mouseleave/focus/blur` on buttons to `.active` class on chips
- `.country-chip.active`: `color:#F57C00`, `border-color:rgba(245,124,0,0.70)`, `background:rgba(245,124,0,0.14)`, `box-shadow:0 0 18px rgba(245,124,0,0.22)`
- Marker positions are percentage-based relative to the `.map-container` image element (not fixed pixels)
- Reference cities: BCN (Spain), Miami (US), CDMX (Mexico), Santo Domingo (DR), Lima (Peru), Santiago (Chile), Buenos Aires (Argentina), Montevideo (Uruguay)
- Normal dot: `8×8px`, `background:#F57C00`, `border:1px solid rgba(255,255,255,0.75)`, `box-shadow:0 0 10px rgba(245,124,0,0.55)`
- Hover/focus: `scale(1.45)`, `box-shadow:0 0 20px rgba(245,124,0,0.85)`, `outline:2px solid rgba(245,124,0,0.55)`
- The `.map-markers` container must NOT have `aria-hidden="true"` — buttons need to be keyboard-accessible
- For decorative WebP maps, interactivity is achievable with absolutely-positioned buttons + data-attribute chip connection — no SVG needed
- Positions are tuned visually; if the map image changes, positions may need re-calibration

**Approved marker positions:**

| Country | cx | cy | lon | lat |
|---|---|---|---|---|
| Spain | 587 | 145 | -3.7 | 40 |
| United States | 275 | 152 | -98 | 38 |
| Mexico | 270 | 222 | -99 | 19 |
| Dominican Republic | 367 | 222 | -70 | 19 |
| Peru | 343 | 334 | -77 | -12 |
| Chile | 363 | 413 | -71 | -33 |
| Argentina | 387 | 417 | -64 | -34 |
| Uruguay | 413 | 413 | -56 | -33 |

### What Was Removed (Do Not Restore)

- **Breadcrumb above hero** — removed. The About page is a top-level destination; breadcrumbs create visual clutter and are redundant.
- **Credentials line** — removed from hero. The two-column narrative covers the same ground with more depth.
- **Country chips as a flat block below the map** — replaced by the two-column map+countries layout.

---

## 11. Reusable Components and Patterns

### Navigation

Data source: `src/data/navigation.ts`

Current approved `NAV_ITEMS` order:
1. Advisory (with dropdown: AI Strategy, Digital Transformation, Enterprise Agility, AI Adoption)
2. Case Studies
3. Insights
4. About
5. **Contact** ← added Phase 5a.4

Both `Navbar.astro` and `MobileMenu.astro` consume `NAV_ITEMS` from the same data file. Adding a nav item to the data file updates both menus automatically.

CTA: **"Book Advisory Call"** → `/contact`

### Section Background Alternation

Apply alternating backgrounds via inline `style` on each `<section>`:

```html
<!-- Primary (odd sections) -->
<section class="..." style="background: #05070D;">

<!-- Elevated (even sections) -->
<section class="..." style="background: #080A10;">
```

Do not use CSS classes for section backgrounds — inline styles are the approved pattern here for clarity and ease of maintenance.

### Eyebrow Labels

```html
<span class="eyebrow">Label text</span>
```

`.eyebrow` is defined in global CSS. These are `<span>` elements, NOT headings. Do not use `<h2>` or `<h3>` for eyebrow labels.

### Card Top-Border Accent

Cards in grid sections use:
```css
border: 1px solid rgba(245, 124, 0, 0.18);
border-top: 2px solid rgba(245, 124, 0, 0.42);
```

Hover state increases both opacities.

---

## 12. SEO and Content Learnings

### Primary Keyphrases (Site-Wide)

- AI Strategy Consultant
- Digital Transformation Advisor
- Enterprise Transformation
- AI Adoption
- Intelligent Operating Models
- Executive AI Advisory
- Organizational Transformation
- Enterprise Agility

### Page-Level SEO Rule

Each page must have:
- Unique `<title>` under 60 characters with primary keyphrase
- Unique `<meta name="description">` under 155 characters
- `<link rel="canonical">` pointing to `https://facundogangemi.com/<path>` — never a `github.io` URL
- One visible `<h1>` containing the primary keyphrase
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`

### Content Collections

```
src/content/insights/     ← thought leadership articles
src/content/case-studies/ ← transformation case studies
```

Do NOT create `/blog`, `/posts`, `/articles`, or `/thoughts` folders.

---

## 13. Protected Decisions

These decisions are approved and must not be reversed without explicit user confirmation:

| Decision | Reason | Date |
|---|---|---|
| No breadcrumb on About page hero | Top-level page; breadcrumbs add clutter | Phase 5a |
| Credentials line removed from About hero | Two-column narrative covers the same content with more depth | Phase 5a |
| Countries displayed as chips beside the map (not below it) | Two-column layout creates better visual relationship between map and data | Phase 5a.4 |
| Enterprise Contexts: marquee instead of chip grid | Marquee scales visually for many logos/tags without increasing page height | Phase 5a |
| Eurasia as single SVG path (not separate Europe + Asia) | Avoids complex Ural/Bosphorus boundary; cleaner geometric aesthetic | Phase 5a.4 |
| World map markers on Hispaniola (not Cuba) for Dominican Republic | Geographic accuracy; marker is at (367,222) aligned with Hispaniola ellipse | Phase 5a.4 |
| Alternating section backgrounds `#05070D` / `#080A10` | Creates subtle rhythm without harsh stripe effect | Phase 5a.4 |
| Enterprise heading at `1.35rem`/`1.6rem` (not `text-section` size) | Larger heading overwhelmed the marquee and made the section feel unbalanced | Phase 5a.4 |
| Contact added to main navbar (after About) | Expected by visitors; improves navigation clarity and conversion | Phase 5a.4 |
| Narrative/detail sections use `bg-gray-950` (`#121212`); feature/action sections use `bg-[#05070D]` | `#080A10` was imperceptibly close to `#05070D`; `gray.950` is a real project token that renders visibly distinct | Phase 5a.5 |
| Narrative/detail body paragraphs justified at ≥768px | Editorial/executive reading style; mobile stays left-aligned for readability. Applies to `.narrative-body-col p` and `.why-body-col p` via shared CSS rule | Phase 5a.5 |
| No server-side rendering or backend logic | GitHub Pages static hosting constraint | Architecture |
| Canonical domain: `https://facundogangemi.com` (never `github.io`) | Correct SEO; GitHub Pages internal URL must never appear in canonical tags | Architecture |

---

## 14. Pending Improvements

Track known issues, deferred improvements and open questions here. Remove items when resolved.

| Item | Priority | Notes |
|---|---|---|
| ~~Insights listing page — build and validate~~ | ~~High~~ | **Done Phase 6a** — full editorial hub at `/insights/` |
| Case Studies listing page — build and validate | High | Same |
| ~~Advisory sub-pages — build and validate~~ | ~~High~~ | **Deprecated Phase 8** — consolidated into `/advisory/` with anchor sections `#ai-strategy`, `#digital-transformation`, `#operational-excellence`, `#ai-adoption`. Sub-pages deleted. Do not recreate. |
| Legal pages — review placeholder content | Medium | All four legal pages exist; legal details need owner review |
| Analytics / consent — not yet implemented | Medium | Awaiting approval for tooling |
| Homepage CTA section — finalize copy and validate | Medium | Hero and KPI Band done; mid-page CTA may need refinement |
| `/speaking` page — build | Low | Referenced in footer nav; page may not exist |
| `/ai-assessment` page — build | Low | Referenced in footer nav; page may not exist |
| `/newsletter` page — build | Low | Referenced in footer nav; page may not exist |
| Multilingual (`/es`) — architecture decision pending | Low | Do not implement until explicitly requested |
| World map — verify Uruguay marker stays inside South America continent path on all browsers | Low | Verified during Phase 5a.4 but worth confirming in browser |
