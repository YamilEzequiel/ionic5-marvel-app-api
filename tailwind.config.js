var colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      "roboto-light": ["roboto-light", "sans-serif"],
    },
    extend: {
      colors: {
        green: colors.lime,
        primary: "#F12529",
      },
    },
  },
  plugins: [],
};
