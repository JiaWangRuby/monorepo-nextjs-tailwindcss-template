# Myopic Design — Next.js & Tailwind CSS Monorepo Template

This is a monorepo template using:

- 📏 [TypeScript 4.9](https://www.typescriptlang.org/)
- ⚡️ [Next.js 13.2](https://nextjs.org/)
- ⚛️ [React 18.2](https://reactjs.org/)
- 🌬️ [Tailwind CSS 3.2](https://tailwindcss.com/)
- 📕 [Storybook 7.0](https://storybook.js.org/)
- 🧪 [Testing Library](https://testing-library.com/)
- 🃏 [Jest](https://jestjs.io/)
- 🎭 [Playwright](https://playwright.dev/)
- 🧹 [ESLint](https://eslint.org/)
- 🤖 [CommitLint](https://commitlint.js.org/)
- 💖 [Prettier](https://prettier.io/)
- 📦 [pnpm](https://pnpm.io/)
- 🏎️ [Turborepo](https://turbo.build/repo)
- 👷 [Github Actions](https://github.com/features/actions)

## What's inside?

This monorepo includes a few apps and packages.

### Apps and Packages

- `apps/omega-star`: a Next.js app with Tailwind CSS
- `apps/website`: another Next.js app with Tailwind CSS
- `packages/ui`: a stub React component library with Tailwind CSS, shared by both `omega-star` and `website` apps
- `packages/eslint-config-custom`: shared ESLint configuration
- `packages/jest-config`: shared Jest configuration
- `packages/next-config`: shared Next.js configuration
- `packages/playwright-config`: shared Playwright configuration
- `packages/storybook-config`: shared Storybook configuration
- `packages/tailwindcss-config`: shared Tailwind CSS configuration
- `packages/typescript-config`: shared `tsconfig.json` files

### Building `packages/ui`

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your [`tailwind.config.js`](packages/tailwindcss-config/tailwind.config.js) to be aware of your package locations, so it can find all usages of the Tailwind CSS class names, like this:

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

## Using this template

Run the following command:

```
npx degit myopic-design/monorepo-nextjs-tailwindcss-template my-monorepo
cd my-monorepo
pnpm install
```

### Develop Next.js

If you want to start `apps/omega-star` and `apps/website` in development mode, and watch for changes in `packages/ui`, run at the root:

```
pnpm dev
```

### Build Next.js

If you want to build `apps/omega-star` and `apps/website` for production, run at the root:

```
pnpm build
```

If you want to see an analysis of the generated bundles, specify the `ANALYZE` environment variable:

```
ANALYZE=true pnpm build
```

### Preview Next.js

If you want to preview production builds of `apps/omega-star` and `apps/website`, run at the root:

```
pnpm start
```

### Develop Storybook

If you want to start all Storybook projects in development mode, run at the root:

```
pnpm storybook:dev
```

### Develop Storybook

If you want to build all Storybook projects, run at the root:

```
pnpm storybook:build
```

### Unit tests

If you want to run unit tests for all projects, run at the root:

```
pnpm test:unit
```

### End-to-end tests

If you want to run e2e tests for all projects, run at the root:

```
pnpm test:e2e
```

### Lint

If you want to run linting for all projects, run at the root:

```
pnpm lint
```
