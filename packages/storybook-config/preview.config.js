import { withThemeByClassName } from "@storybook/addon-styling";

/** @type { import('@storybook/react').Preview } */
const config = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
  parameters: {
    backgrounds: {
      default: "dark",
    },
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default config;
