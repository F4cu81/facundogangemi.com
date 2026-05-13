# COLOR SYSTEM — facundogangemi.com

> **Last updated:** 2026-05-13
> This file reflects the live production palette. Source of truth for individual approved values: `CEREBRO.md` §4 Global Visual System.

---

# Color Philosophy

The color system must communicate:
- executive authority
- intelligence
- trust
- transformation
- innovation

The palette should feel:
- premium
- sophisticated
- modern
- enterprise-oriented

---

# Production Background Palette

| Role | HEX | Usage |
|---|---|---|
| Primary background | `#05070D` | All major section backgrounds — hero, advisory grid, industries, homepage features |
| Alternate background | `#080A10` | Subtle alternating sections — creates rhythm without harsh contrast |
| Footer background | `#02030A` | Slightly darker than body |
| Elevated surface | `#0A0F1A` | Cards, modals, secondary surfaces |
| Navy atmospheric tone | `#00274C` | Sparingly only — must not dominate; used as accent depth |

**Background rhythm rule:** Consecutive dark sections alternate between `#05070D` and `#080A10`. The contrast is intentionally subtle. Do not increase it.

For narrative/detail sections (About, Contact alternate rows), use `bg-gray-950` (`#121212`) — this renders visibly distinct from `#05070D` and is a live Tailwind project token.

---

# Accent Color

## Orange — CTA and Strategic Emphasis

HEX: `#F57C00`

Usage:
- CTA buttons (primary fill)
- hover accents
- approach step numbers
- world map markers
- card top borders
- link arrows
- eyebrow accents

Typical opacity levels:
- Non-CTA uses: `0.70`–`0.95` on markers
- Borders: `0.18`–`0.42`
- Decorative network lines: `0.13`

Avoid: orange as a background fill for large areas.

---

# Supporting Colors

| Role | Value | Usage |
|---|---|---|
| Light text / labels | `#F2F2F2` | Secondary text, labels |
| White | `#FFFFFF` | Primary text on dark backgrounds |

---

# CTA System

Primary CTA:
- background: `#F57C00`
- text: white
- hover: darkened fill

Secondary CTA:
- outlined style
- transparent background

---

# Color Usage Rules

- Dark backgrounds dominate (~70% of visual area).
- Orange accent used at ~10% of visual weight.
- Light text and neutrals fill the remaining ~20%.
- Never apply orange as a section-level background fill.
- Never apply `#00274C` as a primary background — it is an atmospheric tone only.

---

# Background Philosophy

The website prioritizes:
- near-black premium backgrounds
- high contrast readability
- subtle section rhythm through slight tonal shifts

Avoid:
- overly colorful layouts
- excessive gradients
- neon aesthetics
- strong color banding between sections
