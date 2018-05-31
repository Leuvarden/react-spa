const webpack = require('webpack');
const merge=require('webpack-merge');
const common = require('./webpack.config.common');

const isDev = (process.env.NODE_ENV === 'development');

module.exports = merge(common, {
    name: 'client',
    target: 'web',

    entry: [
        isDev && 'webpack-hot-middleware/client',
        './src/client.js'
    ].filter(Boolean),

    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] 
            }
        ],
    },

    plugins: [
        isDev && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
});