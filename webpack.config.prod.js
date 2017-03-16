var path = require('path');
var webpack = require("webpack");

var BUILD_DIR = path.resolve(__dirname, 'app/assets/javascripts');
var APP_DIR = path.resolve(__dirname, 'frontend');

module.exports = {
  context: __dirname,
  entry: APP_DIR + '/schwifty.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};