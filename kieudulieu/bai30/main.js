// Prototype trong JavaScript
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // gán rabbit.[[Prototype]] = animal


//Giới hạn của prototype trong JavaScript
// Không được phép kế thừa prototype vòng tròn
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

// gán animal là prototype của rabbitrabbit.__proto__ = animal;// gán rabbit là prototype của animalanimal.__proto__ = rabbit;
// Lỗi: Cyclic __proto__ value

// Giá trị của __proto__ có thể là null hoặc là một object, nhưng các kiểu dữ liệu khác đều bị bỏ qua
let rabbit = {
  jumps: true,
  __proto__: 1, // bị bỏ qua};
};

//Prototype không hỗ trợ thay đổi giá trị thuộc tính
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal, // gán animal là prototype của rabbit};

  // định nghĩa giá trị mới cho rabbit.walkrabbit.walk = function () {  console.log("Rabbit walk");};
  rabbit.walk(); // Rabbit walk - giá trị mớianimal.walk(); // Animal walk - giá trị cũ
}

//Giá trị this khi kế thừa prototype
// đối tượng animal với các phương thức
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

// đối tượng rabbit kế thừa prototype của animal
let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// thay đổi giá trị rabbit.isSleeping
rabbit.sleep();

// kết quả
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined

// Vòng lặp for...in khi kế thừa prototype
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (let prop in rabbit) console.log(prop);
// jumps
// eats

//Sử dụng phương thức Object.keys()
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(Object.keys(rabbit)); // ['jumps']

// Sử dụng obj.hasOwnProperty(key) để kiểm tra
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}