let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

// Đặc điểm của F.prototype
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
console.log(rabbit.eats); // true


// Giá trị mặc định của prototype trong hàm
function Rabbit() {}

/* prototype mặc định
    Rabbit.prototype = { constructor: Rabbit };
    */

console.log(Rabbit.prototype.constructor === Rabbit);