//cách sử dụng cơ bản 
let [firstName, lastName] = ["David", "Walsh"];
/*
 * firstName = David
 * lastName = Walsh
 */

let firstName, lastName;

[firstName, lastName] = ["David", "Walsh"];
/*
 * firstName = David
 * lastName = Walsh
 */

let arr = ["David", "Walsh"];
let firstName, lastName;

firstName = arr[0];
lastName = arr[1];

let [firstName, lastName] = ["David"];
/*
 * firstName = David
 * lastName = undefined - vế phải có 1 phần tử nên lastName là undefined
 */

//Khai báo giá trị default
let [firstName, lastName = "Anonymous"] = ["David"];
/*
 * firstName = David
 * lastName = Anonymous
 */

//Bỏ qua một số phần tử trong mảng
let [title, , , color] = ["window", 300, 400, "#000"];
/*
 * title = "window"
 * color = "#000"
 */

//Gán các giá trị còn lại của mảng cho một biến khác
let [title, ...others] = ["window", 300, 400, "#000"];
/*
 * title = "window"
 * others = [300, 400, "#000"]
 */

//Hoán đổi giá trị của biến
//Sử dụng biến trung gian

// khai báo hai biến a, b
let a = 1;
let b = 2;

// sử dụng biến trung gian c, gán bằng a
let c = a;

// hoán đổi giá trị của a, b thông qua c
a = b;
b = c;
/*
 * a = 2
 * b = 1
 */

//Sử dụng tính toán số học
// khai báo hai biến a, b
let a = 1;
let b = 2;

// cộng dồn b vào a
// khi đó giá trị mới của a là tổng của a + b
a = a + b;

// thực hiện phép trừ để được kết quả
b = a - b;
a = a - b;
/*
 * a = 2
 * b = 1
 */

//Sao chép mảng
const a = [1, 2];
const b = a;

console.log(b); // [1, 2]
console.log(b === a); // true

//Destructuring Assignment với Object
//Cách sử dụng cơ bản

let { firstName, lastName } = { firstName: "David", lastName: "Walsh" };
/*
 * firstName = David
 * lastName = Walsh
 */

let firstName, lastName;
({ firstName, lastName } = { firstName: "David", lastName: "Walsh" });
/*
 * firstName = David
 * lastName = Walsh
 */

//Khai báo giá trị default
let { firstName, lastName = "Anonymous" } = { firstName: "David" };
/*
 * firstName = David
 * lastName = Anonymous - lastName bằng Anonymous vì vế phải không có lastName
 */

//Gán tên mới cho biến
let { firstName: fn, lastName: ln } = { firstName: "David", lastName: "Walsh" };
/*
 * fn = David
 * ln = Walsh
 */

//Gán các giá trị còn lại của Object cho một biến khác
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
/*
 * a = 10
 * b = 20
 * rest = { c: 30, d: 40 }
 */

//Destructuring với Object và Array lồng nhau
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true, // trường này không destruct
};

// cấu trúc để destruct phải giống với cấu trúc của Object
let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu", // gán giá trị bởi default
} = options;

/*
 * Kết quả các biến thu được sau khi destructuring:
 * title = "Menu" - giá trị mặc định, vì vế phải không có thuộc tính title
 * width = 100
 * height = 200
 * item1 = "Cake"
 * item2 = "Donut"
 */

//Cài đặt giá trị default cho các tham số của hàm
//Cách làm thông thường
function drawCicle(x = 0, y = 0, radius = 1, color = "black") {
  // code xử lý
}

// Sử dụng
drawCicle(); // hợp lệ
drawCicle(1, 2, 3); // hợp lệ
drawCicle(1, 2, 3, "red"); // hợp lệ
drawCicle("red"); // không hợp lệ
drawCicle("red", 1, 2, 3); // không hợp lệ

//Gộp các tham số vào thành một Object
function drawCicle(options) {
  let x = options.x || 0;
  let y = options.y || 0;
  let radius = options.radius || 1;
  let color = options.color || "black";
  // code xử lý
}

// Sử dụng:
drawCicle({}); // hợp lệ
drawCicle({ x: 1, y: 2, radius: 3 }); // hợp lệ
drawCicle({ x: 1, y: 2, radius: 3, color: "red" }); // hợp lệ
drawCicle({ color: "red", y: 2, x: 1, radius: 3 }); // hợp lệ

//Gộp các tham số thành object kết hợp destructuring assignment
function drawCicle({ x = 0, y = 0, radius = 1, color = "black" }) {
  // code xử lý
}

// Sử dụng
drawCicle({}); // hợp lệ
drawCicle({ x: 1, y: 2, radius: 3 }); // hợp lệ
drawCicle({ x: 1, y: 2, radius: 3, color: "red" }); // hợp lệ
drawCicle({ color: "red", y: 2, x: 1, radius: 3 }); // hợp lệ

function drawCicle({ x = 0, y = 0, radius = 1, color = "black" } = {}) {
  // code xử lý
}

drawCicle({}); // hợp lệ
drawCircle(); // vẫn hợp lệ