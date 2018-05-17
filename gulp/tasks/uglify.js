const gulp = require('gulp');
const pump = require('pump');

const $ = require('../plugins');
const conf = require('../conf').uglify;

gulp.task('uglify', (cb) => {
  const dest = (process.env.NODE_ENV === 'production') ? conf.dest.cms : conf.dest.static;
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
});
