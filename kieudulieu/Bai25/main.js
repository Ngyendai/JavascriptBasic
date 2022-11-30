
// Thuộc tính name

function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name); // sayHi

//khai báo và không đặt tên cho hàm mà gán vào biến khác
let sayHi = function () {
  console.log("Hi");
};

console.log(sayHi.name); // sayHi

// let sayHi = function () {
  console.log("Hi");
};


console.log(sayHi.name); // sayHi

let user = {
  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  },
};

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// Thuộc tính length
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

function ask(question, ...handlers) {
  // dùng hàm confirm để hỏi người dùng
  let isYes = confirm(question);

  // duyệt tất cả các handler sử dụng for...of
  for (let handler of handlers) {
    if (handler.length === 0) {
      // trường hợp hàm handler không có tham số
      if (isYes) handler();
    } else {
      // trường hợp hàm handler có tham số
      handler(isYes);
    }
  }
}

// hàm không tham số được gọi chỉ khi câu trả lời là đồng ý.
// hàm có tham số luôn luôn được gọi.
ask(
  "Câu hỏi?",
  () => alert("Đáp án là yes"), // hàm không tham số
  (result) => alert(`Đáp án là ${result}`) // hàm có tham số
);

//Thêm thuộc tính vào function object

function sayHi() {
  console.log("Hi");

  // đếm số lần gọi hàm  sayHi.counter++;}

sayHi.counter = 0; // giá trị mặc định

sayHi(); // Hi
sayHi(); // Hi

console.log(`Hàm sayHi được gọi với số lần là: ${sayHi.counter}`);
// Hàm sayHi được gọi với số lần là: 2

//sử dụng closure
function makeCounter() {
  // ban đầu counter bằng 0
  let count = 0;

  // trả về một hàm khác
  // hàm này return về counter rồi tăng biến counter lên 1 đơn vị
  return function () {
    return count++;
  };
}

// sử dụng -> counter chính là nested function
let counter = makeCounter();

// sau mỗi lần gọi hàm counter() thì giá trị count tăng lên 1
console.log(counter()); // 0
console.log(counter()); // 1

//Biểu thức hàm được đặt tên
let sayHi = function (who) {
  console.log(`Hello, ${who}`);
};

// thêm tên cho hàm
let sayHi = function func(who) {
  console.log(`Hello, ${who}`);
};