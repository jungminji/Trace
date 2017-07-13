'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const clean = require('gulp-clean');
const htmlbuild = require('gulp-htmlbuild');
const sourcemap = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('clean', function () {
    return gulp.src(['./dist/css', './dist/js', './dist/index.html'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('concat', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dist/js/'));
});


gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sourcemap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemap.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        },
    });
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/*.html', ['htmlbuild']).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', ['concat']).on('change', browserSync.reload);
});

gulp.task('htmlbuild', function () {
    gulp.src(['./src/index.html'])
        .pipe(htmlbuild({
            js: htmlbuild.preprocess.js(function (block) {
                let path = `./js/build.js`;
                block.write(path);
                block.end();
            })
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function (callback) {

    runSequence('clean', ['htmlbuild', 'concat', 'sass'], callback);

});

gulp.task('server', function(callback){
    
    runSequence('clean', ['htmlbuild', 'concat', 'sass'], 'browserSync', callback);

})