var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    browserSync = require('browser-sync').create(),
    src = '',
    toSrc = '',
    jslist = ['js/*.js'];//['bower_components/angular/angular.js',
            //  'bower_components/angular-route/angular-route.js'];



// Static server
gulp.task('webserver', function () {
  src = '*.html';
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp
  .src(src)
  .pipe(watch(src))
  .on('change', browserSync.reload);
});

// minify javascript
gulp.task('minifyjs', function () {
  src = jslist;
  toSrc = 'build/js';
  gulp
  .src(src)
  .pipe(uglify())
  .pipe(concat('joanna.js'))
  .pipe(gulp.dest(toSrc));
});
// minify css
gulp.task('minifycss', function () {
  src = 'bower_components/**/*.css';
  toSrc = 'build/css';
  gulp
  .src(src)
  .pipe(minifyCss({compatibility: "ie8"}))
  .pipe(concat('joanna.css'))
  .pipe(gulp.dest('build/css'));
});
// minify image
gulp.task('minifyimages', function () {
  src = 'images/*';
  toSrc = 'build/images';
  gulp
  .src(src)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(toSrc));
});
// code qualities
gulp.task('lint', function () {
  src = jslist;
  gulp
  .src(src)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
gulp.task('jasmine', function () {
  src = jslist;
  gulp
  .src(src)
  .pipe(jasmine());
});

gulp.task('default', ['minifyjs', 'minifycss', 'lint', 'minifyimages', 'webserver']);

// 链接: lianjie => link
