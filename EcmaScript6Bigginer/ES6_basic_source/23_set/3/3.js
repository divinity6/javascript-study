
debugger;

const obj = new Set([
  "one", () => {}
]);
const iterObj = obj.values();
console.log(iterObj.next());
console.log(iterObj.next());
console.log(iterObj.next());
