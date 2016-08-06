const gulp = require('gulp');
const del = require('del');

const conf = require('../conf').clean_dst;

gulp.task('clean-dst', cb => {
  del(conf.path).then(() => {
    cb();
  });
});
