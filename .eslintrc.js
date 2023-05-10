module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["simple-import-sort"],
  ignorePatterns: ["vendor/**"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "postcss.config.js",
          "config/embed/postcss.config.js",
        ],
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
