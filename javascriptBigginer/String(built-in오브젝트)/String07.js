/**
  * 프로그램 설명문서 주석
  * 2021.01.16 수업
  * 
  *      ====== concat() =====
  * 
  * 
  *      - 구분                  - 데이터(값)
  *      - data                  - 연결 시작 값, String 인스턴스
  *      - 파라미터              - 연결대상 opt, 다수 작성 가능
  *      - 반환                   - 연결한 결과
  * 
  *      -------------------------------------------------------
  * 
  *      -- data 위치의 값에
  * 
  *      ---> 파라미터 값을 작성 순서로
  *      ---> 연결하여 문자열로 반환
  * 
  *      -- String 인스턴스를 작성하면
  *      
  *      ---> 프리미티브 값을 연결
  * 
 */

console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;


   var result = "sports".concat('축구',11);
   console.log(result);
   

   var obj = new String(123);
   console.log(obj.concat("ABC"));
   // 인스턴스에 concat함수를 호출한것 처럼 보이지만
   // 사실은 obj 인스턴스의 프리미티브 값을 연결한다


   debugger;
   
   /*
         - toLowerCase()
   
   
   
   - 구분               - 데이터(값)

   - data               - 반환 대상
   - 파라미터            - 사용하지 않음
   - 반환               - 변환 결과    
   
   -------------------------------------------
   -- 영문 대문자를 소문자로 변환
   
   
   - toUpperCase()
   
   
   
   - 구분               - 데이터(값)
   
   - data               - 반환 대상
   - 파라미터            - 사용하지 않음
   - 반환               - 변환 결과    
   
   -------------------------------------------
   -- 영문 소문자를 대문자로 변환
   */
  
  debugger;

  console.log("ABCDE".toLowerCase());
  console.log("abcde".toUpperCase());


  debugger;
};



