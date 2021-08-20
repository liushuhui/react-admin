const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 帮助发现错误
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 8088, // 端口号
    inline: true,
    hot: true,
    open: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})