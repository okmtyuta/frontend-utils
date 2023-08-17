/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'theme-color-primary': '#973c3f',
      gray: '#e7e7eb',
      'accents-1': '#fafafa',
      'accents-2': '#eaeaea',
      'accents-3': '#999',
      'accents-4': '#888',
      'accents-5': '#666',
      'accents-6': '#444',
      'accents-7': '#333',
      'accents-8': '#111'
    },
    fontFamily: {
      frederica: ['Fredericka the Great', 'cursive'],
      anton: ['Anton', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
