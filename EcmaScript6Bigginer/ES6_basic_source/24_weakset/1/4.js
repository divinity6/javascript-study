
debugger;

const obj = new WeakSet();
const fn = () => {};
obj.add(fn);
console.log(obj.has(fn));
