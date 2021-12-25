/**
  * 프로그램 설명문서 주석
  * 2021.03 29 수업
  * 
  *         - function 오브젝트에 대해 정리하는 차원
  * 
  *           ===== 함수 정의 =====
  * 
  *     - 함수 정의( Function Definition )
  *     ----> 함수 코드가 실행될 수 있도록
  *           JS 문법에 맞게 함수를 작성하는 것.
  * 
  *     - 함수 정의 형태
  *     ----> 함수 선언문 Function Declaration
  *     ----> 함수 표현식 Function Expression
  *     ----> new Function( param , body ) 문자열로 작성
  * 
  *     -------------------------------------------------------
  * 
  *     - 함수 정의 형태 : 선언문 , 표현식 new Function 으로 정의 할 수도 있다.
  *       이때 파라미터(param)과 함수코드(body)는 문자열로 작성한다
  * 
  *   =======================================================================
  *   =======================================================================
  * 
  *           ===== 함수 선언문 =====
  * 
  *   - 구분          - 타입            - 데이터(값)
  * 
  *   - function      - Function       - function 키워드
  *   - 식별자         - String         - 함수 이름
  *   - 파라미터       - Any           - 파라미터 리스트 opt
  *   - 함수 블록      - Object         - { 실행 가능 코드 opt }
  *   - 반환           - Function       - 생성한 Function 오브젝트
  * 
  *   ---------------------------------------------------------------
  * 
  *   - function getBook(title) { 함수 코드 }
  *   ----> function, 함수 이름, 블록{} 작성은 필수
  *   ----> 파라미터, 함수 코드는 선택
  * 
  *   - 엔진이 function 키워드를 만나면
  *   ----> function 오브젝트를 생성하고
  *   ----> 함수 이름을 function 오브젝트 이름으로 사용
  * 
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {

  log('함수 선언문');
  
  function book( one , two ){
    return one + ',' + two;
  };

  console.log(book("JS","DOM"));
  //  ::  JS, DOM
  /*
    - 엔진이 위에서 내려오다 function 키워드를 만나면 function 오브젝트를 생성하고
      book을 함수 이름으로 사용한다
  */


  /*
            ===== 함수 표현식 =====

      - 구분          - 타입          - 데이터(값)

      - function      - Function      - function 키워드
      - 식별자        - String         - 함수 이름opt
      - 파라미터      - Any            - 파라미터 리스트opt
      - 함수블록       - Object        - { 실행 가능 코드 opt }
      - 반환          - Function       - 생성한 Function 오브젝트

      ------------------------------------------------------------

      - var getBook = function(title){ 함수 코드 }
      ----> function 오브젝트를 생성하여 변수에 할당
      ----> 변수 이름이 function 오브젝트 이름

      - 식별자 위치의 함수 이름은 생략 가능
      ----> var name = function abc(){} 에서 
            abc가 식별자 위치의 함수 이름이다.
  */

  log('함수 표현식');
  var getBook = function(title){
    return title;
  };
  console.log("getBook :",getBook("JS책"));
  // :: JS책


  /*
      - var 키워드를 이용해 변수를 선언하는 것처럼 한다.
        그리고 이름을 작성하고 = 오른쪽에다 function 키워드를 사용해서
        함수를 선언한다.

      - 그러면 getBook이 함수 이름이 된다.
        함수 표현식도 getBook("JS책")와같이 함수를 호출할 수 있다.

        또하나의 형태가 있다
  */
  log('식별자 위치의 함수 이름');
  var getBook = function inside(value) {
    if (value === 102) {
      return value;
    };
    console.log(value);
    return inside(value + 1);
  };
  console.log("getBook :",getBook(100));
  // 1. inside 이름으로 function 오브젝트를 생성하여
  //    getBook 변수에 할당한다

  // 2. inside()를 호출할 수 없으며
  //    getBook()을 호출하여 함수 안으로 이동한 후
  //    inside()를 호출할 수 있다.

  // 3. 함수 안에서 inside()를 호출하는 것은
  //    자신을 호출하는 것이므로
  //    무한으로 반복하여 호출하게 된다

  // 4. 함수가 종료되도록 조치를 취해야 한다.

  /*
      - 예전에는 위와 같은 형태를 사용하기도 했었으나 최근에는
        이와같은 형태를 사용하지 않고 간단하게
        getBook = function(title) 이런 형식으로 사용하고 있다.

      - 이유에 대하여 살펴보겠다.
        위에 getBook과 inside 이름이 두개가 있다. 그런데 이 inside는
        함수 밖에서 호출할 수가 없고 getBook이 이름으로 호출해야 한다.

      - getBook을 호출하면 함수 안으로 이동하게 된다.
        그리고 함수안에서 inside를 호출하게 되면 다시 그 함수 코드를
        실행하게 된다.

      - 그런데 최근에는 inside를 호출하지 않고 getBook을 호출해도 되므로
        inside를 사용하지 않는다.

      - 그런데 이렇게 함수안에서 자기자신을 호출하는 것을 재귀함수라고 한다.

      - inside를 호출하게 되면 이코드를 다시 실행하게 되고, 계속해서 실행하게 된다.
        따라서 위와같이 함수를 빠져나가는 코드를 작성해야 한다.

      - 이것이 재귀함수의 필수 조건이라고 할 수 있다.

      - 함수 표현식과 함수 선언문을 알아보았을 때 이 2개가 왜 필요한가,
        그것에 대해서는 계속해서 살펴보겠다.
  */

};
