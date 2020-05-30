const path = require('path');

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, '/client.js'),
    output: {
        publicPath: "/",
        path: path.join(__dirname, '/build'),
        filename: "client.js"
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '/src'),
                    path.join(__dirname, '/client.js'),
                    // path.join(__dirname, '/server.js'),
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    // devtool: 'source-map',
    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
    ]

}
