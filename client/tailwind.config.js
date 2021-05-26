const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        recipeRed: {
          800: "#F7001D",
        },
        Recipe: {
          800: "#184166",
        },
        blue: {
          100: "#6f9ab7",
        },
        gray: {
          100: "#F2F3F5",
        },
        card: {
          100: "#FBFCFF",
        },
        searchColor: {
          200: "#716B6B",
        },
        dashboard: {
          100: "#C29398",
        },
        activity: {
          300: "#716B6B",
        },
      },
      opacity: {
        19: "0.19",
        69: "0.69",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        corben: ["Corben", "cursive"],
      },
      backgroundImage: (theme) => ({
        "home-image3": "url('./asset/home-image3.jpg')",
        "dashboard-image1a": "url('./asset/dashboard-image1a.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
