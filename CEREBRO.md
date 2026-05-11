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

*To be updated after Homepage sections are reviewed/refined.*

Current approved homepage structure (to verify in source):
1. Hero
2. KPI Band (accent, explicit `py-16 lg:py-20`)
3. Strategic Perspectives (Insights section)
4. CTA / Services teaser
5. Footer

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

## 9. About Page Learnings

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
- **Implementation: WebP image** — the SVG map was replaced with `/images/about/about-world-map.webp`
- Orange country markers are embedded in the image asset — do **not** add code-level SVG markers on top
- `<img>` uses `loading="lazy"` `decoding="async"` `width="1200"` `height="580"` `aspect-ratio: 1200/580` to prevent layout shift
- Alt text communicates the footprint (not `aria-hidden`) for accessibility
- Border, border-radius and overflow remain on the `.international-map` parent wrapper in `about.astro` — the component itself is just the `<img>`
- **Do not revert to SVG implementation** — the WebP is the approved final asset

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

## 10. Reusable Components and Patterns

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

## 11. SEO and Content Learnings

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

## 12. Protected Decisions

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

## 13. Pending Improvements

Track known issues, deferred improvements and open questions here. Remove items when resolved.

| Item | Priority | Notes |
|---|---|---|
| Insights listing page — build and validate | High | Content hub structure approved; pages not yet built |
| Case Studies listing page — build and validate | High | Same |
| Advisory sub-pages — build and validate | High | Dropdown routes exist in nav; pages may be stubs |
| Legal pages — review placeholder content | Medium | All four legal pages exist; legal details need owner review |
| Analytics / consent — not yet implemented | Medium | Awaiting approval for tooling |
| Homepage CTA section — finalize copy and validate | Medium | Hero and KPI Band done; mid-page CTA may need refinement |
| `/speaking` page — build | Low | Referenced in footer nav; page may not exist |
| `/ai-assessment` page — build | Low | Referenced in footer nav; page may not exist |
| `/newsletter` page — build | Low | Referenced in footer nav; page may not exist |
| Multilingual (`/es`) — architecture decision pending | Low | Do not implement until explicitly requested |
| World map — verify Uruguay marker stays inside South America continent path on all browsers | Low | Verified during Phase 5a.4 but worth confirming in browser |
