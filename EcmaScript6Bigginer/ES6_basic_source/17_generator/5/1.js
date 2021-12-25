
debugger;

//yield 반복
let status = true;
function* sports(){
  let count = 0;
  while (status){
    yield ++count;
  };
};
const obj = sports();
console.log(obj.next());
console.log(obj.next());
status = false;
console.log(obj.next());
