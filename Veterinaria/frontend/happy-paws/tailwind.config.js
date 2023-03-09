/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navbar_background:'#F5F9FF',
        degradado:'background: linear-gradient(180deg, #DEF1FF 82.52%, rgba(245, 249, 255, 0) 99.97%)',
        background_primary: '#F5F5F5',
        button: '#659CAC',
        button_nigga:'#4E7783',
        info_primary: '#B6D8E2',
      },
      fontFamily: {
       'tipografia-Inter':['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}