/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins:["Poppins", 'sans-serif']
      },
      colors: {
        'bg-color': '#081b29',
        'second-bg-color': '#112e42',
        'text-color': '#ededed',
        'main-color': '#00abf0'
      }
    },
  },
  plugins: [],
}

