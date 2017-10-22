var homem = {
  age: 47,
  birthday: function() {
    let age = ++this.age;
    return ('Birthday! ' + this.name + ' is now ' + age);
  }
};

var pedro = Object.create(homem);
pedro.name = 'Pedro';

var joao = Object.create(homem);
joao.name = 'Joao';

console.log(pedro.age);
console.log(joao.age);

console.log(pedro.birthday());
console.log(joao.birthday());

/*

  Now we are going to set
  an attribute on the 'pedro'
  object so that we can SHADOW
  the attribute with the same 
  name (but that is coming from
  the __proto__ aka: [[Prototpe]] 
  of 'pedro')

*/

pedro.age = 50;
console.log('Pedro is now ' + pedro.age);

delete pedro.age;
console.log('Pedro is now ' + pedro.age);

/*

  Although age is not directly 
  declared as part of 'pedro',
  if we loop through the object
  using a 'for...in' statement, 
  we can perambulate through 
  atributes that actually come
  from our [[Prototype]] which 
  is 'homem'.

*/

for (var property in pedro) {
  if (!pedro.hasOwnProperty(property)) {
    console.log('Comes from the [[Prototype]]: ' + property);
  } else {
    console.log('Comes from the object itself: ' + property);
  }
}
