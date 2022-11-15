// Cú pháp hàm
// function functionName([parameter1], [parameter2],...) {
//     statement1;
//     statement2;
//     ...
//   }


function sayHello() {
    console.log("Hello from kungfutech.edu.vn");
  }

  function sayHello() {
    console.log("Hello from kungfutech.edu.vn");
  }
  
  sayHello();
  // Hello from kungfutech.edu.vns

  // Biến cục bộ trong hàm 
  function sayHello() {
    const message = "Hello from kungfutech.edu.vn";
    console.log(message);
  }
  
  sayHello(); // Hello from kungfutech.edu.vn
  
  console.log(message); // Uncaught ReferenceError: message is not defined

  // Biến ngoài hàm trong js
  let message = "Hello from kungfutech.edu.vn";
function sayHello() {
  console.log(message);
}

sayHello(); // Hello from kungfutech.edu.vn

// Thay đổi giá trị biến ngoài hàm từ thân hàm
let message = "Hello from kungfutech.edu.vn";
function sayHello() {
  message = "Hi!";
  console.log(message);
}

sayHello(); // Hi!
console.log(message); // Hi!

let message = "Hello from kungfutech.edu.vn";
function sayHello() {
  let message = "Hi!";
  console.log(message);
}

sayHello(); // Hi!
console.log(message); // Hello from kungfutech.edu.vn

// truyền tham số vào hàm
function sayHello(message) {
    console.log(message);
  }
  
  sayHello("Hello!"); // Hello!
  sayHello("Hi!"); // Hi!

  let message = "Hello from kungfutech.edu.vn";
function sayHello(message) {
  message = "Hi!";
  console.log(message);
}

sayHello(); // Hi!
console.log(message); // Hello from kungfutech.edu.vn

function sayHello(message, site) {
    console.log(message + " from " + site);
  }
  
  sayHello("Hello", "kungfutech.edu.vn"); // Hello from kungfutech.edu.vn

  // giá trị tham số mặc định 
  function sayHello(message, site) {
    console.log(message + " from " + site);
  }
  
  sayHello("Hello"); // Hello from undefined

  function sayHello(message, site = "kungfutech.edu.vn") {
    console.log(message + " from " + site);
  }
  
  sayHello("Hello"); // Hello from kungfutech.edu.vn

  function aFunction() {
    // code
  }
  
  function sayHello(message, site = aFunction()) {
    console.log(message + " from " + site);
  }

  // Return 
  function sum(a, b) {
    return a + b;
  }
  
  const result = sum(1, 2);
  console.log(result); // 3

  function sum(a, b) {
    if (a === null || a === undefined) {
      console.log("Tham số không hợp lệ!");
      return;
    }
  
    if (b === null || b === undefined) {
      console.log("Tham số không hợp lệ!");
      return;
    }
  
    return a + b;
  }
  
  const result1 = sum(); // Tham số không hợp lệ!

  function sum(a, b) {
    return;
  }
  
  let r = sum(1, 2);
  console.log(r); // undefined

  function sum(a, b) {}

let r = sum(1, 2);
console.log(r); // undefined

function sum(a, b) {
    return;
    a + b;
  }
  
  const result = sum(1, 2);
  console.log(result); // undefined

  function sum(a, b) {
    return a + b;
  }
  
  const result = sum(1, 2);
  console.log(result); // 3

  // pure function 

  function pureFunc(number, factor) {
    return number * factor;
  }
  
  let ret = pureFunc(2, 10);
  console.log(ret); // 20

  // non-pure function 
  let factor = 10;

function nonPureFunc(number) {
  return number * factor;
}

let ret = nonPureFunc(2);
console.log(ret); // 20

factor = 11;
ret = nonPureFunc(2);
console.log(ret); // => 22