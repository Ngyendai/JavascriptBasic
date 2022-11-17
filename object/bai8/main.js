// Optional chaining trong js
// user có thuộc tính address
let user1 = {
  address: {
    street: "Hai Ba Trung",
  },
};
console.log(user1?.address?.street); // Hai Ba Trung
// user không có thuộc tính address
let user2 = {};
console.log(user2?.address?.street); // undefined

// Optional chaining có thể làm "short-ciruiting"
let user = null;
let x = 0;

user?.sayHi(x++); // sayHi không được thực thi vì user là null

console.log(x); // 0, giá trị của x không tăng lên

// Các biến thể của optional chaining 
// vd về ?. với hàm
let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // không có gì hiển thị

// vd về ?. với toán tử []
let user1 = {
  name: "Alex",
};

let user2 = null;

console.log(user1?.["name"]); // Alex
console.log(user2?.["name"]); // undefined