/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'bluePrimary' : '#1d3557',
        'darkBlue' : '#2E5077',
        'yellowOrange' : '#FFA630',
        'greenTea' : '#D7E8BA'
      }
    },
  },
  plugins: [],
}
