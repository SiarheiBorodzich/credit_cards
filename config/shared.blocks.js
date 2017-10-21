const path = require('path');
const { group, entryPoint } = require('@webpack-blocks/webpack2');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

const entrypoint = () => entryPoint(['babel-polyfill', './src/index.js']);

const output = () => () => ({
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(DIST_PATH),
  },
});

const babelLoader = () => () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
});

const createHtml = () => () => ({
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.template.html',
    }),
  ],
});

const basicConfig = () => (
  group([
    entrypoint(),
    output(),
    babelLoader(),
    createHtml(),
  ])
);

module.exports = {
  basicConfig,
};
