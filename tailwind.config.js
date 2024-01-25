/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        biru: "#25274D",
        cokelat:"#BC986A",
        cream : "#DAAD86"
      }
    },
  },
  plugins: [],
}