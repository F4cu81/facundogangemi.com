# Phase 2 — Layout Refinement Specification
**Date:** 2026-05-10  
**Status:** Awaiting approval  
**Approach:** Global layer → Page layer → Component layer  
**Constraint:** No implementation file is modified until the owner gives explicit approval.

---

## Overview

Phase 2 has two sequential objectives:

1. **Stability fixes** — Correct bugs and inconsistencies introduced or left unresolved in Phase 1 that affect layout stability, visual correctness, and token consistency.
2. **Visual refinements** — Improve spacing, typography, card anatomy, and responsive behavior so the existing homepage sections (Hero, Trust Bar, Advisory Grid, KPI Band) render at executive quality and Phase 3 can build on a solid foundation.

Phase 2 does NOT introduce new homepage sections. That is Phase 3.

---

## Part 1 — Phase 1 Stability Fixes

These are bugs or inconsistencies that cause incorrect rendering today. They must be resolved before visual refinements are applied.

---

### Fix 1 — Critical: `.section-py` has zero padding

**File:** `src/styles/global.css`  
**Line:** 114  
**Current value:** `padding-block: 120x;`  
**Correct value:** `padding-block: 120px;`

**Why it is broken:** The trailing `x` makes the declaration invalid CSS. Browsers silently ignore invalid property values. Every element using `.section-py` currently has zero vertical padding — sections collapse against each other.

**Expected impact:** Sections render with 120px vertical padding on desktop. Mobile override (88px) defined below it will apply correctly. This is the highest-priority fix because it affects every section on the page.

**Rollback:** Revert to `120x` (restores the broken state exactly as it was in Phase 1).

---

### Fix 2 — Container max-width mismatch

**File:** `src/styles/global.css`  
**Current value:** `width: min(100% - 48px, 1320px);`  
**Correct value:** `width: min(100% - 2.5rem, 1280px);`

**Why it is broken:** `global.css` sets the content container to a maximum of 1320px. `Navbar.astro` uses its own inline container scoped to 1280px. `tokens.css` and `CLAUDE.md` both specify `--container-max: 1280px` as the design system value. The result is that page content (1320px max) is wider than the navbar (1280px max), misaligning the grid.

**Expected impact:** Page content and navbar share the same maximum width. The horizontal grid aligns correctly at all viewport sizes above 1280px.

**Rollback:** Revert container to `min(100% - 48px, 1320px)`.

---

### Fix 3 — Missing CSS classes used in `index.astro`

**File:** `src/styles/global.css`  
**Classes to add:** `.section-dark`, `.section-light`, `.section-white`, `.section-header-split`, `.reveal`, `.reveal.visible`

**Why they are broken:** These class names are referenced in `index.astro` but have no definition in `global.css` or Tailwind. They exist in the DOM but do nothing. Specifically:

| Class | Used in | Expected behavior |
|---|---|---|
| `.section-dark` | KPI Band section | Deep navy background, white text |
| `.section-light` | Advisory Grid section | `#F2F2F2` background, dark text |
| `.section-white` | Phase 1 status section | White background, dark text |
| `.section-header-split` | Advisory Grid section header | Single column mobile, two-column desktop |
| `.reveal` | Hero copy, cards | Initially hidden (opacity 0, translated down 16px) |
| `.reveal.visible` | Added by IntersectionObserver in BaseLayout | Fades and slides into view |

**Definitions to add:**

```css
.section-dark  { background: var(--color-navy);  color: #ffffff; }
.section-light { background: #F2F2F2;             color: var(--color-text-on-light); }
.section-white { background: #ffffff;             color: var(--color-text-on-light); }

.section-header-split {
  display: grid;
  gap: 2rem;
}
@media (min-width: 768px) {
  .section-header-split {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
```

**Expected impact:** Section backgrounds render correctly. The Advisory Grid section header splits into two columns on desktop. Scroll-reveal animations play when elements enter the viewport. Without `.reveal.visible`, no scroll animations have been visible since Phase 1.

**Rollback:** Remove the added class definitions.

---

### Fix 4 — Token conflict: `--radius-card`

**File:** `src/styles/global.css`  
**Current value:** `--radius-card: 24px;`  
**Correct value:** `--radius-card: 1rem;` (16px)

**Why it is broken:** `tokens.css` defines `--card-radius: 1rem` (16px) as the standard card radius and `--card-radius-lg: 1.5rem` (24px) for large cards. The UI Direction doc specifies 16–20px for standard cards. `global.css` overrides this to 24px, which is the large variant. The `.card` class uses `var(--radius-card)` so all cards render with the wrong radius.

**Expected impact:** Standard cards use 16px radius, matching the design token specification. Large-variant cards (if used later) use 24px.

**Rollback:** Revert to `--radius-card: 24px`.

---

### Fix 5 — Token conflict: `--color-navy-dark`

**File:** `src/styles/global.css`  
**Current value:** `--color-navy-dark: #001a33;`  
**Correct value:** `--color-navy-dark: #001B35;`

**Why it is broken:** `tokens.css` defines `--color-navy-dark: #001B35`. `global.css` uses a slightly different shade `#001a33`. The tokens.css is the declared source of truth. While the visual difference is minor, the inconsistency means two different dark navy values exist in the system.

**Expected impact:** Cosmetic alignment. Any surface using `var(--color-navy-dark)` renders consistently across both token files.

**Rollback:** Revert to `#001a33`.

---

### Fix 6 — Duplicate footer in `index.astro`

**File:** `src/pages/index.astro`  
**Lines to remove:** 240–263 (the inline `<footer>` block)

**Why it is broken:** `BaseLayout.astro` renders `<Footer />` globally for every page. The homepage also contains a hand-written placeholder `<footer>` that predates the global Footer component. Both render. The page currently has two footers stacked.

**Expected impact:** The footer renders once. The DOM no longer contains duplicate `role="contentinfo"` landmarks, which also resolves an accessibility error.

**Rollback:** Restore the inline footer block (lines 240–263 from Phase 1 commit).

---

### Fix 7 — Reveal delay utilities not working

**File:** `src/styles/global.css`

**Why it is broken:** `index.astro` applies `delay-${i * 100}` to Advisory Grid cards (producing `delay-0`, `delay-100`, `delay-200`, `delay-300`). These strings are not standard Tailwind utility classes and are not safelisted, so Tailwind's JIT does not generate them. The cards reveal simultaneously rather than staggered.

**Definitions to add:**

```css
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }
```

**Expected impact:** Advisory Grid cards reveal with a 100ms stagger — the second card after 100ms, third after 200ms, fourth after 300ms.

**Rollback:** Remove the three delay class definitions.

---

## Part 2 — Phase 2 Visual Refinements

These improve visual quality, hierarchy, and responsiveness. They build on top of the stability fixes above.

---

### Refinement 1 — Card default padding

**File:** `src/styles/global.css`  
**Current `.card` definition:** Border, radius, shadow, hover transition only. No padding.  
**Change:** Add `padding: 1.75rem 2rem;` (28px 32px) as the default internal card padding.

**Why:** Padding is currently applied ad-hoc with inline Tailwind classes on each usage. This creates fragility — future card instances require remembering to add padding. The design system card spec (UI Direction: 28–36px internal padding) should be encoded in the base class.

**Expected impact:** All elements using `.card` have consistent internal spacing. Existing inline padding overrides in `index.astro` should be audited and removed if they duplicate the default.

**Rollback:** Remove the `padding` declaration from `.card`.

---

### Refinement 2 — Responsive hero typography

**File:** `src/pages/index.astro`  
**Current H1:** `<h1 class="font-heading text-white mt-2 mb-6">`  
**Change:** Add fluid responsive size: `text-5xl lg:text-7xl` (or `.text-hero` utility if defined)

**Why:** No font-size class is applied to the hero H1. The browser renders it at its default `h1` size (~2rem / 32px), which is far below the UI Direction specification of 64–76px desktop / 40–48px mobile.

**Add to `global.css`:**
```css
.text-hero    { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 0.97; }
.text-section { font-size: clamp(1.875rem, 4vw, 3rem);  line-height: 1.05; }
```

Apply `.text-hero` to the Hero H1 in `index.astro`.  
Apply `.text-section` to the section H2 elements in `index.astro` (Advisory Grid, KPI Band, Phase 1 status section).

**Expected impact:** Hero headline renders at approximately 40px on mobile and 72px on desktop. Section headers scale fluidly. Typography matches the executive quality specified in UI Direction.

**Rollback:** Remove size class from H1, remove fluid type utilities from `global.css`.

---

### Refinement 3 — SectionWrapper mobile spacing

**File:** `src/components/ui/SectionWrapper.astro`  
**Current `large` variant:** `py-20 md:py-32` (80px mobile / 128px desktop)  
**Change:** `py-24 md:py-32` (96px mobile / 128px desktop)

**Why:** The mobile value for `large` (80px) is *less than* the `default` mobile value (96px from `py-24 md:py-28`), which inverts the expected spacing hierarchy. `large` should be ≥ `default` at every breakpoint. The fix raises mobile large to 96px — matching default on mobile while remaining distinctly larger (128px) on desktop.

**Mobile spacing hierarchy after fix:**

| Variant | Mobile | Desktop |
|---|---|---|
| compact | 64px (`py-16`) | 80px (`md:py-20`) |
| default | 96px (`py-24`) | 112px (`md:py-28`) |
| large | 96px (`py-24`) | 128px (`md:py-32`) |

Large equals default on mobile (both 96px) and is 16px taller on desktop. This is the minimal change needed to eliminate the inversion without introducing new spacing values.

**Rollback:** Revert to `py-20 md:py-32`.

---

### Refinement 4 — Navbar container refactor

**File:** `src/components/global/Navbar.astro`  
**Current:** `.navbar-container { width: min(100% - 2rem, 1280px); ... }` (inline scoped CSS)  
**Change:** Replace the scoped `.navbar-container` width declaration with the `.container-site` global class.

**Why:** After Fix 2 aligns `.container-site` to 1280px, there is no reason for the Navbar to maintain a separate duplicate width declaration. A single source of truth reduces future maintenance risk.

**Expected impact:** No visual change (both resolve to 1280px after Fix 2). The container definition becomes a single point of control.

**Rollback:** Revert to the scoped `.navbar-container` width.

---

## Part 3 — Files to Change

| # | File | Phase 1 Fixes | Phase 2 Refinements | Priority |
|---|---|---|---|---|
| 1 | `src/styles/global.css` | Fix 1, 2, 3, 4, 5, 7 | Refinement 1, 2 (partial) | Critical |
| 2 | `src/pages/index.astro` | Fix 6 | Refinement 2 (H1 class) | High |
| 3 | `src/components/ui/SectionWrapper.astro` | — | Refinement 3 | Medium |
| 4 | `src/components/global/Navbar.astro` | — | Refinement 4 | Low |
| 5 | `src/styles/tokens.css` | — | — | No change |

---

## Part 4 — Expected Impact Summary

| Area | Before Phase 2 | After Phase 2 |
|---|---|---|
| Section vertical spacing | Zero (invalid CSS) | 120px desktop / 88px mobile |
| Container alignment | Navbar 1280px, content 1320px | Both 1280px |
| Section backgrounds | All render as white (undefined classes) | Dark / light / white correctly |
| Scroll-reveal animations | Invisible (no CSS transition defined) | Fade + slide on viewport entry with stagger |
| Card radius | 24px (wrong token) | 16px (correct token) |
| Card padding | Ad-hoc inline overrides | 28px/32px defined in base class |
| Hero H1 size | ~32px (browser default) | ~40px mobile / ~72px desktop |
| Section H2 size | Unspecified | Fluid clamp responsive scale |
| Footer | Renders twice | Renders once |
| SectionWrapper mobile spacing | Large variant too heavy on mobile | Proportional across all breakpoints |
| Navbar container | Independent, duplicated | Inherits global `.container-site` |

---

## Part 5 — Validation Checklist

After implementation, verify the following before marking Phase 2 complete:

### Build
- [ ] `npm run build` completes with no errors
- [ ] No TypeScript errors introduced
- [ ] No broken imports

### Layout
- [ ] Navbar and page content align to the same horizontal grid at 1280px+ viewports
- [ ] All sections have visible vertical padding (120px desktop)
- [ ] No sections collapse against each other on desktop or mobile
- [ ] Footer appears exactly once on the homepage

### Typography
- [ ] Hero H1 is visibly large at desktop (approximately 72px) and readable at mobile (approximately 40px)
- [ ] Section H2 scales fluidly between viewports
- [ ] Eyebrow labels render in orange uppercase

### Cards
- [ ] Advisory Grid cards have consistent internal padding
- [ ] Cards have 16px border radius (not 24px)
- [ ] Card hover state: 4px lift, border shifts to orange, arrow moves

### Animations
- [ ] Scroll-reveal: elements start invisible and fade+slide into view on scroll
- [ ] Advisory Grid cards stagger (card 2 delays 100ms, card 3 delays 200ms, card 4 delays 300ms)
- [ ] `prefers-reduced-motion` disables all transitions (already in place)

### Section backgrounds
- [ ] KPI Band: deep navy background, white text
- [ ] Advisory Grid: light gray (`#F2F2F2`) background
- [ ] Hero: retains dark gradient background (Tailwind class, not affected by these changes)

### Responsive
- [ ] Mobile (375px): All sections readable, no horizontal overflow
- [ ] Tablet (768px): Advisory Grid switches to 2-column layout
- [ ] Desktop (1280px+): Advisory Grid is 4-column

### Accessibility
- [ ] Single `role="contentinfo"` on the page (no duplicate footer)
- [ ] Skip-link still functional
- [ ] Focus states visible on all interactive elements

---

## Part 6 — Rollback Strategy

Phase 2 is implemented in three sequential commits, one per layer. Each commit is independently revertable.

**Commit 1 — Global layer fixes + refinements** (`src/styles/global.css`)  
`git revert <commit-hash>` restores all section padding, container widths, class definitions, and token values to Phase 1 state.

**Commit 2 — Page layer fixes + refinements** (`src/pages/index.astro`)  
`git revert <commit-hash>` restores the duplicate footer and reverts H1 typography. Has no effect on global styles.

**Commit 3 — Component refinements** (`SectionWrapper.astro`, `Navbar.astro`)  
`git revert <commit-hash>` restores mobile spacing and navbar container independence. Has no effect on global styles or page content.

**Full rollback:** Revert all three commits in reverse order (3 → 2 → 1) or use `git reset --hard <phase1-stable-commit>` to return to the Phase 1 stable state (`0c16d5e Phase 1 stable architecture cleanup`).

---

## Implementation Order (for reference, pending approval)

1. `src/styles/global.css` — all fixes first, then refinements
2. `src/pages/index.astro` — remove duplicate footer, apply H1 class
3. `src/components/ui/SectionWrapper.astro` — mobile spacing correction
4. `src/components/global/Navbar.astro` — container refactor

**No file is touched until explicit approval is given.**
