const provinces = [
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hòa Bình",
  "Hưng Yên",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
];
const result = provinces.sort();
console.log(result);

/*
    [
      "Hà Giang",
      "Hà Nam",
      "Hà Nội",
      "Hà Tĩnh",
      "Hòa Bình",
      "Hưng Yên",
      "Hải Dương",
      "Hải Phòng",
      "Hậu Giang"
    ]
    */
    const result = provinces.sort((a, b) => a.localeCompare(b));
    console.log(result);
    
    /*
        [
          "Hà Giang",
          "Hà Nam",
          "Hà Nội",
          "Hà Tĩnh",
          "Hải Dương",
          "Hải Phòng",
          "Hậu Giang",
          "Hòa Bình",
          "Hưng Yên"
        ]
        */