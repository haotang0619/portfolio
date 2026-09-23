# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Howard Tang (live at https://www.hao-tang.com/). Single-page Next.js 14 app (Pages Router), React 18, TypeScript, MUI v5 + Emotion. All content is hard-coded in the components — there is no CMS, API route, or data layer.

## Commands

Package manager is npm (`package-lock.json`).

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also the only type check; there is no standalone `tsc` script)
- `npm run build:analy` — build with `@next/bundle-analyzer` enabled (`ANALYZE=true`)
- `npm run lint` — runs Prettier **with `--write`** on `src/**` and root config files, then `eslint --fix`. It modifies files.

There is no test suite.

## Git hooks

Husky runs on commit:
- `pre-commit`: `lint-staged` → `eslint --fix` + `prettier --write` on staged `src/**` files.
- `commit-msg`: commitlint with `@commitlint/config-conventional` — commit messages must be Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `chore:`, …).

## Architecture

- `src/pages/_app.tsx` wraps everything in the MUI `ThemeProvider` and `GlobalCSS`; `src/pages/index.tsx` is the only page and stacks the section components (`Banner`, `About`, `Education`, `Work`, `Skill`, `Blog`, `Contact`) plus the fixed `CornerNavs`.
- Each section in `src/components/` owns its own content. `Item.tsx` is the shared row component (period / title / subtitle / bullet list with hover highlight) used by `Education` and `Work`; bullet content is passed as `ReactNode[]` with inline `<b>`/`<a>`.
- Section headings carry an uppercase `id` (e.g. `id="WORK"`) used as in-page anchors.
- Static files: `public/imgs/` for images, `public/assets/docs/` for `resume.pdf` and `portfolio.pdf` (opened from `Work.tsx`). Updating the resume/portfolio means replacing these PDFs.

### Theme / typography system (`src/theme/`)

- Custom MUI Typography variants named `T{size}{weight}`, e.g. `T32B`, `T14R`. Sizes: 88, 64, 32, 24, 16, 14. Weights: `B`=700, `S`=600, `M`=500, `R`=400.
- `util.ts` defines the variant list (`textHierarchy`) and size → font-size/line-height mapping; `theme/index.tsx` generates the style overrides from it; `type.ts` augments MUI's TypeScript types so the variants type-check. Adding a new size/weight requires updating all three.
- Font weights resolve through CSS variables (`--weight-B` etc.) injected globally from `fontVariables.tsx` via `GlobalCSS.tsx`.
- Palette: primary `#EB5939`, text white / `#FFFFFF73` (secondary). Font family is Poppins.

## Code style

- Styling is done inline with MUI `sx` props, using responsive breakpoint objects (`{ sm: ..., xs: ... }`).
- Import alias `@/*` → `src/*`.
- ESLint `perfectionist/recommended-natural` enforces sorted imports (groups: react/next → external → `@/` internal → parent → sibling, blank line between groups) **and sorted object keys / JSX props** — keep keys and props alphabetical or lint fails.
- Prettier: single quotes, trailing commas, print width 100, 2-space indent.
- `tsconfig` has `strict: true` but `strictNullChecks: false`.

Note: the README's "Directory Structure" section (`/i18n`, `/query`, `/layouts`, …) is from a template and does not match this repo.
