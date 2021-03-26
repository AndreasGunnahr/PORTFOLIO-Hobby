const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        desktop: "1200px",
        noPadding: "calc(1200px - 80px)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: "#F9FAFB",
      },
      height: {
        "without-navbar": "calc(100vh - 64px)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
