import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import webpack from 'webpack'

const ENV = process.env.NODE_ENV

console.log('BUILDING WITH ENV:', ENV)

const config = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: __dirname,
    filename: 'build.[hash].js',
    publicPath: '/',
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
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: 'index.html',
      template: 'template.html',
      showErrors: ENV === 'development',
    }),
  ],
}

if (ENV === 'production') {
  config.plugins.push(new UglifyJSPlugin())
}

if (ENV === 'development') {
  // config.plugins.push(new BundleAnalyzerPlugin())
  config.devtool = 'eval'
}

module.exports = config
