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
// var livereload = require('gulp-livereload');
// 以下两行为代理ajax请求
const proxyMiddleware = require('http-proxy-middleware')
const proxy = proxyMiddleware('/api', {target: 'http://112.126.91.237:8888', changeOrigin: true});
// var sequence = require('gulp-sequence').use(gulp);

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

    gulp.watch("./src/less/*.less", ['less']);
});

gulp.task('less',['css'],function(){ 
    gulp.src('./src/less/index.less') 
        .pipe(sourcemaps.init()) 
        .pipe(less()) 
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.reload({stream:true}));
})


