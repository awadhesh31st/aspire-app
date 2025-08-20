/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: '#ffffff',
          gray: '#dddddd',
          charcoal: '#222222',
          'cool-gray': '#869bad',
        },
        accent: {
          'royal-blue': '#325baf',
        },
        brand: {
          green: '#04d166',
          'dark-navy': '#0d365a',
          'sky-blue': '#21cefd',
          'ice-blue': '#edf3ff',
          'royal-blue': '#315baf',
          'mint-light': '#eefff5',
          'midnight-teal': '#0a455c',
          'royal-blue-shade': '#3052ad',
        },
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
