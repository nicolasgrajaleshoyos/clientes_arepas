/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#f2a900',
          red: '#c1272d',
          dark: '#3a1f0a',
        },
      },
    },
  },
  plugins: [],
}
