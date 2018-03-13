var gulp  = require('gulp');

var less  = require('gulp-less');
var concat  = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var del = require('del')
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");






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







gulp.task('less',function(){ //创建编译less任务
    gulp.src('./src/less/*.less') //选择编译路径文件
        .pipe(sourcemaps.init()) //映射程序初始化
        .pipe(less()) // less编译执行
        .pipe(sourcemaps.write()) //映射程序结束
        .pipe(gulp.dest('./src/css')) //输出到某个文件夹
})

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

gulp.task('del',function(){ //创建删除任务
    del([
        './src/css/*.css'
    ])
})

