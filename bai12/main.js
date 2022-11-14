// If
const x = 2;

if (x % 2 === 0) console.log("x is an even number");

// if else
const x = 3;

if (x % 2 === 0) {
  console.log("x is an even number");
} else {  console.log("x is an odd number"); // câu lệnh này được thực thi}


const age = 24;

if (age < 18) {
  console.log("Too young!");
} else if (age > 50) {
  console.log("Too old!");
} else {
  console.log("OK!");
}
// OK!

// Toán tử rẽ nhánh -> const result = condition ? value1 : value2;
const age = 24;

const enoughAge = age < 18 ? false : true;
console.log(enoughAge); // true

const age = 24;

const message = age < 18 ? "Too young!" : age > 50 ? "Too old!" : "OK!";
console.log(message); // OK!