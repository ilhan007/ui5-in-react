const common = require("./webpack.common");
const merge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new TerserWebpackPlugin()
	]
});