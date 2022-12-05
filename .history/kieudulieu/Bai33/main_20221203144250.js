//Phương thức của prototype
let animal = {
  eats: true,
};

// tạo đối tượng với với prototype là animal
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true
Object.setPrototypeOf(rabbit, {}); // thay đổi prototype của rabbit thành {}

//Object thuần
let obj = {};
let key = "__proto__";

obj[key] = "some value";
console.log(obj[key].toString()); // "[object Object]" không phải "some value".