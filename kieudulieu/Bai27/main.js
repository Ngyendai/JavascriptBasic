//Cú pháp hàm setTimeout -> let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
function sayHi() {
    console.log("Hello");
  }
  
  setTimeout(sayHi, 1000); // Hello

  //tham số truyền vào hàm
  function sayHi(message, who) {
    console.log(`${message}, ${who}`);
  }
  
  setTimeout(sayHi, 1000, "Hello", "Alex"); // Hello, Alex

  setTimeout(() => console.log("Hello"), 1000);

//Xóa hành động với clearTimeout
let timerId = setTimeout(...);
    clearTimeout(timerId);

let timerId = setTimeout(() => console.log("sẽ không được gọi"), 1000);
console.log(timerId); // định danh cho timer

clearTimeout(timerId);
console.log(timerId); // timerId không đổi sau khi clearTimeout

// Hàm setInterval trong JavaScript -> let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// lặp lại với thời gian là 2000 ms (2 giây)
let timerId = setInterval(() => console.log("Hello"), 2000);

// sau 5 giây thì dừng lại
setTimeout(() => {
  clearInterval(timerId);
  console.log("stop");
}, 5000);

//Hàm setTimeout lồng nhau
let delay = 5000;

let timerId = setTimeout(function request() {
  /*... gửi request lên server...*/

  if (/* mã lỗi trả về liên quan đến server quá tải */) {
    // tăng delay lên hai lần
    delay *= 2;
  }

    // chạy lại setTimeout với giá trị delay mới
    timerId = setTimeout(request, delay);

}, delay); // -> giá trị delay ban đầu là 5000 ms