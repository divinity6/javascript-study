
debugger;

//undefined 반환
const list = ["A", "B", "C"];
const cb = (value, index, all) => value === 77;
const result = list.find(cb);
console.log(result);
