//Cú pháp cơ bản của class trong JavaScript
class MyClass {
  // các phương thức của class
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

// Class là gì?
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// sử dụng typeof để xác định kiểu của User
console.log(typeof User); // function

// Class không chỉ là "syntactic sugar"
// *** Viết lại `class User` sử dụng hàm ***

// 1. viết hàm khởi tạo
function User(name) {
  this.name = name;
}

// prototype của hàm luôn có thuộc tính constructor mặc định,
// nên không cần định nghĩa lại

// 2. thêm thuộc tính vào prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};

// Sử dụng:
let user = new User("Alex");
user.sayHi(); // Alex



// Class expression
let User = class {
  sayHi() {
    console.log("Hello");
  }
};
//Getter/setter trong class
class User {
  constructor(name) {
    this.name = name; // gọi hàm setter
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

// Sử dụng:
let user = new User("Alex");
console.log(user.name); // Alex

user = new User(""); // Name is too short.
//Tạo tên phương thức qua biểu thức
class User {
  ["say" + "Hi"]() {
    console.log("Hello");
  }
}

new User().sayHi(); // Hello

//Thuộc tính trong class
class User {
  // thêm thuộc tính name vào class
  name = "Alex";
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}
new User().sayHi(); // Hello, Alex!

//Tạo phương thức bind với thuộc tính trong class