// cú pháp func`template string with ${expression}`;

// func
const math = ([x, y], op) => op(Number(x), Number(y));

// expression
const plus = (x, y) => x + y;

// tagged template string
const result = math`6 ${plus} 3`;

// kết quả
console.log(result); // 9

// func
const func = (arr, expr1, expr2) => {
  console.log(arr); // (1)
  console.log(expr1, expr2); // (2)
  return { x: "1" };
};

// expression
const a = 1;
const b = 2;

// tagged template
const result = func`${a} and then ${b}`;

// kết quả
console.log(result); // (3)

// (1) - mảng các string: ["", " and then ", ""]
// (2) - các expression: 1 2
// (3) - kết quả: { x: "1" }