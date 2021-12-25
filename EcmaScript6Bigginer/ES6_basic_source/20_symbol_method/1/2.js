
debugger;

const one = Symbol.for("book");
const six = Symbol.keyFor(one);
console.log(six);
