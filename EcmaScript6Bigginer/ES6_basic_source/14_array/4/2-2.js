
debugger;

//-1 반환
const list = ["A", "B", "C"];
const cb = (value, index, all) => value === 77;
const result = list.findIndex(cb);
console.log(result);
