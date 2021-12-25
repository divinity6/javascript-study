  "use strict"
  debugger;

  const book = {
    point: 500,
    getPoint: function(){
      console.log(this.point);
    }
  };
  book.getPoint();

  debugger;

  var point = 100;
  const sports = {
    getPoint: () => {
      console.log("this.point", this.point);
    }
  };
  sports.getPoint();

  debugger;

  debugger;
