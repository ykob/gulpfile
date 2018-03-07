// 設定ファイル
// 対象パスやオプションを指定

const DOMAIN = module.exports.DOMAIN = 'http://www.xxx.com';
const DIR = module.exports.DIR =  {
  PATH: '', // 語尾にスラッシュはつけない
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'build'
};

module.exports.serve = {
  dest: {
    //tunnel: 'test',
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
    //tunnel: 'test',
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

module.exports.scripts = {
  common: '',
  entryFiles: [
    `./${DIR.SRC}/js/main.js`,
  ],
  browserifyOpts: {
    transform: [
      ['babelify', {
        babelrc: false,
        presets: [
          ['env', {
            targets: {
              browsers: ['last 2 versions', 'ie >= 11']
            }
          }]
        ]
      }],
      'envify'
    ]
  },
  dest: `${DIR.DEST}${DIR.PATH}/js`
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
  domain: `${DOMAIN}`,
  path: `${DIR.PATH}`,
};

module.exports.sass = {
  src: [
    `${DIR.SRC}/**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_**/*.{sass,scss}`,
    `!${DIR.SRC}/**/_*.{sass,scss}`
  ],
  dest: `${DIR.DEST}${DIR.PATH}/css`,
  browsers: [
    'last 2 versions',
    'ie >= 11',
    'Android >= 5',
    'ios_saf >= 10',
  ]
};

module.exports.replace = {
  html: {
    src: [
      `${DIR.DEST}${DIR.PATH}/**/*.html`
    ],
    dest: `${DIR.BUILD}${DIR.PATH}`,
    path: `${DIR.PATH}`
  }
};

module.exports.cleanCss = {
  src: `${DIR.DEST}${DIR.PATH}/css/main.css`,
  dest: `${DIR.BUILD}${DIR.PATH}/css`
};

module.exports.uglify = {
  src: [
    `./${DIR.DEST}${DIR.PATH}/js/vendor.js`,
    `./${DIR.DEST}${DIR.PATH}/js/main.js`,
  ],
  dest: `${DIR.BUILD}${DIR.PATH}/js`,
  opts: {
  }
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
    dest: `${DIR.BUILD}`,
    opts: {
      base: `${DIR.DEST}`
    }
  },
  php: {
    src: [
      `${DIR.SRC}/html/**/*.php`,
      `${DIR.SRC}/html/cms/**/*.*`,
    ],
    dest: `${DIR.BUILD}${DIR.PATH}`,
    opts: {
      base: `${DIR.SRC}/html/`
    }
  }
};

module.exports.imagemin = {
  src: [
    `${DIR.DEST}${DIR.PATH}/**/*.{jpg,jpeg,png,gif,svg}`,
    `!${DIR.DEST}${DIR.PATH}/img/**/no_compress/*.*`,
  ],
  dest: `${DIR.BUILD}${DIR.PATH}/img`,
  opts: {
    pngquant: {
      quality: 80,
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

module.exports.sitemap = {
  src: [
    `${DIR.BUILD}${DIR.PATH}/**/*.html`,
    `!${DIR.BUILD}${DIR.PATH}/404/*.html`,
  ],
  opts: {
    siteUrl: DOMAIN,
    fileName: 'sitemap-static.xml',
    mappings: [
      {
        pages: [`index.html`],
        priority: 1.0,
      },
      {
        pages: [`**/*.html`],
        priority: 0.1,
      }
    ]
  },
  dest: `${DIR.BUILD}${DIR.PATH}/`
};
