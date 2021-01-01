module.exports = {
  purge: {
    enabled: process.env.ELEVENTY_ENV === 'production',
    content: ['dist/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
