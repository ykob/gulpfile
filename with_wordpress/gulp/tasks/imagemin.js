const gulp = require('gulp');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

const $ = require('../plugins');
const ARGV = require('yargs').argv;
const conf = require('../conf').imagemin;

gulp.task('imagemin', () => {
  const dest = (ARGV.format === 'cms') ? conf.dest.cms : conf.dest.static;
  return gulp.src(conf.src)
    .pipe($.imagemin(
      [
        pngquant(conf.opts.pngquant),
        mozjpeg(conf.opts.mozjpeg),
        $.imagemin.svgo(conf.opts.svgo),
      ]
    ))
    .pipe($.rename(path => {
      path.dirname = path.dirname.replace('img', '.');
    }))
    .pipe(gulp.dest(dest));
});
