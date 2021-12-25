
debugger;

const obj = {};
const weakObj = new WeakMap([
  [obj, "오브젝트"]
]);
console.log(weakObj.has(obj));
