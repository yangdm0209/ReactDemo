var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/index.js')],
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
				test: /\.jsx$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				},
				include: path.resolve(__dirname, 'src')
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}, {
				test: /\.scss$/,
				loader: 'style!css!postcss-loader!sass'
			}, {
				test: /\.css$/,
				loader: 'style!css!postcss-loader'
			}, {
				test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
				loader: 'url-loader'
			}, {
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};