
debugger;

//lastIndex 값 지정
const value = "AABBA", obj = /A/y;
console.log(obj.sticky);
obj.lastIndex = 4;
console.log(obj.test(value) + ": " + obj.lastIndex);
