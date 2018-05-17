const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').cleanCss;

gulp.task('cleanCss', () => {
  const NODE_ENV = process.env.NODE_ENV;
  const dest = (NODE_ENV === 'production') ? conf.dest.cms : conf.dest.static;
  const rename = (NODE_ENV === 'production')
    ? { basename: 'style' }
    : { suffix: '.min' };
  return gulp.src(conf.src)
    .pipe($.cleanCss())
    .pipe($.rename(rename))
    .pipe(gulp.dest(dest));
});
