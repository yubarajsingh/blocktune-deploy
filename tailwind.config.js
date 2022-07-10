/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',], 
    theme: {
      extend: {
        fontFamily:{
          body:['Montserrat','sans-serif']
        }
      },
    },
    variants: {
      extend: {
        opaciy: ["disabled"],
        cursor: ["disabled"],
      },
    },
  plugins:[require("daisyui")],
  
}
