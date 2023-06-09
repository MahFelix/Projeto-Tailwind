/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
fontFamily:  {
      'serif':'inherit;',
      'sind':'SFProDisplay-Regular, Helvetica, Arial, sans-serif;'
    },
    
    extend: {
colors: {
        'blueface': '#1877F2',
        'grayface': '#F0F2F5',
        'greenface': '#42b72a',
        'grayletter': '#8a8d91',
      },


    spacing: {
      '580':'580px',
      '380':'380px',
      '200':'200px',
      '700':'700px',
      '800':'800px'
    }
    },
  },
  plugins: [],
}

