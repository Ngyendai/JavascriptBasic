// 1. Truthy và falthy 
// Truthy
console.log(Boolean(true)); // true (giá trị true)
console.log(Boolean(1)); // true (số nguyên dương)
console.log(Boolean(-1)); // true (số nguyên âm)
console.log(Boolean(100n)); // true (số BigInt khác 0)
console.log(Boolean(1.5)); // true (số thực dương)
console.log(Boolean(-1.5)); // true (số thực âm)
console.log(Boolean("0")); // true (string khác rỗng)
console.log(Boolean("abc")); // true (string khác rỗng)
console.log(Boolean([])); // true (mảng - array)
console.log(Boolean({ x: 1 })); // true (đối tượng - object)
console.log(Boolean(Infinity)); // true (số dương vô cùng)
console.log(Boolean(-Infinity)); // true (số âm vô cùng)
console.log(Boolean(alert)); // true (hàm)


// falthy 
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false (string rỗng)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Toán từ OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true || true); // true
console.log(true || false || true); // true
console.log(false || true || false); // true
console.log(false || false || false); // false

console.log(1 || 0); // 1 (giá trị truthy đầu tiên là 1)
console.log(null || 2); // 2 (giá trị truthy đầu tiên là 2)
console.log("" || undefined || 0 || 10); // 10 (giá trị truthy đầu tiên là 10)
console.log(null || 100 || 5 || undefined); // 100 (giá trị truthy đầu tiên là 100)
console.log("" || 0 || null); // null (không có giá trị truthy, trả về giá trị cuối cùng)

const a = 1;
const b = 0;

if (a || b) {
  console.log("truthy!"); // câu lệnh này được thực hiện vì 1 || 0 trả về 1 - là truthy.
}

const hour = 20;

if (hour < 9 || hour > 17) {
  console.log("Ngoài giờ làm việc"); // câu lệnh này được thực hiện
}

const fullName = "";
const nickName = "jsDev";

const displayName = fullName || nickName || "Người dùng ẩn danh";
console.log(displayName); // jsDev

true || console.log("Câu lệnh này không được thực hiện"); // (1)
false || console.log("Câu lệnh này được thực hiện"); // (2)

// Toán tử AND 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true && true && true); // true
console.log(true && false && true); // false
console.log(false && true && false); // false
console.log(false && false && false); // false
const a = 1;
const b = "hello";

if (a && b) {
  console.log("truthy!");
  // câu lệnh trên được thực hiện vì 1 && "hello" trả về "hello" - là truthy.
}

// Toán tử NOT
console.log(!true); // false
console.log(!false); // true
console.log(!"hello"); // false ("hello" là truthy)
console.log(!100); // false (100 là truthy)
console.log(!""); // true ("" là falsy)
console.log(!0); // true (0 là falsy)
console.log(!null); // true (null là falsy)
console.log(!undefined); // true (undefined là falsy)
console.log(!!"hello"); // true
console.log(!!null); // false

// Thứ tự ưu tiên 
console.log(1 + 2 || ("javascript" && 4 > 5));
// 1 + 2 || !"javascript" && 4 > 5;
//     -> (1 + 2) || !"javascript" && 4 > 5; // toán tử số học có độ ưu tiên cao nhất
//     -> 3 || !"javascript" && 4 > 5;
//     -> 3 || !"javascript" && (4 > 5); // toán tử so sánh ưu tiên cao hơn toán tử logic
//     -> 3 || !"javascript" && false;
//     -> 3 || (!"javascript") && false; // toán tử NOT có độ ưu tiên cao hơn AND và OR
//     -> 3 || false && false;
//     -> 3 || (false && false); // toán tử AND có độ ưu tiên cao hơn OR
//     -> 3 || false;
//     -> 3 // giá trị truthy đầu tiên là 3