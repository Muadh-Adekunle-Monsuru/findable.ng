/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#171717",
        primary: {
          DEFAULT: "#1D4ED8", // deep electric blue
          hover: "#1e40af",
        },
        card: {
          DEFAULT: "#F3F4F6", // very light gray
        }
      },
    },
  },
  plugins: [],
}
