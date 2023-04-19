/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        "dark-blue": "#1b3659" , 
        "dark-green": "#118c80",
        "light-green": "#17a67d"
      },
    },
  },
  plugins: [],
}