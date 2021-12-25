
debugger;

//콜백 함수에서 this 사용
const obj = new Map([
  ["one", 100],
  ["two", 200]
]);
function callback(value, key, map){
  console.log(`${key}, ${value}, ${this.check}`);
};
obj.forEach(callback, {check: 50});
