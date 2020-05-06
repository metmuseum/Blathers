const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // output: {
  //   path: __dirname + "/dist",
  //   filename: "blathers.min.js",
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/demo.html",
      filename: "demo.html",
      inject: "body",
    }),
  ],
});
