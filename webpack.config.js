const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/main.js",
    category: "./src/js/category.js",
    statistics: "./src/js/statistics.js",
    repeat: "./src/js/repeat.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        scriptName: "main",
      },
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        scriptName: "category",
      },
      filename: "category.html",
      template: "src/category.html",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        scriptName: "statistics",
      },
      filename: "statistics.html",
      template: "src/statistics.html",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        scriptName: "repeat",
      },
      filename: "repeat.html",
      template: "src/repeat.html",
    }),
  ],
};
