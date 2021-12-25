
debugger;

//function을 작성하지 않음
const sports = {
  point: 100,
  // ES5 형태
  getValue: function(){
    return this.point;
  },
  // ES6 형태
  getPoint(){
    return this.point;
  }
};
console.log(sports.getPoint());
