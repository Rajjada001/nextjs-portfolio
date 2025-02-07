/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the app directory
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: colors.red,
      secondary: colors.yellow,
    },
  },
  plugins: [],
}
