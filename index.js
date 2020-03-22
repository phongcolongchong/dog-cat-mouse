let Dog = require('./Dog');
let Cat = require('./Cat');
let Mouse = require('./Mouse');

let dog = new Dog('Hug');
let cat = new Cat('Tom');
let mouse = new Mouse('Mickey');

try {
  cat.eat(dog);
} catch (error) {
  console.log('Error when cat eating a dog');
}

console.log(cat);