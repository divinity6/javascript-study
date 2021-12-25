
debugger;

//yield 표현식 평가
function* sports(one){
  yield one;
  const check = 20;
};
const obj = sports(10);
console.log(obj.next());
console.log(obj.next());
