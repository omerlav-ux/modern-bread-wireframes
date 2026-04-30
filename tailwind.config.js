/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        wire: {
          black: '#111111',
          dark: '#333333',
          mid: '#666666',
          light: '#999999',
          pale: '#cccccc',
          ghost: '#eeeeee',
          bg: '#f7f7f7',
        },
      },
    },
  },
  plugins: [],
}
