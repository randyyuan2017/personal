const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, './static/js');
const APP_DIR = path.resolve(__dirname, './src');

module.exports = () => {
    "use strict";

    return {
        entry: {
            index: path.join(APP_DIR, 'index.js'),
        },
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.js', '.css', '.scss']
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ["style-loader", "css-loader"]
                },
                {
                    test: /\.scss$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: ExtractTextPlugin.extract(
                        ["css-loader", "sass-loader"]
                    )
                },
                {
                    test: /\.jpg/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "image/jpg"
                    }
                },
                {
                    test: /\.png/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "image/png"
                    }
                }
            ]
        }
    }
};