/**
  * 프로그램 설명문서 주석
  * 2021.01.04 수업
  * 
  * ====== String 타입으로 변환,지역화 문자 ========
  * 
  *   -toString()
  * 
  *   - 구분               - 데이터(값)
  *   - data              - 변환 대상
  *   - 파라미터           - 진수(2~36)opt,디폴트 : 10진수
  *   - 반환               - 변환한 값
  * ----------------------------------------
  *   -- data를 String 타입으로 변환 
  * 
  *   -- 변환할 때 주의 사항     
  * 
 */


console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;

   var value =20;
   console.log(20 === value.toString());
   
   //16진수로 변환을 뜻함(여기에 들어가는값은 진수,디폴트10진수)
   console.log(value.toString(16));

   /*
      1. 20 === value.toString()의 결과는 false
         20을 String 타입으로 변환하기 때문

      2. value.toString(16)
         20을 16진수로 변환하며 값은 14
   */


   //변환시 주의사항
   debugger;

   console.log(20..toString());
   /*
      1. 20.toString()형태로 작성하면 에러가 난다
      2. 20이 아니라 20.을 변환 대상으로 인식하므로
         점(.)이 없는 valuetoString() 형태가 되기 대문
      3. 코드처럼 20..을 작성한다.
      (20.은 20.0으로 작성한것과같음(0)을 생략한것)      
   */



   /*
      === toLocaleString() ===

      - 구분               - 데이터(값)
      - data               - 변환대상
      - 파라미터           - 사용하지 않음
      - 반환               - 반환한 값
   
      ------------------------------------

      -- 숫자를 브라우저가 지원하는 지역화 문자로 반환
      (그나라의 문자로 반환)

      ---> 지역화 지원 및 형태를 브라우저 개발사에 일임
      (브라우저마다 차이가 생길 수 있음)
      ---> 지역화를 지원하지 않으면 toString()으로 변환   
   
      -- 스펙 상태
      ---> ES5 : 파라미터 사용 불가
      ---> ES6 : 파라미터에 언어 타입 사용 가능
   */
   var value2 = 1234.56;

   console.log(value2.toLocaleString());
   console.log(value2.toLocaleString('de-DE'));
   console.log(value2.toLocaleString('zh-Hans-CN-u-nu-hanidec'));

   /*
      1. 파라미터를 작성하지 않았을 때
         1234.56에 콤마(,)를 삽입하여
         1,234,56으로 출력
      2. 파라미터에 de-DE(독일) 작성
         콤마를 점(.)으로, 점을 콤마로 표시
      3. 중국 한자 표시
   */
   debugger;

}



