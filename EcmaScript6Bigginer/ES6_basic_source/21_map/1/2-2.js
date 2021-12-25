
debugger;

//SameValueZero 비교
const obj = new Map([
  [100, "Number"],
  ["100", "String"]
]);
for (let [key, value] of obj) {
  console.log(`${key} : ${value}`);
};
