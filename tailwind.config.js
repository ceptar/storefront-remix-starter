const colors = require('tailwindcss/colors');

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-shades-for-custom-colors'),
  ],
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  important: '#app',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Metropolitano-Regular', 'sans'],
        header1: ['Metropolitano-Medium', 'sans'],
      },
      colors: {
        primary: '#F100C6',

        secondary: '#15FEE2',

        discopink: '#F100C6',

        discoteal: '#15FEE2',

        discopurple: '#8002E4',

        discoyellow: '#fef3c7',

        discored: '#b6103d',

        discoblue: '#030082',
      },
      animation: {
        dropIn: 'dropIn 0.2s ease-out',
      },
      keyframes: {
        dropIn: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
};
