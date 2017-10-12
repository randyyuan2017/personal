const path = require('path');
const loaders = require('./webpack.loaders');

const BUILD_DIR = path.resolve(__dirname, '../static/js');
const APP_DIR = path.resolve(__dirname, './src');

module.exports = () => {
    "use strict";

    return {
        entry: {
            'dashboard': ['babel-polyfill', path.join(APP_DIR, 'index.js')],
            // vendor: ['react', 'react-dom', 'react-router'],
        },
        output: {
            path: BUILD_DIR,
            filename: isProd ? '[name].min.js' : '[name].bundle.js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.scss']
        },
        module: {
            loaders
        },
        plugins: plugins
    }
};