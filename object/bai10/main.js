// Chuyển đổi kiểu dữ liệu dùng câu lệnh if
let obj = {};

if (obj) {
  console.log("obj is true"); // obj is true
}

// Boolean
let obj = {};
console.log(Boolean(obj)); // true

// string 
let obj = {};

// sử dụng trong hàm alert()
alert(obj); // kết quả hiển thị trên dialog là: [object Object]

// sử dụng làm thuộc tính của object khác
let anotherObj = {};
anotherObj[obj] = 1;

console.log(anotherObj["[object Object]"]); // 1

// number
let obj = {};

// chủ động convert sang number
let num = Number(obj);
console.log(num); // NaN

// sử dụng toán tử một ngôi +
let n = +obj;
console.log(num); // NaN

// trừ date
let date1 = new Date("December 01, 2021 00:00:00");
let date2 = new Date("December 02, 2021 00:00:00");
let delta = date2 - date1;
console.log(delta); // 86400000 - giá trị miliseconds của 1 ngày

// so sánh
let p1 = { x: 1 };
let p2 = { x: 2 };
let greater = p2 > p1;
console.log(greater); // false

// dùng toán tử 
// sử dụng toán tử +
let total = obj1 + obj2;

// so sánh == với number
if (user == 1) {
  // do something
}


// chi tiết về Symbol.toPrimitive
let obj = {};

obj[Symbol.toPrimitive] = function (hint) {
  // Code trong này dùng để chuyển đổi object về kiểu nguyên thủy.
  // Vì vậy, hàm này phải return về kiểu kiểu nguyên thủy.
  // Giá trị của hint có thể là: string, number hoặc default.
};

let user = {
  name: "Alex",
  age: 28,

  // sử dụng cú pháp rút gọn khai báo phương thức
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `{name: ${this.name}}` : this.age;
  },
};

// hint là string
alert(user); // {name: Alex}

// hint là number
alert(+user); // 28

// hint là default
alert(user + 1); // 29

// chi tiết về toString và valueOf
let obj = {};

console.log(obj.toString()); // [object Object]
console.log(obj.valueOf()); // {}

console.log(obj === obj.valueOf()); // true

// Không sử dụng Symbol.toPrimitive
let user = {
  name: "Alex",
  age: 28,

  // hint là string
  toString() {
    return `{name: ${this.name}}`;
  },
  // hint là number hoặc default
  valueOf() {
    return this.age;
  },
};

// hint là string
alert(user); // {name: Alex}

// hint là number
alert(+user); // 28

// hint là default
alert(user + 1); // 29


// sử dụng to.Primitive
let user = {
  name: "Alex",
  age: 28,

  // hint là string
  toString() {
    return true;
  },

  // hint là number hoặc default
  valueOf() {
    return null;
  },
};

// hint là string
alert(user); // true

// hint là number
alert(+user); // 0 - vì +null chuyển thành 0

// hint là default
alert(user + 1); // 1

// Toán tử * để chuyển đổi kiểu dữ liệu 
let obj = {
  [Symbol.toPrimitive](hint) {
    return "3";
  },
};

console.log(obj * 2); // 6