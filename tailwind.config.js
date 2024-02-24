/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "dark-purple": "#150E28",
        lemon: "#80FF00",
        purple: "#903AFF",
        linear: "#903AFF",
        "light-purple": "#D434FE",
      },
    },
  },
  plugins: [],
};
