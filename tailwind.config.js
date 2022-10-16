/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26282B",
        primary_light: "#353941",
        secondary: "#1E5128",
        secondary_light: "#4E9F3D",
        light: "#F7F39A",
      },
    },
  },
  plugins: [],
};
