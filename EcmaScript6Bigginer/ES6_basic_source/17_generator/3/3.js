
debugger;

function* sports(one){
  let two = yield one;
  let param = yield one + two;
  yield param + one;
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next(20));
console.log(obj.next());
