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
        sans: ['Metropolitano-Light', 'sans'],
        header1: ['Metropolitano-Bold', 'sans'],
        metromed1: ['Metropolitano-Medium', 'sans'],
        metroblack1: ['Metropolitano-Black', 'sans'],
        metrobold1: ['Metropolitano-Bold', 'sans'],
        metrolight1: ['Metropolitano-Light', 'sans'],
        metrothin1: ['Metropolitano-Thin', 'sans'],
        metroreg1: ['Metropolitano-Regular', 'sans'],
      },
      colors: {
        primary: '#0ea288',

        secondary: '#c83671',

        discopink: '#c83671',

        discoteal: '#0ea288',

        discopurple: '#8002E4',

        discoyellow: '#fef3c7',

        discored: '#b6103d',

        discoblue: '#030082',

        discogray: '#000000',

        discograytwo: '#F5F5F5',
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    },
    keyframes: {
        'text-slide': {
            '0%, 16%': {
                transform: 'translateY(0%)',
            },
            // '20%, 36%': {
            //     transform: 'translateY(-16.66%)',
            // },
            '40%, 56%': {
                transform: 'translateY(-33.33%)',
            // },
            // '60%, 76%': {
            //     transform: 'translateY(-50%)',
            },
            '80%, 96%': {
                transform: 'translateY(-66.66%)',
            },
            // '100%': {
            //     transform: 'translateY(-83.33%)',
            // },
        },                    
    },
    },
  },
};
