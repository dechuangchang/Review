
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var entry = {
    index:'./app/js/index.js',
    admin:'./app/js/admin.js',
    jquery: "jquery"
}
module.exports = {
    devtool: "source-map",
    entry:entry,//入口
    output:{
        path:path.resolve(__dirname,'./app'),//输出真是硬盘位置
        filename:'./js/[name].js'
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
                            loader: "css-loader" ,
                            options: { sourceMap: true}
                        }, {
                            loader: "less-loader" ,
                            options: { sourceMap: true,javascriptEnabled: true}
                        }],
                        fallback: "style-loader"
                    }
                )
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name:'[name].[ext]',
                            outputPath: path.resolve(__dirname,'./app/img/'),
                            publicPath:'http://cdc.canfreee.com:8002/img/'
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
                            outputPath: path.resolve(__dirname,'./app/img/'),
                            publicPath:'http://cdc.canfreee.com:8002/iconfont/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','stage-0','react'],
                    "plugins": [
                        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }] // `style: true` 会加载 less 文件
                    ]
                }
                }],
                exclude: /node_modules/, 
                
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
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename: 'index.html',
            chunks: ['index','jquery'],
            template:'./app/index.html'
        }),
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename: 'admin.html',
            chunks: ['admin','jquery'],
            template:'./app/admin.html'
        }),
        new ExtractTextPlugin("./css/[name].css"),
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': '"development"'
            }
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'./app/'), //服务器根路径
        proxy: {
            '/api': {// '/api':匹配项
              target: 'http://112.126.91.237:8888',// 接口的域名
              changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            }
        },
        hot:false,
        inline:false,
        host:'cdc.canfreee.com', //ip
        compress:true, // 服务端压缩
        port:'8002' // 端口
    }
}