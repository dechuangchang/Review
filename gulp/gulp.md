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
### gulp.src(globs[, options])
//src 相当于一个读取操作 然后返回一个可以被 piped 到别的插件中stream
传输stream需要pipe来操作
pipe（管道）相当于下一步的意思

### gulp.dest(path[, options])
能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，
因此你可以将它 pipe 到多个文件夹。
如果某文件夹不存在，将会自动创建它。
```
gulp.task('default',function(){
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./build/')) 
})
//把src复制到build
```

gulp.watch(glob [, opts], tasks) 或 gulp.watch(glob [, opts, cb])
监视文件，并且可以在文件发生改动时候做一些事情。
它总会返回一个 EventEmitter 来发射（emit） change 事件。

```
gulp.task('task2',function(){
    console.log('有变动')
})
gulp.task('watchFile',function(){
    var watch =  gulp.watch('./src/index.html',['task2'])
    watch.on('change', function(event) {
    console.log(event);    
    // path 变动文件的路径
    // type 文件变动的类型 added, changed 或者 deleted。
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
})
```
## less 文件编译 gulp-less
## 页面调试映射源文件 gulp-sourcemaps
```
var less  = require('gulp-less'); //引入less编译包
var sourcemaps = require('gulp-sourcemaps'); 引入路径映射包
gulp.task('less',function(){ //创建编译less任务
    gulp.src('./src/less/*.less') //选择编译路径文件
        .pipe(sourcemaps.init()) //映射程序初始化
        .pipe(less()) // less编译执行
        .pipe(sourcemaps.write()) //映射程序结束
        .pipe(gulp.dest('./src/css')) //输出到某个文件夹
})
```
## 多个css,js合并 gulp-concat
1.
```
 gulp.task('less',function(){
     gulp.src('./src/less/*.less')
         .pipe(sourcemaps.init())
         .pipe(less())
         .pipe(sourcemaps.write())
         .pipe(concat('index.css'))
         .pipe(gulp.dest('./src/css'))
 })

```
2.
```
var concat  = require('gulp-concat');
gulp.task('concat',function(){ //创建合并任务
    gulp.src('./src/css/*.css') //选择编译路径文件
        .pipe(sourcemaps.init()) //映射程序初始化
        .pipe(concat('all.css',{newLine: ';'})) 
        // 文件合并 newLine的值是每个文件分割的文字 
        // 第一个参数是新文件名
        .pipe(sourcemaps.write()) //映射程序结束
        .pipe(gulp.dest('./src/css')) //输出到某个文件夹
})
```
## gulp-clean-css  css文件压缩

```
var cleanCSS = require('gulp-clean-css');
gulp.task('concat',function(){ //创建合并任务
    gulp.src('./src/css/*.css') //选择编译路径文件
        .pipe(sourcemaps.init()) //映射程序初始化
        .pipe(concat('all.css')) // 文件合并
        .pipe(cleanCSS({debug: true,compatibility: 'ie8'}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
          }))
          // css压缩 
          // compatibility 谁配姓选项
          // debug 详情
          // details.name 文件名字
          // details.stats.originalSize  原始大小
          // details.stats.minifiedSize  压缩后大小
        .pipe(sourcemaps.write()) //映射程序结束
        .pipe(gulp.dest('./src/css')) //输出到某个文件夹
})
```
## del 删除插件

```
var del = require('del')

gulp.task('del',function(){ //创建删除任务
    del([
        './src/css/*.css'
    ])
    //参数为一个数组 每个值是需要删除的路径
})
```
## js es5-es6 gulp-babel

``$ npm install --save-dev gulp-babel babel-core babel-preset-env``

``$ npm install --save-dev babel-preset-es2015``

```
var babel = require('gulp-babel');
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('new.js'))
    .pipe(gulp.dest('./src/js'))
})
```

## js 压缩 gulp-uglify

## 文件改名 gulp-rename
```
gulp.task('js',function(){
    gulp.src('./src/js/*.js') //获取路径
    .pipe(babel({
        presets: ['es2015'] //转成es5
    }))
    .pipe(concat('new.js')) //合并成new.js
    .pipe(uglify()) //压缩
    .pipe(rename(function (path) { //重命名
        path.dirname += ""; //路径
        path.basename += ".min"; //name
        path.extname = ".js" //后缀
    }))
    .pipe(gulp.dest('./src/js'))
})
```