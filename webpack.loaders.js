const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [
    {
        test: /\.jsx?$/, // look for .jsx files
        exclude: /node_modules/, // ingore /node_modules
        loader: 'babel-loader', // preprocess with that babel goodness
        query: {
            cacheDirectory: true,
        }
    },
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
];