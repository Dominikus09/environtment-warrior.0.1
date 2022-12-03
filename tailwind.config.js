/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#13ab3b",
        lightgreen: "#13ab3b",
        greensm: "#13ab3b",
        cream: "#F1EDE9",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
