
debugger;

//ES6 getter 형태
const book = {
  point: 100,
  get getPoint(){
    return this.point;
  }
};
console.log(book.getPoint);
