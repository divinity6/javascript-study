
debugger;

//표현식이 배열
function* sports(){
  yield* [10, 20];
};
const obj = sports();
console.log(obj.next());
console.log(obj.next());
