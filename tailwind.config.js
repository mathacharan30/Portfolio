/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        secondary: {
          DEFAULT: "#112240",
          light: "#e8f4f8",
        },
        background: {
          DEFAULT: "#0a192f",
          light: "#ffffff",
        },
        textLight: {
          DEFAULT: "#ccd6f6",
          light: "#1a202c",
        },
        textDim: {
          DEFAULT: "#8892b0",
          light: "#4a5568",
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
