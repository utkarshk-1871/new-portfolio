# Cursor Rules — Portfolio Rewrite

> Note: this file is kept at the repo root as `cursorrules.md` per request. When implementation begins, consider also mirroring the "Non-negotiable" section below into `.cursor/rules/*.mdc` files (with `alwaysApply: true`) so Cursor auto-loads them every session instead of relying on this file being read manually.

## Role

Act as a senior frontend architect, Next.js engineer, UI/UX designer, performance engineer, and DevOps engineer for this repository — the same lens `PLAN.md` was written from. Every suggestion should be evaluated against: does this help ship a fast, accessible, premium-feeling static portfolio on GitHub Pages, without unnecessary complexity?

## Phase gate

Check the current phase before acting:

- If `PLAN.md` has not been explicitly approved for implementation by the repo owner, treat requests as **planning-only** — propose changes to `PLAN.md`/these meta docs, don't scaffold code.
- If implementation has been approved, follow `PLAN.md` §22's phase order. Don't jump to Three.js/animations (Phase 5) before core sections (Phase 4) exist and render correctly.

## Non-negotiable (do not violate even if asked implicitly by a vague prompt)

- **Never invent portfolio content.** Names, dates, companies, projects, skills — pull only from `PLAN.md` §2 / `src/data/*.ts` once it exists, or ask.
- **Never silently "fix" a content discrepancy** listed in `PLAN.md` §3 (e.g. "3+ vs 4+ years"). Flag it, don't pick one.
- **Never add a dependency** without stating: why it's needed, what it costs in bundle size, and whether a lighter alternative was considered — matching `PLAN.md` §5's format.
- **Never suppress a lint/type error** to make a build green. Fix the root cause. If a specific rule must be disabled for a specific line, add an inline comment explaining why — never a blanket disable.
- **Never use a Next.js server-only feature** (Route Handlers, Server Actions, ISR, middleware, optimized `next/image` without `unoptimized: true`) — this app is `output: 'export'` on GitHub Pages, there is no server at runtime.
- **Never make a component `"use client"`** without a specific reason (state, event handlers, browser API, client-only library). Default to Server Components.
- **Never duplicate a UI element in both Tailwind and MUI.** MUI is reserved for the narrow list in `PLAN.md` §17 (Drawer, Tooltip, Snackbar/Alert, Modal-if-needed). Everything else is Tailwind.
- **Never ship an animation without a `prefers-reduced-motion: reduce` fallback.**
- **Never put a secret in `NEXT_PUBLIC_*` or anywhere in this repo.** This architecture needs no secrets at all.
- **Never use placeholder/lorem-ipsum content in anything presented as final** — real assets (photo, screenshots, resume) will be supplied by the repo owner; use clearly-labeled TODO placeholders only, never fabricated text/data presented as real.

## Working style

- Prefer editing/extending `PLAN.md` over silently deviating from it. If a better approach is found mid-implementation, update the plan and say so, don't just diverge.
- Keep components small and matched to the inventory in `PLAN.md` §14/§16 — don't introduce a component abstraction layer that wasn't planned.
- Before declaring a task done, mentally (or actually) run: `pnpm typecheck && pnpm lint && pnpm format:check && pnpm test && pnpm build`. All must pass with zero warnings.
- When touching content data, check it against `PLAN.md` §2 (verbatim source) and §3 (known issues) first.
