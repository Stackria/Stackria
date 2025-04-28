/** @type {import('tailwindcss').Config} */
// Acertainity
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        museo: ['var(--font-museo)', 'serif'],
        outfit: ['var(--font-outfit)', 'serif'],

      },
      colors: {
        primary: "#0ca9f2da",
        secondary: "#032c62",
        customText: "#00d4ff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};
// For Acertainity
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
