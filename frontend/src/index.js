/*
 * SASS
 * Necessary imports for the css build
 */
import './index.scss';

/*
 * Javascript
 * Necessary imports for the javascript build
 */
import * as LazyLoad from 'vanilla-lazyload';

/*
 * Main class
 */
class Home {
  constructor() {
    // Lazyload
    new LazyLoad({
      elements_selector: '.lazyload',
      class_loading: 'lzy-loaded',
      class_loaded: 'lzy-loaded'
    });

    // Ready
    this.init();
  }

  init() {
    console.log('Init app');
  }
}

/*
 * Ready function
 */
document.addEventListener('DOMContentLoaded',
  () => {
    new Home();
  }
);
