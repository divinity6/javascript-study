"use strict"

debugger;

//함수 앞에 오브젝트 작성은 필수
function book(){
  function getPoint(){
    console.log(this);
  };
  getPoint();
  // window.getPoint();
};
window.book();
