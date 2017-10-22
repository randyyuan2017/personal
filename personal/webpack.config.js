const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './static/js');
const APP_DIR = path.resolve(__dirname, './src');
const JS_DIR = path.join(APP_DIR, 'js');


module.exports = () => {
    "use strict";

    return {
        entry: {
            // libraries: [path.join(JS_DIR, 'jquery.js')],
            main: path.join(JS_DIR, 'main.js'),
        },
        output: {
            path: BUILD_DIR,
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.js', '.css', '.scss']
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }]
        }
    }
};