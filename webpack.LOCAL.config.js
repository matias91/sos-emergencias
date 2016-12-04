const webpack = require('webpack');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const merge = require('lodash/object/merge');
const base = require('./webpack.base.js');
const baseConfig = base.baseConfig;
const babelSettings = base.babelSettings;
const basePlugins = base.plugins;
const baseLoaders = base.loaders;
const basePostcss = base.postcss;
const ROOT_PATH = path.resolve(__dirname);

const plugins = basePlugins.concat([
    new CaseSensitivePathsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        '__ENVIRONMENT__': '"LOCAL"'
    })
]);

const loaders = baseLoaders.concat([
    {
        test: /\.(jsx|js)$/,
        loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelSettings)],
        exclude: /(node_modules|bower_components)/
    },{
        test: /\.?css$/,
        loader: 'style-loader!css-loader!postcss-loader!sass'
    },
]);

const config = {
    eslint: {
        configFile: path.join(ROOT_PATH, '.eslintrc.js')
            //failOnError: true
    },

    sasslint: {
        configFile: path.join(ROOT_PATH, '.sass-lint.yml')
            //failOnError: true
    },

    module: {
        preLoaders: [{
                test: /\.scss$/,
                exclude: /(node_modules|bower_components|public)/,
                loader: 'sasslint-loader'
            }, {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /(node_modules|bower_components|public)/
            }
        ],
        loaders: loaders
    },

    // devServer: {
    //     contentBase: path.resolve(ROOT_PATH, 'public'),
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    //     port: 9000
    // },

    devtool: false,

    plugins: plugins,

    postcss: basePostcss
};

module.exports = merge({}, baseConfig, config);
