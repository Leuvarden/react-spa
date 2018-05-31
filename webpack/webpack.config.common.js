const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = (process.env.NODE_ENV === 'development');

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public')
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
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        isDev? new webpack.NamedModulesPlugin() : new webpack.HashedModulesPlugin()
    ],

    devServer: {
        historyApiFallback: true
    }
};
