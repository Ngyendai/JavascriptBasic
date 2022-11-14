// Toán tử Nullish Coalescing -> result = a ?? b , 
result = a !== null && a !== undefined ? a : b;
let name;

console.log(name ?? "Người dùng ẩn danh");

let name = "jsDev";

console.log(name ?? "Người dùng ẩn danh"); // jsDev

let fullName;
let nickName = "jsDev";

const displayName = fullName ?? nickName ?? "Người dùng ẩn danh";
console.log(displayName); // jsDev

let fullName;
let nickName = "jsDev";

const displayName = fullName || nickName || "Người dùng ẩn danh";
console.log(displayName); // jsDev
let length = 0;



// So sánh toán tử ?? và toán tử ||
console.log(length || 10); // 10
console.log(length ?? 10); // 0

// Thứ tự ưu tiên
let x;
let y;

const sum = (x ?? 2) * (y ?? 3); // => 2 * 3console.log(sum); // 6

// Sử dụng toán tử ?? cùng với || hoặc && 
let x = (1 && 2) ?? 3; // => 2 ?? 3
console.log(x); // 2

let y = 1 && (2 ?? 3); // => 1 && 2
console.log(y); // 2