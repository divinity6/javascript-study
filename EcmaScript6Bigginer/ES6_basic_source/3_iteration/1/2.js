
debugger;

const list = [10, 20];
for (let value of list){
  console.log(value);
};
const obj = list[Symbol.iterator]();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
