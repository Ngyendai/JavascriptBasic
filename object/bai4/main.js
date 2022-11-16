
// Khai báo một phương thức
let user = {
  name: "Alex",
  age: "28",
};

user.sayHello = function () {
  console.log("Hello!");
};
user.sayHello(); // Hello!
let user = {
  name: "Alex",
  age: "28",
};

function sayHello() {
  console.log("Hello!");
}
user.sayHello = sayHello;
user.sayHello(); // Hello!

// Cú pháp ngắn gọn
let user = {
  name: "Alex",
  age: "28",
  sayHello: function () {
    console.log("Hello!");
  },
};

user.sayHello(); // Hello!

// bỏ qua từ khóa function
let user = {
  name: "Alex",
  age: "28",
  sayHello() {
    console.log("Hello!");
  },
};

user.sayHello(); // Hello!

// Từ khóa this trong js
let user = {
  name: "Alex",
  age: "28",
  sayHello() {
    console.log(this.name + " says Hello!");
  },
};

user.sayHello(); // Alex says Hello!

let user = {
  name: "Alex",
  age: "28",
  sayHello() {
    console.log(user.name + " says Hello!");
  },
};

user.sayHello(); // Alex says Hello!

let user = {
  name: "Alex",
  age: "28",
  sayHello() {
    console.log(user.name + " says Hello!");
  },
};

let admin = user;
user = null;
admin.sayHello(); // Uncaught TypeError: Cannot read properties of null (reading 'name')


// this trong js kh dc "bind"
function sayHello() {
  console.log(this.name);
}


let user1 = { name: "Alex" };
let user2 = { name: "John" };

function sayHello() {
  console.log(this.name);
}

// Sử dụng cùng 1 hàm cho 2 objects
user1.sayHi = sayHello;
user2.sayHi = sayHello;
user1.sayHi(); // Alex (this tương ứng với user1)user2.sayHi(); // John (this tương ứng với user2)

"use strict";

function sayHello() {
  console.log(this);
}

sayHello(); // undefined

"use strict";

function sayHello() {
  console.log(this.name);
}

sayHello();
// Uncaught TypeError: Cannot read properties of undefined (reading 'name')

// Arrow function không có this

let user = {
  name: "Alex",
  age: "28",
  sayHello() {
    let arrowFunc = () => console.log(this.name);
    arrowFunc();
  },
};

user.sayHello(); // Alex


// gán trực tiếp arrow function
let user = {
  name: "Alex",
  age: "28",
  sayHello: () => console.log(this.name),
};

user.sayHello(); // undefined