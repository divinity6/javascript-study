
debugger;

//Object를 value로 사용
const sports = {
  "축구": 11, "야구": 9
};
let obj = new Set();
obj.add(sports);
for (let value of obj) {
  console.log(value);
};
