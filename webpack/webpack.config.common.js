const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = (process.env.NODE_ENV === 'development');

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        path: path.resolve('./public'),
        filename: 'js/[name].js',
        publicPath: '/'
    },

    devtool: isDev ? 'source-map' : 'none',

    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        isDev? new webpack.NamedModulesPlugin() : new webpack.HashedModulesPlugin()
    ],

    devServer: {
        historyApiFallback: true
    }
};
