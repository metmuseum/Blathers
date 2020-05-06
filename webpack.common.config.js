const path = require("path");
const JsConfigWebpackPlugin = require("js-config-webpack-plugin");
const ScssConfigWebpackPlugin = require("scss-config-webpack-plugin");
const FontConfigWebpackPlugin = require("font-config-webpack-plugin");

module.exports = {
  entry: {
    blathers: "./src/index.js",
    demo: "./src/demo.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new JsConfigWebpackPlugin({ babelConfigFile: "./babel.config.js" }),
    new ScssConfigWebpackPlugin(),
    new FontConfigWebpackPlugin(),
  ],
};
