let Painting = function(name, color) {
  this.name = name;
  this.color = color;
  this.type = 'oil';
};

Painting.prototype.author_gender = 'Male';

let vanGogh = new Painting('Bedroom in Arles', 'orange');

let rembrandt = {};
Painting.apply(rembrandt, ['Philosopher in Meditation', 'brown']);
rembrandt.__proto__ = Painting.prototype;

let picasso = new Painting('Guernica', 'grey');

console.log(vanGogh);
console.log(rembrandt);
console.log(picasso);

console.log('--');

/*

  [[Prototype]] === __proto__ 
  [[Prototype]] !== prototype

  The [[Prototype]] property is
  an exclusivity of objects.

  An object is a dynamic collection
  of keys and values.

  By the other side, we have something
  that has a similar name but a 
  totally different usage: the 
  Functions Prototypes:

  prototype === (function() {}).prototype

  The idea behind Function Prototypes is:
  
  "All the objects built with 
  Constructor Functions will have
  a reference in common".

*/


console.log(vanGogh instanceof Painting);
console.log(rembrandt instanceof Painting);
console.log(picasso instanceof Painting);

console.log('--');

console.log(vanGogh === picasso);
console.log(vanGogh.__proto__ === picasso.__proto__);

console.log('--');

console.log(vanGogh.prototype === picasso.prototype);
console.log(vanGogh.prototype);
console.log(picasso.prototype);

console.log('--');

console.log(vanGogh.__proto__.author_gender);
console.log(rembrandt.__proto__.author_gender);
console.log(picasso.__proto__.author_gender);

console.log('--');

for (var attr in picasso) {
  console.log(attr); 
}

console.log('--');

Painting.prototype.author_gender = 'famele';

console.log(vanGogh.__proto__.author_gender);
console.log(rembrandt.__proto__.author_gender);
console.log(picasso.__proto__.author_gender);
