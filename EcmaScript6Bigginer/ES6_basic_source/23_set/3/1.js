
debugger;

const obj = new Set([
  "one", () => {}
]);
const iterObj = obj.entries();
console.log(iterObj.next());
console.log(iterObj.next());
console.log(iterObj.next());
