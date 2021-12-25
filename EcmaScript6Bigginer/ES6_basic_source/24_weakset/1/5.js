
debugger;

const fn = () => {};
const obj = new WeakSet([
  fn
]);
console.log(obj.delete(fn));
console.log(obj.has(fn));
