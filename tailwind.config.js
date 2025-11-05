/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0ea5e9',
        'brand-red': '#dc2626',
        'brand-yellow': '#fbbf24',
        'brand-dark': '#1e293b',
        'brand-gray': '#64748b'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}