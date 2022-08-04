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
        bg2: '#0D0B14',
      },
    },
  },
  plugins: [],
};
