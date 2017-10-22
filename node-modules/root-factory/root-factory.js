var createSerialGenerator = function() {
  var max = 55567;

  var generate = function() {
    return Math.floor(Math.random() * max);
  }

  return {
    generate: generate
  }
}

module.exports = createSerialGenerator;
