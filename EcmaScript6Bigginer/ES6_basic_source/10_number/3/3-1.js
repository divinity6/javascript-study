
debugger;

//true로 인식
const isSafe = Number.isSafeInteger;
console.log(isSafe(7.0));
console.log(isSafe(Number.MAX_SAFE_INTEGER));
console.log(isSafe(Number.MIN_SAFE_INTEGER));
