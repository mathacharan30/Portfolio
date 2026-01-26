/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#64ffda",
          light: "#0891b2", // Cyan-600 - professional teal for light mode
        },
        secondary: {
          DEFAULT: "#112240",
          light: "#f0f9ff", // Sky-50 - very light blue
        },
        background: {
          DEFAULT: "#0a192f",
          light: "#ffffff",
        },
        textLight: {
          DEFAULT: "#ccd6f6",
          light: "#0f172a", // Slate-900 - dark text for light mode
        },
        textDim: {
          DEFAULT: "#8892b0",
          light: "#64748b", // Slate-500 - medium gray
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
