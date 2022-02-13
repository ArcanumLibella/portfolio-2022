const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          ultraDark: '#210044',
          dark: '#3C0D6E',
          DEFAULT: '#410087',
          light: '#7729CC',
          ultraLight: '#E4D8F0',
        },
        white: {
          DEFAULT: '#FBF7FF'
        },
        tomato: {
          DEFAULT: '#E94057'
        },
        orange: {
          DEFAULT: '#F27121'
        },
      },
      fontFamily: {
        brother: ['Brother', 'Impact', 'sans-serif'],
        goku: ['Goku', 'Impact', 'sans-serif'],
        body: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '.5rem', // 8px
        xs: '.625rem', // 10px
        tiny: '.75rem', // 12px
        sm: '.875rem', // 14px
        md: '.9375rem', // 15px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        xxl: '30rem', // 120px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
