
debugger;

const result = Object.is(10, "10");
console.log(result);

const one = {}, two = {};
console.log(Object.is(one, two));
