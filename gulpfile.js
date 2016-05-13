const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const DIR = require('./gulp/conf').DIR;

requireDir('./gulp/tasks');

gulp.task('predefault', cb => {
  runSequence(
    'filelist',
    ['pug', 'sass', 'watchify', 'copy-vendor-script'],
    'serve',
    cb
  );
});

gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`./${DIR.SRC}/**/*.pug`],
    ['pug', reload]
  );

  gulp.watch(
    [`./${DIR.SRC}/**/*.{scss,sass}`],
    ['sass', reload]
  );

  gulp.watch(
    [`./${DIR.DEST}/**/*.js`],
    reload
  );
});

gulp.task('build', cb => {
  runSequence(
    'clean',
    'filelist',
    ['pug', 'sass'],
    'replace-html',
    ['minify-css', 'browserify', 'imagemin'],
    'uglify',
    'copy-vendor-script-to-build',
    'copy-filelist-to-build',
    cb
  );
});
