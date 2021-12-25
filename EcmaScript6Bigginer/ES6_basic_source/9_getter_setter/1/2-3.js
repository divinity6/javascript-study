
debugger;

//변숫값을 함수 이름으로 사용
const name = "setPoint";
const book = {
  point: 100,
  set [name](param){
    this.point = param;
  }
};
book[name] = 200;
console.log(book.point);
