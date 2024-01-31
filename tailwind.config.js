/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#FF5F00',
        'background': '#F8F8F8',
        'gradient-left': '#E914FB',
        'gradient-right': '#D85600',
        'project': '#DAD7FE',
        'project-category': '#1751F0',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}