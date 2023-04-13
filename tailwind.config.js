const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      black: "#171717",
      white: "#f1f1f1",
      neutralBlack: "#4B4B4B",
      neutralWhite: "#D9D9D9",
    },
    fontFamily: {
      redhatmono: ["var(--font-redhatmono)", ...fontFamily.mono],
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
