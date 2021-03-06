const common = require("./webpack.common");
const merge = require('webpack-merge');
const webpack = require("webpack");

module.exports = merge(common, {
	mode: "development",
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		publicPath: '/ui5-in-react',
		historyApiFallback: {
			index: '/ui5-in-react/'
		},
		openPage: 'ui5-in-react', // And here
	},
});