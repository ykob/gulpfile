const gulp = require('gulp');
const yargs = require('yargs').argv;
const browserSync = require('browser-sync');

const conf = require('../conf').serve;

gulp.task('serve', () => {
  if (yargs.build == true) {
    browserSync(conf.build);
  } else {
    browserSync(conf.dest);
  }
});
