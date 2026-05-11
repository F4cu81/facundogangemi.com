# Phase 2 — Layout Refinement Handoff Note
**Date:** 2026-05-10  
**Session status:** Implementation complete. Build blocked by pre-existing dependency conflict. No commits created.

---

## 1. What was completed in Phase 2

All four implementation steps from the approved spec were applied:

### Step 1 — `src/styles/global.css`
- **Fix 1:** Corrected critical typo `padding-block: 120x` → `120px` (sections had zero vertical padding)
- **Fix 2:** Aligned container max-width from `1320px` → `1280px` (matches design token and Navbar)
- **Fix 3:** Added six missing utility classes: `.section-dark`, `.section-light`, `.section-white`, `.section-header-split`, `.reveal`, `.reveal.visible`
- **Fix 4:** Corrected card border radius token `--radius-card: 24px` → `1rem` (16px)
- **Fix 5:** Aligned `--color-navy-dark: #001a33` → `#001B35` (tokens.css source of truth)
- **Fix 7:** Added reveal delay utilities `.delay-100`, `.delay-200`, `.delay-300`
- **Refinement 1:** Added default card padding `1.75rem 2rem` to `.card`
- **Refinement 2:** Added fluid type utilities `.text-hero` and `.text-section`

### Step 2 — `src/pages/index.astro`
- **Fix 6:** Removed duplicate inline `<footer>` (BaseLayout already renders Footer globally)
- **Refinement 2:** Applied `.text-hero` to Hero H1
- **Refinement 2:** Applied `.text-section` to Advisory Grid H2 and Phase 1 status H2

### Step 3 — `src/components/ui/SectionWrapper.astro`
- **Refinement 3:** Fixed `large` variant mobile spacing `py-20` → `py-24` (eliminated inverted spacing hierarchy)

### Step 4 — `src/components/global/Navbar.astro`
- **Refinement 4:** Added `container-site` class to navbar container div; removed duplicate `width` and `margin` from scoped CSS

### Sitemap fix attempt — `astro.config.mjs`
- Added `i18n` option to `sitemap()` call — did not resolve the build error (wrong diagnosis)
- This file change is pending either revert or replacement in the next session

---

## 2. Files currently modified

| File | Change type | State |
|---|---|---|
| `src/styles/global.css` | Phase 2 fixes + refinements | Done — keep |
| `src/pages/index.astro` | Phase 2 fixes + refinements | Done — keep |
| `src/components/ui/SectionWrapper.astro` | Phase 2 refinement | Done — keep |
| `src/components/global/Navbar.astro` | Phase 2 refinement | Done — keep |
| `astro.config.mjs` | Failed sitemap fix attempt | Needs replacement next session |

All changes are unstaged. Branch is `main`, up to date with `origin/main`. No commits created.

---

## 3. Validation status

| Check | Result |
|---|---|
| `npm run check` | ✓ 0 errors · 0 warnings · 4 pre-existing hints |
| `npm run build` — page generation | ✓ All 7 pages generate correctly |
| `npm run build` — exit code | ✗ Exit 1 — sitemap post-build hook crashes |
| Phase 2 changes introduced errors | No |

---

## 4. Current build blocker

**Package:** `@astrojs/sitemap` v3.7.2  
**Conflict with:** Astro v4.16.19

`@astrojs/sitemap` v3.7.2 registers an `astro:routes:resolved` hook to populate an internal `_routes` variable. That hook was introduced in Astro 5.x and is not emitted by Astro 4.x. `_routes` is never assigned, remains `undefined`, and `.reduce()` crashes in the `build:done` hook at `node_modules/@astrojs/sitemap/dist/index.js:85`.

This is a pre-existing dependency conflict — it was present before Phase 2 and was not introduced by any Phase 2 change.

---

## 5. Exact next recommended action

**Option A — Downgrade `@astrojs/sitemap` (approved, preferred)**

Downgrade to `3.6.0` or the highest version that does not use `astro:routes:resolved`. Then revert `astro.config.mjs` to plain `sitemap()` if the i18n option is no longer needed at the lower version.

This is the lowest-risk fix. Only `package.json`, `package-lock.json`, and `node_modules` change. No source files involved.

---

## 6. Commands to run when you return

**Step 1 — Verify session state is unchanged:**
```bash
git status
git diff --stat
```

**Step 2 — Check available sitemap versions:**
```bash
npm info @astrojs/sitemap dist-tags
npm info @astrojs/sitemap@3.6.0 peerDependencies
```

**Step 3 — Install the safe version (pending your approval after Step 2):**
```bash
npm install @astrojs/sitemap@3.6.0
```

**Step 4 — Revert the failed i18n change in `astro.config.mjs` back to:**
```js
sitemap(),
```

**Step 5 — Validate:**
```bash
npm run check
npm run build
```

**Step 6 — If build passes, commit all Phase 2 changes:**
```bash
git add src/styles/global.css src/pages/index.astro src/components/ui/SectionWrapper.astro src/components/global/Navbar.astro astro.config.mjs docs/
git commit -m "feat: Phase 2 layout refinement — fixes, typography, spacing, container alignment"
```

---

## 7. What not to do yet

- Do not run `npm install` until you have confirmed the correct safe version in Step 2 above
- Do not upgrade Astro to v5 without a full compatibility review
- Do not commit until the build passes cleanly
- Do not modify any Phase 2 implementation files (`global.css`, `index.astro`, `SectionWrapper.astro`, `Navbar.astro`) — they are complete and correct
- Do not push to `origin/main` until committed and validated locally
