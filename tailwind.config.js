/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'prose-text': ['Open Sans'],
        'title-text': ['Lato'],
        'date-text': ['Roboto Mono']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}