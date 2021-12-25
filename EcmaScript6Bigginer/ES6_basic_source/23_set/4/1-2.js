
debugger;

//일반 함수로 콜백 함수 작성
const obj = new Set([
  "one", "two"
]);
function callback(value, key, set){
  console.log(`${value}, ${this.check}`);
};
obj.forEach(callback, {check: "ABC"});
