debugger;

//메소드로 작성
var point = 200;
const Point = function(){
  this.point = 100;
};
Point.prototype.getPoint = () => {
  console.log(this.point);
};
new Point().getPoint();
