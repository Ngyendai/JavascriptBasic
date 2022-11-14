// Vòng lặp while 
// Cú pháp
// while (condition) {
//     // code
//   }

let count = 1;

while (count <= 3) {
  console.log(count);
  count++;
}

// 1
// 2
// 3

let n = 3;

// Khi n === 0 thì n là falsy, suy ra vòng lặp kết thúc.
while (n) {
  console.log(n);
  n--; // Giá trị của n giảm đi 1 đơn vị sau mỗi lượt lặp
}

// 3
// 2
// 1

// Vòng lặp do...while
// Cú pháp 
// do {
//     // code
//   } while (condition);

let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 3);

// 1
// 2
// 3

// Vòng lặp for
// for([khởi tạo]; [điều kiện]; [cập nhật]){
//     // code
//   }

for (let count = 1; count <= 3; count++) {
    console.log(count);
  }
  
  // 1
  // 2
  // 3


  // Cố gắng truy cập biến count ở ngoài vòng for
  for (let count = 1; count <= 3; count++) {
    console.log(count);
  }
  
  console.log(count); // Uncaught ReferenceError: count is not defined

// Truy cập biến count bất kỳ nơi đâu
  let count;
for (count = 1; count <= 3; count++) {
  console.log(count);
}

console.log(count); // 4


// Thoái khỏi vòng lặp 
for (let number = 8; ; number++) {
    if (number % 7 === 0) {
      console.log(number);
      break;
    }
  }
  
  // 14

  for (let number = 8; ; number++) {
    if (number % 2 === 0) continue;
    if (number % 7 === 0) {
      console.log(number);
      break;
    }
  }
  
  // 21

  for (let number = 1; number <= 5; number++) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
  
  // 2
  // 4

  for (let number = 1; number <= 5; number++) {
    if (number % 2 !== 0) continue;
    console.log(number);
  }
  
  // 2
  // 4

  for (let number = 1; number <= 5; number++) {
    number % 2 === 0 ? console.log(number) : continue;}

  // Uncaught SyntaxError: Unexpected token 'continue'


  // Sử dụng label với break và label
// Cú pháp
// labelName: for (...) {
//     // code
//     break labelName;
//   }

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i * j >= 4) {
        break outer;
      }
  
      console.log(i, j);
    }
  }

  let x = 1;

    if (x === 1) {  break;}
    // Uncaught SyntaxError: Illegal break statement