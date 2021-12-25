
debugger;

//this로 참조할 오브젝트 작성
const list = ["A", "B", "C"];
function cb(value, index, all){
  return value === "B" && value === this.check;
};
const result = list.findIndex(cb, {check:"B"});
console.log(result);
