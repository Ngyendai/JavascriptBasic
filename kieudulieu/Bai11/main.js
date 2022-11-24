// Khởi tạo Map trong JavaScript
new Map([iterable]);

//Khởi tạo Map rỗng
const map1 = new Map();
console.log(map1);
// Map(0) {

//Khởi tạo Map từ array
// Trường hợp hợp lệ:
// Mỗi phần tử của mảng đầu vào là một mảng hai phần tử
const map2 = new Map([
  [1, "a"],
  [2, "b"],
]);
console.log(map2);
// Map(2) {1 => "a", 2 => "b"}

// Trường hợp KHÔNG hợp lệ:
// Mỗi phần tử của mảng đầu vào không phải mảng hai phần tử
const map3 = new Map([1, "a", 2, "b"]);
// Uncaught TypeError: Iterator value 1 is not an entry object

//Khởi tạo Map từ arguments
function func4() {
  const map4 = new Map(arguments);
  console.log(map4);
}

func4(["one", 1], ["two", 2], ["three", 3]);
// Map(3) {"one" => 1, "two" => 2, "three" => 3}

//Khởi tạo Map từ Map
// Khởi tạo map thứ nhất
const map6 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map6);
// => Map(2) {"a" => 1, "b" => 2}

// Khởi tạo map thứ hai từ map thứ nhất
const map6_clone = new Map(map6);
console.log(map6_clone);
// Map(2) {"a" => 1, "b" => 2}

//Khởi tạo Map từ Set
// Khởi tạo Set
const set5 = new Set([
  ["a", 1],
  ["b", 2],
]);
console.log(set5);
// Set(2) {Array(2), Array(2)}

const map5 = new Map(set5);
console.log(map5);
// Map(2) {"a" => 1, "b" => 2}

//Thêm phần tử vào Map -> map.set(key, value);
// Khởi tạo Map rỗng.
const map7 = new Map();

// Thêm phần tử "a" -> 1 vào map.
map7.set("a", 1);
// Map(1) {"a" => 1}

// Thêm phần tử "b" -> 2 vào map, "b" !== "a" nên Map tạo phần tử mới.
map7.set("b", 2);
// Map(2) {"a" => 1, "b" => 2}

// Thêm phần tử [1] -> 3 vào map, [1] đều khác "a" và "b".
map7.set([1], 3);
// Map(3) {"a" => 1, "b" => 2, [1] => 3}

// Thêm phần tử "a" -> 4 vào map, tuy nhiên key "a" đã tồn tại.
// => cập nhật vào phần tử cũ - số lượng phần tử không đổi
map7.set("a", 4);
// Map(3) {"a" => 4, "b" => 2, [1] => 3}

// Thêm phần tử [1] -> 5 vào map.
// Trong map đã có phần tử với key [1], tuy nhiên mảng là kiểu tham chiếu.
// Vì vậy [1] !== [1]. Do đó, phần tử mới được thêm vào map.
map7.set([1], 5);
// Map(4) {"a" => 4, "b" => 2, [1] => 3, [1] => 5}

// Thêm phần tử NaN -> 6 vào map.
// NaN khác các giá trị key đã có, nên phần tử mới được thêm vào map.
map7.set(NaN, 6);
// Map(5) {"a" => 4, "b" => 2, [1] => 3, [1] => 5, NaN => 6}

//Lấy giá trị của phần tử trong Map
//phương thức map.get(key)
const map7 = new Map([
  ["a", 1],
  ["b", 1],
]);

console.log(map7.get("a")); // 1
console.log(map7.get("c")); // undefined

//Lấy số lượng phần tử trong Map -> phương thức map.size
const map8 = new Map();
console.log(map8.size);
// 0 - mảng rỗng

map8.set("a", 1).set("b", 2);
console.log(map8.size);
// 2 - mảng có 2 phần tử

//Kiểm tra phần tử tồn tại trong Map -> map.has(key);

const map9 = new Map([
  ["a", 1],
  [1, 2],
  [[2], 3],
  [NaN, 4],
]);

console.log(map9.has("a")); // true
console.log(map9.has("1")); // false
console.log(map9.has(1)); // true
console.log(map9.has([2])); // false - vì [2] !== [2]
console.log(map9.has(NaN)); // true

//Xoá một phần tử trong Map -> map.delete(key);
const map10 = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
]);
console.log(map10);
// Map(3) {"one" => 1, "two" => 2, "three" => 3}

// xóa phần tử với key là "two" - tồn tại
console.log(map10.delete("two"));
// true

// sau khi xóa, map còn lại 2 phần tử
console.log(map10);
// {"one" => 1, "three" => 3}

//Xoá tất cả phần tử trong Map -> phương thức clear
const map11 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(map11);
// Map(3) {"a" => 1, "b" => 2, "c" => 3}

// xóa hết các phần tử
map11.clear();

// map trở thành empty
console.log(map11);
// Map(0) {}

//Duyệt qua các phần tử trong Map
// Sử dụng for...of
const map12 = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);

for (const item of map12) {
  console.log(item);
}
/*
 * [1, "a"]
 * [2, "b"]
 * [3, "c"]
 */

// Sử dụng phương thức forEach
const map13 = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);

map13.forEach((value, key, map) => {
  console.log(value, key, map);
});
/*
 * a 1 Map(3) {1 => "a", 2 => "b", 3 => "c"}
 * b 2 Map(3) {1 => "a", 2 => "b", 3 => "c"}
 * c 3 Map(3) {1 => "a", 2 => "b", 3 => "c"}
 */

//Phương thức map.keys()
const map14 = new Map([
  [1, "a"],
  ["b", 2],
  [3, "c"],
]);

for (const key of map14.keys()) {
  console.log(key);
}
/*
 * 1
 * b
 * 3
 */

//map.values()
const map14 = new Map([
  [1, "a"],
  ["b", 2],
  [3, "c"],
]);

for (const value of map14.values()) {
  console.log(value);
}
/*
 * a
 * 2
 * c
 */

//map.entries()
const map14 = new Map([
  [1, "a"],
  ["b", 2],
  [3, "c"],
]);

for (const item of map14.entries()) {
  console.log(item);
}
/*
 * [1, "a"]
 * ["b", 2]
 * [3, "c"]
 */

//Chuyển Map keys thành Array
const map15 = new Map([
  [1, "a"],
  ["b", 2],
  [3, "c"],
]);

const keys = [...map15.keys()];
console.log(keys);
// [1, "b", 3]

//Chuyển Map values thành Array
const map16 = new Map([
  [1, "a"],
  ["b", 2],
  [3, "c"],
]);

const values = [...map16.values()];
console.log(values);
// ["a", 2, "c"]