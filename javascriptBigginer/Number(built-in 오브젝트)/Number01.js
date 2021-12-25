/**
  * 프로그램 설명문서 주석
  * 2021.01.04 수업
  * 
  * 메소드와 함수의 차이
  * 
  * var uerNum = new Number("123")일때
  * Number("123")이 참조하고있는것이 프로토타입
  * userNum에 할당된것이 인스턴스
  * 
  * 
  * prototype에 연결된 function을 강좌에서는 메소드라고 하며, 
  * prototype에 연결되지 않은 function을 함수라고 합니다.
  * 
  * 
  * 
  * ======Number 오브젝트========
  * 
  * 
  * 
  * - 숫자(123) 처리를 위한 오브젝트
  * - 즉, Number 오브젝트에
  * --> 숫자 처리를 위한
  * --> 함수와 프로퍼티가 포함되어 있으며
  * --> 함수를 호출하여 숫자 처리를 하게 된다.
 */



 /*
    == 프로퍼티 리스트 ==

    - 이름(수단)        -->     개요(목적)
    -- 이부분이 코딩수단        --이부분이 목적임(여기가 기준)

    - new Number()     -->     인스턴스 생성
    - Number 함수
    - Number()         -->     숫자 값으로 변환하여 반환
    - Number.prototype -->     
    - constructor       -->     생성자
    - toString()        -->     숫자 값을 문자열로 변환
    - toLocaleString()  -->     숫자 값을 지역화 문자로 변환
    - valueOf()         -->     프리미티브 값 반환
                                (더이상 분해할수없는,but 여기서는 인스턴스에 설정된 값) 
    - toExponential()   -->     지수 표기로 변환
    - toFixed()         -->     고정 소숫점 표기로 변환
    - toPrecision()     -->     고정 소숫점 또는 지수 표기로 변환


 */
console.log("=====================================");
"use strict"

debugger;
