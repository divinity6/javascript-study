
debugger;

//열거 가능 오브젝트 작성
let obj = {};
Object.assign(obj, {ten: 10});
console.log(obj);

const one = Object.create({}, {
  book: {value: 100, enumerable: false},
  sports: {value: 200, enumerable: true}
});
Object.assign(obj, one);
console.log(obj);
