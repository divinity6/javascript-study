
debugger;

//글로벌 Symbol 레지스트리
const one = Symbol.for("sports");
const two = Symbol.for("sports");
console.log(one === two);

console.log(Symbol.for(true));
