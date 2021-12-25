
debugger;

function* sports(one, two){
  yield one + two;
};
console.log(typeof sports);
const obj = sports(1, 2);
console.log(typeof obj);
console.log(obj.next());
