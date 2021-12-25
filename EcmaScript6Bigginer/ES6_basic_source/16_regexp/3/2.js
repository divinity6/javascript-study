
debugger;

const text = `line
줄을 바꿈`;
// 이전 방법
console.log(/[\s\S]+/.test(text));
console.log(/[^]+/.test(text));
// s 플래그
const obj = new RegExp(".+", "s");
console.log(obj.test(text));
console.log(obj.dotAll);
