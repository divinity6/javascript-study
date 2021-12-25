
debugger;

//throw 문 작성
function* sports(){
  throw "에러 발생";
  yield 10;
};
const obj = sports();
try {
  const result = obj.next();
} catch (message){
  console.log(message);
};
console.log(obj.next());
