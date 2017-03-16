var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var webpack = require("webpack");
var path = require("path");

const config = {
  devtool: "cheap-module-source-map",
  entry: [
    './src/app.tsx'
  ],
  output: {
    path: "./",
    publicPath: './',
    filename: "index.js"
  },
  module: {
    loaders: [
    {
      exclude: /node_modules/,
      loader: 'ts-loader',
      test: /\.tsx?$/,
      options: {
        silent: true
      },
    },
	{
		test: /\.sass$/,
 		exclude: /node_modules/,
		loader: ExtractTextPlugin.extract({
			loader: 'css-loader!sass-loader'
		})
 	}
	]
  },
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	}
};

if (process.env.NODE_ENV === 'production') {
	config.plugins = [
	    new ExtractTextPlugin({ filename: 'dist/css/style.min.css', 
	        					allChunks: true
	    					}),
		new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.min\.css$/,
				cssProcessorOptions: { discardComments: { removeAll: true } }
		})
	]
} else {
	config.plugins = [
	    new ExtractTextPlugin({ filename: 'dist/css/style.css', 
	        					allChunks: true
	    					})
	]
}


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}


module.exports = config;
