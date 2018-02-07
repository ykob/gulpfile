const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').replace;

gulp.task('replaceHtml', () => {
  const regJs = new RegExp(`(src="${conf.html.path}\/js\/)([a-z0-9_\.\-]*)(\.js")`);
  const regCss = new RegExp(`(href="${conf.html.path}\/css\/)([a-z0-9_\.\-]*)(\.css")`);
  return gulp.src(conf.html.src)
    .pipe($.replace(regJs, '$1$2.min$3'))
    .pipe($.replace(regCss, '$1$2.min$3'))
    .pipe(gulp.dest(conf.html.dest));
});
