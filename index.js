let Dog = require('./Dog');
let Cat = require('./Cat');

let dog = new Dog('Hug');
let tom = new Cat('Tom');
dog.eat(tom);
console.log(dog);
