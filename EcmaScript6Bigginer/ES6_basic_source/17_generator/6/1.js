
debugger;

function* sports(){
  return [yield yield];
};
const obj = sports();
console.log(obj.next());
console.log(obj.next(10));
const last = obj.next(20);
console.log(last);
console.log(last.value);

