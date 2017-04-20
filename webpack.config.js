var webpack = require("webpack");
var path = require("path");


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
  }
};


module.exports = config;
