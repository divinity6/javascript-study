
debugger;

//throw()
function* sports(){
  try {
    yield 10;
  } catch (message){
    yield message;
  };
  yield 20;
};
const obj = sports();
console.log(obj.next());
console.log(obj.throw("에러 발생"));
console.log(obj.next());

