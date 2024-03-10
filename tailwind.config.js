/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tp: {'max': '360px'},
    },
    extend: {},
  },
  plugins: [],
};
