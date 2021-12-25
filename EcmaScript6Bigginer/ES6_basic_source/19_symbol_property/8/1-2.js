
debugger;

//이터레이터 오브젝트 연결
const gen = function*(){
  yield 10;
  yield 20;
};
const genObj = gen();
console.log(genObj.next());

const obj = genObj[Symbol.iterator]();
console.log(obj.next());
