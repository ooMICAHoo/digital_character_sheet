const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // output: {
  //   path: path.resolve(__dirname, 'public'),
  //   filename: 'script.js',
  // },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    {
      test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file-loader?name=[name].[ext]',
    }],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', 'jsx', 'js'],
  },
};
