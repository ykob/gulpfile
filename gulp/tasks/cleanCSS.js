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
    const regBgImg = new RegExp(/(url\(["|']).*?(\/images)(.*?)(["|']\))/g);
    return gulp.src(conf.src)
      .pipe($.replace(regBgImg, '$1./assets$2$3$4'))
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
