---
name: portfolio-rewrite
description: >-
  Guidance for implementing the Flutter-to-Next.js portfolio rewrite described
  in PLAN.md. Use when adding/editing sections, content data, theme, three.js
  scenes, or CI/CD in this repository — i.e. whenever working inside
  new-portfolio on portfolio implementation tasks.
---

# Portfolio Rewrite — Implementation Skill

Full architecture and rationale: [`PLAN.md`](PLAN.md). This skill is the quick operational reference for common tasks in this specific repo.

## Adding or editing portfolio content

Content lives in `src/data/*.ts`, typed by `src/types/content.ts` (see `PLAN.md` §15). To change a fact (add a project, fix a date, add a skill):

1. Edit the relevant file in `src/data/` only — never hardcode facts inside a `src/sections/*.tsx` or `src/components/*.tsx` file.
2. If the change contradicts something in `PLAN.md` §2/§3, note it — that's expected, §3 is a tracked list of issues to resolve, not settled fact.
3. Don't invent values for missing fields (e.g. a project link that doesn't exist yet) — leave the field `undefined`/omitted; the UI is designed to gracefully hide missing optional fields (project links, images), per `PLAN.md` §2.

## Adding a new section or component

1. Check `PLAN.md` §10 (section list) / §14 (directory responsibilities) / §16 (Server vs. Client boundary table) first — most components are already scoped there.
2. Decide Server vs. Client using the default-to-Server rule: only add `"use client"` if the component needs state, event handlers, a browser API, or a client-only library (Framer Motion hooks, R3F, MUI interactive components).
3. Reuse existing generic components in `src/components/` before creating a new one.

## Working with the Three.js hero scene

- All 3D code lives in `src/three/`. It must be loaded via `next/dynamic(() => import(...), { ssr: false })`, never imported eagerly from a Server Component or from `layout.tsx`/`page.tsx` directly.
- Cap `dpr` (e.g. `[1, 1.5]`), use procedural/low-poly geometry only (no `.glb`/`.gltf` model imports — see `PLAN.md` §7/§8 rationale), and gate mounting behind a `prefers-reduced-motion` check and a coarse device-capability check.
- Pause the render loop when the canvas scrolls out of view.

## Theme work

- Colors/tokens are defined once as CSS variables in `src/theme/tokens.css`. Never hardcode a color in a component — reference the token (via a Tailwind class backed by the variable, or the MUI theme).
- Both light and dark values must be added together, and contrast-checked (WCAG AA) before merging.
- Any FOUC-prevention script logic changes must keep the "runs before hydration, reads localStorage, falls back to `prefers-color-scheme`" behavior intact (`PLAN.md` §9).

## Before finishing any task

Run, in order, and confirm all are clean:

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

A task is not complete if any of these produce errors or warnings. Do not disable a rule to pass this check — fix the underlying issue, or flag it for the repo owner if it's a genuine open question (e.g. a content discrepancy from `PLAN.md` §3).

## GitHub Pages / static-export constraints (always in effect)

- No Route Handlers, Server Actions, ISR, or middleware — `output: 'export'` forbids a server at runtime.
- `next/image` must use `unoptimized: true`; pre-optimize source images before committing.
- `basePath`/`assetPrefix` must stay correct for the deployed repo name (or be cleared if a custom domain/root user-site is used) — see `PLAN.md` §6.
- A `public/.nojekyll` file must exist in the output.
