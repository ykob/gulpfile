const gulp = require('gulp');

const conf = require('../conf').copy;

gulp.task('copy-vendor-script', () => {
  return gulp.src(conf.vendor_script.src)
    .pipe(gulp.dest(conf.vendor_script.dest));
});

gulp.task('copy-vendor-script-to-build', () => {
  return gulp.src(conf.vendor_script_to_build.src)
    .pipe(gulp.dest(conf.vendor_script_to_build.dest));
});
