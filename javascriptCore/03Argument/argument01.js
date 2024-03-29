/**
  * 프로그램 설명문서 주석
  * 2021.04 06 수업
  * 
  *           ===== Argument 처리 구조 =====
  * 
  *   - 파라미터를 { key : value } 형태로 저장
  *   ----> 파라미터 수만큼 0부터 인덱스 부여
  *   ----> key로 사용
  *   ----> 파라미터로 받은 값을 value에 설정
  *   ----> { 0: param1, 1: param2 }
  * 
  *   - Array-like
  *   ----> key 값이 0 부터 1씩 증가
  *   ----> length 프로퍼티가 있어야 한다
  * 
  *   ----------------------------------------------------
  * 
  *   - console.log(get("A", "B"));와 같이 함수가 호출되면
  *     함수 안에서 우선 arguments 오브젝트를 만든다.
  * 
  *   - 거기에 파라미터를 { key : value } 형태로 저장한다.
  *     그런데 key가 없다. 
  *     그래서 파라미터 수만큼 0부터 인덱스를 부여하고 이것을 key로 사용한다.
  * 
  *   - 그리고 파라미터로 받은 값을 value에 설정한다.
  * 
  *   - 그런데 이형태를 Array-like라고 부른다.
  *   ----> Array-like는 key값이 0부터 1씩 증가해야 한다.
  *   ----> 만약 0, 3, 5 이런 형태로 증가하면 이것은 Array-like가 아니다.
  *   ----> 반드시 0부터 1씩 증가해야 한다.
  * 
  *   - 그리고 length 프로퍼티가 있어야 한다.
  *   ----> 여기서 length가 있다는 뜻은 반복문,즉 for문으로 돌릴 수 있다라는 뜻.
  *   ----> 그래서 Array-like라고 한것이다.
  * 
  *   - Array가 될 수는 없다. 왜냐하면 프로퍼티이기 때문이다. property 형태 이지만,
  *     Array처럼 처리될 수 있다는 뉘앙스를 가지고 있다.
  * 
  * 
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {
      function get(){
            debugger;
            return arguments;
      };

      console.log(get("A", "B"));
      // { 0 : "A", 1: "B"}와 같은 형태로 arguments 오브젝트에다가 작성한다.



/**
 *          ===== 엔진의 파라미터 처리 =====
 * 
 *    1. get() 함수를 호출하면서
 *    ----> 77과 100을 파라미터 값으로 넘겨 준다
 * 
 *    2. 넘겨받은 값을 함수의 파라미터 이름에 값으로 설정한다. ( 매핑시키는 것 )
 *    ----> 정적 환경의 선언적 환경 레코드에 설정
 *    ----> one: 77
 *    ----> 즉, 스코프 개념으로 정의를 하는 것이다.
 * 
 *    3. Argument 오브젝트를 생성한다
 * 
 *    4. 넘겨받은 파라미터 수를
 *    ----> Argument 오브젝트의 length 프로퍼티에 설정한다.
 * 
 *    5. 넘겨받은 파라미터 수만큼 반복하면서
 *    ----> 0부터 key로 하여 순서대로 파라미터 값을 설정한다.
 *    ----> { 0 : 77 } , { 1 : 100 } 형태가 된다.
 * 
 *    6. 함수의 초기화 단계에서 실행한다.
 * 
 */

      log('엔진의 파라미터 처리');
      var get = function( one ){
            return one;
            // 여기서 return one을 했을 때, one은 표현식이다.
            // 이때 one을 평가하게 되는데 여기서 선언적 환경 레코드에 가서
            // 식별자 해결을 한다.

            // 그런데 one이 있기 때문에 77 값을 구하게 되고 리턴을 하게되면
            // 77이 반환된다.

            // 바로 이것이 식별자 해결과 선언적 환경 레코드의 역할이다.
      };
      get( 77 , 100 );

      /**
       *  - 함수의 파라미터에 작성한 파라미터 이름을 key로 해서,
       *    그리고 파라미터로 받은 값을, 값으로 해서, 선언적 환경 레코드에
       *    설정한다라는 것이다.
       * 
       *  - 그리고 여기서 식별자 해결을 한다라는 것.
       * 
       *  - 이논리가 파라미터 식별자 해결 논리.
       * 
       *  - 또하나, Argument오브젝트를 생성한다.
       *    이것은 파라미터로 받은 모든 값을 설정한다.
       * 
       * - 즉, 함수의 환경을 설정하는 초기화 단계에서 이것들을 한다라는 것.
       * 
       */
  
};
