
debugger;

//한 줄에 다수의 yield 작성
function* sports(){
  return yield yield yield;
};
const obj = sports();
console.log(obj.next());
console.log(obj.next(10));
console.log(obj.next(20));
console.log(obj.next(30));
