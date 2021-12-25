/**
  * 프로그램 설명문서 주석
  * 2021.01.04 수업
  * 
  * ======Number type으로 변환========
  * 
  * - Number()
  * 
  *   구분              데이터(값)
  *   파라미터          변환할 값opt
  *   반환              변환한 값
  * 
  *   -->반환 : 함수가 실행된 후 함수에서 반환한 값
  * 
  * 
  * --> 파라미터 값을 Number 타입으로 변환
  * --> 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
  * --> 숫자로 변환할 수 있으면 변환
  * --> 파라미터 값을 작성하지 않으면 0을 반환
 */
console.log("=====================================");
"use strict"

console.log(Number("123") + 500);
console.log(Number("ABC"));
//NaN 일때 : 두가지의 관점이있다 
// 1.변환을했는데 그 결과 값이 NaN인가
// 2.변환을 할려고 했는데 파라미터 값이 NaN인가


debugger;
console.log("=====================================");

console.log(Number(0X14));
//16진수(0X) 그리고 1에다 16을 곱하고 4를 더함
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));


/*
   === Number 상수 ===

   - 상수 이름                 -->      값

   - Number.MAX_VALUE         -->       1.7976931348623157 * 10(308승)

   - Number.MIX_VALUE         -->       5 * 10(324승)

   - Number.NaN               -->       Not-a-Number
   --->Nat-a-Number 자체도 상수라는 의미

   - Number.POSITIVE_INFINITY -->       Infinity
   ---> 양수 무한대

   - Number.NEGATIVE_INFINITY -->       -Infinity
   ---> 음수 무한대

   ---------------------------------------------------

   --> 상수는 값을 변경, 삭제할 수 없음
   --> 영문 대문자 사용이 관례
   --> Number.MAX_VALUE 형태로 값 사용
   ---> 상수는 Number 오브젝트를 바로작성한다
   -----> Number. 으로 값을 구한다
   ------> 즉 Number.NaN 이면 NaN도 값이다

*/
