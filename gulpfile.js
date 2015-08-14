var gulp = require('gulp');
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var runSeq = require('run-sequence');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('gulp-babel');


// Default
gulp.task('default', function() {
	gulp.start('build');

	gulp.watch(['client/pre-build/app.js', 'client/pre-build/**/*.js'], function () {
        runSeq('buildJS');
    });

    gulp.watch(['client/pre-build/app.scss', 'client/pre-build/**/*.scss'], function () {
        runSeq('buildCSS');
    });

    gulp.watch(['server/**/*.js'], ['testServerJS']);

});

// Build tasks
//// Build all
gulp.task('build', function() {
	runSeq(['buildJS', 'buildCSS']);
});

gulp.task('buildJS', function () {
    return gulp.src(['./client/pre-build/app.js', './client/pre-build/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('build.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/build'));
});

gulp.task('buildCSS', function () {
    return gulp.src('./client/pre-build/app.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(rename('build.css'))
        .pipe(gulp.dest('./client/build'));
});

