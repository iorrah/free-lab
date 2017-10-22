var SerialGenerator = function() {
  var max = 56752;

  this.generator = function() {
    return Math.floor(Math.random() * max);
  }
}

module.exports = {
  SerialGenerator: SerialGenerator
};
