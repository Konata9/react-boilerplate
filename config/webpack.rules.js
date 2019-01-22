const path = require("path");
const EXCLUDE_INCLUDE_MODULE = {
  exclude: [path.resolve(__dirname, "../node_modules")],
  include: [path.resolve(__dirname, "../src")]
};

module.exports = [
  {
    test: /\.js$/,
    ...EXCLUDE_INCLUDE_MODULE,
    use: [{ loader: "babel-loader" }]
  },
  {
    test: /\.s(a|c)ss$/,
    ...EXCLUDE_INCLUDE_MODULE,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" }
    ]
  },
  {
    test: /\.css$/,
    ...EXCLUDE_INCLUDE_MODULE,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }]
  }
];
