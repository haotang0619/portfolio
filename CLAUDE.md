# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Howard Tang (live at https://www.hao-tang.com/). Single-page Next.js 14 app (Pages Router), React 18, TypeScript, MUI v5 + Emotion. All content is hard-coded in the components — there is no CMS, API route, or data layer.

## Commands

Package manager is npm (`package-lock.json`).

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build, including lint and type check
- `npx tsc --noEmit` — type check only (no npm script for it)
- `npm run build:analy` — build with `@next/bundle-analyzer` enabled (`ANALYZE=true`)
- `npm run lint` — runs Prettier **with `--write`** on `src/**` and root config files, then `eslint --fix`. It modifies files.

There is no test suite.

## Git hooks

Husky runs on commit:
- `pre-commit`: `lint-staged` → `eslint --fix` + `prettier --write` on staged `src/**` files.
- `commit-msg`: commitlint with `@commitlint/config-conventional` — commit messages must be Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `chore:`, …).

## Architecture

- `src/pages/_app.tsx` wraps everything in the MUI `ThemeProvider` and `GlobalCSS`, and holds the site-wide `<head>` (title, description, Open Graph tags).
- `src/pages/index.tsx` is the only page. Its `sections` array is the single source of truth for section order **and** the corner navigation: each entry is `{ Component, label? }`, and `label` must equal the uppercase `id` on that section's heading (e.g. `id="WORK"`), which nav clicks scroll to. Adding, removing, or reordering a section means editing this array (and giving the section a matching heading `id`). The heading label shown on the page may differ from the component name (`Skill` → `SKILLS`, `Blog` → `FEATURED`).
- Scroll focus: `index.tsx` wraps each section in a `Box` and tracks the active one (the last section whose top has passed `min(innerHeight / 3, 300px)`, or the last section at page bottom). Inactive sections are dimmed via opacity. The same active label is passed to `CornerNavs` to highlight the nav, so `CornerNavs` has no scroll logic of its own. Section vertical padding is applied from `index.tsx` via `'& > div > div'`, overriding each section's own padding.
- Each section in `src/components/` owns its own content as hard-coded JSX or a local data array (`Projects`, `Skill`, `Blog`, `Contact`). `Item.tsx` is the shared static row (period / title / organization / bullet list, no hover effects) used by `Work` and `Education`; bullets are `ReactNode[]` with inline `<b>`. `Projects` holds the per-project details and metrics, so `Work` intentionally stays brief rather than repeating them.
- Static files: `public/imgs/` for images (project screenshots in `public/imgs/projects/`), `public/assets/docs/` for `resume.pdf` (linked from `Banner` and `Work`) and `portfolio.pdf` (linked from `Projects` as "View Project Deck"). Updating them means replacing these PDFs; the browser tab title comes from the PDF's metadata `/Title` (currently `Howard Tang - Resume` / `Howard Tang - Project Deck`), so re-set it on a new file.

### Theme / typography system (`src/theme/`)

- Custom MUI Typography variants named `T{size}{weight}`, e.g. `T32B`, `T14R`. Sizes: 88, 64, 32, 24, 16, 14. Weights: `B`=700, `S`=600, `M`=500, `R`=400.
- `util.ts` defines the variant list (`textHierarchy`) and size → font-size/line-height mapping; `theme/index.tsx` generates the style overrides from it; `type.ts` augments MUI's TypeScript types so the variants type-check. Adding a new size/weight requires updating all three.
- Font weights resolve through CSS variables (`--weight-B` etc.) injected globally from `fontVariables.tsx` via `GlobalCSS.tsx`.
- Light/dark mode: all neutral colors are CSS variables defined per scheme in `colorVariables.ts` (dark on `:root`, light on `:root[data-theme="light"]`, emitted by `GlobalCSS.tsx`). Use the exported `colors.*` (`var(--color-*)`) in `sx` instead of hard-coded hex values; the MUI palette's `text` and `background` point at the same variables. Dark is the default; the toggle in `CornerNavs` sets `data-theme` and stores the choice in `localStorage`, and an inline script in `_document.tsx` re-applies it before first paint.
- Primary `#EB5939` is shared by both schemes (MUI can't derive palette shades from a CSS variable). Font family is Poppins.

## Code style

- Styling is done inline with MUI `sx` props, using responsive breakpoint objects (`{ sm: ..., xs: ... }`).
- Import alias `@/*` → `src/*`.
- ESLint `perfectionist/recommended-natural` enforces sorted imports (groups: react/next → external → `@/` internal → parent → sibling, blank line between groups) **and sorted object keys / JSX props** — keep keys and props alphabetical or lint fails.
- Prettier: single quotes, trailing commas, print width 100, 2-space indent.
- `tsconfig` has `strict: true` but `strictNullChecks: false`.

Note: the README's "Directory Structure" section (`/i18n`, `/query`, `/layouts`, …) is from a template and does not match this repo.
