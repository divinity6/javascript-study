
debugger;

//함수를 생성하여 value로 사용
let obj = new Set();
obj.add(function sports(){ return 100; });
obj.add(function sports(){ return 200; });
for (let value of obj) {
  console.log(value());
};
