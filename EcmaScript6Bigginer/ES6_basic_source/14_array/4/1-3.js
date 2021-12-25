
debugger;

//this로 참조할 오브젝트 작성
const list = ["A", "B", "C"];
function cb(value, index, all){
  return value === "A" && value === this.check;
};
const result = list.find(cb, {check:"A"});
console.log(result);
