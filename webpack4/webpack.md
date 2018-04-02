webpack 构成：
1.  入口文件 entry
2.  出口 output
3.  转化器 loaders
4.  插件 plugins
5.  服务 devServer
6.  环境 mode {
    开发环境： develepment
    生产环境： production
}


webpack src/index.js --output dist/build.js
把src/index.js打包到dist下命名为build.js

webpack.config.js  默认配置文件名

配置自定义文件名需要 在命令行  webpack--config ****.****.js

package,json下的scripts配置自定义命令 

--mode development  开发环境：不压缩
--mode production 生产环境：压缩


生成html
html-webpack-plugin
https://www.npmjs.com/package/html-webpack-plugin#

删除文件
clean-webpack-plugin
https://www.npmjs.com/package/clean-webpack-plugin