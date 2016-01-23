var gulp = require('gulp'),
    replace = require('gulp-replace');

gulp.task('clean-lcov', function () {
    return gulp.src('build/quality/final_lcov.info')
        .pipe(replace('/Volumes/Data/wamp/Projets/open-source/intern-feedback-helloworld/', ''))
        .pipe(gulp.dest('build/quality/'));
});