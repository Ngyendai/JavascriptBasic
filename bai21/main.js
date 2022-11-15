// copy dùng for..in
let p1 = { x: 1, y: 2 };

let p2 = {};
for (let key in p1) {
  p2[key] = p1[key];
}
console.log(p2.x); // 1
console.log(p2.y); // 2

p2.x = 5;
console.log(p2.x); // 5
console.log(p1.x); // 1



// Object.assign(dest, [src1, src2, src3...]);

let user = { name: "Alex" };
let permission1 = { canView: true };
let permission2 = { canEdit: false };

// copy toàn bộ thuộc tính từ permission1 và permission2 vào user
Object.assign(user, permission1, permission2);
// user trở thành { name: "Alex", canView: true, canEdit: false }
for (let key in user) {
  console.log(key, ":", user[key]);
}

// name : Alex
// canView: true
// canEdit: false

let user = { name: "Alex" };
let permission1 = { canView: true };
let permission2 = { canView: false, canEdit: false };
// copy toàn bộ thuộc tính từ permission1 và permission2 vào user
Object.assign(user, permission1, permission2);

// user trở thành { name: "Alex", canView: false, canEdit: false }
for (let key in user) {
  console.log(key, ":", user[key]);
}

// name : Alex
// canView: false
// canEdit: false

let p1 = { x: 1, y: 2 };
let p2 = {};

Object.assign(p2, p1);


// Copy nông 
let point1 = { x: 1, y: 2, metadata: { type: "point" } };

let point2 = {};

Object.assign(point2, point1);
console.log(point2.metadata.type); // point

point2.metadata.type = "CHANGED";
console.log(point2.metadata.type); // CHANGEDconsole.log(point1.metadata.type); // CHANGED

// Copy dùng cú pháp spread (...)
let p1 = { x: 1, y: 2 };
let p2 = { ...p1 };


// copy sâu
et point1 = {
  x: 1,
  y: 2,
  metadata: {
    type: "point",
  },
};

// chuyển object về dạng JSON
let jsonPoint1 = JSON.stringify(point1);
console.log(jsonPoint1); // {"x":1,"y":2,"metadata":{"type":"point"}}

// parse JSON lại thành object mới
let point2 = JSON.parse(jsonPoint1);
console.log(point2.metadata.type); // point

point2.metadata.type = "CHANGED";
console.log(point2.metadata.type); // CHANGED
console.log(point1.metadata.type); // point

// Gioi hạn JSON.stringify và JSON.parse
et point1 = {
  x: 1,
  y: 2,
  getDisplayName: function () {
    return "(x: " + x + ", y: " + y + ")";
  },
};

// chuyển object về dạng JSON
let jsonPoint1 = JSON.stringify(point1);
console.log(jsonPoint1); // {"x":1,"y":2}

// parse JSON lại thành object mới
let point2 = JSON.parse(jsonPoint1);
console.log(point2.getDisplayName); // undefined