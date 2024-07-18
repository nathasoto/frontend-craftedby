/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorForm : '#FCF3EE',
        colorText : '#2C3532',
        colorLogo : '#E8403B',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


