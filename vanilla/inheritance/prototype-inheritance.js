let user = {
  name: "",
  surname: "",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

console.log('creating objects');

let adam = {
  __proto__: user,
  isAdam: true
};

let alice = {
  __proto__: user,
  isAlice: true
};

console.log('adam: ' + adam.fullName);
console.log('alice: ' + alice.fullName);

console.log('setting Adam\'s name');

adam.fullName = "Adam Doe";

console.log('adam: ' + adam.fullName);
console.log('alice: ' + alice.fullName);

console.log('setting Alice\'s name');

alice.fullName = "Alice Cooper";

console.log('adam: ' + adam.fullName);
console.log('alice: ' + alice.fullName);
