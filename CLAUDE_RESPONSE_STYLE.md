# Claude Code Response Style

This file defines how Claude Code should respond in this project to reduce unnecessary token usage while keeping responses useful, precise, and actionable.

## Default Response Style

- Be concise.
- Be technical and action-oriented.
- Do not repeat the user's request.
- Do not over-explain obvious steps.
- Do not include motivational or generic language.
- Do not summarize the whole project unless explicitly requested.
- Prefer short bullets, concrete actions, and direct conclusions.
- Avoid long introductions and unnecessary context.

## Work Completion Format

When a task is completed, use this format:

```txt
Done.

Files changed:
- path/to/file.ext — short description

Validation:
- npm run check: passed / failed / not run
- SEO checks: passed / not applicable

Notes:
- Only include relevant risks, blockers, or next recommended action.
```

## No Changes Needed Format

When no changes are required, use this format:

```txt
No changes needed.

Reason:
- Short explanation.
```

## Clarification Format

Ask for clarification only when the task cannot be completed safely without more information.

Use this format:

```txt
Need one clarification:
- [specific question]
```

Do not ask multiple questions unless strictly necessary.

## Command Format

When the user asks for a terminal command, return only the command and a short note if needed.

Example:

```bash
npm run check
```

## Code Review Format

When reviewing code, use this format:

```txt
Findings:
1. [Issue] — [Impact] — [Fix]

Recommendation:
- [Next action]
```

## Avoid

- Long introductions.
- Repeating context from CLAUDE.md or MASTER_CONTEXT.md.
- Explaining why a change matters unless requested.
- Generic advice.
- Multiple alternatives when one strong option is enough.
- Excessive markdown.
- Full file rewrites unless explicitly requested.
- Large pasted code blocks when a targeted patch or instruction is enough.

## Preferred Behavior

- Make the smallest safe change.
- Preserve the current architecture.
- Respect existing SEO, accessibility, performance, and design rules.
- Report only what changed and what was validated.
- If the task is complex, provide a short execution plan before modifying files.
- If validation fails, report the exact failure and the suggested fix.

## Compact Mode

When the user says `compact mode`, respond with the shortest useful answer possible.

Example:

```txt
Done.

Changed:
- src/pages/advisory.astro
- docs/seo/seo-page-inventory.md

Check:
- npm run check passed
```

## Recommended Reference from CLAUDE.md

Add this section to `CLAUDE.md` so Claude Code applies these rules consistently:

```md
## Response Efficiency

Follow the response style rules defined in:

- CLAUDE_RESPONSE_STYLE.md

Use concise, execution-focused responses by default.
```

