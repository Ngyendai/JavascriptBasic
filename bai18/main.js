// Cú pháp 
// let func = (arg1, arg2,..., argN) => expression;

// let func = function(arg1, arg2,..., argN) {
//   return expression;
// }

let sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3

// arrow function 
let square = n => n * n;

// sử dụng arrow function 
let isVietnamese = confirm("Bạn có phải người Việt Nam không?");
let welcome = isVietnamese
  ? () => console.log("Chào bạn!")
  : () => console.log("Hello!");
welcome();

// sử dụng arrow function làm callback
function ask(question, handleYes, handleNo) {
  const answer = confirm(question);
  if (answer) {
    handleYes();
  } else {
    handleNo();
  }
}

ask(
  "Bạn muốn tiếp tục thực hiện chương trình không?",
  () => console.log("You chose Yes!"),
  () => console.log("You chose No!"),
);

// arrow function nhiều dòng code
let sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2)); // 3