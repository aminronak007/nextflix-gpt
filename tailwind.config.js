/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        scrollbar: {
          thumb: "#1f2937", // Customize thumb color
          track: "#f3f4f6", // Customize track color
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
