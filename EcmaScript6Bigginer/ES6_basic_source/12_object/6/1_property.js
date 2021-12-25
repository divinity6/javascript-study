{
  "use strict"
  debugger;

  function Book(){
    this.point = 100;
  };
  Book.prototype.getPoint = function(){
    return this.point;
  };
  const obj = new Book();
  debugger;

  // 인스턴스 프로퍼티(함수)로 추가합니다.
  obj.setPoint = function(param){
    this.point = param;
  };
  // obj를 펼치면 __proto__ 위에 setPoint가 표시됩니다.
  debugger;

  // 인스턴스의 함수 형태로 호출합니다.
  obj.setPoint(200);

  // prototype에 연결된 메소드를 호출합니다.
  console.log(obj.getPoint());
  debugger;

  const newObj = new Book();
  console.log(newObj.setPoint);

  debugger;
};
