module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    maxWidth: {
      "9/12": "75%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
