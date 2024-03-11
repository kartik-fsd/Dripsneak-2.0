/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
    colors: {
      rhino: {
        50: "#f2f6fc",
        100: "#e2eaf7",
        200: "#ccdbf1",
        300: "#a9c4e7",
        400: "#80a6da",
        500: "#6188d0",
        600: "#4e6fc2",
        700: "#435db2",
        800: "#3c4e91",
        900: "#313f6d",
        950: "#232b48",
      },
      "totem-pole": {
        50: "#ffefef",
        100: "#ffdbdb",
        200: "#ffbebe",
        300: "#ff9090",
        400: "#ff5151",
        500: "#ff1b1b",
        600: "#ff0000",
        700: "#df0000",
        800: "#b70000",
        900: "#a20606",
        950: "#530000",
      },
      scorpion: {
        50: "#f3f3f3",
        100: "#e1e0e0",
        200: "#c6c2c2",
        300: "#a5a09f",
        400: "#8b8584",
        500: "#7d7675",
        600: "#645e5e",
        700: "#565253",
        800: "#4b4848",
        900: "#434041",
        950: "#252323",
      },
    },
  },
  plugins: ["/aspect-ratio", "/forms", "/aspect-ratio"],
};
