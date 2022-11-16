// this trong ngữ cảnh toàn cục
console.log(this === window); // true

this.color = "Red";
console.log(window.color); // 'Red'

// trong chế độ không nghiêm ngặt
function run() {
  console.log(this === window); // true
}

run();

// chế độ nghiêm ngặt
"use strict"; // Khai báo strict mode

function run() {
  console.log(this === undefined); // true
}

run();


// this trong phương thức
let person = {
  name: "Thaycacac",
  getName: function () {
    return this.name;
  },
};

console.log(person.getName()); // Thaycacac


// this trong lời gọi hàm khởi tạo
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var name = new Person("Thaycacac");
console.log(name.getName());

// this trong arrow function 
let getThis = () => this;
console.log(getThis() === window); // true

function Person() {
  this.name = "Thaycacac";
}

// Thêm vào đối tượng Person một hàm
// bằng arrow function
Person.prototype.getName = () => {
  return this.name;
};

var person = new Person();
person.getName(); // TypeError


// this trong callback của hàm setTimeout
var a = 10;
setTimeout(function () {
  // anonymous function (no name)
  var a = 20;
  console.log(this.a); // 10
}, 1000);

