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
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 10000
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 10000
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 10000
    }
  }
];
