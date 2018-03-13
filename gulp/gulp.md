中文网 
###  www.gulpjs.com.cn

接口文档
## https://www.gulpjs.com.cn/docs/api/

1.创建好本地文件夹 然后npm init创建package.json配置文件

2.在根目录创建gulpfile.js  必须命名为gulpfile

### task

task默认NAME 是default
在终端直接输入gulp即可执行

gulp.task(name[, deps], fn)


```
var gulp  = require('gulp');

gulp.task('task',['task1'],function(){
    console.log('Hello gulp')
})
gulp.task('task1',function(){
    console.log('Hello gulp')
})
```



name

任务的名字，如果你需要在命令行中运行你的某些任务，请不要在名字中使用空格。

deps
类型： Array

一个包含任务列表的数组，这些任务会在你当前任务运行之前完成。

fn
该函数定义任务所要执行的一些操作。
``` 
gulp.task('default',['task1'],function(){
    console.log('Hello gulp My is default')
})
gulp.task('task1',['task2'],function(){
    console.log('Hello gulp My is task1')
})
gulp.task('task2',['task3'],function(){
    console.log('Hello gulp My is task2')
})
gulp.task('task3',function(){
    console.log('Hello gulp My is task3')
})

执行顺序 3 -> 2 -> 1 -> default
```
###