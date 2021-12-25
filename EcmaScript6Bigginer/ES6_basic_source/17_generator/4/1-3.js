
debugger;

//return 문 작성
function* sports(value){
  return ++value;
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.next());
