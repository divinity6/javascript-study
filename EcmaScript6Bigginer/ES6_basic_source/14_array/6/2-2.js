
debugger;

//map()과 차이
const list = [10, 20];
const cb = (element, index, all) => {
  return [element + 5];
};
console.log(list.map(cb));
console.log(list.flatMap(cb));
