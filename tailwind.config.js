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
