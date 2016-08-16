const gulp = require('gulp');
const browserSync = require('browser-sync');

const conf = require('../conf').serve_build;

gulp.task('serve-build', () => {
  browserSync(conf);
});
