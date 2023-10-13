/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      main: ['Poppins', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          200: '#0000000f',
          300: '#f4f4f4',
          400: '#0000001a', // rgba(0, 0, 0, 0.1)
          500: '#00000033',
          600: '##00000066',
          700: '#0000004d',
        },
        blue: {
          100: '#e3ecff',
          500: '#407bff',
          600: '#2668f6',
        },
        green: {
          300: '#6aff2f',
        },
        red: {
          300: '#ff3c3c',
        },
      },
      spacing: {
        7.5: '1.875rem', // 30px
        100: '25rem' // 400px
      },
      brightness: {
        2000: '20',
      },
      transitionDuration: {
        5000: '5000ms',
      }
    },
    screens: {
      xl: { max: '1279px' }, // => @media (max-width: 1279px)
      lg: { max: '1023px' }, // => @media (max-width: 1023px)
      md: { max: '767px' }, // => @media (max-width: 767px)
      sm: { max: '639px' }, // => @media (max-width: 639px)
    },
  },
  plugins: [],
};
