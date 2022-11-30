
console.log("Hello");

// tương đương với
window.console.log("Hello");

// khai báo biến với var
var gVar = 6;
console.log(window.gVar); // 6
// gVar trở thành thuộc tính của đối tượng global

// khai báo hàm với function
function sayHi() {
  console.log("Hi!");
}
window.sayHi(); // Hi!
// hàm sayHi cũng trở thành thuộc tính của window

// khai báo biến với let
let gLet = 6;
console.log(window.gLet); // undefined


// tạo đối tượng global: currentUser
window.currentUser = {
  name: "Alex",
};

// sử dụng ở nơi nào đó trong code
console.log(currentUser.name); // Alex

// hoặc nếu bạn có biến cục bộ nào đó trùng tên
// bạn nên chủ động gọi thông qua window
console.log(window.currentUser.name); // Alex

// Sử dụng polyfills
if (!window.Promise) {
  console.log("You're using an old browser!");
}
if (!window.Promise) {
  window.Promise = ... // triển khai Promise nếu trình duyệt chưa hỗ trợ
}