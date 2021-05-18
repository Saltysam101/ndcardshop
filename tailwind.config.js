module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      lightgrey: '#282828',
      offblack: '#0A0909'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
