
// var không có phạm vi block
if (true) {
  var test = true; // sử dụng "var" thay vì "let"}

  console.log(test); // true - biến test vẫn nhìn thấy ở ngoài if
}

//Có thể khai báo lại biến với var
var user = "Alex";
var user = "Anna";

console.log(user); // Anna


//Có thể sử dụng biến trước khi khai báo với var
function sayHi() {
  message = "Hello";

  console.log(message);

  var message;
}

sayHi(); // Hello

//Cách sử dụng IIFE trong JavaScript
(function () {
  var message = "Hello";

  console.log(message); // Hello
})();

(function () {
  console.log("Dấu ngoặc đơn bao quanh function");
})();

(function () {
  console.log("Dấu ngoặc đơn bao quanh tất cả");
})();

!(function () {
  console.log("Toán tử bitwise ! bắt đầu hàm");
})();

+(function () {
  console.log("Toán tử + bắt đầu hàm");
})();