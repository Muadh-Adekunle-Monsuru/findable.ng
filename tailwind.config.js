/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#68dba9",
        "on-primary-fixed-variant": "#005137",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#68dba9",
        "on-secondary-fixed": "#00164e",
        "on-surface-variant": "#3d4a42",
        "on-primary-container": "#f5fff7",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#006c4a",
        "on-primary": "#ffffff",
        "on-error": "#ffffff",
        "tertiary-container": "#ba5551",
        "error": "#ba1a1a",
        "surface-bright": "#fcf9f8",
        "on-background": "#1c1b1b",
        "surface-variant": "#e5e2e1",
        "surface": "#fcf9f8",
        "primary": "#006948",
        "on-tertiary-fixed-variant": "#7f2928",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#1d3989",
        "on-surface": "#1c1b1b",
        "surface-container-high": "#ebe7e7",
        "background": "#fcf9f8",
        "secondary": "#4059aa",
        "on-tertiary-fixed": "#410004",
        "outline": "#6d7a72",
        "secondary-fixed-dim": "#b6c4ff",
        "surface-container-highest": "#e5e2e1",
        "tertiary-fixed": "#ffdad7",
        "surface-container-low": "#f6f3f2",
        "surface-dim": "#dcd9d9",
        "secondary-fixed": "#dce1ff",
        "primary-fixed": "#85f8c4",
        "on-secondary-fixed-variant": "#264191",
        "tertiary-fixed-dim": "#ffb3ae",
        "on-tertiary-container": "#fffbff",
        "surface-container": "#f0edec",
        "inverse-on-surface": "#f3f0ef",
        "tertiary": "#9b3e3b",
        "outline-variant": "#bccac0",
        "inverse-surface": "#313030",
        "on-primary-fixed": "#002114",
        "secondary-container": "#8fa7fe",
        "primary-container": "#00855d",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Inter"],
        "label": ["Inter"],
        "inter": ["Inter", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ],
}
