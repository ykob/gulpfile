const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').replace;

gulp.task('replace', () => {
  return gulp.src(conf.src)
    .pipe($.replace(/(src="js\/)([^"]+)(\.js")/g, '$1$2.min$3'))
    .pipe($.replace(/(href="css\/)([^"]+)(\.css")/g, '$1$2.min$3'))
    .pipe(gulp.dest(conf.dest));
});
