/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f6fc',
          100: '#e5edf9',
          200: '#c6daf1',
          300: '#93bbe6',
          400: '#5997d7',
          500: '#347bc3',
          600: '#2460a5',
          700: '#1e4c86',
          800: '#1d426f',
          900: '#1c375a',
          950: '#13253e',
        },
      },
    },
  },
  plugins: [],
};
