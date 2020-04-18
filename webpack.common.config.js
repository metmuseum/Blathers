const JsConfigWebpackPlugin = require("js-config-webpack-plugin");
const ScssConfigWebpackPlugin = require("scss-config-webpack-plugin");
const FontConfigWebpackPlugin = require("font-config-webpack-plugin");

module.exports = {
	plugins: [
		new JsConfigWebpackPlugin({ babelConfigFile: './babel.config.js' }),
		new ScssConfigWebpackPlugin(),
		new FontConfigWebpackPlugin()
	]
};
