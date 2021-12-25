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

  console.log(obj.getPoint());

  debugger;
};
