'use strict'

const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: [
    './browser/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        },
        include: path.join(__dirname, 'browser')
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' },
      { test: /\.eot/, loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject' },
      { test: /\.woff2(\?\S*)?$/, loader: 'url-loader?limit=100000&mimetype=application/font-woff2' },
      { test: /\.woff/, loader: 'url-loader?limit=100000&mimetype=application/font-woff' },
      { test: /\.ttf/, loader: 'url-loader?limit=100000&mimetype=application/font-ttf' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
}
