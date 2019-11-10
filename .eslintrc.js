module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": 2
  }
}
