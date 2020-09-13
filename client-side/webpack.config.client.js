const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CURRENT_WORKING_DIR = process.cwd()


const config = {
	name : "browser",
	mode : "development",
	devtool : "eval-source-map",
	entry : [
		'webpack-hot-middleware/client?reload=true',
		path.join(CURRENT_WORKING_DIR, 'index.js')
	],
	output : {
		path : path.join(CURRENT_WORKING_DIR, '/build'),
		filename : 'bundle.js',
		publicPath : '/build/'
	},
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use : [
					'babel-loader'
				]
			},
			{
				test : /\.(css|scss)$/,
				use : [
					'style-loader',
					'css-loader'
				]
			},
			{
				test : /\.(png|jpg|gif|svg)$/,
				use : [
					'file-loader'
				]
			},
			{
				test : /\.(woff|woff2|eot|ttf|otf)$/,
				loader : 'file-loader',
				options : {
					name : '[name][hash].[ext]'
				}
			}
		]
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			favicon : 'favicon.png'
		})
	],
	resolve : {
		alias : {
			'react-dom' : '@hot-loader/react-dom'
		}
	}
}


module.exports = config;
