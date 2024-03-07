/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      woodsmoke: {
        50: "#f5f5f6",
        100: "#e6e6e7",
        200: "#cfd0d2",
        300: "#adaeb3",
        400: "#84858c",
        500: "#696a71",
        600: "#5a5b60",
        700: "#4c4d52",
        800: "#434347",
        900: "#3b3b3e",
        950: "#0f0f10",
      },
    },
  },
  plugins: [],
};
