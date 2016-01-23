var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './entry/index.js'
  },
  output: {
    filename: 'bundle.js'
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
      }
    ]
  },
};