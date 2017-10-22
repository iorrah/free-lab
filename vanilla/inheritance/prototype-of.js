var homem = {
  age: 47
};

var pedro = Object.create(homem);
pedro.name = 'Pedro';

var joao = Object.create(homem);
joao.name = 'Joao';

console.log(pedro.age);
console.log(joao.age);

console.log(joao.__proto__ === homem);

console.log(Object.__proto__);
console.log(Object.__proto__ === homem.__proto__);

  /* 

    joao.__proto__ === homem,
    homem.__proto__ === Object.prototype,
    Object.prototype !== Object.__proto__

  */

  console.log(Object.prototype);
  console.log(Object.prototype === homem.__proto__);

console.log(homem.prototype);
console.log(Object.prototype === homem.prototype);

console.log(Object.prototype === Object.__proto__);