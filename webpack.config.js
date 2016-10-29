var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var neat = require('node-neat');
var neatIncludes = neat.includePaths;
module.exports = {
    entry: {
        'build/buick': './app/buick.js',
        'build/cadillac': './app/cadillac.js',
        'build/cheverolet': './app/cheverolet.js',
        'build/gmc': './app/gmc.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name]/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    sassLoader: {
        includePaths: neatIncludes
    },
    plugins: [
        new ExtractTextPlugin('[name]/styles.css')
    ]
};