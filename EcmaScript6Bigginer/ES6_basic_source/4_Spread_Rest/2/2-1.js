
debugger;

//rest 파라미터
function point(...param){
  console.log(param);
  console.log(Array.isArray(param));
};
const values = [10, 20, 30];
point(...values);
