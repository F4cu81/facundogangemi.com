# SPACING SYSTEM — facundogangemi.com

Approved vertical spacing system for all page sections.
Implemented in `src/styles/global.css` as utility classes.

---

## Section Spacing Tiers

| Class | Desktop | Tablet ≤1023px | Mobile ≤639px | Purpose |
|---|---|---|---|---|
| `.section-py-xs` | 48px | 40px | 32px | Compact accent bands: Metrics/KPI strips, proof bands, connective separators |
| `.section-py-sm` | 64px | 56px | 48px | Secondary sections, filter bars, compact CTAs, compact editorial blocks |
| `.section-py` | 96px | 80px | 64px | Default for all primary content sections |
| `.section-py-lg` | 120px | 96px | 80px | Reserved for standalone page heroes where extra breathing room is intentional |

**Default rule:** use `.section-py` unless there is a documented reason to deviate.

---

## Hero Rule — Homepage

- `min-h-[78svh]` is the validated homepage Hero height.
- Do not return to `min-h-[92svh]`.
- Do not apply `.section-py-lg` to the homepage Hero.
- The Hero must remain compact enough to reveal the Authority & Proof Layer early in the first viewport.

---

## Authority & Proof Layer Rule

Placement is fixed:

> **Hero → ProofLogoBanner → Advisory Grid**

The ProofLogoBanner is part of the first-impression credibility sequence, not a standalone section. Its padding is a deliberate exception to the tier system:

- Top: `1.75rem` — pulls the banner tight against the Hero
- Bottom: `3rem` — provides the pause before the Advisory Grid

This asymmetric spacing must not be replaced with a utility class. The exception is justified by the strategic role of the component.

**Motion rule:** proof logos must remain static. No marquee, carousel or auto-scroll. Subtle hover opacity only.

---

## Cross-page Consistency

- About, Advisory, Contact, Case Studies: use `.section-py` throughout. No changes needed.
- Insights: intentional three-tier rhythm (`.section-py` / `.section-py-sm`). Correct as-is.
- Homepage Metrics band: use `.section-py-xs` (pending implementation in `index.astro`).
