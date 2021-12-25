
debugger;

//----------------------
const obj = new Set([
  "one", () => {}
]);
const iterObj = obj.keys();
console.log(iterObj.next());
console.log(iterObj.next());
console.log(iterObj.next());
