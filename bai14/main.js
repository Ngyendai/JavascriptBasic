// Cú pháp 
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
//     default:
//       ...
//       [break]
//   }


const x = 2 + 3;

switch (x) {
  case 4:
    console.log("Less than");
    break;
  case 5:
    console.log("Equal");
    break;
  case 6:
    console.log("Greater than");
    break;
  default:
    console.log("Don't know the answer");
}

// Equal

// Không có từ khóa break
const x = 2 + 3;

switch (x) {
  case 4:
    console.log("Less than");
  case 5:
    console.log("Equal");
  case 6:
    console.log("Greater than");
  default:
    console.log("Don't know the answer");
}

// Equal
// Greater than
// Don't know the answer

// Switch case có biểu thức 
let x = "3";
let v = 0;

switch (x - 1) {
  case v + 1:
    console.log("case 1");
    break;
  case v + 2:
    console.log("case 2");
    break;
  default:
    console.log("default");
}

// case 2

// Nhóm các case 
const n = 5;

switch (n) {
  case 3:
    console.log("Hi!");
    break;
  case 4:
    console.log("Hello!");
    break;
  case 5:
    console.log("Hi!");
    break;
  default:
    console.log("Bye!");
}

// Hi!

const n = 5;

switch (n) {
  case 4:
    console.log("Hello!");
    break;
  case 3:
  case 5:
    console.log("Hi!");
    break;
  default:
    console.log("Bye!");
}

// Hi!

// Vấn đề so sánh bằng nghiêm ngặt 
let x = 3;

switch (x) {
  case "3":
    console.log("string");
    break;
  case 3:
    console.log("number");
    break;
  default:
    console.log("unknown");
    break;
}

// number