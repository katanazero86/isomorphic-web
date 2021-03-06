const path = require('path');

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const nodeExternals = require('webpack-node-externals');


// SSR
const ssr = {
    mode : 'development',
    entry: './server/server.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: "server.js",
    },
    target: 'node', // 노드환경에서 실행될 것이라는 점을 명시
    // node : node.js의 global property 에 polyfill 을 적용할지 여부
    node: false,
    externals: [nodeExternals()],
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '/src'),
                    path.join(__dirname, '/routes/index.js'),
                    path.join(__dirname, '/server/server.js'),
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
};

// CSR
const csr = {
    mode : 'development',
    entry:'./client/client.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '/build'),
        filename: 'client.js'
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, '/src'),
                    path.join(__dirname, '/routes/index.js'),
                    path.join(__dirname, '/client/client.js'),
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
};


module.exports = [ssr, csr];
