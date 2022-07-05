const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve('src', 'js', 'main'),
    category: "./src/js/category.js",
    statistics: "./src/js/statistics.js",
    // repeat: "./src/js/repeat.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve('dist'),
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
        /*options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }*/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: "index.html",
      template: "src/index.html",
    }),
    /*new HtmlWebpackPlugin({
      chunks: ['category'],
      filename: "category.html",
      template: "src/category.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ['statistics'],
      filename: "statistics.html",
      template: "src/statistics.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ['repeat'],
      filename: "repeat.html",
      template: "src/repeat.html",
    }),*/
  ],
};
