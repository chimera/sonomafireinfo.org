const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: __dirname,
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('output.css'),
    new webpack.IgnorePlugin(/\.\/locale$/),
  ],
  devtool: 'eval',
}

module.exports = config
