"use strict";

var gulp = require('gulp');
var fs = require("fs");
var del = require('del');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var
    packageFile = 'package.json',
    pkg = require('./package.json'),
    paths = {
        scripts: ['src/**/*.js'],
        docs: ['docs/**/*.md'],
        dist: ['dist/**/*']
    };

gulp.task('config', function() {
    pkg = fs.readFileSync(packageFile, "utf8");
    gutil.log(pkg.toString());

});



gulp.task('clean:build', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});

// Lint the files to catch any issues
gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Build
gulp.task('build', function() {

    // TODO

});


// Default task(s).
gulp.task('default', [
    'clean:build',
    'lint',
    'build'
]);
