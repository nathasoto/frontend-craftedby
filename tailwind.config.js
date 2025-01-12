export default  {
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
        customGreen: '#80bc8a',
        customGray: '#D9D9D9',
      },
      fontFamily: {
        hyperlegible: ['"Atkinson Hyperlegible"', 'sans-serif'],
      },
      fontSize: {
        'small': '12px',  // Small size
        'medium': '16px',  // Medium size
        'large': '24px',   // Large size
      },

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],

}
