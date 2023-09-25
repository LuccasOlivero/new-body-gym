/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },

      animation: {
        rotate: "rotate-center 0.6s ease-in-out both",
      },

      keyframes: {},
    },
  },
  plugins: [],
};
