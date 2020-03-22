let Mouse = require('./Mouse');

function Cat() {
  this.stomach = [];
}

Cat.prototype.eat = function(animal) {
  if (animal instanceof Mouse) {
    this.stomach.push(animal);
  } else {
<<<<<<< HEAD
    throw new Error('Cat can only eat a mouse!')
  }
=======
    throw new Error ('Cat can only eat mouse!');
  };
>>>>>>> ef2c722942ae6c1fd79ec420e6511ff01de3782f
}

module.exports = Cat;