var homem = {
  age: 47
};

var pedro = {
  name: 'Pedro'
};

var joao = {
  name: 'Joao'
};

Object.setPrototypeOf(pedro, homem);
Object.setPrototypeOf(joao, homem);

console.log(pedro);
console.log(pedro.age);

console.log(joao);
console.log(joao.age);
