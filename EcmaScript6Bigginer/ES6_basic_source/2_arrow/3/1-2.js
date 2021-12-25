
"use strict"

debugger;

var point = 100;
function sports(){
  const getPoint = () => {
    console.log(this.point);
  };
  getPoint();
};
window.sports();
