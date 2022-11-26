// Khởi tạo Date trong JavaScript -> new Date()

let currentDate = new Date();
console.log(currentDate);

// hiển thị thời gian hiện tại, ví dụ:
// Sun Dec 19 2021 09:25:51 GMT+0700 (Indochina Time)

//new Date(milliseconds)

// 0 tương ứng với ngày 01/01/1970 UTC+0
let jan01_1970 = new Date(0);
console.log(jan01_1970); // Thu Jan 01 1970 07:00:00 GMT+0700 (Indochina Time)

// cộng thêm 24 giờ => ngày 02/01/1970 UTC+0
let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970); // Fri Jan 02 1970 07:00:00 GMT+0700 (Indochina Time)

//new Date(string)
let date = new Date("2021-12-19");
console.log(date); // Sun Dec 19 2021 07:00:00 GMT+0700 (Indochina Time)

// Thời gian không được cài đặt, nên mặc định đó là 00:00:00 tại GMT+0000,
// hoặc 07:00:00 tại GMT+0700.


//new Date(year, month, date, hours, minutes, seconds, ms)
new Date(2021, 0, 1, 0, 0, 0, 0); // 1 Jan 2021, 00:00:00
new Date(2021, 0, 1); // giống câu lệnh trên

let date = new Date(2021, 0, 1, 2, 3, 4, 567);
// 01/01/2021, 02:03:04.567

//let date = new Date();
console.log(date.getHours()); // 10
console.log(date.getUTCHours()); // 3

// let today = new Date();
console.log(today); // thời gian hiện tại

today.setHours(0);
console.log(today); // ngày hiện tại, nhưng giờ được set thành 0

today.setHours(0, 0, 0, 0);
console.log(today); // ngày hiện tại, nhưng giờ, phút, giây, mili giây đều = 0

//Tự động điều chỉnh date

let date = new Date(2021, 0, 32); // 32/01/2021 - ngày không hợp lệ
console.log(date); // tự động điều chỉnh thành 01/02/2021!

let date = new Date(2021, 1, 28);
date.setDate(date.getDate() + 2);

console.log(date); // Tue Mar 02 2021 00:00:00 GMT+0700 (Indochina Time)

//Chuyển Date về number
let date = new Date();
console.log(+date); // 1639886372852
console.log(date.getTime()); // 1639886372852

// bắt đầu tính thời gian
let start = new Date();

// bắt đầu tác vụ
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

// kết thúc tính thời gian
let end = new Date();

// Tổng thời gian thực hiện vòng lặp là:
console.log(`${end - start} ms`); // 3 ms

//Date.now trong JavaScript
// bắt đầu tính thời gian
let start = Date.now();
// bắt đầu tác vụ
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

// kết thúc tính thời gian
let end = Date.now();
// Tổng thời gian thực hiện vòng lặp là:
console.log(`${end - start} ms`); // 3 ms

//phương thức performance.now().
// bắt đầu tính thời gian
let start = performance.now();
// bắt đầu tác vụ
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

// kết thúc tính thời gian
let end = performance.now();
// Tổng thời gian thực hiện vòng lặp là:
console.log(`${end - start} ms`); // 2.7000000029802322 ms

//Date.parse trong JavaScript

let ms = Date.parse("2012-12-19T11:30:50.217+07:00");
console.log(ms); // 1355891450217  (timestamp)