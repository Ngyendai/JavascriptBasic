
//Cú pháp console.log -> console.log(obj1 [, obj2, ..., objN]);
const foo = 1;
const bar = "bar";
const baz = { name: "John", age: "30", gender: "male" };

console.log(foo, bar, baz);
// => 1 "bar" {name: "John", age: "30", gender: "male"}
//console.log(msg [, subst1, ..., substN]);
const foo = 1;
const bar = "bar";
const baz = { name: "John", age: "30", gender: "male" };

console.log("Log: %d, %s and %o", foo, bar, baz);
// => Log: 1, bar and {name: "John", age: "30", gender: "male"}

const foo = 1;
const bar = "bar";
const baz = { name: "John", age: "30", gender: "male" };

console.log("Log: %d, %s and %s", foo, bar, baz);
// => Log: 1, bar and Object

//Sử dụng console.log hiệu quả
const foo = { name: "Alex", age: "26", gender: "male" };
const bar = { name: "Jenifer", age: "18", gender: "female" };
const baz = { name: "John", age: "30", gender: "male" };

console.log(foo, bar, baz);

/*
 * {name: "Alex", age: "26", gender: "male"}
 * {name: "Jenifer", age: "18", gender: "female"}
 * {name: "John", age: "30", gender: "male"}
 */

//Sử dụng console.table hiển thị thông tin trực quan hơn
const foo = { name: "Alex", age: "26", gender: "male" };
const bar = { name: "Jenifer", age: "18", gender: "female" };
const baz = { name: "John", age: "30", gender: "male" };

console.table([foo, bar, baz]);

//Sử dụng console.time và console.timeEnd
let start = performance.now();

let i = 0;
while (i < 1000000) {
  i++;
}

let end = performance.now();

console.log(`looper: ${end - start}ms`);
// => looper: 5.25999999808846ms
console.time("looper");

let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd("looper");
// => looper: 5.14501953125ms