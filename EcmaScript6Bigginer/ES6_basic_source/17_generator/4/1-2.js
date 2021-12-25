
debugger;

//yield를 작성하지 않음
function* sports(value){
  ++value;
  console.log(value);
};
const obj = sports(10);
console.log(obj.next());
