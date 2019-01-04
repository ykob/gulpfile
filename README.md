# gulpfile

It's my asset for Web development with gulp.js.

## Folders

| folder name | purpose |
| --- | --- |
| build | `npm run build` もしくは `npm run build:cms` を実行すると書き出される。<br>主に納品・公開用のファイルとして扱う。 |
| dst | `npm start` を実行すると書き出される。<br>開発時にローカルサーバーから参照するファイル。 |
| src | 開発に使用するファイル。 |

## Command

| command name | purpose |
| --- | --- |
| `npm start` | 開発時に実行するコマンド。<br>[Brosersync](https://github.com/browsersync/browser-sync)によってローカルサーバーが起動し、開発用ファイルの更新を監視する。 |
| `npm run build` | 納品・公開用のファイルを生成するコマンド。 |
| `npm run build:cms` | WordPressのテーマファイル形式でファイルを生成するコマンド。 |

## Breakpoints

| device | display resolution |
| --- | --- |
| PC | 1366px (HD FWXGA) |
| Tablet Landscape | 1024px (XGA / iPad Landscape) |
| Tablet Portrait | 768px (iPad Portrait) |

| mixin name | PC L | PC S | Tablet L | Tablet P | Mobile L | Mobile P |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| l-pc | **○** | **○** | - | - | - | - |
| l-pc-l | **○** | - | - | - | - | - |
| l-pc-s | - | **○** | - | - | - | - |
| l-tablet | - | - | **○** | **○** | - | - |
| l-tablet-l | - | - | **○** | - | - | - |
| l-tablet-p | - | - | - | **○** | - | - |
| l-mobile | - | - | - | - | **○** | **○** |
| l-mobile-l | - | - | - | - | **○** | - |
| l-mobile-p | - | - | - | - | - | **○** |
| l-tablet-and-mobile | - | - | **○** | **○** | **○** | **○** |
| l-more-than-mobile | **○** | **○** | **○** | **○** | - | - |
| l-less-than-pc-s | - | **○** | **○** | **○** | **○** | **○** |

## License

Copyright (c) 2018 Yoichi Kobayashi  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php

## Misc

Follow Yoichi Kobayashi: [Web](http://www.tplh.net/), [Twitter](https://twitter.com/ykob0123)
