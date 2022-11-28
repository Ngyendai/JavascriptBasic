// vd về hàm đệ quy 
function sayHello(count) {
  if (count <= 0) {
    return;
  }

  console.log("Hello world!");
  sayHello(count - 1);
}

// sayHello 5 lần
sayHello(5);

//Các thành phần cơ bản của hàm đệ quy
function sayHello(count) {
  // phần cơ sở: điều kiện thoát đệ quy là biến count <= 0
  if (count <= 0) {
    return;
  }

  // xử lý logic cơ bản
  console.log("Hello world!");

  // phần đệ quy: gọi lại chính hàm sayHello
  sayHello(count - 1);
}

//bỏ qua điều kiện cơ cở của hàm đệ quy
function sayHello(count) {
  // // phần cơ sở: điều kiện thoát đệ quy là biến count <= 0
  // if (count <= 0) {
  //   return;
  // }

  console.log("Hello world!");

  // phần đệ quy: gọi lại chính hàm sayHello
  sayHello(count - 1);
}

sayHello();

// Sử dụng hàm đệ quy khi nào
function power(a, b) {
  // điều kiện dừng đệ quy
  if (b === 0) {
    return 1;
  }

  // gọi lại chính nó
  return a * power(a, b - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
console.log(power(2, 3)); // 8


//So sánh hàm đệ quy và vòng lặp
function power(a, b) {
  let ret = 1;

  for (let i = 0; i < b; i++) {
    ret *= a;
  }

  return ret;
}

console.log(power(2, 0)); // 1
console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
console.log(power(2, 3)); // 8