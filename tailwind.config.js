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
      sm: '640px',
      md: '768px',
      lg: '1024px', // Ensure this exists for large screens
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}

