const gulp = require('gulp');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const $ = require('../plugins');
const DIR = require('../conf').DIR;
const ARGV = require('yargs').argv;
const conf = require('../conf').scripts;

const webpackError = function() {
  this.emit('end');
};

gulp.task('scripts', () => {
  conf.webpack.mode = process.env.NODE_ENV;
  if (conf.webpack.mode == 'development') {
    return gulp.src(conf.src)
      .pipe(webpackStream(conf.webpack, webpack))
      .on('error', webpackError)
      .pipe(gulp.dest(conf.dest[conf.webpack.mode]));
  } else {
    const dest = (ARGV.format === 'cms')
      ? conf.dest.production.cms
      : conf.dest.production.static;
    return webpackStream(conf.webpack, webpack)
      .pipe($.rename({suffix: '.min'}))
      .pipe(gulp.dest(dest));
  }
});
