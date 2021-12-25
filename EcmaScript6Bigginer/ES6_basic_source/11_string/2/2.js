
debugger;

const result = "가나다".codePointAt(2);
console.log(result);
console.log(typeof result);

console.log("가나다".codePointAt(3));
console.log(String.fromCodePoint(result));
