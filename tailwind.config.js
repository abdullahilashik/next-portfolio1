/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      screens: {
        sm: '480px',
      },
      fontFamily:{
        nunito: 'Nunito, sans-serif'
      },
      container:{                
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },     
      },
      colors:{
        mycolor:'#555',
      }
    },
  },
  plugins: [],
}
