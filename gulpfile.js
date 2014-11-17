/**
 * Created by Mark on 05/11/2014.
 */
var gulp = require('gulp'), jshint = require('gulp-jshint'), uglify = require('gulp-uglify'), concat = require('gulp-concat');
gulp.task('js', function () {
    gulp.src('scripts/*.js').pipe(jshint()).pipe(jshint.reporter('default')).pipe(uglify()).pipe(concat('app.js')).pipe(gulp.dest(''));
});
gulp.task('css', function () {
    gulp.src('stylesheets/*.less').pipe(jshint()).pipe(jshint.reporter('default')).pipe(uglify()).pipe(concat('app.js')).pipe(gulp.dest(''));
});
gulp.task('default', function () {
});
//# sourceMappingURL=gulpfile.js.map