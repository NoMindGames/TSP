const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const develop = require('./webpack/development');
const babel = require('./webpack/babel');
const css = require('./webpack/css');

const common = merge([
  {
    output: {
      publicPath: '/',
      filename: 'bundle.js',
    },
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
  },
  babel(),
])

module.exports = merge([
  common,
  develop(path, __dirname),
  css()
]);
