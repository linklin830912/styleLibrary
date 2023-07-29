import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStorybookStyle from "./GlobalStorybookStyle";
import { ThemeProvider } from "@emotion/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// export const decorators = [
//   withThemeFromJSXProvider({
//     GlobalStyles: GlobalStorybookStyle, // Adds your GlobalStyles component to all stories
//   }),
// ];

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: { color: "blue" },
      dark: { color: "blue" },
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStorybookStyle,
  }),
];

export default preview;
