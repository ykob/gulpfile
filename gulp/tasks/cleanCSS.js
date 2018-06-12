const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').cleanCss;

gulp.task('cleanCss', () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const dest = (isProduction) ? conf.dest.cms : conf.dest.static;
  const rename = (isProduction)
    ? { basename: 'style' }
    : { suffix: '.min' };
  if (isProduction) {
    const reg = new RegExp(/(url)(\(\"|\(\'|\()(.*?)([img|font])(.*?)(\"\)|\'\)|\))/g);
    return gulp.src(conf.src)
      .pipe($.replace(reg, '$1$2./assets/$4$5$6'))
      .pipe($.cleanCss())
      .pipe($.rename(rename))
      .pipe(gulp.dest(dest));
  } else {
    return gulp.src(conf.src)
      .pipe($.cleanCss())
      .pipe($.rename(rename))
      .pipe(gulp.dest(dest));
  }
});
