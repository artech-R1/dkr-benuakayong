/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding:'20px',
    },
    extend: {
      colors: {
        primary: '#f29600',
        dark: '#0f172a',
        secondary: '#647489'
      },
      screens: {
      '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

