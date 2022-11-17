
// vd
let obj = {}; // khởi tạo object rỗng

obj.a = 1; // thêm thuộc tính a và gán giá trị 1
obj["a"] = 2; // cập nhật giá trị thuộc tính a bằng 2

console.log(obj.a); // 2

// Tạo immutable 
let obj = {};

    // định nghĩa thuộc tính a trong obj
    Object.defineProperty(obj, "a", {
      value: 1, // giá trị là 1
      writable: false, // writable: false - nghĩa là không thể ghi đè});

    obj.a = 2; // thử ghi đè giá trị khác vào a
    console.log(obj.a); // 1 - kết quả giá trị của a vẫn không đổi

    //Sử dụng strict mode 
    "use strict";
let obj = {};

// định nghĩa thuộc tính a trong obj
Object.defineProperty(obj, "a", {
  value: 1, // giá trị là 1
  writable: false, // writable: false - nghĩa là không thể ghi đè
});

obj.a = 2;
// Uncaught TypeError:// Cannot assign to read only property 'a' of object '#<Object>'
console.log(obj.a);


let obj = {};
Object.defineProperty(obj, "a", { value: 1 });
obj.a = 2;
console.log(obj.a); // 1

// Thay đổi giá trị 
//sai
let obj = {};
Object.defineProperty(obj, "a", { value: 1, writable: false });
Object.defineProperty(obj, "a", { writable: true }); // => TypeError: Cannot redefine property: a

// Đúng 
let obj = {};

Object.defineProperty(obj, "a", {
  value: 1,
  writable: false,
  configurable: true,
});

Object.defineProperty(obj, "a", { writable: true });
obj.a = 2;
console.log(obj.a); // 2 - giá trị của thuộc tính a đã thay đổi

// Cách sử dụng object.freeze
let obj = { a: 1 };

Object.freeze(obj); // đóng băng object
obj.a = 2; // cập nhật thuộc tính đã có
obj.b = 3; // thêm thuộc tính mới

console.log(obj); // { a: 1 }

// Sử dụng strict mode
"use strict";
let obj = { a: 1 };

Object.freeze(obj); // đóng băng object

obj.a = 2;
// Uncaught TypeError:
// Cannot assign to read only property 'a' of object '#<Object>'