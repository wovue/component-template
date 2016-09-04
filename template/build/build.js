/* eslint-env shelljs */

// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var prodConfig = require('../config').prod
var ora = require('ora')
var webpack = require('webpack')
var webpackDemoConfig = require('./webpack.prod.demo.conf')
var webpackDistConfig = require('./webpack.prod.dist.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var demoPath = prodConfig.demo.assetsRoot
rm('-rf', demoPath)
mkdir('-p', demoPath)
cp('-R', 'static/', demoPath)

var distPath = prodConfig.dist.assetsRoot
rm('-rf', distPath)
mkdir('-p', distPath)

webpack(webpackDemoConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

webpack(webpackDistConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
