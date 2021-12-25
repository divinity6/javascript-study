/**
  * 
  *     ====== indexOf()와 lastIndexOf()를 통합하여
  *          발생 가능한 케이스를 기술하고 이에 맞는 코드를 작성 ========
  * 
  *     ======  목적
  *     - 코드 작성의 사고 (어떠어떠한 케이스가 발생할수있다는 생각)
  * 
  *     ====== 작성 예)
  *     - 두 번째 파라미터에 음수를 작성하면 -1을 반환한다
  *     - var value = "1234512345"
  *     - console.log(value.lastIndexOf(3,-2)); 로 작성하면 이런값이나오고
  *     - console.log(value.indexOf(3,-2)); 로 작성하면 이런값이나온다 그런것
 */

console.log("=====================================");
window.onload = function() {
   "use strict"
   
   var number = '012345';
   for(var i =0;i<10;i++) {
      var result = number.indexOf(i,3); 
      if( result == -1) {
         
         console.log( i +"는 예외입니다. 값은 "+ result);
         console.log();
        
      }else {
         console.log(i + "는 예외가 아닙니다. 값은" + result);
      }
   }

};