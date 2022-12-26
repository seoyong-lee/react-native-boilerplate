module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-transform-flow-strip-types"],
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@": "./src/",
        },
      },
    ],
  ],
};
