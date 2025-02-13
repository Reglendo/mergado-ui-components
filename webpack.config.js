const webpack = require("webpack");
const path = require("path");
const config = {
  mode: "development",
  entry: [
    './src/index.ts',
  ],
  output: {
    path: path.join(__dirname,'dist'),
    publicPath: './',
    filename: "bundle.js"
  },
  module: {
    rules: [
    {
      exclude: /node_modules/,
      loader: 'ts-loader',
      test: /\.tsx|ts?$/,
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
]

module.exports = config;
