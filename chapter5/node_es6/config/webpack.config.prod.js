const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')


const webpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,//注释console
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true,
        },
        parallel: true,
        sourceMap: false
      })
    ]
  }
})

module.exports = webpackConfig

// Terser webpack plugin 压缩我们的代码