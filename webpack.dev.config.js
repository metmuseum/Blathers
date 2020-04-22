const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
	entry: './src/index.js',
	mode: "development",
	devtool: "inline-source-map",
	output: {
		path: __dirname + "/dist",
		filename: "blathers.js"
	},
	devServer: {
		contentBase: "./",
		publicPath: "/",
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/index.html",
			inject: "body",
			base: "/",
		})
	]
});
