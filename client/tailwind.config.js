/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class', // Use 'class' instead of 'selector' for simplicity
  // Other configurations...
  theme: {
    
    extend: {
      minHeight:{
        '75vh':'75vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

