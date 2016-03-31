export default class Preloader {
  constructor(json, callback) {
    this.$sequencer = $('.c-preloader__sequencer');
    this.file_list = json;
    this.data = null;
    this.count_loaded = 0;
    this.callback = callback;
    this.complete = false;
    this.loadJSON();
  }
  loadJSON() {
    $.ajax({
      url: this.file_list,
      type: 'GET',
      dataType: 'json'
    })
    .done((data) => {
      this.data = data;
      this.preload();
    })
    .fail(() => {
      alert("error load filelist json.");
    });
  }
  loadImage(data) {
    const image = new Image();
    image.onload = () => {
      this.loadedData(data);
    };
    image.src = data;
  }
  preload() {
    const reg = /(.*)(?:\.([^.]+$))/;
    for (var i = 0; i < this.data.length; i++) {
      const data = this.data[i];
      switch (data.match(reg)[2]) {
        case 'png':
          this.loadImage(data);
          break;
        case 'jpg':
          this.loadImage(data);
          break;
        case 'gif':
          this.loadImage(data);
          break;
        case 'mp4':
          const video = document.createElement('video');
          video.src = data;
          video.load();
          this.loadedData(data);
          // video.onloadeddata = () => {
          //   this.loadedData(data);
          // };
          break;
        default:
      }
    }
  }
  loadedData(data) {
    this.count_loaded++;
    this.$sequencer.css({
      width: `${this.count_loaded / this.data.length * 100}%`
    });
    if (this.count_loaded >= this.data.length) {
      this.loadedDataAll();
    }
  }
  loadedDataAll() {
    this.complete = true;
    $('.c-preloader').addClass('is-loaded');
    setTimeout(() => {
      $('.l-page').addClass('is-loaded');
      this.callback();
    }, 500);
  }
}
