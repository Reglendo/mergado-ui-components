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
    './src/load_styles.ts'
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
        modules: [ path.resolve(__dirname, "src"), path.resolve(__dirname, "src/components"), 'node_modules'],
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat",
        }
	}
};

config.plugins = [
    new ExtractTextPlugin({ filename: 'css/style.min.css',
              allChunks: true
  }),
  new ExtractTextPlugin({ filename: 'css/style.css',
            allChunks: true
  }),
    new BundleAnalyzerPlugin(),
    new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
    })
]

module.exports = config;
