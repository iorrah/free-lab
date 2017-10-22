var man = {
  gender: 'Male',
  degree: 'St. Patrick College',
  profession: 'Software Engineer',
  age: 25,
  birthday: function() {
    return ++this.age;
  }
};

/* 
  
  Below we are setting a [[ProtoType]]
  to each of the pedro and joao objects.

  This practice is commonly used when we 
  have objects that share a certain 
  attribute with each other.

  The objects reference the 'man' object.

  In this case, wehn we try to access
  an attribute that is not explicity
  declared in the object, JavaScript's
  bahaviour will be look up for that
  attribute inside the object's
  [[ProtoType]], which we can link
  to our object using the '__prooto__'
  attribute.

*/

var pedro = {
  name: 'Pedro',
  __proto__: man
};

var joao = {
  name: 'Joao',
  __proto__: man
};

console.log('Pedro', pedro.gender, pedro.degree, pedro.profession);
console.log('Joao: ' + joao.gender, joao.degree, joao.profession);
console.log('---');
console.log('Pedro', pedro.birthday(), pedro.age);
