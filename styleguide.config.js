const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
    title: ' MUK / Mergado UI Kit',
    highlightTheme: 'rubyblue',
    serverPort: '3001',
    sections: [
        {
            name: 'Layout',
            content: './src/docs/Layout.md'
        },
        {
            name: 'Helpers',
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
    updateWebpackConfig(webpackConfig) {
        // Your source files folder or array of folders, should not include node_modules
        const dir = path.join(__dirname, 'src', 'styleguidist');

        webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx','.json'];

        webpackConfig.resolve.modules.push(path.resolve(__dirname, "src/components"));
        webpackConfig.resolve.modules.push(path.resolve(__dirname, "src"));

        webpackConfig.resolve.alias['rsg-components/Props'] =
            path.join(dir, 'components/Props');



        webpackConfig.resolve.alias['rsg-components/StyleGuide'] =
            path.join(dir, 'components/StyleGuide/StyleGuide');

        webpackConfig.resolve.alias['rsg-components/StyleGuide/StyleGuideRenderer'] =
            path.join(dir, 'components/StyleGuide/StyleGuideRenderer');

        webpackConfig.resolve.alias['rsg-components/Playground'] =
            path.join(dir, 'components/Playground');

        webpackConfig.resolve.alias['rsg-components/Playground/PlaygroundRenderer'] =
            path.join(dir, 'components/Playground/PlaygroundRenderer');

        webpackConfig.resolve.alias['rsg-components/Preview'] =
            path.join(dir, 'components/Preview');

        webpackConfig.resolve.alias['rsg-components/ReactComponent/ReactComponentRenderer'] =
            path.join(dir, 'components/ReactComponent');



        webpackConfig.resolve.alias['rsg-components/Editor'] =
            path.join(dir, 'components/Editor');


        webpackConfig.module.loaders.push(
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1'
            },
            {
                include: /.*/,
                loader: 'ts-loader',
                test: /\.(ts|tsx)$/,
                options: {
                    configFileName: "./tsconfig.json"

                }
            }

        );

        if (process.env.NODE_ENV === 'production') {
            webpackConfig.module.loaders.push(
                {
                    test: /\.sass$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract({
                        loader: 'css-loader?-autoprefixer!postcss-loader!sass-loader'
                    })

                }
            );
        } else {
            webpackConfig.module.loaders.push(
                {
                    test: /\.sass$/,
                    exclude: /node_modules/,
                    loader: 'style-loader!css-loader!sass-loader'
                }
            );
        }


        webpackConfig.plugins.push(
            new ExtractTextPlugin({ filename: 'dist/css/styleguide.css',
                allChunks: true
            })
        );

        return webpackConfig;
    },
};
