
debugger;

//함수 이름으로 사용
const sym = Symbol("함수 이름");
const obj = {
  [sym](param){
    return param;
  }
};
console.log(obj[sym](200));
