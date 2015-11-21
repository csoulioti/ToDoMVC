var gulp = require('gulp');

gulp.task('installDependencies', function () {
    var install = require('gulp-install');

    return gulp.src(['./package.json'])
        .pipe(install());
});
