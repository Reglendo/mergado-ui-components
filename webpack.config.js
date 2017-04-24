const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  devtool: "cheap-module-source-map",
  entry: [
    './src/index.ts',
    './src/load_styles.ts'
  ],
  output: {
    path: __dirname,
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
			loader: 'css-loader?-autoprefixer!postcss-loader!sass-loader'
		})
 	}
	]
  },
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
	}
};

if (process.env.NODE_ENV === 'production') {
	config.plugins = [
	    new ExtractTextPlugin({ filename: 'dist/css/style.min.css',
	        					allChunks: true
	    					}),
        new ExtractTextPlugin({ filename: 'dist/css/style.min.scss',
            allChunks: true
        }),
        new ExtractTextPlugin({ filename: 'dist/css/style.scss',
            allChunks: true
        }),
        new ExtractTextPlugin({ filename: 'dist/css/style.css',
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

module.exports = config;
