
debugger;

//lastIndex 값 지정
const value = "ABACC", obj = /B/;
console.log(obj.test(value) + ": " + obj.lastIndex);
obj.lastIndex = 2;
console.log(obj.test(value) + ": " + obj.lastIndex);
console.log(obj.test(value) + ": " + obj.lastIndex);
