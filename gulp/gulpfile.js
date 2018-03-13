var gulp  = require('gulp');

var less  = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('less',function(){
    gulp.src('./src/less/index.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'))
})