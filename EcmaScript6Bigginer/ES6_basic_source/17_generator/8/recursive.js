
debugger;

//표현식에서 자신 호출
function* sports(point){
  yield point;
  yield* sports(point + 10);
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
