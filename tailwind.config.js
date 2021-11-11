const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        red: 'red',
        lightblue:'#3966ad',
        darkblue:'#233c77',
        orange:'#ECBC36',
        darkorange:'#ec9422',
        green:'#8bb63f',
        purple: '#71445B',
        lightblue2:'#1293CD',
        gray: '#4A4A4A',
        gray2: '#979797',
      },
    },
    
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
