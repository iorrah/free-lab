console.log('Loading generator.js');

module.exports.generator = function() {
  var max = 5232;
  return Math.floor(max * Math.random());
};
