
/**
  * 프로그램 설명문서 주석
  * 2021.02 20 수업
  * 
  *         ===== 원하는 log 출력 연습 =====
  * 
  * 
 */
console.log("=====================================");

window.onload = function() {
    "use strict"
    // log 만들기
    log('bp',1,2,3);
}

var log = function (value) {
  var listAg = [];
  for ( var i = 0; i < arguments.length; i++ ) {
    listAg.push(arguments[i]);
  };
  var rtVal = function( el ) {
    var list = [];
    if ( el == "bp") {
      var init = listAg.indexOf("bp");
      listAg.splice( init , 1 );
      list = listAg;
      list[0] = '--- ' + list[0] + ' ---';
    }
  };
  listAg.forEach( rtVal );
  var result = listAg.toString();
  console.log(result);
}