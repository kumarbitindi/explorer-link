module.exports = {
  root: true,
  parser: "babel-eslint",
  ignorePatterns: ["!.eslintrc.js", "dist/"],
  overrides: [
    {
      files: [".eslintrc.js", "test/**/*.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["**/*.ts"],
    },
  ],
};
