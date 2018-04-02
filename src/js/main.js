const viewportUnitsBuggyfill = require('viewport-units-buggyfill');

const pageId = document.querySelector('.l-page').getAttribute('data-page-id');
const ua = window.navigator.userAgent;
const link = document.querySelector('link[as=style]');

const init = () => {
  require ('./init/common.js').default();
  switch (pageId) {
    case 'index':
      require ('./init/index.js').default();
      break;
    default:
  }
}

// iOSでvhがステータスバー等を含めた値になってしまう現象を viewport-units-buggyfill で補正
viewportUnitsBuggyfill.init();

// run initialize function.
init();

// preload stylesheet other than Google Chrome browser.
if (ua.indexOf('Chrome') < 0) link.rel = 'stylesheet';
