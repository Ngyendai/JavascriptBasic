// Phương thức JSON.stringify
let user = {
  name: "Alex",
  age: 28,
};

let json = JSON.stringify(user);
console.log(json); // {"name":"Alex","age":28}
console.log(typeof json); // string

// JSON với các kiểu dữ liệu 
// số chuyển sang JSON vẫn là số
console.log(JSON.stringify(1)); // 1

// string chuyển sang JSON vẫn là string, nhưng sử dụng dấu ""
console.log(JSON.stringify("test")); // "test"

// boolean chuyển sang JSON vẫn là boolean
console.log(JSON.stringify(true)); // true

// mảng chuyển sang JSON
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

let user = {
  // phương thức bị bỏ qua
  sayHi() {
    console.log("Hello");
  },
  [Symbol("id")]: 12356, // symbole bị bỏ qua
  something: undefined, // thuộc tính với giá trị undefined cũng bị bỏ qua
};

console.log(JSON.stringify(user)); // {} (string không có thuộc tính nào)

// JSON.stringify áp dụng được với object, array có nhiều tầng lồng nhau
let meetup = {
  title: "Conference",
  room: { number: 23, participants: ["alex", "ann"] },
};

console.log(JSON.stringify(meetup));

//JSON.stringify không hỗ trợ nếu object có tham chiếu vòng tròn
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: ["alex", "ann"],
};

meetup.place = room; // meetup tham chiếu đến room
room.occupiedBy = meetup; // room tham chiếu lại đến meetup.

JSON.stringify(meetup); // Lỗi: Converting circular structure to JSON

// Cú pháp -> JSON.stringify
let json = JSON.stringify(value[, replacer, space])

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "Alex" }, { name: "Anna" }],
  place: room, // meetup tham chiếu đến room
};

room.occupiedBy = meetup; // room tham chiếu đến meetup

console.log(JSON.stringify(meetup, ["title", "participants"])); // {"title":"Conference","participants":[{},{}]}

//Sử dụng tham số space trong JSON.stringify
let user = {
  name: "Alex",
  age: 28,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

// replacer = null - nếu không muốn tùy chỉnh tham số này.
// space = 2 - các thuộc tính sẽ xuống dòng và thụt 2 dấu cách so với cha.
let json = JSON.stringify(user, null, 2);
console.log(json);
/*
    {
      "name": "Alex",
      "age": 28,
      "roles": {
        "isAdmin": false,
        "isEditor": true
      }
    }
    */

 //Tùy biến toJSON
 let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2021, 11, 19)),
  room,
};

console.log(JSON.stringify(meetup, null, 2));
/*
    {
      "title": "Conference",
      "date": "2021-12-19T00:00:00.000Z",
      "room": {
        "number": 23
      }
    }
    */

//Phương thức JSON.parse
// Cú pháp -> let value = JSON.parse(str, [reviver]);

// JSON-string dạng mảng
let numbers = "[0, 1, 2, 3]";

// parse JSON-string về mảng
numbers = JSON.parse(numbers);

// sau khi numbers được parse thành array,
// bạn có thể truy cập phần tử mảng qua chỉ số
console.log(numbers[1]); // 1

let data =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(data);

console.log(user.friends[1]); // 1

//Sử dụng reviver trong JSON.parse

let str = '{"title":"Conference","date":"2021-12-19T10:00:00.000Z"}';

let meetup = JSON.parse(str, function (key, value) {
  // nếu key là "date" thì trả về new Date(value)
  if (key === "date") {
    return new Date(value);
  }

  // ngược lại thì giữ nguyên giá trị value gốc.
  return value;
});

console.log(meetup.date.getDate()); // 19

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2021-12-19T10:00:00.000Z"},
    {"title":"Birthday","date":"2021-12-20T10:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function (key, value) {
if (key === "date") return new Date(value);
return value;
});

console.log(schedule.meetups[1].date.getDate()); // 20