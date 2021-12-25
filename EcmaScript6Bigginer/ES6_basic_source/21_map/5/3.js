
debugger;

const obj = new Map([
  ["one", 100],
  ["two", 200]
]);
console.log(obj.size);

obj.clear();
console.log(obj.size);
obj.set("add", "추가");
console.log(obj.size);
