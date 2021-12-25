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

  // beforeObj 인스턴스를 생성합니다.
  const beforeObj = new Book(100);
  debugger;

  // __proto__에 메소드를 추가합니다.
  obj.__proto__.setPoint = function(param){
    this.point = param;
  };
  debugger;

  // 새로운 인스턴스를 생성합니다.
  const afterObj = new Book(300);

  debugger;

  beforeObj.setPoint(700);

  debugger;
};
