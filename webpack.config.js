var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var PORT = process.env.PORT || 3333
var PRODUCTION = process.env.NODE_ENV === 'production'
var SRC_DIR = path.resolve(__dirname, './src')

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: SRC_DIR
      }
    ]
  }
}

if (!PRODUCTION) {
  config.devtool = 'eval'
}

module.exports = config
