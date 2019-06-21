// 設定ファイル
// 対象パスやオプションを指定

const ARGV = require('yargs').argv;
const DOMAIN = module.exports.DOMAIN = 'https://www.tplh.net';
const DIR = module.exports.DIR =  {
   // 語尾にスラッシュはつけない
  PATH: '',
  CMS: '/cms/wp-content/themes/tplh.net',
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'build'
};
const WEBPACK_CONFIG = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  SUB_DIR: (ARGV.format === 'format') ? `${DIR.PATH}${DIR.CMS}/assets` : `${DIR.PATH}`,
};

module.exports.serve = {
  dest: {
    notify: false,
    startPath: `${DIR.PATH}/`,
    ghostMode: false,
    server: {
      baseDir: DIR.DEST,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.DEST}${DIR.PATH}/`
      }
    }
  },
  build: {
    notify: false,
    startPath: DIR.PATH,
    ghostMode: false,
    server: {
      baseDir: DIR.BUILD,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.BUILD}${DIR.PATH}/`
      }
    }
  }
};

const { DefinePlugin } = require('webpack');
module.exports.scripts = {
  src: [
    `./${DIR.SRC}/**/*.js`,
  ],
  dest: {
    development: `./${DIR.DEST}${DIR.PATH}/js`,
    production: {
      static: `./${DIR.BUILD}${DIR.PATH}/js`,
      cms: `./${DIR.BUILD}${DIR.PATH}${DIR.CMS}/assets/js`,
    },
  },
  webpack: {
    entry: {
      main: `./${DIR.SRC}/js/main.js`,
    },
    output: {
      filename: `[name].js`
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
        }
      ]
    },
    plugins: [
      new DefinePlugin(WEBPACK_CONFIG),
    ],
  },
};

module.exports.vendorScripts = {
  src: [
    `./${DIR.SRC}/js/vendor/*.js`,
  ],
  concat: 'vendor.js',
  dest: `./${DIR.DEST}${DIR.PATH}/js/`
};

module.exports.pug = {
  src: [
    `${DIR.SRC}/**/*.pug`,
    `!${DIR.SRC}/**/_**/*.pug`,
    `!${DIR.SRC}/**/_*.pug`
  ],
  dest: `${DIR.DEST}${DIR.PATH}`,
  opts: {
    pretty: true
  },
  json: `${DIR.SRC}/data.json`,
};

module.exports.sass = {
  src: [
    `${DIR.SRC}/**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_*.{sass,scss}`
  ],
  dest: `${DIR.DEST}${DIR.PATH}/css`,
};

module.exports.replace = {
  html: {
    src: [
      `${DIR.DEST}${DIR.PATH}/**/*.html`
    ],
    dest: `${DIR.BUILD}${DIR.PATH}`,
  }
};

module.exports.cleanCss = {
  src: `${DIR.DEST}${DIR.PATH}/css/main.css`,
  dest: {
    static: `${DIR.BUILD}${DIR.PATH}/css`,
    cms: `${DIR.BUILD}${DIR.PATH}${DIR.CMS}`,
  },
};

module.exports.copy = {
  dest: {
    src: [
      `${DIR.SRC}/img/**/*.*`,
      `${DIR.SRC}/font/**/*.*`,
      `${DIR.SRC}/json/**/*.*`,
    ],
    dest: `${DIR.DEST}${DIR.PATH}`,
    opts: {
      base: `${DIR.SRC}`
    }
  },
  build: {
    src: [
      `${DIR.DEST}${DIR.PATH}/img/**/*.ico`,
      `${DIR.DEST}${DIR.PATH}/img/**/no_compress/*.*`,
      `${DIR.DEST}${DIR.PATH}/font/**/*.*`,
      `${DIR.DEST}${DIR.PATH}/json/**/*.*`,
    ],
    dest: {
      static: `${DIR.BUILD}${DIR.PATH}`,
      cms: `${DIR.BUILD}${DIR.PATH}${DIR.CMS}/assets`,
    },
    opts: {
      base: `${DIR.DEST}${DIR.PATH}`
    }
  },
  php: {
    src: [
      `${DIR.SRC}/html/**/*.php`,
    ],
    dest: {
      static: `${DIR.BUILD}${DIR.PATH}`,
      cms: `${DIR.BUILD}${DIR.PATH}${DIR.CMS}/assets/php`,
    },
    opts: {
      base: `${DIR.SRC}/html/`
    }
  },
  cms: {
    src: [
      `${DIR.SRC}/wp-theme/**/*.php`,
      `${DIR.SRC}/wp-theme/**/screenshot.png`,
    ],
    dest: `${DIR.BUILD}${DIR.PATH}${DIR.CMS}`,
    opts: {
      base: `${DIR.SRC}/wp-theme/`
    }
  }
};

module.exports.imagemin = {
  src: [
    `${DIR.DEST}${DIR.PATH}/**/*.{jpg,jpeg,png,gif,svg}`,
    `!${DIR.DEST}${DIR.PATH}/img/**/no_compress/*.*`,
  ],
  dest: {
    static: `${DIR.BUILD}${DIR.PATH}/img`,
    cms: `${DIR.BUILD}${DIR.PATH}${DIR.CMS}/assets/img`,
  },
  opts: {
    pngquant: {
      quality: [0.6, 0.8],
      speed: 1,
    },
    mozjpeg: {
      quality: 80,
      progressive: true,
    },
    svgo: {
      plugins: [
        { removeViewBox: false },
        { cleanupIDs: true },
      ]
    },
  }
};

module.exports.clean = {
  dest: {
    path: [`${DIR.DEST}`]
  },
  build: {
    path: [`${DIR.BUILD}`]
  }
};
