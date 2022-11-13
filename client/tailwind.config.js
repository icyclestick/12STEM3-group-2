// const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.slate,
    //   green: colors.emerald,
    //   purple: colors.violet,
    //   yellow: colors.amber,
    //   pink: colors.fuchsia,
    // }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
