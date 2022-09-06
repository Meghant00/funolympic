/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0085c8",
        "primary-hover": "#006da3",
        warning: "#f2c301",
        success: "#009e3d",
        danger: "#e00024",
        "fun-orange": "#ee3823",
        "background-gray": "#2d2d2d",
        "background-gray-light": "#323232",
      },
    },
  },
  plugins: [],
};
