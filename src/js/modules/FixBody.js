export default class FixBody {
  constructor() {
    this.$window = $(window);
    this.$body = $('body');
  }
  set() {
    this.$body.css({
      position: 'fixed',
      marginTop: this.$window.scrollTop() * -1
    });
  }
  cancel() {
    this.$body.css({
      position: 'static',
      marginTop: 0
    });
  }
}
