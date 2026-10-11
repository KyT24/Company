/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#050d24",
          800: "#0a1a3f",
          700: "#10275c",
        },
        neon: {
          DEFAULT: "#1d5fe0",
          light: "#6fa5ff",
        },
        silver: {
          DEFAULT: "#c0c7d1",
          light: "#e6eaf0",
          dark: "#8a93a3",
        },
      },
    },
  },
  plugins: [],
};