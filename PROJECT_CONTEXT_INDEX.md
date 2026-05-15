# PROJECT_CONTEXT_INDEX.md

## Purpose

This document defines which project files Claude Code should read depending on the type of work requested.

Its goal is to reduce unnecessary context loading, avoid outdated guidance, and keep future development aligned with the current architecture of `facundogangemi.com`.

---

## Core Rule

Claude Code should not read the entire repository by default.

Read only the minimum set of documents required for the task.

Archived documents are historical records. They must not guide current development decisions unless the user explicitly asks to review historical context.

---

## Tier 1 — Always Read

These files are the primary source of truth for most development sessions.

| File | Purpose | When to read |
|---|---|---|
| `CLAUDE.md` | Technical rules, stack, development workflow, quality gates and project constraints | Every session |
| `MASTER_CONTEXT.md` | Strategic identity, positioning, services, audience and brand direction | Every session |
| `CEREBRO.md` | Living session memory and current working context | Every session |

---

## Tier 2 — Read by Work Type

These files should be loaded only when the task requires them.

| Work type | Files to read |
|---|---|
| SEO changes | `docs/seo/google-positioning-guardrails.md`, `docs/seo/seo-page-inventory.md` |
| Page metadata changes | `docs/seo/seo-page-inventory.md` |
| New article or insight | `docs/seo/article-seo-guidelines.md`, `docs/seo/google-positioning-guardrails.md` |
| Internal linking decisions | `docs/seo/google-positioning-guardrails.md`, `docs/seo/seo-page-inventory.md` |
| Structured data changes | `docs/seo/google-positioning-guardrails.md`, `docs/seo/seo-page-inventory.md` |
| Advisory positioning or conversion strategy | `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md` |
| Legal page changes | `legal/legal-context.md` |
| Visual design or image direction | `references/visual-direction.md`, `references/reference-sources.md`, relevant files in `branding/` |
| UX/UI review, layout review, spacing review, pre-implementation page audit | `docs/ux/UX_REVIEW_AGENT.md` |

---

## Tier 3 — Reference Only When Relevant

These files and folders are useful but should not be loaded unless the task clearly needs them.

| Path | Purpose |
|---|---|
| `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md` | Strategic skill definition for executive digital brand, advisory positioning, conversion and web standards |
| `legal/legal-context.md` | Legal context and copy guidance for legal pages |
| `branding/` | Brand visual and tone guidance, if present |
| `references/visual-direction.md` | Visual direction for design and image generation decisions |
| `references/reference-sources.md` | Curated visual references |
| `coworkers/` | Claude Code coworker or agent definitions |
| `docs/superpowers/specs/` | Superpowers system files |

---

## Tier 4 — Historical Archive

Archived files are historical or superseded. Do not use them as current guidance.

| Path | Status |
|---|---|
| `strategy/archive/` | Historical pre-implementation planning documents |
| `ux/archive/` | Historical UX planning documents |
| `docs/archive/` | Historical operational and audit documents |
| `docs/archive/audits/` | Closed audit reports |

Archived files may be consulted only when:

- the user asks for historical reasoning;
- a previous decision must be reconstructed;
- an archived brief is explicitly needed as reference for future expansion.

They must not override `CLAUDE.md`, `MASTER_CONTEXT.md`, `CEREBRO.md`, active SEO documentation or active strategy documentation.

---

## Current Advisory Architecture

The Advisory architecture is consolidated.

The only live advisory route is:

```text
/advisory/
```

It contains these anchor sections:

```text
/advisory/#ai-strategy
/advisory/#digital-transformation
/advisory/#operational-excellence
/advisory/#ai-adoption
```

The following routes were deleted and must not be recreated unless a future architecture decision explicitly requests it:

```text
/advisory/ai-strategy/
/advisory/digital-transformation/
/advisory/ai-adoption/
/advisory/enterprise-agility/
```

Operational Excellence is the advisory pillar label.
Enterprise Agility may remain only as an editorial or SEO content theme.

---

## Current Active Source of Truth

Use this hierarchy when documents overlap:

1. `CLAUDE.md`
2. `MASTER_CONTEXT.md`
3. `CEREBRO.md`
4. `docs/seo/google-positioning-guardrails.md`
5. `docs/seo/seo-page-inventory.md`
6. `docs/seo/article-seo-guidelines.md`
7. `strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md`
8. Task-specific references from `legal/`, `branding/` or `references/`

If an archived document contradicts any active file, the active file wins.

---

## Reading Rules for Claude Code

### For general code changes

Read:

```text
CLAUDE.md
MASTER_CONTEXT.md
CEREBRO.md
```

Then inspect only the relevant source files.

### For SEO work

Read:

```text
CLAUDE.md
MASTER_CONTEXT.md
CEREBRO.md
docs/seo/google-positioning-guardrails.md
docs/seo/seo-page-inventory.md
```

### For article work

Read:

```text
CLAUDE.md
MASTER_CONTEXT.md
CEREBRO.md
docs/seo/article-seo-guidelines.md
docs/seo/google-positioning-guardrails.md
```

### For advisory, service or positioning work

Read:

```text
CLAUDE.md
MASTER_CONTEXT.md
CEREBRO.md
strategy/EXECUTIVE_DIGITAL_BRAND_STRATEGY.md
```

### For legal pages

Read:

```text
CLAUDE.md
MASTER_CONTEXT.md
CEREBRO.md
legal/legal-context.md
```

### For visual or image-related work

Read:

```text
CLAUDE.md
MASTER_CONTEXT.md
CEREBRO.md
references/visual-direction.md
references/reference-sources.md
branding/
```

Only read specific branding files that are relevant to the task.

---

## Do Not Use as Active Guidance

Do not use these folders as current guidance:

```text
strategy/archive/
ux/archive/
docs/archive/
docs/archive/audits/
```

Do not recreate deleted advisory sub-pages based on archived planning documents.

Do not treat historical Phase 1, Phase 5, Phase 6, Phase 7 or Phase 8 reports as current architecture unless the user explicitly asks to review them.

---

## Validation Commands

Before committing significant changes, run:

```bash
npm run check
npm run build
```

When working near Advisory architecture, also run:

```bash
rg "advisory/ai-strategy|advisory/digital-transformation|advisory/ai-adoption|advisory/enterprise-agility"
```

The search should not return active `src/` references to deleted advisory sub-pages.

---

## Maintenance Rule

Update this file whenever:

- a new primary source-of-truth document is created;
- an active document is archived;
- the Advisory architecture changes;
- a new SEO, legal, brand or technical guidance file becomes authoritative;
- Claude Code starts reading unnecessary context again.
