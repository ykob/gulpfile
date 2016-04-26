const gulp = require('gulp');

const conf = require('../conf').copy_filelist_to_build;

gulp.task('copy-filelist-to-build', () => {
  return gulp.src(conf.src)
    .pipe(gulp.dest(conf.dest));
});
