// Cú pháp khai báo
let myId = Symbol();

// có thêm description 
let myId = Symbol("id");

// Không thể dùng tử khóa new để tạo Symbol
let myId = new Symbol("id");
// => Uncaught TypeError: Symbol is not a constructor

// Một số đặc điểm của Symbol
let myId1 = Symbol("id");
let myId2 = Symbol("id");

console.log(myId1 == myId2); // => false
console.log(myId1 === myId2); // => false

// Symbol không tự động convert sang string
let a = true;
let b = [1, 2];
let c = { x: 1, y: 2 };
let d = Symbol();

alert(a); // => true
alert(b); // => 1,2
alert(c); // => [object Object]
alert(d); // => TypeError: Cannot convert a Symbol value to a string

// Sử dụng Global Symbol 
//1 sử dụng symbol.for
// Tạo một Symbol mới với description là "id"
let id1 = Symbol("id");

/*
 * Tìm trong Global một Symbol với key là "id".
 * Nếu Symbol chưa tồn tại thì tạo mới một Symbol
 */
let id2 = Symbol.for("id");

/*
 * Tiếp tục tìm trong Global một Symbol với key là "id".
 * Lần này thì Symbol đã tồn tại rồi, nên sẽ trả về Symbol trên.
 */
let id3 = Symbol.for("id");

// Kết quả
console.log(id1 === id2); // => false
console.log(id2 === id3); // => true

// 2. sử dụng symbol.keyFor
let sym1 = Symbol("id");
let key1 = Symbol.keyFor(sym1);

let sym2 = Symbol.for("name");
let key2 = Symbol.keyFor(sym2);

console.log("key1: ", key1); // => undefined
console.log("key2: ", key2); // => name

// ứng dụng symbol
// 1. Symbol có thể làm key cho thuộc tính của Object
const id = Symbol("id");
const obj = {
  [id]: "abc123",
};

console.log(obj);
// => {Symbol(id): "abc123"}

// Non-enumerable
const id = Symbol("id");
const obj = {
  [id]: "abc123",
  x: 1,
  y: 2,
};

console.log(obj);
// => {x: 1, y: 2, Symbol(id): "abc123"}

for (let key in obj) {
  console.log(key);
}
/*
 * x
 * y
 */

// Duyệt qua phân tử 
const id = Symbol("id");
const name = Symbol("name");

const obj = {
  [id]: "abc123",
  [name]: "obj",
  y: 2,
};

console.log(obj);
// => {y: 2, Symbol(id): "abc123", Symbol(name): "obj"}

const arr = Object.getOwnPropertySymbols(obj);
console.log(arr);
// 3. => [Symbol(id), Symbol(name)]

// Symbol được dùng để tránh gây xung đột về tên
// 1.khi không dùng Symbol
// lib.js
let module = {
  id: "abc",
  printId: function () {
    console.log("id in lib:", this.id);
  },
};

export default module;

// 2. Khi sử dụng Symbol 
// lib.js
let id = Symbol("id");

let module = {
  [id]: "abc",
  printId: function () {
    console.log("id in lib:", this[id]);
  },
};

export default module;