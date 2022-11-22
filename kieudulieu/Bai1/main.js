// Viết hoa
let name = "Alex";
console.log(name.toUpperCase()); // ALEX

// wrapper object 
let zero = 0;
console.log(typeof zero); // number

let objZero = new Number(0);
console.log(typeof objZero); // object

// if
let objZero = new Number(0);

if (objZero) {
  console.log("zero là truthy!"); // zero là truthy!
}

// Number()
let num = Number("123");
console.log(num); // 123
console.log(typeof num); // number