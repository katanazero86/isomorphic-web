const path = require('path');

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: path.join(__dirname, '/server.js'),
    output : {
        path: path.join(__dirname, '/build'),
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    externals: /^[a-z][a-z\/\.\-0-9]*$/i,
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '/src'),
                    // path.join(__dirname, '/client.js'),
                    path.join(__dirname, '/server.js'),
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build']
        })
    ],

}
