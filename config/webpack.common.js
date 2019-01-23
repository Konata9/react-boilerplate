const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const path = require("path");
const loaders = require("./webpack.loaders");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [...loaders]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    }),
    new CleanWebPackPlugin(["../dist"])
  ]
};
