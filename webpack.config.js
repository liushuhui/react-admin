const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log('环境变量：', process.env.NODE_ENV)

module.exports = {
  performance: {
    hints: false,
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  },
  // devtool: 'inline-source-map', // 帮助发现错误
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:7].js',
    assetModuleFilename: 'images/[name].[hash][ext][query]',
    publicPath:'/' //这个是为了解决二级菜单刷新报错的问题，假如不加刷新后会去寻找当前路径的下打包后的css或者js，导致报错，所以要改设置为根路径
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 60000,
      maxSize: 200000,
    }
  },
  module: {
    rules: [{
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // webpack5 已经弃用url-loader，file-loader
        type: 'asset/resource'

      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [ MiniCssExtractPlugin.loader , 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [ //webpack 5 自定义主题
          {
            loader:  MiniCssExtractPlugin.loader ,
            options: {
              esModule: false,
              // publicPath: './',
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
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
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: path.join(__dirname, 'public'),
  //   port: 8088, // 端口号
  //   inline: true,
  //   hot: true,
  //   open: true
  // },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlPlugin({
      title: 'react-admin',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      // chunkFilename: 'css/[id].css'
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ]
}