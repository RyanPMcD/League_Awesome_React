var path = require('path');
var webpack = require('webpack');
var bourbon = require('node-bourbon').includePaths;

module.exports = {
  devtool: '#source-map',
  entry: {
    bundle: './entry/index.js',
    styles: ['webpack-dev-server/client?http://localhost:3001', 'webpack/hot/dev-server','./entry/app.scss']
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?includePaths[]=' + bourbon
      }
    ]
  }
};