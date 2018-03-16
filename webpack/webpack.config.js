const path = require('path');
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var website = {
    "publicPath":"http:cdc.canfreee.com/"
}
website = {
    "publicPath":"/assets/img/"
}
module.exports = {
    entry:{
        one:'./src/build.js',
        jquery: "jquery"
    },//入口
    output:{
        path:path.resolve(__dirname,'dist'),//输出真是硬盘位置
        filename:'[name].js', //[name] 是用原文件名
        //publicPath:'/temp/',//  开发环境虚拟内存并且在html路径修改为temp 实现热更新
    },
    module:{
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },{
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        name:'[name]_[hash:6].[ext]',
                        outputPath:'assets/img/',
                        publicPath:website.publicPath
                    }
                }
            ]
        },{
            test: /\.html$/,
            use: ['html-withimg-loader']
        }]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "jquery",
            minChunks: Infinity,
            filename:"./js/jquery.js"
        }),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("assets/css/[name].css"),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'./dist/'), //服务器根路径
        host:'127.0.0.1', //ip
        compress:true, // 服务端压缩
        port:'8002' // 端口
    }
}