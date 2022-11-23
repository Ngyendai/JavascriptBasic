//Phương thức splice
let letters = ["a", "b", "c"];

delete letters[1]; // xóa phần tử "b"
console.log(letters[1]); // undefined

console.log(letters.length); // 3

// xóa đi 1 phần tử tại ví trí 1 
let letters = ["a", "b", "c"];

// từ vị trí có chỉ số 1, xóa đi 1 phần tử
letters.splice(1, 1);

console.log(letters); // (2) ['a', 'c']

//xóa đi 3 phần tử tại vị trí đầu tiên và thêm 2 phần tử khác:
let letters = ["a", "b", "c"];

// từ vị trí có chỉ số 0, xóa đi 3 phần tử, rồi thêm vào 2 phần tử
letters.splice(0, 3, "d", "e");

console.log(letters); // (2) ['d', 'e']

//trả về mảng các phần tử bị xóa:
let letters = ["a", "b", "c"];

// từ vị trí có chỉ số 1, xóa đi 2 phần tử là "b", "c"
// rồi thêm vào 1 phần tử "d"
let arr = letters.splice(1, 2, "d");

console.log(letters); // (2) ['a', 'd']
console.log(arr); // (2) ['b', 'c'] -> mảng các phần tử bị xóa

// Phương thức slice -> arr.slice([start], [end]);

let letters = ["a", "b", "c", "d"];

// copy mảng letters từ vị trí 1 đến vị trí 3
let arr1 = letters.slice(1, 3);
console.log(arr1); // (2) ['b', 'c']

// copy mảng letters từ vị trí số 2 từ cuối lên đến cuối mảng
let arr2 = letters.slice(-2);
console.log(arr2); // (2) ['c', 'd']

//Phương thức concat -> arr.concat(arg1, arg2,...)
let arr1 = [1, 2];

// tạo mảng mới từ mảng arr1 và mảng [3, 4]
let arr2 = arr1.concat([3, 4]);
console.log(arr2); // (4) [1, 2, 3, 4]

// tạo mảng mới từ mảng arr1 và mảng [3, 4] và [5, 6]
let arr3 = arr1.concat([3, 4], [5, 6]);
console.log(arr3); // (6) [1, 2, 3, 4, 5, 6]

// tạo mảng mới từ mảng arr1 và mảng [3, 4] cùng với các giá trị 5, 6
let arr4 = arr1.concat([3, 4], 5, 6);
console.log(arr4); // (6) [1, 2, 3, 4, 5, 6]

//Phương thức duyệt mảng trong JavaScript
// arr.forEach(function (item, index, array) {
//   // code xử lý trong đây
// });

["a", "b", "c"].forEach(function (item, index, array) {
  console.log(`item ${item} at index ${index} in array ${array}`);
});

//Các phương thức tìm kiếm trong mảng

let arr = [1, 0, 1, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 3
console.log(arr.indexOf(null)); // -1

console.log(arr.indexOf(1)); // 0
console.log(arr.lastIndexOf(1)); // 2

console.log(arr.includes(1)); // true

//Phương thức find và findIndex
let result = arr.find(function (item, index, array) {
  // code xử lý
});
let users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
  { id: 3, name: "Anna" },
];

let user = users.find((item) => item.id === 2);

console.log(user.name); // John

// Phương thức filter
let results = arr.filter(function (item, index, array) {
  // code kiểm tra
});

let users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
  { id: 3, name: "Anna" },
];

let results = users.filter((item) => item.id <= 2);
console.log(results.length); // 2

let others = users.filter((item) => item.id > 5);
console.log(others.length); // 0

//Các phương thức biến đổi mảng
//Phương thức map
let result = arr.map(function (item, index, array) {
  // trả về giá trị mới từ mỗi item
});
let lengths = ["Dog", "Fish", "Elephant"].map((item) => item.length);
console.log(lengths); // (3) [3, 4, 8]

//Phương thức sort

let arr = [1, 2, 15];
arr.sort();
console.log(arr); // (3) [1, 15, 2]

//Phương thức reverse
let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr); // (5) [5, 4, 3, 2, 1]

//Phương thức split và join
let str = "a,b,c,d";

let arr = str.split(",");

console.log(arr); // (4) [a, b, c, d]

let str = "a,b,c,d";

// giới hạn số phần tử của mảng là 2
let arr = str.split(",", 2);

console.log(arr); // (2) [a, b]
let arr = ["a", "b", "c", "d"];

// ghép các phần tử mảng bằng kí tự ,
let str = arr.join(",");

console.log(str); // a,b,c,d

//Phương thức reduce và reduceRight
let value = arr.reduce(
  function (accumulator, item, index, array) {
    // code xử lý
  },
  [initial]
);

let arr = [1, 2, 3, 4, 5];

// giá trị khởi tạo không truyền nên mặc định là 0
// tại mỗi lần duyệt, giá trị tích lũy được cộng với giá trị phần tử hiện tại
let result = arr.reduce((sum, current) => sum + current);

console.log(result); // 15

//Cách kiểm tra giá trị là mảng
let arr = [];
let obj = {};

console.log(typeof arr); // object
console.log(typeof obj); // object

let arr = [];
let obj = {};

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

//Tham số thisArg

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg là tham số cuối cùng và không bắt buộc phải có

// mảng ban đầu
let arr = [1, 3, 5, 2, 6, 10, 4];

// object điều kiện
let boundary1 = {
  min: 1,
  max: 5,
};

let boundary2 = {
  min: 3,
  max: 8,
};

// filter function
// giá trị của this là object ứng với thisArg
function filterFunc(item) {
  return item >= this.min && item <= this.max;
}

// filter
let ret1 = arr.filter(filterFunc, boundary1);
let ret2 = arr.filter(filterFunc, boundary2);

// kết quả
console.log(ret1); // (5) [1, 3, 5, 2, 4]
console.log(ret2); // (4) [3, 5, 6, 4]