var gulp  = require('gulp');

var less  = require('gulp-less');
var concat  = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var del = require('del')
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var imagemin = require("gulp-imagemin");
var cache = require('gulp-cache');
var spriter = require('gulp-css-spriter');
var base64 = require('gulp-base64');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 以下两行为代理ajax请求
const proxyMiddleware = require('http-proxy-middleware')
const proxy = proxyMiddleware('/api', {target: 'http://112.126.91.237:8888', changeOrigin: true});

// 静态服务器
gulp.task('server',['less'],function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index:'./src/index.html',
            middleware: [proxy]
        },
        host: '127.0.0.1',
        port: 8002,
        open: false
    });
    gulp.watch("./src/less/**.*", ['less']);
   
    gulp.watch("./src/*.html").on('change', reload);
});

gulp.task('less',function(){ //创建编译less任务
    gulp.src('./src/less/index.less') //选择编译路径文件
        .pipe(sourcemaps.init()) //映射程序初始化
        .pipe(less()) // less编译执行
        .pipe(sourcemaps.write()) //映射程序结束
        .pipe(gulp.dest('./build/css')) //输出到某个文件夹
        .pipe(reload({stream: true}));
})


