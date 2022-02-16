const autoprefixer = require("autoprefixer");
const postcssRelativeRem = require("postcss-relative-rem");

module.exports = {
  plugins: [
    autoprefixer,
    postcssRelativeRem({
      baseCssVariable: "--api-umbrella-rem-relative-base",
    }),
  ],
};
