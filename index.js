module.exports = {
  parser: "babel-eslint",
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es6",
    "./rules/import",
    "./rules/react",
    "./rules/style",
    "./rules/variables"
  ].map(require.resolve),
  env: {
    browser: true,
    jest: true
  }
};
