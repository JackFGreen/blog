const path = require('path')
const myLoader = path.resolve(__dirname, './myLoader.js')
const MyPlugin = require('./MyPlugin')
const MyWatchPlugin = require('./MyWatchPlugin')

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: myLoader }
    ]
  },
  plugins: [
    new MyPlugin('new my plugin instance'),
    new MyWatchPlugin()
  ]
}
