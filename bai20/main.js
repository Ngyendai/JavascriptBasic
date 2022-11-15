// Kiểu dữ liệu tham chiếu 
let p1 = { x: 1, y: 2 };
let p2 = p1;

p2.x = 2;
console.log(p2.x); // 2
console.log(p1.x); // 2


// So sánh 2 object bằng tham chiếu 
let x = {};
let y = x;

console.log(y == x); // true
console.log(y === x); // true

let x = {};
let y = {}; // khởi tạo object độc lập
console.log(y == x); // false
console.log(y === x); // false

let x = {};
let y = x; // object cùng tham chiếu
let z = {}; // object độc lập

console.log(Object.is(y, x)); // true
console.log(Object.is(z, x)); // false

// So sánh object qua giá trị cách thủ công
let point1 = { x: 1, y: 2 };
let point2 = { x: 1, y: 2 };
let point3 = { x: 2, y: 3 };

let point1 = { x: 1, y: 2 };
let point2 = { x: 1, y: 2 };
let point3 = { x: 2, y: 3 };

if (point2.x === point1.x && point2.y === point1.y) {
  console.log("point2 bằng point1");
} else {
  console.log("point2 khác point1");
}

if (point3.x === point1.x && point3.y === point1.y) {
  console.log("point3 bằng point1");
} else {
  console.log("point3 khác point1");
}

// point2 bằng point1
// point3 khác point1

function isPointEqual(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
let point1 = { x: 1, y: 2 };
let point2 = { x: 1, y: 2 };
let point3 = { x: 2, y: 3 };

console.log(isPointEqual(point1, point2)); // trueconsole.log(isPointEqual(point1, point3)); // false

function isShallowEqual(obj1, obj2) {
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return false;
  }

  for (let prop in obj2) {
    if (obj2[prop] !== obj1[prop]) return false;
  }

  return true;
}

let point1 = { x: 1, y: 2 };
let point2 = { x: 1, y: 2 };
let point3 = { x: 2, y: 3 };

console.log(isShallowEqual(point1, point2)); // true
console.log(isShallowEqual(point1, point3)); // false

// so sánh nông 
function isShallowEqual(obj1, obj2) {
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return false;
  }

  for (let prop in obj2) {
    if (obj2[prop] !== obj1[prop]) return false;
  }

  return true;
}

let point1 = { x: 1, y: 2, metadata: { type: "point" } };
let point2 = { x: 1, y: 2, metadata: { type: "point" } };
console.log(isShallowEqual(point1, point2)); // false


// so sánh sâu 
// Hàm kiểm tra một giá trị là object
function isObject(obj) {
  return obj != null && typeof obj === "object";
}

// Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1
  const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2

  // nếu số lượng keys khác nhau thì chắc chắn khác nhau
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // kiểm tra xem hai giá trị có cùng là object hay không
    const areObjects = isObject(val1) && isObject(val2);

    // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
    if (areObjects && !isDeepEqual(val1, val2)) {
      return false;
    }

    // nếu không cùng là object thì so sánh giá trị
    if (!areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
}

let point1 = { x: 1, y: 2, metadata: { type: "point" } };
let point2 = { x: 1, y: 2, metadata: { type: "point" } };

console.log(isDeepEqual(point1, point2)); // true