// .storybook/YourTheme.js

import { create } from "@storybook/theming/create";
import logo from "../public/inline.png";

export default create({
  base: "light",
  brandTitle: "My custom Storybook",
  brandUrl: "https://example.com",
  brandImage: logo,
  brandTarget: "_self",

  //
  colorPrimary: "#3A10E5",
  colorSecondary: "#000000",

  // // UI
  // appBg: "#ffffff",
  // appContentBg: "#ffffff",
  // appBorderRadius: 4,

  // // Text colors
  // textColor: "#10162F",
  // textInverseColor: "#ffffff",

  // // Toolbar default and active colors
  // barTextColor: "#9E9E9E",
  // barSelectedColor: "#000000",
  // barBg: "#ffffff",

  // // Form colors
  // //   inputBg: "#ffffff",
  // //   inputBorder: "#10162F",
  // //   inputTextColor: "#10162F",
  // //   inputBorderRadius: 2,
});
