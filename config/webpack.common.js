const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");

const path = require("path");
const rules = require("./webpack.rules");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: rules
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new CleanWebPackPlugin(["../dist"])
  ]
};
