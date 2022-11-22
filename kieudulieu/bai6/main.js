// khởi tạo array
let a1 = [];
let a2 = new Array();

// truy cập phần tử
let letters = ["a", "b", "c"];

console.log(letters[0]); // a
console.log(letters[1]); // b
console.log(letters[2]); // c

// trường hợp chỉ số ngoài phạm vi giới hạn thì kết quả là undefined
console.log(letters[-1]); // undefined
console.log(letters[3]); // undefined

// thay đổi giá trị 
let letters = ["a", "b", "c"];

// thay đổi giá trị của mảng tại chỉ số 0
letters[0] = "A";
console.log(letters[0]); // A

// thêm phần tử 
let letters = ["a", "b", "c"];

// thêm phần tử vào mảng tại chỉ số 3
letters[3] = "d";
console.log(letters[3]); // d


// Một số đặc điểm của array
// thuộc tính length 
let letters = ["a", "b", "c"];

console.log(letters.length); // 3

// giá trị phần tử trong mảng có thể thuộc bất kỳ kiểu dữ liệu nào
let arr = [
  "a", // string
  1, // number
  null, // null
  undefined, // undefined
  { x: 1 }, // object
  function () {
    // hàm
    console.log("hello");
  },
];

// giá trị tại chỉ số 4 là object { x: 1}
console.log(arr[4].x); // 1

// giá trị tại chỉ số 5 là hàm
arr[5](); // hello


// Một số phương thức cơ bản của array
// phương thức arr.pop()
let letters = ["a", "b", "c"];
let item = letters.pop();

console.log(item); // c
console.log(letters); // (2) ['a', 'b']

// Phương thức arr.push()

let letters = ["a", "b", "c"];

// thêm một phần tử vào cuối mảng
let length = letters.push("d");
console.log(length); // 4
console.log(letters); // (4) ['a', 'b', 'c', 'd']

// thêm nhiều phần tử vào cuối mảng
length = letters.push("e", "f");
console.log(length); // 6
console.log(letters); // (6) ['a', 'b', 'c', 'd', 'e', 'f']

// Phương thức arr.shift()
let letters = ["a", "b", "c"];
let item = letters.shift();

console.log(item); // a
console.log(letters); // (2) ['b', 'c']

//Phương thức arr.unshift()

let letters = ["a", "b", "c"];

// thêm một phần tử vào đầu mảng
let length = letters.unshift("d");
console.log(length); // 4
console.log(letters); // (4) ['d', 'a', 'b', 'c']

// thêm nhiều phần tử vào đầu mảng
length = letters.unshift("e", "f");
console.log(length); // 6
console.log(letters); // (6) ['e', 'f', 'd', 'a', 'b', 'c']

/// Mối quan hệ giữa array và object
let letters = ["a", "b", "c"];
let copied = letters;

// giá trị của copied hoàn toàn giống letters
console.log(copied); // (3) ['a', 'b', 'c']

// khi thay đổi giá trị của copied
copied[1] = "new value";

// giá trị của letters cũng thay đổi
console.log(letters[1]); // new value

// sử dụng array theo kiểu object 
// mảng ban đầu có 3 phần tử
let letters = ["a", "b", "c"];

// thêm một phần tử vào mảng ở chỉ số lớn hơn kích thước mảng
letters[1000] = "d";
console.log(letters[1000]); // d

// thêm thuộc tính với tên tùy ý vào mảng
letters.x = 100;
console.log(letters.x); // 100

// độ dài của mảng tăng bất thường
console.log(letters.length); // 1001

// Duyệt tất cả phần tử trong mảng 
let letters = ["a", "b", "c"];

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// for...of
let letters = ["a", "b", "c"];

for (let value of letters) {
  console.log(value);
}

// for...in
let letters = ["a", "b", "c"];

for (let key in letters) {
  console.log(letters[key]);
}

// Vấn đề liên quan đến length của array
let arr = [];
arr[1000] = "a";
console.log(arr.length); // 1001

let letters = ["a", "b", "c"];
console.log(letters.length); // 3

// giảm length xuống thành 2
letters.length = 2;
console.log(letters); // (2) ['a', 'b']

// tăng length thành 5
letters.length = 5;
console.log(letters[2]); // undefined - giá trị cũ là "c"

// Mảng nhiều chiều 
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// truy cập phần tử ở hàng 1, cột 1
console.log(matrix[1][1]); // 5

// toString()
let letters = ["a", "b", "c"];
console.log(letters.toString()); // a,b,c

// cộng array với số 
console.log([] + 3); // 3
console.log([1] + 3); // 13
console.log([1, 2] + 3); // 1,23

// so sánh array
let a = [];
let b = [];

// a và b cùng là mảng rỗng nhưng không bằng nhau
console.log(a === a); // true
console.log(a === b); // false