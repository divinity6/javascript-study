
debugger;

//setter 삭제
const name = "setPoint";
const book = {
  set [name](param){
    this.point = param;
  }
};
delete book[name];
debugger;
console.log(book[name]);
