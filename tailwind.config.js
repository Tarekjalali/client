/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your file structure
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' // If using Flowbite-React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Add this line to include the Flowbite plugin
  ],
}
