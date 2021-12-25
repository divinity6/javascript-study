
debugger;

const fn = () => {};
const obj = new WeakMap([
  [fn, "함수"]
]);
console.log(obj.get(fn));
