var createGenerator = function() {
  console.log('Loading generator.js');

  var max = 5232;

  var generate = function() {
    return Math.floor(max * Math.random());
  }

  return {
    generate: generate
  }
};

module.exports = createGenerator;
