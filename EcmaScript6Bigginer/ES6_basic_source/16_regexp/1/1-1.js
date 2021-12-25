
debugger;

//정규 표현식 사용 형태
const value = "ABC";
const obj = new RegExp("A", "g");
console.log(obj.test(value));
const reg = /A/g;
console.log(reg.test(value));
