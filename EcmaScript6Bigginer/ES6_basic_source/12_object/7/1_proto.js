{
  "use strict"
  debugger;

  function Book(param){
    this.point = param;
  };
  Book.prototype.getPoint = function(){
    return this.point;
  };
  const obj = new Book(100);
  debugger;

  // __proto__에 메소드를 추가합니다.
  obj.__proto__.setPoint = function(param){
    this.point = param;
  };

  debugger;

  debugger;
};
