const gulp = require('gulp');

const conf = require('../conf').copy;

gulp.task('copy', () => {
  return gulp.src(conf.src)
    .pipe(gulp.dest(conf.dest));
});
