const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',
  performance: {
    hints: false,
  },
  target: "web",
  resolve: {
    extensions: ['.less', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@component': path.resolve(__dirname, 'component'),
    }
  },
  devtool: 'inline-source-map', // 帮助发现错误
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'css/index',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [ //webpack 5 自定义主题
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#1DA57A',
              },
              javascriptEnabled: true // 此项不能忘 
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
            outputPath: 'images', //输出文件夹
            // publicPath: 'dist/images' //打包后引用的url前加上 publicpath
          }
        }],

      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [ // 按需引入antd
              [
                require.resolve('babel-plugin-import'),
                {
                  libraryName: 'antd', //暴露antd
                  libraryDirectory: 'es',
                  style: true
                }
              ]
            ]
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    port: 8088, // 端口号
    inline: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      title: 'react-admin',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}