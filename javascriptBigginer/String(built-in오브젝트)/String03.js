/**
  * 프로그램 설명문서 주석
  * 2021.01.09 수업
  * 
  *     ====== length 프로퍼티 ========
  * 
  *      - 문자 수 반환
  * 
  *      - length 프로퍼티 활용
  *  
  *      - length 값이 반환되는 논리
 */

console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;
   
   var value = "ABC";
   console.log(value.length);
   /*
      1. 오른쪽 local의 value에 "ABC"가 설정되어 있다.

      2. 한편, length 프로퍼티가 없는데 3이 출력된다
   */

   debugger;
   for (var k = 0; k < value.length; k++){
      console.log(value[k]);
   }
   
   debugger;
   var obj = new String("ABC");
   /*
      1. 오른쪽 Local의 obj를 펼치면 length: 3이 있다.

      2. 이것은 value 변수와 obj가 같다는 뜻이기도 한다.

      3. 엔진이 value.Length를 만나면
      - value가 String 타입이므로
      - '내부'에서 new String("ABC")를 하게 되며
      - 생성한 인스턴스의 Length 값인 3을 반환하게 된다

      [[]] 의 의미 :: 외부에서는 사용하지 않고 내부에서만 사용하겠다는 뜻
   */

   debugger;
};



