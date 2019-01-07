const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').sitemap;

gulp.task('sitemap', function () {
  if (require('yargs').argv.format === 'cms') {
    return gulp.src('.');
  } else {
    return gulp.src(conf.src, {
      read: false
    })
    .pipe($.sitemap(conf.opts))
    .pipe(gulp.dest(conf.dest));
  }
});
