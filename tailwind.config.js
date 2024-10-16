/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fre : ["Fredoka", 'sans-serif'],
      },
    },
    screens: {
      'ma': '800px',
    }
  },
  plugins: [],
}

