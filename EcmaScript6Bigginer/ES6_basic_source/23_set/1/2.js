
debugger;

//Set 인스턴스 생성
const obj = new Set([
  1, 2, 1, [], {}
]);
console.log(`size: ${obj.size}`);
for (let value of obj){
  console.log(value);
};
