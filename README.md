# Utkarsh Karnik — Portfolio

A modern single-page portfolio built with Next.js, TypeScript, Tailwind CSS, MUI, and Three.js. Deployed as a static site to GitHub Pages.

## Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- MUI (Drawer for mobile nav)
- Three.js / React Three Fiber (hero scene)
- Framer Motion (`motion`)
- Vitest + React Testing Library

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

## GitHub Pages build

```bash
pnpm build:pages
```

This sets `NEXT_PUBLIC_BASE_PATH=/new-portfolio` for project-page deployment at `https://utkarshk-1871.github.io/new-portfolio/`.

## Project structure

- `src/data/` — portfolio content (edit here to update facts)
- `src/sections/` — page sections
- `src/components/` — reusable UI
- `src/three/` — isolated 3D hero scene
- `src/theme/` — design tokens and MUI theme

See [`PLAN.md`](PLAN.md) for full architecture documentation.
