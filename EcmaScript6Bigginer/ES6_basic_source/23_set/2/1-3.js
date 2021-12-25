
debugger;

//value에 생성한 함수 이름 작성
const sports = () => { return 100; };
let obj = new Set();
obj.add(sports);
obj.add(sports);
for (let value of obj) {
  console.log(value());
};
