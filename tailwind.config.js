/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Añadido .ts y .tsx
  theme: {
    extend: {
      colors: {
        oa: {
          blue: '#1C3B71',
          red:  '#D70102',
          gray: '#EAEAEA',
          ink:  '#1A1A1A',
          white:'#FFFFFF'
        }
      },
      borderRadius: {
        pill: '9999px',
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.12)'
      }
    },
  },
  plugins: [],
}