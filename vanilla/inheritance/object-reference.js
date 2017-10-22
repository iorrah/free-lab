var homem = {
  age: 47
};

var pedro = Object.create(homem);
pedro.name = 'Pedro';

var joao = Object.create(homem);
joao.name = 'Joao';

console.log(pedro.age);
console.log(joao.age);


console.log(pedro.__proto__ === joao.__proto__);
console.log(pedro.__proto__._proto__ === joao.__proto__._proto__);
console.log(joao.__proto__.__proto__ === homem.__proto__);

