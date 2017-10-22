var createSerialGenerator = require('./generator.js');
var serialGeneratorA = createSerialGenerator();
var serialGeneratorB = createSerialGenerator();
console.log(serialGeneratorA === serialGeneratorB);
