/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fdb827',
        'accent': '#E1A100',
        'light': {
          'bg': '#FDFCFB',
          'bg-secondary': '#f5f5f5',
          'text': '#1A1A1A',
          'text-secondary': '#4a4a4a',
        },
        'dark': {
          'bg': '#1A1A1A',
          'bg-secondary': '#242424',
          'text': '#ffffff',
          'text-secondary': '#B8B8B8',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
        }
      },
      animation: {
        'updown': 'updown 3s linear infinite',
      }
    },
  },
  plugins: [],
}