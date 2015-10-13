var gulp = require('gulp'),
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

gulp.task('default', ['browser-sync']);
