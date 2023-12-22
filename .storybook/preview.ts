import type { Preview } from "@storybook/react";
// import "tailwindcss/tailwind.css";
import "../src/index.css";

// import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    layout: "padded",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs: {
    //   theme: themes.dark,
    // },
  },
};

export default preview;
