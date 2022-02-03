const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}' /* ... */, './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      comforter: ['Comforter', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    screens: {
      xs: '490px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {}
  }
};
