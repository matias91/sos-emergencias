const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ROOT_PATH = path.resolve(__dirname);

const babelSettings = {
    presets: ['react', 'es2015'],
    plugins: ["transform-object-assign"]
};

const plugins = [
    // new CleanWebpackPlugin([path.join(ROOT_PATH,'public')]),
    new HtmlWebpackPlugin({
        filename: 'index.web.html',
        template: './index.web.html'
    }),
    // We only load the following locales: español, inglés, catalán, gallego, euskera
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /es|en|ca|gl|eu/)
];

const loaders = [
    { // inline base64 URLs for <=8k images, direct URLs for the rest
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192'
    },
    {
        test   : /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader?name=fonts/[name].[ext]'
    },
    {
        test: /\.json$/,
        loader: 'json'
    }
];

const baseConfig = {
    entry: ['babel-polyfill', path.join(ROOT_PATH, 'src/index.js')],

    output: {
        // path: path.join(ROOT_PATH, 'public'), // This is where images AND js will go
        publicPath: '/assets/', // This is used to generate URLs to e.g. images
        filename: 'main.js'
    },

    resolve: {
        root: path.resolve('src'),
        modulesDirectories: ['node_modules'],
        alias: {
            actions: 'actions',
            assets: 'assets',
            components: 'components',
            constants: 'constants',
            core: 'core',
            reducers: 'reducers',
            services: 'services',
            routes: 'routes',
            utilities: 'utilities',
            apiURLBuilder: 'core/apiURLBuilder'
        }
    },

};

const postcss = [
    autoprefixer({ browsers: ['last 2 versions'] })
]

module.exports = {
    baseConfig: baseConfig,
    plugins: plugins,
    loaders: loaders,
    babelSettings: babelSettings,
    postcss: postcss
};
