module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./.eleventy.js",
    "./src/_includes/**/*.njk",
    "./src/pages/**/*.njk",
    "./src/index.njk",
  ],
  theme: {
    extend: {
    fontFamily: {
      'termina': ['termina', 'sans-serif']
    }
    }
  },
  variants: {},
  plugins: [],
}
