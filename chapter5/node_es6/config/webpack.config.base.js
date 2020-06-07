const path = require('path')
const nodeExcternals = require('webpack-node-externals')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('webpack')

const webpackconfig = {
  target: 'node',
  entry: {
    server: path.join(utils.APP_PATH, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  // devtools: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    // 创建常量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
      }
    })
  ],
  node: {//提供node模块
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}
console.log('base webpackconfig', webpackconfig)
module.exports = webpackconfig