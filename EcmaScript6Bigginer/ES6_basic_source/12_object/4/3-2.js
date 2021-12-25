
debugger;

//프로퍼티 키 값이 같은 경우
const list = [["one", 10], ["one", 20]];
const obj = Object.fromEntries(list);
console.log(obj);
