const gulp = require('gulp');
const del = require('del');

gulp.task('clean-filelist', () => {
  del(['dst/json_temp/']);
});
