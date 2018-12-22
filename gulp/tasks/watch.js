const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const $ = require('../plugins');
const DIR = require('../conf').DIR;

gulp.task('watch', () => {
  $.watch(
    [`./${DIR.SRC}/**/*.{scss,sass}`],
    () => {
      gulp.start(['sass'])
    }
  ).on('change', reload);

  $.watch(
    [`./${DIR.SRC}/**/*.pug`]
  ).on('change', reload);

  $.watch(
    [
      `./${DIR.SRC}/**/*.js`,
    ],
    () => {
      gulp.start(['scripts'])
    }
  ).on('change', reload);

  $.watch(
    [
      `./${DIR.SRC}/img/**/*.*`,
      `./${DIR.SRC}/font/**/*.*`,
      `./${DIR.SRC}/json/**/*.*`,
    ],
    () => {
      gulp.start(['copyToDest'])
    }
  ).on('change', reload);
});
