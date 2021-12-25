

debugger;

const sports = function* (one){
  yield one;
};
const obj = sports(100);
console.log(obj.next());
