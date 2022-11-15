// Function expression

let sayHello = function () {
  console.log("Hello from kungfutech.edu.vn");
};

let sayHello = function () {
  console.log("Hello from kungfutech.edu.vn");
};

console.log(sayHello); // ƒ () {
//  console.log("Hello from kungfutech.edu.vn");
// }

let sayHello = function () {
  console.log("Hello from kungfutech.edu.vn");
};

console.log(sayHello()); // Hello from kungfutech.edu.vn
// undefined

// Đặc điểm của function expression

let sayHello = function () {
  console.log("Hello from kungfutech.edu.vn");
};

let sayHi = sayHello;
sayHi(); // Hello from kungfutech.edu.vn

function sayHello() {
  console.log("Hello from kungfutech.edu.vn");
}

let sayHi = sayHello;
sayHi(); // Hello from kungfutech.edu.vn

// Hàm callback

function ask(question, handleYes, handleNo) {
  const answer = confirm(question);
  if (answer) {
    handleYes();
  } else {
    handleNo();
  }
}

function handleYes() {
  console.log("You chose Yes!");
}

function handleNo() {
  console.log("You chose No!");
}

ask("Bạn muốn tiếp tục thực hiện chương trình không?", handleYes, handleNo);

function ask(question, handleYes, handleNo) {
  const answer = confirm(question);
  if (answer) {
    handleYes();
  } else {
    handleNo();
  }
}

ask(
  "Bạn muốn tiếp tục thực hiện chương trình không?",
  function () {
    console.log("You chose Yes!");
  },
  function () {
    console.log("You chose No!");
  },
);