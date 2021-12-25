
debugger;

//메소드 안에 작성
const Point = function(){
  this.point = 100;
};
Point.prototype.getPoint = function(){
  const add = () => this.point + 20;
  console.log(add());
  [1, 2].forEach((value) => {
    console.log(this.point + value);
  })
};
new Point().getPoint();
