/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        plum : '#8E2975',
      },
    },
  },
  plugins: [],

  darkMode: 'class',
};

