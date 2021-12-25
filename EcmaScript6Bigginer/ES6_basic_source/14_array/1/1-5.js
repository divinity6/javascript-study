
debugger;

//this로 오브젝트 참조
const like = {0: 10, 1: 20, length:2};
console.log(Array.from(like, function(value){
  return value + this.plus;
}, {plus: 70}));
