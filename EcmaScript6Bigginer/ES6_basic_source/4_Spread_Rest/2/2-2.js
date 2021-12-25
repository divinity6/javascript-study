
debugger;

//혼합 사용
function point(ten, ...rest){
  console.log(ten);
  console.log(rest);
};
const values = [10, 20, 30];
point(...values);
