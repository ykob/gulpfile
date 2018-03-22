module.exports = {
  expoOut: function(t) {
    return (t == 1.0) ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  expoInOut: function(t) {
    return (t == 0.0 || t == 1.0)
      ? t
      : (t < 0.5)
        ? + 0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
        : - 0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
  },
  circOut: function (t) {
    return Math.sqrt((2.0 - t) * t);
  },
  circInOut: function (t) {
    return (t < 0.5)
      ? 0.5 * (1.0 - Math.sqrt(1.0 - t * t))
      : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + 1.0);
  },
}
