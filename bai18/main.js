// 1. Toán từ số học
console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1 (số dư)
console.log(5 ** 2); // 25 (5 lũy thừa 2)

// lưu ý 
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
console.log("5a" % "2"); // NaN
console.log("5b" ** "2"); // NaN


// 2. Toán tử string 
console.log("hello" + " javascript"); // hello javascript
console.log(1 + "2"); // 12
console.log("1" + true); // 1true

// 3. Toán tử chuyển đổi kiểu dữ liệu thành number
// Không ảnh hưởng đến số
console.log(+1); // 1

// Chuyển đổi các kiểu dữ liệu khác thành số
console.log(+true); // 1
console.log(+false); // 0
console.log(+"abc"); // NaN
console.log(+""); // 0
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+{ x: 1 }); // NaN

// 4. Toán tử gán
let x = 1; // gán giá trị cho biến
const message = "Hello"; // gán giá trị cho hằng
let result = 1 + 2 + 3 - 4;
console.log(result); // 2
// let x, y, z, t;
// x = y = z = t = "hello";
// console.log(x); // hello
// console.log(y); // hello
// console.log(z); // hello
// console.log(t); // hello
let n = 1;
n = n + 5;
// let n = 1;
// n += 5;

// 5. Toán tử tăng một đơn, giảm một đơn vị
let a = 1;
a++;

// lưu ý 
let b = 2;
let c = ++a;
console.log(b); // 3
console.log(c);

let e = 2;
let g = a++;
console.log(e); // 3
console.log(g); // 2


// 6. Toán tử dấu phẩy
let t = 1;
let m = ((t = t + 1), t + 4);
console.log(t); // 2
console.log(m); // 6