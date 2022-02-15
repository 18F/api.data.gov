module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-relative-rem')({
      baseCssVariable: '--api-umbrella-rem-relative-base',
    }),
  ]
};
