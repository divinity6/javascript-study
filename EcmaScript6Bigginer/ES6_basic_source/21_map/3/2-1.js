
debugger;

//get()
let obj = new Map([
  ["one", 100],
  ["200", "String 타입"]
]);
console.log(obj.get("one"));
console.log(obj.get("two"));
console.log(obj.get(200));
