// Vd về kí tự đặc biệt 
let userList = "Users: \n+ Alex \n+ John \n+ Anna";

console.log(userList);

/*
    Users:
    + Alex
    + John
    + Anna
    */

    // unicode
    console.log("\u00A9"); // ©
console.log("\u{20331}"); // 佫
console.log("\u{1F60D}"); // 😍

// độ dài string 
console.log(`Me\n`.length); // 3

// truy cập các kí tự của string 
let str = "hello";

// Lấy kí tự đầu tiên
console.log(str[0]); // h

// Lấy kí tự cuối cùng
console.log(str[str.length - 1]); // o


let str = "hello";

console.log(str[1000]); // undefined
console.log(str.charAt(1000)); // ""

let str = "hello";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// dùng for để truy cập
let str = "hello";

for (let c of str) {
  console.log(c);
}


// string là bất biến, không thể thay đổi kí tự 
let str = "hello";
str[0] = "H";
console.log(str); // hello - string không thay đổi


// thay đổi chữ hoa và thường
//toLowerCase
console.log("Hello".toLowerCase()); // hello
//toUpperCase
console.log("Hello".toUpperCase()); // HELLO

// Tìm kiếm substring
let str = "I am a js dev";

console.log(str.indexOf("js")); // 7
console.log(str.indexOf("JS")); // -1 vì không tìm thấy
console.log(str.indexOf("a")); // 2 - vị trí đầu tiên tìm thấy

// pos
let str = "I am a js dev";
console.log(str.indexOf("a", 3)); // 5 - vị trí đầu tiên tìm thấy bắt đầu từ 3

let str = "I am a js dev";
let target = "a";

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos === -1) break;

  console.log("found pos:", foundPos);
  pos = foundPos + 1;
}
// str.lastIndexOf(substr, pos)
let str = "I am a js dev";
console.log(str.lastIndexOf("a")); // 5 - vị trí đầu tiên tìm thấy tính từ cuối


// str.includes(substr, pos)
let str = "I am a js dev";
console.log(str.includes("js")); // true
console.log(str.includes("JS")); // false

// pos
let str = "I am a js dev";
console.log(str.includes("js", 1)); // true
console.log(str.includes("js", 9)); // false

//str.startsWith(substr)

let str = "I am a js dev";
console.log(str.startsWith("I am")); // true
console.log(str.startsWith("js")); // false

// Phương thức str.endsWith(substr)
let str = "I am a js dev";
console.log(str.endsWith("I am")); // false
console.log(str.endsWith("dev")); // true

// Lấy giá trị substring 
// str.slice(start [, end])
let str = "I am a js dev";
console.log(str.slice(2, 4)); // am

// không có end 
let str = "I am a js dev";
console.log(str.slice(2)); // am a js dev

// str.substring(start [, end])
let str = "I am a js dev";

// trường hợp bình thường
console.log(str.substring(2, 4)); // am

// trường hợp không có end
console.log(str.substring(2)); // am a js dev

// trường hợp start lớn hơn end
console.log(str.substring(4, 2)); // am

//str.substr(start [, length])
let str = "I am a js dev";
console.log(str.substr(2, 2)); // am - bắt đầu từ vị trí 2, lấy 2 kí tự


// không có giá trị length thì trả về string 
let str = "I am a js dev";
console.log(str.substr(2)); // am a js dev - trả về đến hết string

let str = "I am a js dev";
console.log(str.substr(-2, 2)); // ev

// So sánh string 
console.log("a" > "A"); // truec

//str.codePointAt(pos)
console.log("a".codePointAt(0)); // 97
console.log("A".codePointAt(0)); // 65

//String.fromCodePoint(code)
console.log(String.fromCodePoint(97)); // a
console.log(String.fromCodePoint(65)); // A

// Thêm kí tự \u
console.log("\u0061"); // a - mã hexa của a là 61
console.log("\u0041"); // A - mã hexa của A là 41