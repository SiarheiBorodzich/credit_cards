const webpack = require('webpack');
const { basicConfig } = require('./shared.blocks.js');
const { createConfig } = require('@webpack-blocks/webpack2');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devScssToCss = () => () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'resolve-url-loader'],
                }),
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
        }),
    ],
});

const devServer = () => () => ({
    devServer: {
        contentBase: './dist',
        hot: true,
    },
});

const cleanDist = () => () => ({
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
});

const hotmoduleReplacement = () => () => ({
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});

module.exports = createConfig([
    basicConfig(),
    devScssToCss(),
    devServer(),
    cleanDist(),
    hotmoduleReplacement(),
]);
