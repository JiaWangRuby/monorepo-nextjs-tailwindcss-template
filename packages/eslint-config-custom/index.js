module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:storybook/csf-strict",
    "turbo",
    "prettier",
  ],
  plugins: ["simple-import-sort", "testing-library"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  overrides: [
    {
      files: ["**/*.e2e.{js,jsx,ts,tsx}"],
      extends: ["plugin:playwright/playwright-test"],
    },
    {
      files: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
};
