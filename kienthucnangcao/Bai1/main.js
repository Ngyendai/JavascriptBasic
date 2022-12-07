// khái báo số 1 tỷ
let oneBillion = 1000000000;

// dùng dấu _
let oneBillion = 1_000_000_000;

// dùng chữ cái e
let a = 1e3; // 1_000 - 1 nghìn
let b = 1e6; // 1_000_000 - 1 triệu
let c = 1e9; // 1_000_000_000 - 1 tỷ
let d = 4.6e9; // 4_600_000_000 - 4.6 tỷ

1e3 === 1 * 1000; // e3 tương đương *1000
1.23e4 === 1.23 * 10000; // e4 tương đương *10000

// Biểu diễn hệ số cơ
// Hệ cơ số 16
console.log(0xff); // 255
console.log(0xff); // 255 - không phân biệt hoa thường

// Hệ cơ số 8
console.log(0o377); // 255

// Hệ cơ số 2
console.log(0b11111111); // 255

// num.toString(base)
let num = 255;

// chuyển sang hệ cơ số 16
console.log(num.toString(16)); // ff

// chuyển sang hệ cơ số 2
console.log(num.toString(2)); // 11111111

// Làm tròn 2 chữ số 
let a = 1.2345;

// a nhân với 100
let b = a * 100; // 123.45

// làm tròn b với Math.round
let c = Math.round(b); // 123

// chia c cho 100
let d = c / 100; // bằng 123 / 100

console.log(d); // 1.23

let a = 1.2345;
let b = a.toFixed(2);
console.log(b); // "1.23"


// toFixed(n)
let a = 1.2345;
let b = a.toFixed(6);
console.log(b); // "1.234500"

// Dùng hàm Number() hoặc toán tử môt ngôi + 
let a = 1.2345;
let b = a.toFixed(2); // "1.23"

let c = Number(b);
console.log(c, typeof c); // 1.23 number

// sai số với number
console.log(1e500); // Infinity
console.log(-1e500); // -Infinity

// dùng fixed(20)
console.log((0.1).toFixed(20)); // 0.10000000000000000555
console.log((0.2).toFixed(20)); // 0.20000000000000001110


// dùng fixed(1)
let a = 0.1;
let b = 0.2;

// Sử dụng nhân-rồi-chia
let sum1 = (a * 10 + b * 10) / 10;
console.log(sum1); // 0.3

// Sử dụng toFixed(1)
let sum2 = (a + b).toFixed(1);
console.log(sum2); // 0.3

// Kiểm tra số với isNaN và isFinite
console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false
console.log(isNaN("1")); // false - "1" chuyển sang số thành 1
console.log(isNaN("abc")); // true - "abc" không thể chuyển thành số

let a = NaN;
let b = NaN;

console.log(a === a); // false
console.log(a === b); // false

console.log(isFinite("1")); // true - "1" chuyển thành 1
console.log(isFinite("abc")); // false - "abc" chuyển sang số thành NaN
console.log(isFinite(1e500)); // false - 1e500 bằng Infinity


// Hàm parseInt và hàm parseFloat
console.log(Number("1.23")); // 1.23
console.log(+"1.23"); // 1.23

// NaN
console.log(Number("100px")); // NaN
console.log(+"100px"); // NaN

console.log(parseInt("100px")); // 100
console.log(parseFloat("1.1em")); // 1.1

console.log(parseInt("1.2")); // 1
console.log(parseFloat("1.2.3")); // 1.2

console.log(parseInt("$100")); // NaN
console.log(parseFloat("$100")); // NaN


// Math.random
console.log(Math.random()); // 0.7097565480172887
console.log(Math.random()); // 0.6064789549780443
console.log(Math.random()); // 0.730830858416105

// Math.max() và Math.min()
console.log(Math.max(1, 3.2, -1, 10, 4)); // 10
console.log(Math.min(1, 3.2, -1, 10, 4)); // -1

// Math.pow()
console.log(Math.pow(2, 3)); // 8 - vì bằng 2 mũ 3