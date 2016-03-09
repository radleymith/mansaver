var path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: path.resolve(__dirname,"public/index.jsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json/, loader: "json" },
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader' }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
    new CopyWebpackPlugin([
            {  from: './public/static',
               to: './static'}
        ])
    ],
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    } 
};