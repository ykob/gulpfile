# gulpfile

It's my asset for Web development with gulp.js.

## License

Copyright (c) 2019 Yoichi Kobayashi  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php

## Misc

Follow Yoichi Kobayashi: [Web](http://www.tplh.net/), [Twitter](https://twitter.com/ykob0123)

## Options

### Vueを使用する場合

以下のnpm modulesを追加する。

    npm i vue-loader vue-style-loader vue-template-compiler pug-plain-loader css-loader sass-loader --save-dev

`gulp/conf.js` 上で `VueLoaderPlugin` を読み込む。

    const { VueLoaderPlugin } = require('vue-loader');

webpackのconfigに以下を追加する。  
Vue Componentにはpugとscssを使用する想定の構成になっている。

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          test: /\.scss/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
              }
            }
          ]
        },
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
    resolve: {
      alias: {
        vue: 'vue/dist/vue.common.js'
      }
    },
    plugins: [
      new VueLoaderPlugin()
    ],

### WebGLを使用する場合

以下のnpm modulesを追加する。

    npm i glslify-import-loader glslify-loader raw-loader --save-dev

webpackのconfigに以下を追加する。  

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
        },
        {
          test: /\.(glsl|fs|vs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'glslify-import-loader',
          }
        },
        {
          test: /\.(glsl|fs|vs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'raw-loader',
          }
        },
        {
          test: /\.(glsl|fs|vs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'glslify-loader',
          }
        }
      ]
    }
