
debugger;

//프로퍼티 값 추출
const sym = Symbol("설명");
const obj = {[sym]: 100};
console.log(obj[sym]);
console.log(obj.sym);
