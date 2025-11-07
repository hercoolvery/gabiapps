const themeConfig = require('./themes/congo/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/congo/layouts/**/*.html",
    "./themes/congo/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      ...themeConfig.theme.extend,
    },
    colors: {
      ...themeConfig.theme.colors,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...themeConfig.plugins.filter(plugin => plugin.name !== '@tailwindcss/typography'),
  ],
};
