const { basicConfig } = require('./shared.blocks.js');
const { createConfig } = require('@webpack-blocks/webpack2');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prodScssToCss = () => () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, {
            loader: 'sass-loader',
          }, {
            loader: 'resolve-url-loader',
          }],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
    }),
  ],
});

const uglifyJs = () => () => ({
  plugins: [
    new UglifyJSPlugin(),
  ],
});

module.exports = createConfig([
  basicConfig(),
  prodScssToCss(),
  uglifyJs(),
]);
