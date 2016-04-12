const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').filelist;

const createBundle = (entry) => {
  return gulp.src([`${conf.src}${entry}/*.{jpg,jpeg,png,gif,mp3,mp4}`])
  .pipe($.filelist('filelist.json', conf.option))
  .pipe(gulp.dest(`${conf.src}${entry}/`))
}

const createBundles = (bundles) => {
  bundles.forEach(function(bundle){
    createBundle(bundle);
  });
};

gulp.task('filelist', function() {
  createBundles(conf.entry, conf.option);
});
