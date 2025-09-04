/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#5b1a2c',
        coral: '#E76F73',
        'light-coral': '#F4B5B7',
        cream: '#FAF8F5',
        'new-cream': '#f0ebe8',
        'light-gray': '#F8F6F3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
