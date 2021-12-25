
debugger;

const fn = new Function("one", "return one");
console.log(fn(100));

const create = Object.getPrototypeOf(function*(){}).constructor;

const sports = new create("one", "yield one");
const obj = sports(100);
console.log(obj.next());
