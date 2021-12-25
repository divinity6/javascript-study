/**
  * 프로그램 설명문서 주석
  * 2021.01.09 수업
  * 
  *     ====== trim() ========
  * 
  *      - 구분                  - 데이터(값)
  *      - data                  - 삭제 대상
  *      - 파라미터               - 사용하지 않음
  *      - 반환                   - 삭제한 결과
  * 
  *      -------------------------------------
  *      -- 문자열 앞뒤의 화이트 스페이스 삭제
  * 
  *      -- 메소드 체인 Method chain 
  *      ----> .과.으로 연결된형태를 가리키는 말
  * 
 */

console.log("=====================================");
window.onload = function() {
   "use strict"
   debugger;
   
   var value = "  abcd  ";
   console.log(value.length);

   console.log(value.trim().length);
   /*
      1. abcd 앞뒤로 공백이 2개씩 있으므로
         length 값은 8
      2. 앞뒤의 공백을 삭제하므로 length 값은 4
   */
   debugger;
};



