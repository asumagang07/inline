// .storybook/YourTheme.js

import { create } from "@storybook/theming/create";
import logo from "../public/inline.png";

export default create({
  base: "light",
  brandTitle: "My custom Storybook",
  brandUrl: "https://example.com",
  brandImage: logo,
  brandTarget: "_self",

  colorPrimary: "#3A10E5",
  colorSecondary: "#000000",
});
