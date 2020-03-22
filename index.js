let Dog = require('./Dog');
let Cat = require('./Cat');
let Mouse = require('./Mouse');

let dog = new Dog('Hug');
let cat = new Cat('Tom');
let mouse = new Mouse('Mickey');

try {
  cat.eat(dog);
<<<<<<< HEAD
} catch(error) {
  console.log('Error when cat eat a dog');
}

console.log(dog);
=======
} catch (error) {
  console.log('Error when cat eating a dog');
}

console.log(cat);
>>>>>>> ef2c722942ae6c1fd79ec420e6511ff01de3782f
