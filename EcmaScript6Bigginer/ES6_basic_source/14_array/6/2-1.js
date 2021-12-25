
debugger;

const list = [10, 20];
const cb = (element, index, all) => {
  return element + 5;
};
console.log(list.flatMap(cb));
console.log(list.map(cb));
