var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    shush = require('shush');

var config =  shush('config/config.json');

module.exports = {
    devtool: "source-map",
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/public/entry.js'
    ],
    output: {
        path: path.join(__dirname, '.build/js'),
        publicPath: config.requestURI + '/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'url?limit=100000'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: "./src/public",
        colors: true,
        historyApiFallback: true,
        inline: true
    } 
};