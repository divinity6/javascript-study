
debugger;

const fn = function(){};
const obj = new WeakMap([
  [fn, "함수"]
]);
console.log(obj.delete(fn));
console.log(obj.has(fn));
