const gulp = require('gulp');
const pump = require('pump');

const $ = require('../plugins');
const DIR = require('../conf').DIR;
const conf = require('../conf').uglify;

gulp.task('uglify', (cb) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const dest = (isProduction) ? conf.dest.cms : conf.dest.static;
  if (isProduction) {
    const reg = new RegExp(/([\'|\"])(\/img|\/pdf)/g);
    pump(
      [
        gulp.src(conf.src),
        $.replace(reg, '$1' + DIR.PATH + DIR.CMS + '/assets$2'),
        $.uglify(conf.opts),
        $.rename({
          suffix: '.min'
        }),
        gulp.dest(dest)
      ],
      cb
    );
  } else {
    pump(
      [
        gulp.src(conf.src),
        $.uglify(conf.opts),
        $.rename({
          suffix: '.min'
        }),
        gulp.dest(dest)
      ],
      cb
    );
  }
});
