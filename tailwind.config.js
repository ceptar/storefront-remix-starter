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
        sans: ['fw300', 'sans-serif'],  // Replace 'MyFont' with your actual font name
        normal: ['fw300','sans-serif'],
        header1: ['fw700','sans-serif'],
        inherit: ['fw300','sans-serif'],
        mono:['fw300','sans-serif'],
        fw100:['fw100','sans-serif'],
        fw200:['fw200','sans-serif'],
        fw300:['fw300','sans-serif'],
        fw400:['fw400','sans-serif'],
        fw500:['fw500','sans-serif'],
        fw600:['fw600','sans-serif'],
        fw700:['fw700','sans-serif'],
        fw800:['fw800','sans-serif'],
        fw900:['fw900','sans-serif'],
        specialTitleOne:['specialTitleOne','sans-serif'],
      },
      colors: {
        primary: '#163e63',

        secondary: '#c83671',

        discopink: '#c83671',

        discoteal: '#0ea288',

        discopurple: '#8002E4',

        discoyellow: '#fef3c7',

        discored: '#b6103d',

        discoblue: '#163e63',

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
