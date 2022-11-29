
// JavaScript closure
// biến global
let YEAR = "2021";

function greet(name) {
  // biến local trong hàm greet
  // đồng thời là biến ngoài hàm sayHello
  let intro = "Hello";

  function sayHello() {
    // biến local của hàm sayHello
    let message = `${intro} ${name} in ${YEAR}`;
    console.log(message);
  }

  sayHello();
}

greet("Dev");
// Hello Dev in 2021

// Code block
// sau đây là một khối code
{
  let message = "Hi"; // biến message chỉ được nhìn thấy ở trong block
  console.log(message); // Hi
}

console.log(message); // Error: message is not defined

//Hàm lồng nhau

function sayHiBye(firstName, lastName) {
  // getFullName là nested function
  function getFullName() {
    return `${firstName} ${lastName}`;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

//Đặc điểm của closure trong JS
// Hàm closures có thể truy cập tới biến của hàm chứa nó, dù cho hàm đó đã return
function adder(n) {
  let intro = "This answer is ";
  let local = n;

  return function (number) {
    let result = number + local;
    console.log(intro + result);
  };
}

let adder2 = adder(2);
adder2(10);
// This answer is 12

// Hàm closures lưu trữ biến của outer function theo kiểu tham chiếu
function ObjId() {
  let id = 1;

  return {
    getId: function () {
      return id;
    },
    setId: function (_id) {
      id = _id;
    },
  };
}

let myObject = ObjId();
console.log(myObject.getId()); // 1

myObject.setId(10);
console.log(myObject.getId()); // 10