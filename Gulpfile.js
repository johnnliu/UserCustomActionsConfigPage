"use strict";

var gulp = require('gulp');
var fs = require("fs");
var del = require('del');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var inject = require('gulp-inject');

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
    return gulp.src('./src/configure-page.aspx')
    .pipe(inject(gulp.src(['./src/configure-page.js']), {
        starttag: '<!-- inject:head:js -->',
        transform: function (filePath, file) {
            // return file contents as string 
            return '<script type="text/javascript">\r\n' + file.contents.toString('utf8') + '</script>';
        },
    }))
    .pipe(inject(gulp.src(['./src/configure-page.css']), {
        starttag: '<!-- inject:head:css -->',
        transform: function (filePath, file) {
            // return file contents as string 
            return '<style type="text/css">\r\n' + file.contents.toString('utf8') + '</style>';
        },
    }))
    .pipe(gulp.dest('./dest'));
    
});


// Default task(s).
gulp.task('default', [
    'clean:build',
    'lint',
    'build'
]);
