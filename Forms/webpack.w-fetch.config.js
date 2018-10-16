﻿var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");

module.exports = {
    entry: {
        main: ['whatwg-fetch', './wwwroot/js/site.js'/*, './wwwroot/scss/dynamic-forms.scss'*/]
    },
    output: {
        path: __dirname + '/wwwroot/dist',
        filename: '[name].bundle.w-polyfills.js'
    },
    module: {

        rules: [
            /*
            other rules for JavaScript transpiling go in here
            */
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: "usage",
                                    debug: true,
                                    modules: false,
                                    targets: {
                                        "browsers": ["last 2 versions"]
                                    }
                                }
                            ]
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },

            /*
             bundle the Css
            */
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
        })
    ]
};