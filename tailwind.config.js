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
        header1: ['Metropolitano-Bold', 'sans'],
        facet1: ['FacetUltra-Regular', 'sans'],
        nohemiblack1: ['Nohemi-Black', 'sans'],
        rgstandardbold1: ['RG-StandardBold', 'sans'],
        metromed1: ['Metropolitano-Medium', 'sans'],
        metroblack1: ['Metropolitano-Black', 'sans'],
        metrobold1: ['Metropolitano-Bold', 'sans'],
        metrolight1: ['Metropolitano-Light', 'sans'],
        metrothin1: ['Metropolitano-Thin', 'sans'],
      },
      colors: {
        primary: '#15FEE2',

        secondary: '#8002E4',

        discopink: '#FF00E5',

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
