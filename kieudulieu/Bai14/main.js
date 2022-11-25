// cú pháp
new WeakMap([iterable]);
let obj = { x: 1 };
let weakMap = new WeakMap();

weakMap.set(obj, 1); // OK - key là object
weakMap.set("a", 1); // Lỗi: Invalid value used as weak map key - key là string

//Các phương thức của WeakMap
//Phương thức weakMap.set(key, value):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let weakMap = new WeakMap();
weakMap.set(obj1, 1).set(obj2, 2);

//Phương thức weakMap.get(key):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let weakMap = new WeakMap();
weakMap.set(obj1, 1).set(obj2, 2);

console.log(weakMap.get(obj1)); // 1console.log(weakMap.get({ x: 1 })); // undefined - vì {x:1} !== {x:1}

//Phương thức weakMap.delete(key):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let weakMap = new WeakMap();
weakMap.set(obj1, 1).set(obj2, 2);

console.log(weakMap.delete(obj1)); // trueconsole.log(weakMap.delete({ x: 1 })); // false - vì {x:1} !== {x:1}

//Phương thức weakMap.has(key):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let weakMap = new WeakMap();
weakMap.set(obj1, 1).set(obj2, 2);

console.log(weakMap.has(obj1)); // trueconsole.log(weakMap.has({ x: 1 })); // false - vì {x:1} !== {x:1}


//So sánh WeakMap và Map
// Kiểu dữ liệu của key
let map = new Map();
let weakMap = new WeakMap();

map.set(1, "one"); // OK
weakMap.set(1, "one"); // Lỗi - Invalid value used as weak map key

//Tính chất của iterable object
// khởi tạo map
let map = new Map();
map.set(1, "a").set(2, "b");

// duyệt qua các phần tử của map
for (let item of map) {
  console.log(item);
  /**
   * [1, 'a']
   * [2, 'b']
   */
}

// khởi tạo weakmap
let obj1 = { x: 1 };
let obj2 = { x: 2 };
let weakMap = new WeakMap();
weakMap.set(obj1, "a").set(obj2, "b");

// duyệt qua các phần tử của weakmap
for (let item of weakMap) {
  console.log(item);
}
/**
 * Lỗi: weakMap is not iterable
 */