
debugger;

const fn = function(){};
const obj = new WeakMap([
  [fn, "함수"]
]);
console.log(obj.get(fn));

obj.set(fn, "함수 변경");
console.log(obj.get(fn));
