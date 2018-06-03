const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env, options) {

    const isProduction = (options.mode === 'production');

    const config = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js',
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true
        },
        devtool: isProduction ? 'none' : 'source-map',
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
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
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new ExtractTextPlugin('[name].css')
        ]
    };

    return config;
};