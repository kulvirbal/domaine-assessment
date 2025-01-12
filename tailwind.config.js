/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid', // Includes all Shopify Liquid files
    './**/*.html',
    './**/*.js'
  ],
  variants: {
    extend: {
      opacity: ['group-hover'], // Ensure group-hover is enabled for opacity
    },
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'red-1': '#ff0000',
      'grey-1': '#E8E8E8',
      'blue-1': '#0A4874',
      'black-1': '#111111'
    }
  },
  plugins: [],
}