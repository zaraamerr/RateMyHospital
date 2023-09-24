/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      "sans-lexend": ["Lexend", "sans-serif"],
      "sans-poppins": ["Poppins", "sans-serif"],
    },

    extend: {
      screens: {

      },
      colors: {
        "auth_bg":"#A6BAAF",


      },

  },
  plugins: [],
 }
};

