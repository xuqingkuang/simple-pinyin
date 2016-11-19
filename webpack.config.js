const path              = require('path');
const webpack           = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    libraryTarget: 'umd',
    library: 'simplePinyin',
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: 'index.min.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
  ],
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.ts$/,
        loaders: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
