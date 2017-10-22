var Homem = function(name) {
  this.name = name;
  this.age = 47
};

var pedro = new Homem('Pedro');
var joao = new Homem('Joao');

console.log(pedro);
console.log(pedro.age);

console.log(joao);
console.log(joao.age);


console.log(joao instanceof Homem);
console.log(pedro instanceof Homem);
