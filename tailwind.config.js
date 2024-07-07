/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  extend: {
    colors: {
      darkP : '#120722' ,
      lightP: '#AF86F8' ,
    },
    fontFamily:{
      myFont:['myFont' , 'san-serif']
    },
    boxShadow: {
      custom: '0 4px 6px -1px rgba(175, 134, 248, 0.1), 0 2px 4px -1px rgba(175, 134, 248, 0.06)', 
    },
  },
  },
  plugins: [],
  }