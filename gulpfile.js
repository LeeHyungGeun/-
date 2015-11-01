var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);
gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        contentBase: "app",
        proxy: [{
            path: /\/edit\/rest(.*)/,
            target: "http://notice.worksmobile.com:8080/"
        }],
        host: "notice.worksmobile.com",
        publicPath: '/assets/',
        stats: {
            hot: true,
            colors: true
        }
    }).listen(8880, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:80/webpack-dev-server/index.html");
    });
});
// var gulp = require('gulp'),
//     gutil = require('gulp-util'),
//     webpack = require('webpack'),
//     WebpackDevServer = require('webpack-dev-server'),
//     webpackConfig = require('./webpack.config.js');
//
// gulp.task('default', ['webpack-dev-server']);
// gulp.task('webpack-dev-server', function (callback) {
//   var myConfig = Object.create(webpackConfig);
//   myConfig.devtool = 'eval';
//   myConfig.debug = true;
//
//   new WebpackDevServer(webpack(myConfig), {
//     contentBase: 'app',
//     proxy: [{
//       path: '',
//       target: 'http://127.0.0.1:8000/'
//     }],
//     host: '127.0.0.1',
//     publicPath: '/assets/',
//     stats: {
//       hot: true,
//       colors: true
//     }
//   }).listen(8888, '127.0.0.1', function (err) {
//     if (err) {
//       throw new gutil.PluginError('webpack-dev-server', err);
//     }
//     gutil.log('[webpack-dev-server]', 'http://localhost:80/webpack-dev-sever/index.html');
//   });
// });
