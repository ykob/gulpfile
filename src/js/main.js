const viewportUnitsBuggyfill = require('viewport-units-buggyfill');
const pageId = document.querySelector('.l-page').getAttribute('data-page-id');

// iOSでvhがステータスバー等を含めた値になってしまう現象を viewport-units-buggyfill で補正
viewportUnitsBuggyfill.init();

const init = () => {
  require ('./init/common.js').default();
  switch (pageId) {
    case 'index':
      require ('./init/index.js').default();
      break;
    default:
  }
}
init();
