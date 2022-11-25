// Kiểu dữ liệu của key
// Object
const symbol1 = Symbol(1);

const obj = {
  x: 1,
  "a b": 2,
  symbol1: 3,
};

console.log(obj);
// {x: 1, a b: 2, symbol1: 3}


// Map
const fun = function () {};

const map = new Map();
map.set(NaN, 1).set(1, 2).set("a", 3).set([2], 4).set({ x: 3 }, 5).set(fun, 6);

// Map(7) {
//  NaN => 1, 1 => 2, "a" => 3, [2] => 4, {x:3} => 5, function() {} => 6
// }

// Thứ tự của key
// Map
const map = new Map();
map.set("xyz", 1);
map.set("b", 2);
map.set("1", 4);

for (const key of map.keys()) {
  console.log(key);
}
/*
 * xyz
 * b
 * 1
 */

// object
const obj = { xyz: 1 };
obj.b = 2;
obj["1"] = 4;

for (const key in obj) {
  console.log(key);
}

/*
 * 1
 * xyz
 * b
 */


// Xác định kích thước
// Map
const map = new Map();
map.set("xyz", 1);
map.set("b", 2);
map.set("1", 4);

console.log(map.size);
// 3

// object
const obj = { xyz: 1 };
obj.b = 2;
obj["1"] = 4;

// sử dụng vòng lặp for...in
let size = 0;
for (const key in obj) size++;
console.log(size);
// 3

// sử dụng Object.keys
console.log(Object.keys(obj).length);
// 3

//Kiểm tra tính tồn tại của key
//map 
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

console.log(map.has("a")); // true
console.log(map.has("c")); // false

// object
const obj = { a: 1, b: 2 };
const hasKey = (obj, key) => Object.keys(obj).indexOf(key) !== -1;

console.log(hasKey(obj, "a")); // true
console.log(hasKey(obj, "c")); // false

//Duyệt qua các phần tử
//map
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

// duyệt các keys
for (const key of map.keys()) {
  console.log(key);
}
/*
 * a
 * b
 */

// duyệt các values
for (const value of map.values()) {
  console.log(value);
}
/*
 * 1
 * 2
 */

// duyệt các cặp [key, value]
for (const [key, value] of map) {
  console.log(key, value);
}
/*
 * a 1
 * b 2
 */

// object 
const obj = { a: 1, b: 2 };

for (const key in obj) {
  console.log(key, obj[key]);
}
/*
 * a 1
 * b 2
 */