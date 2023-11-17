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
        header1: ['Nohemi-Black', 'sans'],
        facet1: ['FacetUltra-Regular', 'sans'],
        nohemiblack1: ['Nohemi-Black', 'sans'],
        rgstandardbold1: ['RG-StandardBold', 'sans'],
        metromed1: ['Metropolitano-Medium', 'sans'],
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

        discogray: '#2e3047',
      },

    },
  },
};
