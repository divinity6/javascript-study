
debugger;

const obj = new Set([
  "one", () => {}
]);
const iter = obj[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
