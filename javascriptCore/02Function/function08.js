/**
  * 프로그램 설명문서 주석
  * 2021.04 01 ~ 02 수업
  * 
  *           ===== 함수 앞에서 호출 =====
  * 
  *     - 함수 선언문은 초기화 단계에서
  *     ----> function 오브젝트를 생성하므로
  *     ----> 어디에서도 함수를 호출할 수 있다.
  * 
  *     - 함수 앞에서 호출 가능
  *     ----> 호이스팅(Hoisting)이라고 한다
  *     ----> 용어보다 개념으로 접근
  * 
  *     - 초기화 단계에서
  *     ----> 값이 있으면 초기화 하지 않는다.
  * 
  *     -----------------------------------------------
  *     
  *     - 함수 앞에서 함수를 호출하는 것을 호이스팅이라고 한다.
  * 
  *     - 함수 선언문은 [[초기화]]단계에서 function 오브젝트 생성.
  *       어디서든지 호출가능.
  *     ----> 이렇게 function 오브젝트가 만들어져 있으므로 함수 앞에서
  *           함수를 호출할 수 있다.
  *     ----> 이것을 호이스팅이라고 한다.
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {
  var result = book();
  console.log(result);
  // :: 호이스팅

  function book(){
    return "호이스팅";
  };

  /*
      - 함수 선언문이 함수를 호출하는 코드 아래에 있다.
      ----> 일반적으로 스크립팅 언어는 위에서부터 아래로 내려오기 때문에
            원래대로라면 var result = book();은 에러가난다.

      ----> 왜냐하면 아직 function book을 모르는 상태이기 때문이다.
            그러나 JS는 그렇게 하지 않는다.

      - 먼저 전체 코드 안에서 함수 선언문을 찾는다.
      ----> 그래서 오브젝트를 만든다. 즉, 스코프에다가 book과 function 오브젝트를
            등록 해놓는 것이다.

      ----> 그리고 난 다음에 두번째로 돈다. 그때 result 변수에는 undefined로 스코프에
            등록이 된다. console.log(result);은 실행이기 때문에 안하고 function book()
            은 이미 있기 때문에 안한다.

      ----> 그리고나서 세번째로 간다. book()함수를 호출하러 가는데 book()을 호출하게 되면
            스코프에 가서 찾는다.(식별자 해결)

      - 그런데 식별자에 있는것!!!

      ----> 그런데 그 값을 구해보니깐 애가 function 오브젝트인 것이다.
            그러면 함수를 호출할 수가 있다.

      ----> 그래서 호출이 되고 return 값인 "호이스팅"을 반환하므로 result에 "호이스팅"이
            할당되고 result를 출력하기 때문에 "호이스팅"이 출력된 것이다.

      - 이와 같이 먼저 함수 선언문을 스코프에 등록하기 때문에 함수 선언문 앞에서
        함수를 선언할 수 있는 것이다.

      - 호이스팅이라는 용어보다는 위의 개념으로 접근해야 한다.
  */

  debugger;
  function test(){
    log('초기화하지 않음');
    var result = book();
    console.log(result);

    function book(){
      return "호이스팅";
    }

    book = function(){
      return "함수 표현식";
    }
    // 애는 여기서 할당되어봤자 위에서 이미 book을 불렀을때는 할당이 안되어있구나
    // 그리고 book에 할당하는데 초기화 시키지도 않네 ㅋㅋㅋ
  }
  test();
  /*
      - 처음 돌때 book과 function 오브젝트가 스코프에 등록.
      ----> 그리고 내려가서 book= function은 변수.변수에다 할당하는 것. 즉, 함수 표현식.

      - 다시 변수 초기화로 간다.
      ----> result = undefined로 Scope에 등록을 하고,
            내려와서 function book(), 이것은 건너 뛰고,

      ----> book = function() 이것은 할당이니깐, book : undefined로 스코프에 등록을
            하려고 한다. 그런데 book이 스코프에 이미 있고, 값도 들어있다.
            ( undefined가 아닌것이다! )

      ----> [[이럴 때 book은 할당을 하지 않는다]]

      - 즉, [[book()을 그대로 유지]]시킨다.
      ----> 그리고 내려가서 세번째 돌러간다. book()함수를 호출한다.
            그럼 book()함수가 호출되고 return 값으로 "호이스팅"을 반환해준다

      ----> 그럼 이것을 result에 할당하고 찍으면 "호이스팅이 나온다"

      - 그런데 만약 undefined로 초기화가 되었다면 이것은 var result = book();여기에서
        에러가 날 것이다.

      ----> 왜냐하면, book과 undefined이기 때문이다.
      ----> 그런데 book : undefined로 Scope에 
            설정할 때 이미 존재하면 설정하지 않는다라는 것.


      - hoisting 코딩시간
  */
  
};
