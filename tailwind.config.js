/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#065f46",
        secondary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          700: "#047857",
          900: "#334155",
        },
        bgTo: {
          900: "#001519",
        }
      },
      fontFamily: {
        'sans': ['Montserrat, sans-serif'],
      },
      backgroundImage:{
        'background': "url('../src/media/img/background.jpg')",
        'background-2': "url('../src/media/img/background-2.jpg')",
        'background-3': "url('../src/media/img/background-3.jpg')",
        'background-4': "url('../src/media/img/background-4.jpg')",
      },
    },
  },
  plugins: [
    require('autoprefixer'),
    require('flowbite/plugin'),
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}