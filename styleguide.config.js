var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var webpack = require("webpack");
var path = require("path");

module.exports = {
    title: 'MUK / Mergado UI Kit',
    components: './src/componentsguide/**/*.tsx',
    propsParser: require('react-docgen-typescript').parse,
    showCode: true,
    template: './styleguide/index.html',
    skipComponentsWithoutExample: true,
    updateWebpackConfig(webpackConfig) {
        // Your source files folder or array of folders, should not include node_modules
        const dir = path.join(__dirname, 'styleguide');

        webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx','.json'];

        webpackConfig.resolve.alias['rsg-components/StyleGuide/StyleGuideRenderer'] =
            path.join(__dirname, 'styleguide/components/StyleGuide');

        webpackConfig.resolve.alias['rsg-components/ReactComponent/ReactComponentRenderer'] =
            path.join(__dirname, 'styleguide/components/ReactComponent');
            
        if (process.env.NODE_ENV === 'production') {
            webpackConfig.module.loaders.push(
                {
                  exclude: /node_modules/,
                  loader: 'ts-loader',
                  test: /\.(ts|tsx)$/,
                  options: {
                      configFileName: "./tsconfig.json"
                      
                  }
                  },
                  {
                      test: /\.sass$/,
                       exclude: /node_modules/,
                      loader: ExtractTextPlugin.extract({
                          loader: 'css-loader!sass-loader'
                      })
                   }
            );
            
            webpackConfig.plugins.push(
                new ExtractTextPlugin({ filename: 'dist/css/style.min.css', 
                                        allChunks: true
                                    })
            );
            webpackConfig.plugins.push(
                new OptimizeCssAssetsPlugin({
                        assetNameRegExp: /\.min\.css$/,
                        cssProcessorOptions: { discardComments: { removeAll: true } }
                })
            );
        } else {
            webpackConfig.module.loaders.push(
                {
                    test: /\.jsx?$/,
                    include: dir,
                    loader: 'babel',
                },
                {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1',
               },
                {
                  exclude: /node_modules/,
                  loader: 'ts-loader',
                  test: /\.(ts|tsx)$/,
                  options: {
                      configFileName: "./tsconfig.json"
                      
                  }
                  },
                  {
                      test: /\.sass$/,
                       exclude: /node_modules/,
                      loader: 'style-loader!css-loader!sass-loader'
                   }
            );   

            webpackConfig.plugins.push(
                new ExtractTextPlugin({ filename: 'dist/css/style.css', 
                                        allChunks: true
                                    })
            );
            
         
            
        }

        return webpackConfig;
    },
};