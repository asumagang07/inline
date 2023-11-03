/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}", //needed to make hot reload work with stories
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#E7F3FE",
          100: "#D3EAFD",
          200: "#A8D5FA",
          300: "#78BEF8",
          400: "#4CA9F5",
          500: "#2196F3",
          600: "#0B77D0",
          700: "#08599B",
          800: "#063D6A",
          900: "#031F35",
          950: "#010E18",
        },
        red: {
          50: "#FEEDEC",
          100: "#FDDBD8",
          200: "#FAB2AD",
          300: "#F88E86",
          400: "#F66A5F",
          500: "#F44336",
          600: "#E31B0C",
          700: "#A91409",
          800: "#6F0D06",
          900: "#3A0703",
          950: "#1D0302",
        },
        orange: {
          50: "#FFF5E5",
          100: "#FFEBCC",
          200: "#FFD699",
          300: "#FFC266",
          400: "#FFAD33",
          500: "#FF9800",
          600: "#CC7A00",
          700: "#995C00",
          800: "#663D00",
          900: "#331F00",
          950: "#190F00",
        },
        yellow: {
          50: "#FFFDEB",
          100: "#FFFBD6",
          200: "#FFF7B3",
          300: "#FFF38A",
          400: "#FFEF61",
          500: "#FFEB3B",
          600: "#FAE100",
          700: "#BDAA00",
          800: "#807300",
          900: "#3D3700",
          950: "#1F1C00",
        },
        purple: {
          50: "#F0EBF9",
          100: "#DED4F2",
          200: "#BDA9E5",
          300: "#9C7DD8",
          400: "#7B52CB",
          500: "#5E35B1",
          600: "#4B2A8D",
          700: "#38206A",
          800: "#261547",
          900: "#130B23",
          950: "#0A0614",
        },
        green: {
          50: "#EDF7EE",
          100: "#DBF0DC",
          200: "#B8E0B9",
          300: "#94D196",
          400: "#6DC070",
          500: "#4CAF50",
          600: "#3C8B3F",
          700: "#2E6B30",
          800: "#1F4720",
          900: "#0F2410",
          950: "#081208",
        },
        default: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#D9D9D9",
          300: "#C4C4C4",
          400: "#B3B3B3",
          500: "#9E9E9E",
          600: "#808080",
          700: "#5E5E5E",
          800: "#404040",
          900: "#1F1F1F",
          950: "#0F0F0F",
        },
      },
    },
  },
  plugins: [],
};
