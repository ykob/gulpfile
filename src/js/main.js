import initCommon from './init/common.js'
import initIndex from './init/index.js'

const { pathname } = window.location;

const init = () => {
  initCommon();
  switch (pathname.replace('index.html', '')) {
    case '/':
      initIndex();
      break;
    default:
  }
}
init();
