/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2100px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
