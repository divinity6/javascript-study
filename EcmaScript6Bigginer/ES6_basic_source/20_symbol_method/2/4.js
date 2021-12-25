
debugger;

const obj = {point: 100};
obj[Symbol("one")] = 200;
obj[Symbol.for("two")] = 300;
console.log(Object.getOwnPropertyNames(obj));
const list = Object.getOwnPropertySymbols(obj);
for (const sym of list){
  console.log(`${sym.description}: ${obj[sym]}`);
};
