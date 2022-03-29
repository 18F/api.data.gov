const autoprefixer = require("autoprefixer");
const postcssRelativeRem = require("postcss-relative-rem");
const PrefixWrap = require("postcss-prefixwrap");

module.exports = {
  plugins: [
    autoprefixer,
    postcssRelativeRem({
      baseCssVariable: "--api-umbrella-rem-relative-base",
    }),
    PrefixWrap(".api-data-gov-container", {
      ignoredSelectors: [":root"],
    }),
  ],
};
