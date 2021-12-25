
debugger;

const Sports = function(){};
const obj = new Sports();
console.log(obj.toString());

Sports.prototype[Symbol.toStringTag] = "농구";
console.log(obj.toString());
