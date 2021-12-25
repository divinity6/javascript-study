
debugger;

//String[@@iterator]
const list = "1A";
const obj = list[Symbol.iterator]();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
