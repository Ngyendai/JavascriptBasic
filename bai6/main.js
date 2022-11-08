// 1. Khai báo kiểu dữ liệu 
let x1 = 999;
console.log(x1); // 999

x1 = "Helloworld";
console.log(x1); // Helloworld

// 2. Các kiểu dữ liệu

// Kiểu dữ liệu Boolean
let isWebLoaded = true; // => Trang web đã được tải xong
console.log(isWebLoaded); // true

let isProgramRunning = false; // Chương trình đang không chạy
console.log(isProgramRunning); // false

// Kiểu dữ liệu null
let language = null;
console.log(language); // null

// Kiểu dữ liệu undefined
let language1 = undefined;
console.log(language1); // undefined

// khai báo dữ liệu kh gán giá trị -> undefined
let undefined;
console.log(undefined); // undefined

// Kiểu dữ liệu number
let n1 = 66; // số nguyên dương
let n2 = -66; // số nguyên âm
let n3 = 3.14; // số thực dương
let n4 = -3.14; // số thực âm
let n5 = 2e3; // => 2*10^3 = 2000
let n6 = 2e-3; // => 2*10^(-3) = 0.002
let n7 = 0xff; // số dạng hexa (hệ cơ số 16): 15*16 + 15 = 255
let n8 = 067; // số dạng octa (hệ cơ số 8): 6*8 + 7 = 55
let n9 = 0b11; // số dạng nhị phân (hệ cơ số 2): 1*2 + 1 = 3

// Kiểu dữ liệu Infinity
console.log(Infinity);

// Kiểu dữ liệu -Infinity
console.log(-Infinity);

// Kiểu dữ liệu BigInt
const reallyBigNumber = 12345678987654321012345678987654321n;
console.log(reallyBigNumber);

// Kiểu dữ liệu string 
const msg1 = "Đây là string dùng dấu nháy đơn";
const msg2 = "Đây là string dùng dấu nháy kép";
const msg3 = `Đây là string dùng dấu backtick`;

// cvd thêm về "backtick"
// Truyền biến vào trong dấu "backtick"
let name = "Lam";
console.log(`My name is ${name}`); // My name is Lam

// Truyền hằng vào trong dấu "backtick"
const backtick = "JavaScript";
console.log(`You are learning ${backtick}`); // You are learning JavaScript

// Truyền vào biểu thức
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 3. Xác định kiểu dữ liệu trong biến

let x;
console.log(typeof x); // undefined

x = true;
console.log(typeof x); // boolean

x = 1;
console.log(typeof x); // number

x = 1234567891234567890123456789125345362n;
console.log(typeof x); // bigint

x = "hello";
console.log(typeof x); // string

// (1)
x = Symbol("id");
console.log(typeof x); // symbol
// (2)
x = { n: 1 };
console.log(typeof x); // object
// (3)
x = null;
console.log(typeof x); // object