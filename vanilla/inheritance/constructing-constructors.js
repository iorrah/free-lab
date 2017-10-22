let Painting = function(name, color) {
  this.name = name;
  this.color = color;
  this.type = 'oil';
};

Painting.prototype.author_gender = 'Male';

let _new = function(fnConstructor) {
  let obj = {};
  
  if (fnConstructor.prototype) {
    obj.__proto__ = fnConstructor.prototype;
  }

  let array = Array.prototype.slice.call(arguments, 1);
  let constructed = fnConstructor.apply(obj, array);

  if ((typeof constructed === 'object' || 
    typeof constructed === 'function') &&
    (constructed !== null)) {
    return constructed;
  }

  return obj;
}

let vanGogh = _new(Painting, 'Bedroom in Arles', 'orange');
let picasso = _new(Painting, 'Guernica', 'grey');

console.log(vanGogh);
console.log(picasso);

console.log('--');

for (let attr in vanGogh) {
  console.log(attr + ': ' + vanGogh[attr]);
}
