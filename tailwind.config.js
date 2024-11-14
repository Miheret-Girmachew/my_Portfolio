// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // include your react files
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e0f', // Your custom dark background color
      },
    },
  },
  plugins: [],
}
