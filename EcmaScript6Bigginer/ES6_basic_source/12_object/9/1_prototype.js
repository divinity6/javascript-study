{
  "use strict"
  debugger;

  // 함수 블록에 코드를 작성하지 않았습니다.
  function Book(){ };
  Book.prototype.getBook = function(){ };

  function Point(){ };
  Point.prototype.getPoint = function(){ };
  debugger;

  Object.setPrototypeOf(Point.prototype, Book.prototype);

  debugger;

  debugger;

  debugger;

  const obj = new Point(300);

  debugger;
};
