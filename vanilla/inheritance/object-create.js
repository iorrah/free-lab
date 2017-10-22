var homem = {
  age: 47
};

var pedro = Object.create(homem);
pedro.name = 'Pedro';

var joao = Object.create(homem);
joao.name = 'Joao';

console.log(pedro);
console.log(pedro.age);

console.log(joao);
console.log(joao.age);
