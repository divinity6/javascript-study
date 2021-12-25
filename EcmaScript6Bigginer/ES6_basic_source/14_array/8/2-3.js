
debugger;

//Symbol.iterator() 사용
const check = Array.prototype.values === Array.prototype[Symbol.iterator];
console.log(check);

const iterator = ["A", "B"][Symbol.iterator]();
for (const property of iterator) {
  console.log(property);
};
