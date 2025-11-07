const themeConfig = require('./themes/congo/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...themeConfig, // Spread the theme's config
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/congo/layouts/**/*.html",
    "./themes/congo/content/**/*.{html,md}",
  ],
  theme: {
    ...themeConfig.theme, // Spread the theme's theme config
    extend: {
      ...themeConfig.theme.extend, // Spread the theme's extend config
    },
  },
  plugins: [
    ...themeConfig.plugins, // Spread the theme's plugins
    require('@tailwindcss/typography'),
  ],
}