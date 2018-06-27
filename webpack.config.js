const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = {
  devtool: "cheap-module-source-map",
  entry: [
    './src/index.ts',
  ],
  output: {
    path: path.join(__dirname,'dist'),
    publicPath: './',
    filename: "bundle.js"
  },
  module: {
    loaders: [
    {
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
      test: /\.tsx?$/,
      options: {
        silent: true
      },
    },
	]
  },
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        modules: [ path.resolve(__dirname, "src"), path.resolve(__dirname, "src/components"), 'node_modules'],

	}
};

config.plugins = [
//    new BundleAnalyzerPlugin(),
]

module.exports = config;
