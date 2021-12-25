
debugger;

const target = "ABC";
console.log(target.endsWith("BC"));
console.log(target.endsWith("AB"));

console.log(/BC$/.test(target));
