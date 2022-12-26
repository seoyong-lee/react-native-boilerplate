module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@typescript-eslint",
  ],
  "babel-module": {},
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "prettier/prettier": [
          "error",
          {
            usePrettierrc: false,
          },
        ],
      },
    },
  ],
};
