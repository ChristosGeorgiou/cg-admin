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
		.pipe(rename({
			basename: "cg-admin",
			extname: '.css'
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(minify())
		.pipe(rename({
			basename: "cg-admin",
			suffix: '.min',
			extname: '.css'
		}))
		.pipe(gulp.dest('./dist'));

});

gulp.task('angular', function () {

	return gulp.src('./scripts/**/*.js')
		.pipe(angularFilesort())
		.pipe(sourcemaps.init())
		.pipe(concat('cg-admin.js', {
			newLine: ';'
		}))
		.pipe(ngAnnotate({
			add: true
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify({
			mangle: false
		}))
		.pipe(rename({
			basename: "cg-admin",
			suffix: '.min',
			extname: '.js'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist'));

});