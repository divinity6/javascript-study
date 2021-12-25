
debugger;

//false로 인식
const isSafe = Number.isSafeInteger;
console.log(isSafe(7.1));
console.log(isSafe("100"));
console.log(isSafe(NaN));
console.log(isSafe(Infinity));
