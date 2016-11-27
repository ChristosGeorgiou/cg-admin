'use strict';

var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var gulp = require('gulp');
var minify = require('gulp-clean-css');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('default', ['build'], function () {
	gulp.watch('./scss/**/**.*', ['sass']);
	gulp.watch('./scripts/**/*.js', ['angular']);
});

gulp.task('build', ['angular', 'sass']);

gulp.task('sass', function () {

	return gulp.src('./scss/*.scss', {
			read: true,
		})
		.pipe(sass().on('error', sass.logError))
		.pipe(minify())
		.pipe(rename({
			suffix: '.min',
			extname: '.css'
		}))
		.pipe(gulp.dest('./dist'));

});

gulp.task('angular', function () {

	return gulp.src('./src/**/*.js')
		.pipe(angularFilesort())
		.pipe(sourcemaps.init())
		.pipe(concat('app.min.js', {
			newLine: ';'
		}))
		.pipe(ngAnnotate({
			add: true
		}))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist'));

});
