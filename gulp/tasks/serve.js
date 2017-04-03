const gulp = require('gulp');
const yargs = require('yargs').argv;
const browserSync = require('browser-sync');
const path = require("path");
const fs = require('fs');
const url = require("url");
const pug = require('pug');

const $ = require('../plugins');
const conf = require('../conf').serve;
const confPug = require('../conf').pug;

const getPugTemplatePath = (baseDir, req)=>{
  const requestPath = url.parse(req.url).pathname;
  const suffix = path.parse(requestPath).ext ? "": "index.html"
  return path.join(baseDir, "src/html", requestPath, suffix);
}

const pugMiddleWare = (req, res, next) => {
  const basedir = process.cwd();
  const requestPath = getPugTemplatePath(basedir,req)

  if (path.parse(requestPath).ext !== ".html") {
    return next();
  }
  const pugPath = requestPath.replace('.html', '.pug');
  const data = JSON.parse(fs.readFileSync(confPug.json));

  try {
    console.log("[BS] try to file "+ pugPath)
    const content = pug.renderFile(pugPath, {
      data: data,
      pretty: true,
    });
    res.end(new Buffer(content));
  } catch (e) {
    console.log(e);
    return next();
  }
}

gulp.task("serve",()=> {
  conf.dest.server.middleware = [pugMiddleWare];
  if (yargs.build == true) {
    browserSync(conf.build);
  } else {
    browserSync(conf.dest);
  }
});
