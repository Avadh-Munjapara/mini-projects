/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'backimage':"url('./assets/bg.jpg')"
      },
      backgroundSize:{
        '100%': '100% 100%',
      }
    },
  },
  plugins: [],
}

