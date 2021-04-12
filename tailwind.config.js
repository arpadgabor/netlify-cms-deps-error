const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        primary: '#212750',
        secondary: '#E99A1F',
        gray: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#FAFAFA',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        }
      }
    },
    fontFamily: {
      sans: '"Work Sans", Arial'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
      hero: 700
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {}

      addUtilities(utilities)
    })
  ]
}
