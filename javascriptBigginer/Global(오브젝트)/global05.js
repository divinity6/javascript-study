/**
  * 프로그램 설명문서 주석
  * 2021.01.31 수업
  * 
  *     ======= isNaN() ========
  * 
  *     - 구분                   - 데이터(값)
  * 
  *     - 파라미터               - 값
  *     - 반환                   - true,false
  * 
  *     ----------------------------------------
  * 
  *     -- 값의 NaN 여부 반환
  * 
  *     -- 숫자 값이 아니라면 true 반환
  * 
  *     -- 숫자 값이면 false 반환
  *     ----> 값이 숫자로 변환되면 숫자로 인식
  * 
  *     -- NaN === NaN 결과는 false
  *     ----> 설계 실수
  *     ----> ES6의 Object.is()사용
  *     ----------> 그런데 Object.is()를 사용하면 true가 반환된다
  */
console.log("=====================================");

window.onload = function() {
  "use strict"

  console.log(isNaN("ABC"));
  // 1. 값이 String 타입이므로 true 반환
  console.log(isNaN());
  // 2. 파라미터를 작성하지 않으면 undefined와 같음

  debugger;
  
  console.log(isNaN(123));
  console.log(isNaN("123"));
  // 1. String 타입이라도 값이 숫자이면 숫자로 인식
  console.log(isNaN(null));
  // 2. null을 숫자로 변환하면 0

  
  debugger;

  console.log('--- NaN 비교 ---');
  console.log(NaN === NaN);
  console.log(Object.is(NaN,NaN));
  /*
      NaN과 NaN을 비교한다
      그런데 이것이 false가 나온다.
      이것이 true가 나와야되는 이유는

      무엇인가 값을 처리하고 난 다음에 그 값이 NaN냐고 물어보게된다

      그런데 이것이 false라고 나와버리면 이것에 동반되는 처리가 이상하게 되어버릴것이다

      그래서 좀문제가 된다

      그런데 Object.is 함수를 사용하게 되면 true를 반환한다

      ** NaN를 비교할 때는 Object.is 함수를 사용하는 것이 안전하다 **
  */

  debugger;

  /*
            ===== isFinite() =====

        - 구분                    - 데이터(값)

        - 파라미터                - 값
        - 반환                    - true,false

        ---------------------------------------

        -- 값이 Infinity, NaN이면
        ----> false 반환
        ----> 아니면 즉, finite(유한)이면 true 반환

        -- 값이 숫자로 변환되면 숫자로 인식

        -----------------------------------------
  */

  console.log('--- false가 되는 경우 ---');
  console.log(isFinite(0/0));
  // NaN
  console.log(isFinite(1/0));
  // Infinity
  console.log(isFinite("ABC"));

  /*
    0 / 0 , 0 나누기 0은 NaN이다
    그러니까 이것은 false를 반환한다

    그리고 1 / 0, 즉 1 나누기 0은 무한대이다
     
    그리고 문자열 "ABC"는 NaN 이다
  */
  debugger;
  
  console.log(isFinite(123));
  console.log(isFinite("123"));
  console.log(isFinite(false));
  // false를 숫자로 변환하면 0이다 따라서 이것은 true가 반환
  console.log(Number(false));

  debugger;
}



