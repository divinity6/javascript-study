
debugger;

const list = ["A", "B", "C"];
const cb = (value, index, all) => value === "B";
console.log(list.findIndex (cb));
