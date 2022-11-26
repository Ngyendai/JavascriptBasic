// cú pháp 
new WeakSet([iterable]);
// khởi tạo WeakSet rỗng
let ws1 = new WeakSet(); // OK

// khởi tạo WeakSet với iterable object với mỗi phần tử là object
let obj1 = { x: 1 };
let ws2 = new WeakSet([obj1]); // OK

// khởi tạo WeakSet với iterable object nhưng mỗi phần tử không phải object
let ws3 = new WeakSet([1, "2"]); // Lỗi: Invalid value used in weak set

//Các phương thức của WeakSet
//Phương thức weakSet.add(value):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let ws = new WeakSet();
ws.add(obj1).add(obj2).add(obj1); // OK
// Add value không phải là object vào set
ws.add(1); // Lỗi: Invalid value used in weak set

//Phương thức weakSet.has(value):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let ws = new WeakSet();
ws.add(obj1).add(obj2).add(obj1);

console.log(ws.has(obj1)); // trueconsole.log(ws.has(obj2)); // trueconsole.log(ws.has({ x: 1 })); // false
//Phương thức weakSet.delete(value):
let obj1 = { x: 1 };
let obj2 = { x: 2 };

let ws = new WeakSet();
ws.add(obj1).add(obj2).add(obj1);

console.log(ws.delete(obj1)); // trueconsole.log(ws.delete(obj2)); // trueconsole.log(ws.delete({ x: 1 })); // falseconsole.log(ws.delete(obj1)); // false

//So sánh WeakSet và Set
//Kiểu dữ liệu của key
let set = new Set();
let weakSet = new WeakSet();

set.add(1); // OK
weakSet.add(1); // Lỗi - Invalid value used in weak set

//Tính chất của iterable object

// khởi tạo set
let set = new Set();
set.add(1).add("b");

// duyệt qua các phần tử của set
for (let item of set) {
  console.log(item);
  /**
   * 1
   * 'b'
   */
}

// khởi tạo weakSet
let obj1 = { x: 1 };
let obj2 = { x: 2 };
let weakSet = new WeakSet();
weakSet.add(obj1).add(obj2);

// duyệt qua các phần tử của weakSet
for (let item of weakSet) {
  console.log(item);
}
/**
 * Lỗi: weakSet is not iterable
 */

//Vấn đề garbage collection

// khởi tạo object
let obj1 = { x: 1 };

// khởi tạo set và thêm object trên vào set
let set = new Set();
set.add(obj1);

// gán obj1 bằng null
obj1 = null;

// mặc dù obj1 được gán thành null, nhưng object vẫn tồn tại trong set
console.log(set.size); // 1
for (let item of set) {
  console.log(item); // {x: 1}
}