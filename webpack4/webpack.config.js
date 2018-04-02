const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:{
        index : './src/index.js',
        index2 : './src/index2.js'
    }
    ,//入口
    output:{
        path : __dirname+'/dist', //path 必须是绝对路径  等价于 path.resolve(__dirname,'dist')  注意require('path')
        filename : '[name].js'
        
    }
    ,//出口
    module:{

    }
    ,//模块
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'index1',
            hash:true,
            filename : 'index1.html',
            chunks:['index'],
            minify:{
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
        }),
        new HtmlWebpackPlugin({
            template:'./src/index2.html',
            title:'index2',
            hash:true,
            filename : 'index2.html',
            chunks:['index2'],
            minify:{
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
        })
    ]
    ,//插件
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
        index: 'index1.html',
        port: 9000
    }
    //服务
};