const set1 = new Set();
console.log(typeof set1);
// object
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

console.log(obj1 === obj2);
// false

const set1 = new Set([obj1, obj2]);
console.log(set1.size);
// 2

// khởi tạo Set -> 
new Set([iterable]);

// Set rỗng
const set1 = new Set();
console.log(set1);
// Set(0) {}

// Khởi tạo Set từ Array
const set2 = new Set([1, 2, "a", "b", 1]);
console.log(set2);
// Set(4) {1, 2, "a", "b"}

//Khởi tạo Set từ String
const set3 = new Set("abcba");
console.log(set3);
// Set(3) {"a", "b", "c"}

//Khởi tạo Set từ arguments
function func4() {
  const set4 = new Set(arguments);
  console.log(set4);
}

func4("a", "b", "c", "b", 0, 1);
// Set(5) {"a", "b", "c", 0, 1}

// Khởi tạo Set từ NodeList 
// tìm tất cả các phần tử với thẻ head
const head = document.querySelectorAll("head");
const set1 = new Set(head);
console.log(set1);
// Set(1) {head}

// Khởi tạo Set từ TypedArray
const typedArray1 = new Int8Array(2);
typedArray1[0] = 12;
typedArray1[1] = 34;

const set1 = new Set(typedArray1);
console.log(set1);
// Set(2) {12, 34}

// Khởi tạo Set từ Map
const map1 = new Map();
map1.set("one", 1);
map1.set("two", 2);

const set1 = new Set(map1);
console.log(set1);
// Set(2) {Array(2), Array(2)}

for (const x of set1) {
  console.log(x);
}
/*
 * ["one", 1]
 * ["two", 2]
 */

//Khởi tạo Set từ Set
const set1 = new Set([1, 2]);
const set2 = new Set(set1);
console.log(set2);
// Set(2) {1, 2}

//Thêm phần tử vào Set
set.add(value);

// khởi tạo set rỗng
const set1 = new Set();

// thêm phần tử 1
set1.add(1);
console.log(set1);
// Set(1) {1}

// thêm phần tử 2 (khác 1)
set1.add(2);
console.log(set1);
// Set(2) {1, 2}

// thêm phần tử 3 (khác 1 và 2)
set1.add(1).add(2).add(3);
console.log(set1);
// Set(3) {1, 2, 3}

//Lấy số lượng phần tử trong Set
const set1 = new Set(["a", "b", "a"]);
console.log(set1.size);
// 2 - vì set chỉ có hai phần tử ["a", "b"]

//Kiểm tra phần tử tồn tại trong Set
const set1 = new Set([1, "a", [1, 2]]);

console.log(set1.has(1)); // true
console.log(set1.has("1")); // false
console.log(set1.has("a")); // true
console.log(set1.has("b")); // false
console.log(set1.has([1, 2])); // false - vì [1, 2] !== [1, 2]

console.log(1 === 1); // true
console.log(1 === "1"); // false
console.log("a" === "a"); // true
console.log([1, 2] === [1, 2]); // false

//Xoá một phần tử trong Set
const set1 = new Set("abcdcba");
console.log(set1); // Set(4) {a, b, c, d}

set1.delete("a");
console.log(set1); // Set(4) {b, c, d}

set1.delete("d");
console.log(set1); // Set(2) {b, c}

//Xoá tất cả phần tử trong Set
const set1 = new Set([1, 2, 3]);
console.log(set1); // Set(3) {1, 2, 3}

set1.clear();
console.log(set1); // Set(0) {}

//Duyệt qua các phần tử trong Set
// for...of
const set1 = new Set(["a", { x: 1 }, 1]);

for (const x of set1) {
  console.log(x);
}
/*
 * a
 * { x : 1}
 * 1
 */

// forEach
const set1 = new Set(["a", "b", "c"]);
console.log(set1);
// Set(3) {"a", "b", "c"}

set1.forEach(function (value) {
  console.log(value);
});
/*
 * a
 * b
 * c
 */

// khởi tạo set
const set1 = new Set(["a", { x: 1 }, 1]);

// duyệt qua các keys trong set
for (const x of set1.keys()) {
  console.log(x);
}
/*
 * a
 * { x : 1}
 * 1
 */

// duyệt qua các values trong set
for (const x of set1.values()) {
  console.log(x);
}
/*
 * a
 * { x : 1}
 * 1
 */

// duyệt qua các cặp [key, value] trong set
for (const x of set1.entries()) {
  console.log(x);
}

/*
 * ["a", "a"]
 * [{ x : 1}, { x : 1}]
 * [1, 1]
 */

//Chuyển Set thành Array và ngược lại
// khởi tạo set
const set1 = new Set([1, 2, 3, 4, 5]);

// chuyển set thành array sử dụng Array.from
const arr1 = Array.from(set1);
console.log(arr1);
// [1, 2, 3, 4, 5]

// chuyển set thành array sử dụng cú pháp spread (...)
const arr2 = [...set1];
console.log(arr2);
// [1, 2, 3, 4, 5]