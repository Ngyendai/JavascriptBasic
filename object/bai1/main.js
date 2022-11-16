// Cú pháp 
// {
//   key1: value1,
//   key2: value2,
//   key3: value3,
//   ...
// } [{key1: value1, key2: value2, key3: value3, ...}] x

let myComputer = {
  type: "laptop",
  brand: "Sony",
  os: "Windows 7",
  graphicCard: "NVIDIA",
};

// Objec rỗng không có thuộc tính nào
let myComputer = {};

// Hoặc sử dụng hàm khởi tạo object
let yourComputer = new Object();

// Cách sử dụng object 
let myComputer = {
  type: "laptop",
  brand: "Sony",
  os: "Windows 7",
  graphicCard: "NVIDIA",
};

console.log(myComputer.type); // laptop
console.log(myComputer.brand); // Sony
console.log(myComputer.os); // Windows 7
console.log(myComputer.graphicCard); // NVIDIA

console.log(myComputer["type"]); // => laptop
console.log(myComputer["brand"]); // => Sony
console.log(myComputer["os"]); // => Windows 7
console.log(myComputer["graphicCard"]); // => NVIDIA

let myComputer = {
  _type: "laptop",
  $brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

console.log(myComputer._type); // laptop
console.log(myComputer.$brand); // Sony
console.log(myComputer["operating system"]); // Windows 7
console.log(myComputer.operating system); // ERROR -> lỗi cú pháp

let myComputer = {
  type: "laptop",
  brand: "Sony",
  os: "Windows 7",
  graphicCard: "NVIDIA",
};

console.log(myComputer);


// cập nhật object 
let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

myComputer.type = "desktop";
myComputer["operating system"] = "Ubuntu";
console.log(myComputer.type); // => desktop
console.log(myComputer["operating system"]); // => Ubuntu

// thêm một thuộc tính object 
let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

myComputer.status = "sleep";
myComputer["it is good"] = true;
console.log(myComputer.status); // sleep
console.log(myComputer["it is good"]); // => true

// xóa một thuộc tính trong object
let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

delete myComputer.brand;
delete myComputer["graphic card"];
console.log(myComputer.brand); // undefined
console.log(myComputer["graphic card"]); // undefined

let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

console.log(myComputer.status); // undefinedconsole.log(myComputer["it is good"]); // undefined


// Toán tử ngoặc vuông 
let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

// sử dụng biến
let operatingSystem = "operating system";
console.log(myComputer[operatingSystem]); // Windows 7
// sử dụng biểu thức
console.log(myComputer["graphic" + " " + "card"]); // NVIDIA

let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

const operatingSystem = "operating system";
console.log(myComputer.operatingSystem); // undefined

// khởi tạo thuộc tính runtime trong object 
let t = "type";
const operatingSystem = "operating system";

let myComputer = {
  [t]: "laptop",
  brand: "Sony",
  [operatingSystem]: "Windows 7",
  ["graphic" + " " + "card"]: "NVIDIA",
};

console.log(myComputer.type); // "laptop"
console.log(myComputer["operating system"]); // Windows 7
console.log(myComputer["graphic card"]); // NVIDIA

// Cách rút gọn thuộc tính khi khởi tạo object 
function makeComputer(type, brand, os, graphicCard) {
  return {
    type: type,
    brand: brand,
    os: os,
    graphicCard: graphicCard,
  };
}

// Ví dụ
let myComputer = makeComputer("laptop", "Sony", "Windows 7", "NVIDIA");
console.log(myComputer.type); // laptop
console.log(myComputer.brand); // Sony
console.log(myComputer.os); // Windows 7
console.log(myComputer.graphicCard); // NVIDIA

function makeComputer(type, brand, os, graphicCard) {
  return {
    type,
    brand,
    os,
    graphicCard,
  };
}

// Ví dụ
let myComputer = makeComputer("laptop", "Sony", "Windows 7", "NVIDIA");
console.log(myComputer.type); // laptop
console.log(myComputer.brand); // Sony
console.log(myComputer.os); // Windows 7
console.log(myComputer.graphicCard); // NVIDIA

// Gioi hạn về tên thuộc tính của object
let obj = {
  var: 1,
  let: "a",
  for: null,
  while: NaN,
};

console.log(obj.var); // 1
console.log(obj.let); // a
console.log(obj.for); // null
console.log(obj.while); // NaN

let obj = {
  0: "Zero",
};

// Hai cách truy cập sau đây tương đương nhau
console.log(obj[0]); // Zero
console.log(obj["0"]); // Zero

let obj = {
  x: 1,
};

console.log(obj.__proto__); // [object Object]

obj.__proto__ = "string";
console.log(obj.__proto__); // [object Object] - giống như cũ

// Kiểm tra tồn tai của thuộc tính 
let user = {
  name: undefined,
};

console.log(user.name); // undefined
console.log(user.age); // undefine

// "key" in object 
let user = {
  name: undefined,
};

console.log("name" in user); // true
console.log("age" in user); //

// Cách duyệt tất cả thuộc tính của object 
let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

for (let prop in myComputer) {
  console.log(prop, ":", myComputer[prop]);
}

// type : laptop
// brand : Sony
// operating system : Windows 7
// graphic card : NVIDIA

// Thứ tự các thuộc tính của object 
let numbers = {
  "-21": "minus two",
  "-1": "minus one",
  0: "zero",
  10: "ten",
  2: "two",
  a: "abc",
  "-3": "minus three",
  4: "four",
  3: "three",
  6: "six",
};

for (let n in numbers) {
  console.log(n);
}

// 0
// 2
// 3
// 4
// 6
// 10
// -21
// -1
// a
// -3

// Một số đối tượng có sẵn trong js
// Đối tượng arguments
function maxOf() {
  let max = -1;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }

  return max;
}

console.log(maxOf(1, 2));
// 2

console.log(maxOf(1, 2, 6, 4, 7, 3, 5));
// 7


// Đối tượng Math

// Đối tượng Global
var x = 6; // khai báo biến sử dụng var như này thì x thuộc window
console.log("x" in window);
// true

console.log(window.x);
// 6