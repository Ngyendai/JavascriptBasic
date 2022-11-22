// cú pháp
`string`;

let name = "Lam Pham";
let greeting = `I'm ${name}`;

console.log(greeting); // I'm Lam Pham

// Nối chuỗi
// phương thức concat()
let intro = "Hello everyone, I'm";
let firstName = "Lam";
let lastName = "Pham";

let full1 = intro.concat(" ", firstName, " ", lastName, ".");
console.log(full1); // Hello everyone, I'm Lam Pham.

// Toán từ + 
let intro = "Hello everyone, I'm";
let firstName = "Lam";
let lastName = "Pham";

let full2 = intro + " " + firstName + " " + lastName + ".";
console.log(full2); // Hello everyone, I'm Lam Pham.

// ES6 Template 
let intro = "Hello everyone, I'm";
let firstName = "Lam";
let lastName = "Pham";

let full3 = `${intro} ${firstName} ${lastName}.`;
console.log(full3); // Hello everyone, I'm Lam Pham.

// Viết string nhiều dòng 
let str =
  "Hello everyone!\n" +
  "This is line 1 of multiline string example.\n" +
  "This is line 2 of multiline string example.";

console.log(str);
/*
    Hello everyone!
    This is line 1 of multiline string example.
    This is line 2 of multiline string example.
    */

// sử dụng ES6 Template
let str = `Hello everyone!
    This is line 1 of multiline string example.
    This is line 2 of multiline string example.`;

console.log(str);
/*
    Hello everyone!
    This is line 1 of multiline string example.
    This is line 2 of multiline string example.
    */

// Viết biểu thức toán học hoặc hàm ngay trong string
// cách thông thường
let x = 1;
let y = 2;
let sum = (x, y) => x + y;

console.log("Sum of x and y is: " + (x + y)); // Sum of x and y is: 3

console.log("Sum of x and y is: " + sum(x, y)); // Sum of x and y is: 3

// dùng ES6 Template
let x = 1;
let y = 2;
let sum = (x, y) => x + y;

console.log(`Sum of x and y is: ${x + y}`); // Sum of x and y is: 3

console.log(`Sum of x and y is: ${sum(x, y)}`); // Sum of x and y is: 3