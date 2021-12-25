
debugger;

const num = Number.isFinite, global = isFinite;
console.log(num(100), global(200));
console.log(num("70"), global("80"));
console.log(num(true), global(true));

console.log(num(NaN), global(NaN));
console.log(num(undefined), global(undefined));

