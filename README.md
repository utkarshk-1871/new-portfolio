# Utkarsh Karnik — Portfolio

**Live site:** [https://utkarshk-1871.github.io/new-portfolio/](https://utkarshk-1871.github.io/new-portfolio/)

Personal portfolio for **Utkarsh Karnik**, a Mobile App Developer based in Gandhinagar, Gujarat, India. Showcases 4+ years of experience building scalable Flutter applications across healthcare, SaaS, finance, and entertainment.

This is a rewrite of the original [Flutter portfolio](https://github.com/utkarshk-1871/portfolio) as a static Next.js site, deployed to GitHub Pages via GitHub Actions.

## What's on the site

| Section          | Content                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Hero**         | Name, tagline, rotating roles, 3D hero scene, CTAs                                                                                               |
| **About**        | Professional summary, stats (4+ years, 8+ apps, 6 industries)                                                                                    |
| **Experience**   | Zignuts Technolab — Mobile App Developer (Jul 2022 – Present) and Intern (Jan–Jul 2022)                                                          |
| **Skills**       | Dart, Flutter, Riverpod, Bloc, Firebase, CI/CD, and more across 7 categories                                                                     |
| **Projects**     | 6 featured apps — Charades Game, Health Monitoring, White-Label Hospitality, Music Insights, Medical Tanker Management, SaaS Resource Management |
| **Achievements** | 8+ apps delivered, Play/App Store releases, CI/CD pipelines                                                                                      |
| **Education**    | B.Tech CSE at CHARUSAT (2018–2022), High School at Advait Vidyaniketan                                                                           |
| **Contact**      | Email, phone, GitHub, LinkedIn, resume                                                                                                           |

## Contact

- **Email:** [utkarshk1871@gmail.com](mailto:utkarshk1871@gmail.com)
- **Phone:** [+91 9925788460](tel:+919925788460)
- **GitHub:** [utkarshk-1871](https://github.com/utkarshk-1871)
- **LinkedIn:** [utkarsh-karnik](https://www.linkedin.com/in/utkarsh-karnik-1b2661176/)
- **Resume:** [Google Drive](https://drive.google.com/file/d/1vs2dnru_ws8mKEXfO7uM1SCFlFz_JEt1/view?usp=sharing)

## Tech stack

- **Next.js 16** (App Router, static export) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for layout and styling
- **MUI** for mobile navigation drawer
- **Three.js / React Three Fiber** for the hero 3D scene (lazy-loaded)
- **Framer Motion** (`motion`) for scroll reveals and interactions
- **GitHub Actions** → **GitHub Pages** CI/CD

## Local development

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

Uses `NEXT_PUBLIC_BASE_PATH=/new-portfolio` for project-page deployment.

## Updating content

Portfolio facts live in `src/data/` — edit these files to update the site without touching UI code:

- `profile.ts` — name, title, summary, tagline, roles
- `experience.ts` — work history
- `projects.ts` — featured projects
- `skills.ts` — skill categories
- `education.ts` — academic background
- `achievements.ts` — career highlights
- `social.ts` — links and resume URL

Content issue resolutions are tracked in [`CONTENT_RESOLUTIONS.md`](CONTENT_RESOLUTIONS.md). Full architecture is in [`PLAN.md`](PLAN.md).

## Project structure

```
src/
├── data/        # Portfolio content (typed TS)
├── sections/    # Hero, About, Experience, Skills, Projects, etc.
├── components/  # Navbar, Footer, ThemeToggle, etc.
├── three/       # Isolated 3D hero scene
└── theme/       # Design tokens + dark/light mode
```
