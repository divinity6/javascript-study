
debugger;

//prototype에 연결된 메소드 호출
function Book(){
  this.point = 100;
};
Book.prototype.getPoint = function(){
  console.log(Object.is(this, Book.prototype));
  return this.point;
};
console.log(Book.prototype.getPoint());
console.log(Book.prototype.getPoint.call(Book));
