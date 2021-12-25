
debugger;

const target = "ABC";
console.log(target.startsWith("AB"));
console.log(target.startsWith("BC"));

console.log(/^AB/.test(target));
