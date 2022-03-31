module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  ignorePatterns: ["vendor/**", "metrics/**"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "postcss.config.js",
          "postcss-bootstrap/postcss.config.js",
        ],
      },
    ],
  },
};
