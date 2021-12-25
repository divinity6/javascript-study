
debugger;

const obj = new Set([
  "one", "two"
]);
console.log(obj.size);

obj.clear();
console.log(obj.size);
obj.add("one");
console.log(obj.size);
