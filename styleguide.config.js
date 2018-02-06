const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
    title: ' MUK / Mergado UI Kit',
    serverPort: 3001,
    sections: [
        {
            name: 'Layout',
            content: './src/docs/Layout.md',
            components: './src/components/Layout/**/*.tsx',
        },
        {
            name: 'Helpers',
            content: './src/docs/Helpers.md'
        },
        {
            name: 'Animations',
            content: './src/docs/Helpers.md'
        },
        {
            name: 'Datagrid',
            components: './src/components/Datagrid/**/*.tsx',
            content: './src/docs/Datagrid.md'
        },
        {
            name: 'Icons',
            components: './src/components/Icon/index.tsx',
            content: './src/docs/Icons.md'
        },
        {
            name: 'Form',
            components: './src/components/Forms/**/*.tsx',
            content: './src/docs/Forms.md'
        },
        {
            name: 'Components',
            content: './src/docs/Components.md',
            components: './src/components/**/*.tsx'
        }
    ],
    propsParser: require('react-docgen-typescript').parse,
    showCode: true,
    styleguideDir: path.join(__dirname, 'docs'),
    webpackConfig: {
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
    }
};
