
debugger;

//오브젝트를 숫자에 대응
const point = {bonus: 100};
console.log(point.valueOf());

const book = {
  toString() { return 70 },
  valueOf() { return 30 }
};
console.log(book * 20);
