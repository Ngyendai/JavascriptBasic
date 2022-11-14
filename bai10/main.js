// 1. Toán tử so sánh

console.log(5 > 6); // false (sai)
console.log(5 < 6); // true (đúng)
console.log(5 >= 6); // false (sai)
console.log(5 <= 6); // true (đúng)
console.log(5 == 6); // false (sai)
console.log(5 === 6); // false (sai)
console.log(5 != 6); // true (đúng)
console.log(5 !== 6); // true (đúng)

// 2. So sánh string
console.log("A" < "Z"); // true
console.log("Small" < "Smart"); // true
console.log("Big" < "BigBang"); // true

// 3. So sánh khác với kiểu dữ liệu 
console.log("5" > 4); // true, vì "5" chuyển thành 5
console.log("01" == 1); // true, vì "01" chuyển thành 1
console.log("11" == 1); // false, vì "11" chuyển thành 11
console.log(true == 1); // true
console.log(false == 0); // false
console.log("" == 0); // true
console.log("0" == 0); // true
console.log("" == "0"); // false

// 4. So sánh bằng nghiêm ngặt
// So sánh bằng không nghiêm ngặt
console.log("" == 0); // true

// So sánh bằng nghiêm ngặt
console.log("" === 0); // false

// So sánh khác không nghiêm ngặt
console.log("" != 0); // false

// So sánh khác nghiêm ngặt
console.log("" !== 0); // true

// 5. So sánh null và undefined
console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null >= undefined); // false
console.log(null <= undefined); // false

// 6. So sánh null với 0
console.log(null > 0); // false (1)
console.log(null >= 0); // true (2)
console.log(null == 0); // false (3)

// 7. So sánh undenied với 0
console.log(undefined > 0); // false (1)
console.log(undefined >= 0); // false (2)
console.log(undefined == 0); // false (3)

// 8. Thứ tự ưu tiên 
console.log(3 > 2 > 1); // false