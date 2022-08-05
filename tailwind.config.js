/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGold: '#DDCCAA',
        rocketRed: '#E31221',
        rocketHover: '#bd0f1c',
        bg1: '#181623',
        bg2: '#151221',
        lightBlue: '#24222F',
        darkBlue: '#11101A',
        headerBg: '#222030',
      },
    },
  },
  plugins: [],
};
