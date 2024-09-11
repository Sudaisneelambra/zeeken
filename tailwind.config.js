/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // Override the 'md' breakpoint to 900px
        md: '900px',
      },
    },
  },
  plugins: [],
}

