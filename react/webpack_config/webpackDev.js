const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var entry = {
    'index':'./app/js/index.js',
    'admin':'./app/js/admin.js',
    'jquery': "jquery"
}
console.log('dev')
module.exports = {
    entry:entry,//入口
   
    output:{
        path:path.resolve(__dirname,'../output'),//输出真是硬盘位置
        filename:'./js/[name].js', 
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-modulemodule",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(
                    {
                        use:[{
                            loader: "css-loader" 
                        }, {
                            loader: "less-loader",
                            options: {javascriptEnabled: true}
                        }],
                        fallback: "style-loader"
                    }
                )
            },
            {
                test: /\.(gif|jpg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name:'[name].[ext]',
                            outputPath:'./img/',
                            publicPath:'http://127.0.0.1:8002/img/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50000,
                            name:'[name].[ext]',
                            outputPath:'./iconfont/',
                            publicPath:'http://127.0.0.1:8002/iconfont/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react',"stage-0"]
                    }
                }]
                
            },
            {
                test: /\.html$/,
                use: ['html-withimg-loader']
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename: 'index.html',
            chunks: ['jquery','index'],
            template:'./app/index.html'
        }),
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename: 'admin.html',
            chunks: ['jquery','admin'],
            template:'./app/admin.html'
        }),
        new ExtractTextPlugin("./css/[name].css"),
    ]
}