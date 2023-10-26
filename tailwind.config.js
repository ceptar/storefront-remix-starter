const colors = require('tailwindcss/colors');

module.exports = {
  // content: ["./app/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  important: '#app',

  theme: {
    extend: {
      colors: {
        primary: {
          500: '#F100C6',
        },
        secondary: {
          500: '#15FEE2',
        },
        discopink: {
          500: '#F100C6',
        },
        discoteal: {
          500: '#15FEE2',
        },
        discopurple: {
          500: '#8002E4',
        },
        discoyellow: {
          500: '#fede5c',
        },
        discored: {
          500: '#b6103d',
        },
        discoblue: {
          500: '#030082',
        },
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
