/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black':'#212121',
        'primary':'#EB44B2',
        'light_pink':'#FFDEF4',
        'dark_pink':'#FFD0EC',
        'gray':'#F5F5F5',
        'light_green':'#FDFDFD',
        'purple':'#7F56D9',
        'secondary':'#475467'
      },
      listStyleImage: {
        checkmark:'url("/src/assets/icons/check.svg")'
      }
    },
  },
  plugins: [],
}

