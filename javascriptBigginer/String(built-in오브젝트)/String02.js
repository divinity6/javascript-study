/**
  * 프로그램 설명문서 주석
  * 2021.01.09 수업
  * 
  *     ====== String() ========
  * 
  *     - 구분                      - 데이터(값)
  *     - 파라미터                  - 변환대상opt
  *     - 반환                      - 변환한 값
  *     
  *     -----------------------------------------------
  *     -- 파라미터 값을 String 타입으로 변환하여 반환
  *     ---> 값을 작성하지 않으면 빈문자열 반환
  * 
  *     -- 가독성
  *     ---> ("" + 123) 도 숫자가 String 타입이 되지만
  *     ---> String(123) 형태가 가독성이 높다.
  *  
 */

console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;

   var value = String(123);
   console.log(value);
   
   console.log(typeof value);

   console.log("" + 123);

   debugger;
   /*
           === new String() ===


        - 구분                  - 데이터(값)
        - 파라미터              - 값opt
        - 반환                  - 생성한 String 인스턴스

        -----------------------------------------------
        -- String 인스턴스를 생성하여 반환

        -- 파라미터 값을 String 타입으로 변환
        ----> 파라미터 값이 프리미티브 값이 된다.
   */

   var obj = new String(123);
   console.log(typeof obj);
   
   debugger;

   /*
           === valueOf() ===


        - 구분                  - 데이터(값)
        - data                  - String 인스턴스, 문자
        - 파라미터              - 사용하지 않음
        - 반환                  - 프리미티브 값

        -----------------------------------------------
        -- String 인스턴스의 프리미티브 값 반환
   */
  
   var obj2 = new String(123);
   // 1. obj2는 String의 인스턴스이며
   // 2. 파라미터 값 123이 String 인스턴스의
   //    프리미티브 값으로 설정된다
   console.log(obj2.valueOf());
   //    obj2에 프리미티브 값으로 설정된 값 반환
   debugger;
}



