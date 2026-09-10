# AGENTS.md — Working Agreement for AI Coding Agents

This file orients any AI agent (Cursor, Claude Code, or otherwise) working in this repository. It is the machine-readable companion to `PLAN.md`. Read `PLAN.md` first for full architectural rationale — this file is the condensed, actionable subset.

## Current phase

**Implementation complete.** The Next.js portfolio app is scaffolded and built. Work phase-by-phase per `PLAN.md` §22 for any new changes. Don't skip quality gates.

## Source of truth

- **Content facts** (name, experience, projects, skills, education, links): `src/data/*.ts` in this repo. The Flutter app at `/Users/ztlab66/Documents/utkarsh/Projects/portfolio` is read-only reference. Never invent portfolio facts. Content resolutions are tracked in `CONTENT_RESOLUTIONS.md`.
- **Architecture decisions**: `PLAN.md`. If an implementation detail isn't covered there, extend the plan first (or ask), don't improvise silently for anything architecturally significant.

## Stack

Next.js 16 (App Router, `output: 'export'`) · React 19 · TypeScript strict · Tailwind CSS v4 · MUI (narrow scope — see `PLAN.md` §17) · three.js / @react-three/fiber (hero only, lazy-loaded) · Framer Motion (`motion`) · pnpm · ESLint 9 flat config · Prettier 3 · Vitest.

Deployment target: GitHub Pages via GitHub Actions. No server-only Next.js features.

## Non-negotiable rules

1. Do not add a dependency without a clear, stated reason.
2. Do not suppress ESLint/TypeScript warnings to make a build pass.
3. Zero TypeScript errors, zero ESLint errors/warnings, zero unused imports/vars, zero `console.*` in shipped code, zero broken links, zero missing `alt` text.
4. Every animation must degrade gracefully under `prefers-reduced-motion: reduce`.
5. Three.js code lives only in `src/three/`, is dynamically imported (`ssr: false`).
6. Server Components by default; `"use client"` only when required.
7. Tailwind owns layout/spacing/typography; MUI only for Drawer/Tooltip/Snackbar per `PLAN.md` §17.
8. No secrets in this repo.

## Commands

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm format:check
pnpm test
pnpm build
pnpm build:pages   # GitHub Pages build with basePath
pnpm check-links
```

Before considering any task "done," run the full quality gate locally.

## Directory responsibilities

- `src/data/` — facts only, no JSX.
- `src/types/` — shape of those facts.
- `src/sections/` — one file per portfolio section.
- `src/components/` — generic, reusable UI.
- `src/three/` — isolated 3D code.
- `src/theme/` — design tokens and MUI theme.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
