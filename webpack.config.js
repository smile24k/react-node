const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('../css/[name].css');
const path = require('path');
const config = {
	entry:{
		mall:path.resolve(__dirname,'./src/mall.js')
	},
	output:{
        path:path.join(__dirname,'./public/js'),
		filename:'[name].js'
	},
	module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
            },
            {   test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            }
		]
	},
    plugins: [
        extractCSS,
        extractLESS
    ]
};
module.exports = config;