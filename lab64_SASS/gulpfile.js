var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    //gulp.src('sass/operaciones.scss')
    gulp.src('sass/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('css/'))
});

//Watch task
gulp.task('default',function() {
    //gulp.watch('sass/alcanceSelector.scss',['styles']);
    gulp.watch('sass/*.scss',['styles']);
});