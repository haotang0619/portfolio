# Howard Tang - Portfolio

> To view the live website, click [here](https://www.hao-tang.com/).

## Overview

- ⚡️ [Next.js](https://nextjs.org/) 14
- ⚛️ [React](https://beta.reactjs.org/) 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🚓 Commitlint — To make sure your commit messages follow the [convention](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs

## Development

To start the project locally, run:

```bash
npm install # only for the first time or for installing new dependencies
npm run dev
```

- Check `http://localhost:3000` for frontend.
- Check `http://localhost:3000/api` for backend.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Directory Structure

> Reference:
>
> 1. https://unlyed.github.io/next-right-now/reference/folder-structure
> 2. https://github.com/UnlyEd/next-right-now/tree/v2-mst-aptd-at-lcz-sty

1. `/_app`: Contains code (components, business logic, types) that is being used by the special pages/\_app.tsx Next.js file.
2. `/common`: Contains everything that cannot be categorized as a module.
3. `/constant`: Constant like enum, static value, status code, etc.
4. `/i18n`: Contains i18n files.
5. `/layouts`: Contains the layouts used by pages.
6. `/pages`: Contains Next.js pages.
7. `/public`: Static file serving.
8. `/query`: react-query related code.

## Scripts

- `npm run dev` — Starts the application in development mode.
- `npm start` — Starts the application in production mode (after build).
- `npm run build` — Creates an optimized production build of your application.
- `npm run lint` — Runs ESLint for all files in the `apps` & `libs` directory.

## Conventional Commits

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes to UIUX or changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor` - A code change that neither fixes a bug nor adds a feature
- `perf` - A code change that improves performance
- `test` - Adding missing tests or correcting existing tests
- `build` — Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci` - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `chore` - Other changes that don't modify src or test files
- `revert` - Reverts a previous commit
