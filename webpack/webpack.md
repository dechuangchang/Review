http://www.css88.com/doc/webpack/ 
可参考中文文档 版本3.5.5
webpack版本 3.6.0
 - 首先 npm init
 - 新建webpack.config.js
 - npm install webpack@版本号


## 出口入口 
```
const path = require('path'); 
module.exports = {
    entry:{
        one:'./src/one.js',
        two:'./src/two.js'
    },//入口 entry: string|Array<string>
    output:{
        path:path.resolve(__dirname,'dist'), //输出真是硬盘位置
        filename:'[name].js'  //[name] 是用原文件名
    }//出口
}
```
## devServer 启动服务
```
devServer:{
    contentBase:path.resolve(__dirname,'./'), //服务器根路径
    host:'127.0.0.1', //ip
    compress:true, // 服务端压缩
    port:'8002' // 端口
}
```

## css-loader style-loader  基本样式模块插件


## require('uglifyjs-webpack-plugin');
js压缩
在plugins里面new(实例化)

```
 "scripts": {
    "server": "webpack-dev-server",
    "dev":"exprot aaa=dev&&webpack", //mac
    "build": "set aaa=build&webpack" //windows
  },
```
