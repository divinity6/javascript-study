
debugger;

//값을 작성
let obj = {ten: 10};
Object.assign(obj, undefined, null, 200);
console.log(obj);

const one = {un: undefined, nu: null};
Object.assign(obj, one);
console.log(obj);
