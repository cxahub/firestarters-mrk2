const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "360px",
      md: "640px",
      lg: "800px",
      xl: "1200px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto"],
        "roboto-condensed": ["Roboto Condensed"],
        body: ["Roboto Condensed"],
      },
      colors: {
        "fs-brown": "#363031",
        "fs-light-brown": "#837678",
        "fs-orange": "#f77f00",
        "fs-yellow": "#fcbf49",
        "fs-yellow-light": "#fac761",
        "fs-red": "#eb1f04",
        "fs-blue": "#003049",
        "fs-light-gray": "#eceaea",
      },
      backgroundSize: {
        "1r": "1rem",
        "1-5r": "1.5rem",
        "2r": "2rem",
        "2-5r": "2.5rem",
        "3r": "3rem",
      },
    },
  },
};
