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
      backgroundImage: {
        "main-bg": "url('/imgs/bg.jpg')",
        "back-r": "url('/imgs/backR.jpg')",
        "legs-p": "url('/imgs/legs.jpg')",
        "back-w": "url('/imgs/backW.jpg')",
      },
      boxShadow: {
        test: "0px 0px 2.5px red",
      },
      colors: {
        base: "#ff0336",
      },
    },
  },
  plugins: [],
};
