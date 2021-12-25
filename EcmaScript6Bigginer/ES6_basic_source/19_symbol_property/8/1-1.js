
debugger;

//generator 함수 연결
const obj = {};
obj[Symbol.iterator] = function*(){
  yield 1;
  yield 2;
  yield 3;
};
console.log([...obj]);
