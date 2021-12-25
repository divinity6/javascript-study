
debugger;

//이전부터 다음까지
function* sports(value){
  value += 20;
  const param = yield ++value;
  value = param + value;
  yield ++value;
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.next(20));
