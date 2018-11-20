require('@babel/polyfill');

const viewportUnitsBuggyfill = require('viewport-units-buggyfill');
const sleep = require('js-util/sleep');

const pageId = document.querySelector('.l-page').getAttribute('data-page-id');
const uaParser = new UaParser();
const link = document.querySelector('link[as=style]');

const init = async () => {
  // Preload the stylesheet in browsers that are enabled an attribute link.preload.
  const browser = uaParser.getBrowser().name;
  if (browser !== 'Chrome' && browser !== 'Edge') link.rel = 'stylesheet';

  await sleep(100);

  // Making viewport units (vh|vw|vmin|vmax) work properly in Mobile Safari.
  viewportUnitsBuggyfill.init();

  // run initialize function.
  require ('./init/common.js').default();
  switch (pageId) {
    case 'index':
      require ('./init/index.js').default();
      break;
    default:
  }
}
init();
