
debugger;

function* point(count){
  yield count + 5;
  yield count + 10;
};
function* sports(value){
  yield* point(value);
  yield value + 20;
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
