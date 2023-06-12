/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '20px 0 20px 0 rgb(0 0 0 / 0.1)'
      },
      colors: {
        'off-white': '#F2F2F2',
        'pale-green': '#95AC9A',
        'darker-green': '#73977a'
      },
    },
  },
  plugins: [],
}