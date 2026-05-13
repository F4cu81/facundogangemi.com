# UX/UI Experience Agent
## facundogangemi.com

> **When to load this file:** Before implementing any new page section, before proposing layout changes, and when reviewing an existing page for visual or UX quality. Load alongside `CLAUDE.md` and `CEREBRO.md`.
>
> **This is an operational review protocol, not a principles document.** It defines concrete, testable criteria Claude Code must apply before and during implementation — not aspirational design goals.

---

## 1. Agent Purpose

This document defines the review criteria Claude Code must apply as the UX/UI Experience Agent for `facundogangemi.com`.

The agent's responsibility is to evaluate and improve:

- Visual hierarchy and layout clarity
- Section spacing and rhythm
- Hero proportions and impact
- Cross-page consistency
- CTA clarity and conversion alignment
- Dark background alternation
- Premium executive look and feel
- Responsive behavior
- Layout pattern quality (tabs vs. accordions vs. grids)

This is a **pre-implementation review step**, not a post-implementation cleanup. The goal is to surface UX/UI issues before a single line of code is changed, and to include fixes in the implementation plan rather than as follow-up tasks.

---

## 2. Standard Review Protocol

Before proposing or implementing any page change, the agent must:

1. Identify which checklist sections below apply to the task in scope.
2. Run the relevant checks against the current page state (read the source file).
3. Report findings clearly — what passes, what fails, what is at risk.
4. Include any failing items in the implementation plan before writing code.
5. Do not skip the review because the task seems minor. Even small edits can break hierarchy, rhythm, or cross-page consistency.

**Minimum checklist scope per task type:**

| Task type | Required checklist sections |
|---|---|
| New page section | §3 Visual Hierarchy, §4 Spacing, §5 Background, §9 Premium Look |
| Hero changes | §6 Hero Proportions, §3 Visual Hierarchy, §7 CTA, §11 Responsive |
| Service section changes | §3 Visual Hierarchy, §4 Spacing, §7 CTA, §10 Anti-Patterns |
| CTA or conversion changes | §7 CTA, §9 Premium Look |
| Background or layout changes | §4 Spacing, §5 Background Alternation, §8 Cross-Page |
| New component or pattern | §8 Cross-Page, §10 Anti-Patterns, §11 Responsive |
| Full page review | All sections |

---

## 3. Visual Hierarchy Checklist

Apply to every primary content section.

- [ ] Is the eyebrow label present where needed, and correctly styled? (Orange `#F57C00`, small/uppercase, letter-spaced, Inter — matches the `.eyebrow` class.)
- [ ] Is the H2 visually dominant — clearly the largest text element in the section after the H1?
- [ ] Is the supporting paragraph clearly subordinate in size and weight to the H2?
- [ ] Is there a clear visual reading path: eyebrow → H2 → body → CTA?
- [ ] Does the section have one primary message? (Not two competing H2s or two equally weighted content blocks.)
- [ ] Are lists used only where content is genuinely enumerable? (Lists must not substitute for well-structured prose paragraphs.)
- [ ] Are section headings at `clamp()`-based fluid sizes, not fixed pixel values that break on intermediate viewport widths?
- [ ] Is white text on dark background at sufficient contrast? (Body: minimum 4.5:1. Large text: minimum 3:1.)
- [ ] Is there sufficient whitespace between the heading and the body copy to create clear separation?

---

## 4. Section Spacing and Layout Rhythm Checklist

Apply to every section and to the page as a whole.

**Four-tier spacing system (source of truth: `CLAUDE.md` §9 and `branding/SPACING_SYSTEM.md`):**

| Class | Desktop | Tablet ≤1023px | Mobile ≤639px | Correct use |
|---|---|---|---|---|
| `.section-py-xs` | 48px | 40px | 32px | Proof bars, KPI strips, compact accent bands |
| `.section-py-sm` | 64px | 56px | 48px | Secondary sections, compact CTAs |
| `.section-py` | 96px | 80px | 64px | All primary content sections |
| `.section-py-lg` | 120px | 96px | 80px | Standalone page heroes only |

- [ ] Does each section use the correct spacing class from the four-tier system?
- [ ] Is `.section-py-lg` used only for standalone page heroes — not for consecutive same-background sections?
- [ ] Are consecutive same-background sections avoided? (Two `#05070D` sections in a row must be separated by a `#121212` alternate.)
- [ ] Is the internal spacing within components (cards, tabs, editorial grids) consistent with the patterns established in existing pages?
- [ ] Does the page feel rhythmically balanced — not alternating between very tall and very short sections without clear reason?
- [ ] Are grid gaps consistent with similar sections elsewhere on the site? (Do not invent new gap values; reuse approved ones.)
- [ ] Does the page avoid sections that feel visually "empty" — too much vertical space with too little content?
- [ ] Does the page avoid sections that feel "dense" — too much content with insufficient breathing room?

---

## 5. Dark Background Alternation Checklist

**Approved two-color alternation for content sections:**

| Role | Value | Tailwind class | Usage |
|---|---|---|---|
| Primary dark | `#05070D` | `bg-[#05070D]` | Hero, primary service sections, CTA band |
| Alternate dark | `#121212` | `bg-gray-950` | Alternating content sections |
| Footer | `#02030A` | `bg-[#02030A]` | Footer only |

**Forbidden backgrounds for full sections:**

| Value | Reason |
|---|---|
| `#080A10` | Removed — no longer part of the live palette |
| `#00274C` navy | Atmospheric tone only — must not fill a section |
| `#F57C00` orange | Accent only — never a section background fill |

- [ ] Does every full-width section use only `#05070D` or `#121212`?
- [ ] Is `#080A10` present anywhere in the page being reviewed? (Flag and replace.)
- [ ] Is `#00274C` used as a section background? (Forbidden — flag immediately.)
- [ ] Is orange used as a section background fill? (Forbidden — flag immediately.)
- [ ] Does the page-level alternation sequence match the approved sequence recorded in `CEREBRO.md` for that page?
- [ ] Does the bridge section between the Signature Framework and the Advisory practices use `#05070D`? (Approved decision — must not revert to `#080A10` or `bg-gray-950`.)

---

## 6. Hero Proportions Checklist

Apply when reviewing or modifying any page hero section.

- [ ] Does the hero use `.section-py-lg` (120px desktop, 96px tablet, 80px mobile)?
- [ ] Is there a clear two-column editorial split on desktop: text/editorial left, visual or proof element right?
- [ ] Is the H1 the most visually dominant element on the page — clearly larger than any H2?
- [ ] Is the primary CTA button visible without scrolling on desktop at 1280px viewport width?
- [ ] Does the hero communicate three things above the fold: who Facundo is, what he does, and what to do next?
- [ ] Is the hero eyebrow label present (Advisory Practice or equivalent positioning tag)?
- [ ] Is the primary CTA using the orange fill button pattern (`btn-primary`)?
- [ ] Is the secondary CTA clearly subordinate — outline style, never competing with the primary?
- [ ] Is the hero image or visual element below 200KB?
- [ ] Is the hero image loading as `loading="eager"` (not lazy)?
- [ ] On mobile (375px), does the hero collapse to a single column, with the CTA visible before requiring excessive scrolling?
- [ ] Is there a supporting credibility signal near the hero CTA? (Client names, positioning statement, eyebrow tag.)

---

## 7. CTA Clarity and Placement Checklist

- [ ] Does every primary content section contain or conclude with a clear CTA?
- [ ] Is the primary page CTA using the orange fill pattern? (`background: #F57C00`, white text.)
- [ ] Is the CTA wording specific and intent-matched? ("Book Advisory Call" not "Contact Us"; "Discuss this practice" not "Learn more"; "Explore Insights" not "Read".)
- [ ] Is there a trust signal near every primary CTA? (Client context, positioning statement, practice framing.)
- [ ] Are there more than two CTAs competing within one visible viewport section? (If yes, reduce.)
- [ ] Does each advisory practice section have exactly one practice-specific CTA link, not multiple competing ones?
- [ ] Is every CTA button distinguishable from body text and headings by color, weight, and layout treatment?
- [ ] Is the secondary CTA clearly subordinate — outline style or text link, never the same visual weight as the primary?
- [ ] Does the final CTA section at the bottom of the page use a distinct card or band treatment to signal conversion?
- [ ] Are CTA labels active and imperative? (Start with a verb: "Book", "Discuss", "Explore", "Download".)

---

## 8. Cross-Page Consistency Checklist

Apply when adding a new section type or when a pattern is reused across pages.

- [ ] Does the eyebrow label match the global `.eyebrow` class styling used on all other pages? (Same font size, weight, color, letter-spacing.)
- [ ] Does any card or module hover pattern match the established site-wide pattern? (Orange top border `border-top: 2px solid rgba(245,124,0,…)`, `transform: translateY(-2px or -3px)`, `box-shadow` with dark lift and orange glow ring.)
- [ ] Does the page hero follow the same proportions and copy structure as other pages (Advisory, About, Contact)?
- [ ] Are CTA arrow links (`ap-cta-link` or equivalent) styled consistently with the same pattern used in other practice sections?
- [ ] If tabs are used, do they follow the `.ap-tablist` / `.ap-tab` / `.ap-panel` pattern established on the Advisory page?
- [ ] Is the footer identical across all pages?
- [ ] Is the navbar identical across all pages?
- [ ] Are section `aria-labelledby` attributes present and correctly linked to heading IDs?
- [ ] Is `scroll-margin-top: 96px` applied to all anchor-targeted sections (to account for the sticky navbar)?

---

## 9. Premium Executive Look and Feel Checklist

This is a qualitative check. Ask: *Would a CIO or Head of Transformation perceive this page as premium, credible, and trustworthy?*

- [ ] Is the background predominantly near-black? (Dark backgrounds must represent approximately 70% of visual area.)
- [ ] Is orange used sparingly — only for CTAs, accents, top borders, bullet markers, and eyebrow labels — not as a dominant visual element?
- [ ] Does each section communicate authority and strategic clarity, not feature descriptions or agile methodology language?
- [ ] Is the page free of lorem ipsum, placeholder copy, generic consulting language, coaching tone, or startup slang?
- [ ] Is the section free of excessive animation, heavy visual effects, or decorative elements that dilute credibility?
- [ ] Does the layout feel organized and intentional — not crowded, randomly assembled, or template-like?
- [ ] Is the typography hierarchy clean and readable at a quick scan?
- [ ] Do any cards, modules, or decorative elements have the premium card treatment (dark bg, subtle border, orange top accent) rather than generic white cards?
- [ ] Is there a clear authority signal in the first visible viewport of every service or advisory section?
- [ ] Does the page avoid generic SaaS aesthetics — overly colorful sections, aggressive gradients, neon effects, or excessive card grids?

---

## 10. Layout Pattern Anti-Pattern Checklist

The following layout patterns are permanently forbidden. Flag immediately if found.

- [ ] **Accordions for service content:** Advisory practice descriptions, service capability lists, or outcome content must never be collapsed into accordion elements. They must be visible and navigable via internal tabs or editorial grids.
- [ ] **Merged service tab systems:** Each advisory practice must remain an independent section with its own anchor and its own internal tab group. Never merge all four practices into a single shared tab system.
- [ ] **Recreated deleted advisory sub-pages:** The routes `/advisory/ai-strategy/`, `/advisory/digital-transformation/`, `/advisory/ai-adoption/`, and `/advisory/enterprise-agility/` are permanently deleted. Do not recreate them.
- [ ] **Orange section backgrounds:** `#F57C00` must never fill a full-width section background.
- [ ] **Navy section backgrounds:** `#00274C` must never be the primary background of a full-width content section.
- [ ] **`#080A10` as an alternate background:** This value was removed from the live palette. Replace with `#121212` (`bg-gray-950`) where found.
- [ ] **Dual H1 elements on a single page:** Each page must have exactly one visible `<h1>`.
- [ ] **Missing scroll margin on anchor sections:** Any section reachable by anchor link must include `scroll-margin-top: 96px` to account for the sticky navbar.
- [ ] **Tabs converted to accordions:** If a tab implementation exists, it must not be replaced with a collapsible accordion pattern without explicit approval.
- [ ] **Unlabelled grid or card sections:** Every grid of cards or items must have a visible section heading (H2) above it — no unlabelled content blocks.

---

## 11. Responsive Behavior Checklist

Evaluate at three key widths: **375px** (mobile), **768px** (tablet), **1280px** (desktop).

**At 375px (mobile):**
- [ ] Does the hero collapse to a single column?
- [ ] Is the primary CTA visible above the fold or reachable with minimal scrolling?
- [ ] Do tab labels scroll horizontally without wrapping or overflowing the container? (`.ap-tablist` uses `overflow-x: auto; scrollbar-width: none`.)
- [ ] Are all interactive tap targets (buttons, tabs, links) at least 44px in height?
- [ ] Is body text at least 15px? (Do not reduce below `0.9375rem`.)
- [ ] Is no content hidden or clipped on mobile that is required for understanding the section?
- [ ] Are grid layouts collapsing to a single column, not remaining in multi-column at narrow widths?

**At 768px (tablet):**
- [ ] Do two-column desktop layouts collapse gracefully to single-column or 2-column tablet layouts?
- [ ] Is the navigation accessible via the mobile menu (hamburger)?
- [ ] Are card grids using 2-column at most, not 3 or 4?
- [ ] Is the advisory tab layout readable without horizontal overflow?

**At 1280px (desktop):**
- [ ] Is the two-column hero split correct and proportional (approximately 50/60 text, 40/50 visual)?
- [ ] Is the max-width capped via `container-site` so the layout does not stretch to full viewport width?
- [ ] Is the advisory practice tab module at a comfortable width relative to the editorial left column?
- [ ] Are there no unintended horizontal scrollbars?

---

## 12. Pre-Implementation Review Step

This step is required before implementing layout changes to any of the following: hero sections, advisory practice sections, bridge statements, CTA bands, background rhythm, or any new component pattern.

**Mandatory pre-implementation flow:**

1. Read the relevant page source file (`src/pages/[page].astro` or the relevant component).
2. Read `CEREBRO.md` — check if any approved decisions for this page or section are already recorded.
3. Apply the checklist sections that match the task type (see §2 scope table).
4. Report findings in this format:

```
Pre-Implementation UX Review
─────────────────────────────
Section in scope: [section name]
Checks run: [checklist numbers]

✓ Passing:
- [what already meets the criteria]

✗ Failing or at risk:
- [what does not meet the criteria — include specific class, color, or value]

Recommendation:
- [what to fix as part of this implementation, not as a follow-up]
```

5. Proceed with implementation only after reporting findings.

---

## 13. When Not to Apply This Agent

This agent does not govern:

| Topic | Governing document |
|---|---|
| SEO metadata, titles, descriptions, canonical URLs | `docs/seo/google-positioning-guardrails.md` |
| Per-page SEO inventory | `docs/seo/seo-page-inventory.md` |
| Article-level SEO and editorial decisions | `docs/seo/article-seo-guidelines.md` |
| Legal page content | `legal/legal-context.md` |
| Exact copy wording and tone | `branding/VOICE_AND_TONE.md` |
| Font choices and typographic scale | `branding/TYPOGRAPHY_SYSTEM.md` |
| Color token values | `branding/COLOR_SYSTEM.md` |
| Spacing token values | `branding/SPACING_SYSTEM.md` |
| Analytics, tracking, cookies | `CLAUDE.md` §13 |
| Form design and data collection | `CLAUDE.md` §21 |

This agent focuses exclusively on: layout, visual hierarchy, spacing rhythm, CTA quality, background alternation, cross-page consistency, layout anti-patterns, and responsive behavior.

---

## 14. Relationship to Other Documents

| Document | Role | Relationship to this agent |
|---|---|---|
| `CLAUDE.md` | Technical implementation rules | Governs HOW to build — this agent evaluates WHETHER the result is correct |
| `branding/UI_PRINCIPLES.md` | High-level aesthetic principles | Governs WHAT to aim for — this agent makes those principles testable |
| `CEREBRO.md` | Approved session decisions | Governs WHAT was already decided — this agent must not contradict approved decisions |
| `docs/seo/google-positioning-guardrails.md` | SEO strategy | Parallel concern — this agent defers SEO questions to that file |
| `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md` | Executive brand strategy | Strategic context — Section 6.7 aligns with this agent's criteria |
| This file | Operational review criteria | Governs WHETHER the current page state is acceptable from a UX/UI perspective |

**Authority note:** This agent does not override `CLAUDE.md` or `CEREBRO.md`. If a recorded approved decision in `CEREBRO.md` conflicts with a checklist item here, flag the conflict and ask for clarification before acting.
