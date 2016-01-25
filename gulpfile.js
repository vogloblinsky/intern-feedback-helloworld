var gulp = require('gulp'),
    replace = require('gulp-replace');

gulp.task('clean-lcov', function () {
	var currentDirectory = process.cwd();
    return gulp.src('build/quality/final_lcov.info')
        .pipe(replace(currentDirectory + '/', ''))
        .pipe(gulp.dest('build/quality/'));
});