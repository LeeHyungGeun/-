'use strict'

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dependencies = _.keys(JSON.parse(fs.readFileSync('package.json')).dependencies);


var app = path.join(__dirname + "/app");

var config = {
    context: app,
    entry: {
        app: ["webpack/hot/dev-server","./entry"],
        vendors:dependencies
    },
    output: {
        path: path.join(app, "assets"),
        publicPath: '../',
        filename: "bundle.js"
    },

    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            loader: 'file?name=fonts/[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/i,
            loader: 'file?name=images/[name].[ext]'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'ng-annotate'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
        }, {
            test: /\.html/,
            loader: 'raw'
        }]
    },
    resolve: {
        root: app
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
        new ExtractTextPlugin('style/dev_center.css'),
        new webpack.optimize.UglifyJsPlugin()
    ]

}

module.exports = config;
// 'use strict';
//
// var webpack = require('webpack'),
//     path = require('path'),
//     fs = require('fs'),
//     _ = require('lodash'),
//     ExtractTextPlugin = require('extract-text-webpack-plugin'),
//     dependencies = _.keys(JSON.parse(fs.readFileSync('package.json')).dependencies);
//
// var app = path.join(__dirname + '/app');
//
// var config = {
//   context: app,
//   entry: {
//     app: ['webpack/hot/dev-server', './entry'],
//     vendores: dependencies
//   },
//   output: {
//     path: path.join(app, 'assets'),
//     publicPath: '../',
//     filename: 'bundle.js'
//   },
//   module: {
//     preLoaders: [{
//       test: /\.js$/,
//       exclude: /(node_modules|bower_components)/,
//       loader: 'jshint-loader'
//     }],
//     loaders: [{
//       test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
//       loaders: 'file?name=fonts/[name].[ext]'
//     }, {
//       test: /\.(png|jpg|gif)$/i,
//       loaders: 'file?name=images/[name].[ext]'
//     }, {
//       test: /\.js$/,
//       exclude: /(node_modules|bower_components)/,
//       loader: 'ng-annotate'
//     }, {
//       tset: /\.less$/,
//       loader: ExtractTextPlugin.extract('style', 'css!less')
//     }, {
//       test: /\.html/,
//       loader: 'raw'
//     }]
//   },
//   resolve: {
//     root: app
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
//     new ExtractTextPlugin('style/dev_center.css'),
//     new webpack.optimize.UglifyJsPlugin()
//   ]
// };
//
// module.exports = config;
