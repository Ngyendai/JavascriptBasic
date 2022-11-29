// Tham số còn lại của hàm ...args
// hàm tính tổng hai số
function sum(a, b) {
  return a + b;
}

// gọi hàm và truyền vào số lượng tham số lớn hơn định nghĩa
console.log(sum(1, 2, 3, 4, 5)); // 3s

// hàm tính tổng tất cả các tham số truyền vào
function sumAll(...args) {
  let sum = 0;

  // duyệt mảng để tính tổng
  for (let arg of args) {
    sum += arg;
  }

  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6


// Đối tượng arguments
function sumAll() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  // có thể dùng for...of
  // for (let arg of arguments) {
  //   console.log(arg);
  // }
}

sumAll(1, 2, 3, 4, 5);

/*
    1
    2
    3
    4
    5
    */

// Cú pháp spread

let arr = [4, 7, 5];

console.log(Math.max(...arr)); // 7
// vì mảng [4, 7, 5] được tách ra thành danh sách các tham số là 4, 7, 5

// ruyền nhiều iterable object vào hàm với cú pháp spread
let arr1 = [3, 5, 1];
let arr2 = [4, 6, 2];

console.log(Math.max(...arr1, ...arr2)); // 6
// cả hai mảng arr1, arr2 được trải ra và ghép lại thành dạng
// Math.max(3, 5, 1, 4, 6, 2)

//kết hợp cú pháp spread với việc truyền tham số thông thường
let arr1 = [3, 5, 1];
let arr2 = [4, 6, 2];

console.log(Math.max(5, ...arr1, 10, ...arr2)); // 10

// tương đương với:
// Math.max(5, 3, 5, 1, 10, 4, 6, 2)

/// Ứng dụng cú pháp spread để ghép mảng
let arr1 = [3, 5, 1];
let arr2 = [4, 6, 2];
let arr = [...arr1, ...arr2];

console.log(arr); // (6) [3, 5, 1, 4, 6, 2]

//cú pháp spread để biến string thành mảng các ký tự
let str = "Hello";

console.log([...str]); // (5) ['H', 'e', 'l', 'l', 'o']

//sử dụng iterator để lấy các phần tử
let str = "Hello";

for (let ch of str) {
  console.log(ch); // H, e, l, l, o
}


//Copy mảng và object

//copy mảng với cú pháp spread
let arr = [1, 2, 3];

let arrCopy = [...arr];
// cú pháp spread tách mảng thành danh sách các tham số
// rồi truyền vào mảng mới

// kiểm tra lại nội dung của hai array trên
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// so sánh bằng thông qua tham chiếu
console.log(arr === arrCopy); // false - không cùng tham chiếu

// thay đổi mảng arr, nhưng mảng arrCopy không thay đổi
arr.push(4);
console.log(arr); // (4) [1, 2, 3, 4]
console.log(arrCopy); // (3) [1, 2, 3]

//cú pháp spread trong JavaScript để copy object
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj };
// cú pháp spread tách đối tượng thành danh sách key-value
// rồi truyền vào object mới

// kiểm tra nội dung hai obj
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// so sánh qua tham chiếu
console.log(obj === objCopy); // false - vì không cùng tham chiếu

// sửa đối tượng obj, nhưng đối tượng objCopy không thay đổi
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

//Phân biệt 2 loại cú pháp dấu ba chấm

// định nghĩa hàm
function fn1(arg1, arg2, ...args) {
  //
}

// gọi hàm
fn1(1, 2, 3, 4, 5, 6);


// định nghĩa hàm
function fn1(arg1, arg2, arg3, arg4) {
  //
}

// gọi hàm
let arr = [1, 2, 3, 4];
fn1(...arr);