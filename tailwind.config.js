// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '88': '350px', // Custom spacing for width and height
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['dark'], // Set the default theme to 'dark'
  },
  darkMode: 'media', // Use 'media' or 'class' to enable dark mode
};
