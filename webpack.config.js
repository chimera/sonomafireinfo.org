const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: ['./app.js'],
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
    new UglifyJSPlugin(),
  ],
  // devtool: 'eval',
}

module.exports = config
