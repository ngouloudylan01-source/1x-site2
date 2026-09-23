/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#effefb',
          100: '#c8fdf3',
          200: '#92fae8',
          300: '#54efd9',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e56',
          900: '#134e48',
          950: '#042f2c',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f59e0b',
          500: '#e6890a',
          600: '#c46f08',
          700: '#9c560a',
          800: '#7d4510',
          900: '#693a12',
          950: '#3c1e07',
        },
        ink: {
          50: '#f5f7f8',
          100: '#e5e9eb',
          200: '#c9d1d5',
          300: '#a1adb4',
          400: '#71828b',
          500: '#556670',
          600: '#46545d',
          700: '#3a454c',
          800: '#262e33',
          900: '#181e22',
          950: '#0b0e10',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up-fade 0.7s ease-out forwards',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
