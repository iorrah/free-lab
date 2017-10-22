var max = 57567;

var generator = function() {
  return Math.floor(Math.random() * max);
}

module.exports = {
  generator: generator
}
