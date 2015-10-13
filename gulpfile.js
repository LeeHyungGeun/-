var gulp = require('gulp'),
    forever = require('forever-monitor'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  browserSync.watch('*.html').on('change', browserSync.reload);
});

gulp.task('server', function () {
  new forever.Monitor('gulpfile.js').start();
});

gulp.task('default', ['browser-sync', 'server']);
