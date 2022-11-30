// Cú pháp new Function -> let func = new Function([arg1, arg2, ...argN], functionBody);
let sum = new Function("a", "b", "return a + b");

console.log(sum(1, 2)); // 3


// hàm không có tham số truyền vào

let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello