
debugger;

//ES6 setter 형태
const book = {
  point: 100,
  set setPoint(param){
    this.point = param;
  }
};
book.setPoint = 200;
console.log(book.point);
