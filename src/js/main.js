const pageId = document.getElementsByClassName('l-page')[0].getAttribute('data-page-id');

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
