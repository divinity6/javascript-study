/**
  * 프로그램 설명문서 주석
  * 2021.03 24 수업
  * 
  *           ===== function 오브젝트 생성 과정 =====
  * 
  *     1. function sports() {...} 형태에서
  *     ----> function 키워드를 만나면
  * 
  *     2. 오브젝트를 생성하고 저장
  *     ----> {sports: {...}}
  *     ----> sports는 function 오브젝트 이름
  *     ----> 오브젝트 {...}에 프로퍼티가 없는 상태
  * 
  *     - 이제부터 빈 오브젝트를 채운다
  *   
  *     - sports 오브젝트 형태
  * 
  *     ----------------------------------------------------
  * 
  *     - function sports() {...} 형태에서 엔진이 function 키워드를 만나면
  *       우선 오브젝트를 생성하고 저장한다
  *       그 오브젝트 형태는 {sports: {...}}와 같다.
  * 
  *     - sports 오브젝트 형태를 살펴보겠다.
  *       이것은 시나리오 측면에서 이런 것을 설정한다라는 것을 보기 위함이다.
  * 
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};


window.onload = function() {
  var sports = function(){};
  /*
      1. 생성한 오브젝트가 sports에 할당된다
      - 오브젝트를 생성하는 시점에는 빈 오브젝트

      2. 왼쪽 local의 sports를 펼친다

      3. arguments: (...)
         caller: (...)
         length: 0
         name: "sports"

      4. protoype: {constructor: f}

      5. __proto__: f ()
  
  */
  debugger;
  /*
      - 강좌의 위치에서는 위의 프로퍼티를 하나도 설정하지
        않은 상태들이다

        지금부터 이것을 하나씩 설정하게 되는데

      - arguments: (...)
        caller: (...)
        length: 0
        name: "sports"
        
        이런 프로퍼티가 있고

      - prototype이 있다.
        이것을 전개하면 construnctor가 있고
        __proto__가 있다.

      - 그런데 이것은 Object이다.

      - 그래서 빌트인 오브젝트에 관련된 메소드들이
        여기에 설정된다. (6개)
        6개 아래 있는 것들은 다른 관점이다.

      - 그리고 그아래보면 프로토 타입과 같은 레벨로
        __proto__가 있다.

        이것을 전개하면 apply, bind, call,

        빌트인 Function 오브젝트에 연결되어 있는
        메소드들이다. 이것이 이렇게 설정된다.

      - 지금부터 이렇게 설정되는 과정을 단계별로 살펴보겠다.
  */


  /*
                sports = {
                  prototype: {
                    constructor: sports
                    __proto__: {}
                  }
                }

            ===== function 오브젝트 생성 과정 =====

      3. sports 오브젝트에 prototype 오브젝트 첨부

      4. prototype에 constructor 프로퍼티 첨부
      ----> prototype.constructor가 sports 오브젝트 참조

      5. prototype에 __proto__ 오브젝트 첨부
      ----> ES5 스펙에 __proto__가 기술되어 있지 않으며
            ES6 스펙에 기술

      ----> 엔진이 사용한다는 뉘앙스로 정의

      ----> ES5 기준으로 보면 표준이 아니지만
            2000년대 초반부터 파이어폭스에서 사용

      ---------------------------------------------------------

      - sports 오브젝트에 (현재는 비어있는 상태), prototype 오브젝트를 첨부.
        오브젝트 이므로, 0개 이상의 property를 이안에 작성할 수 있다.

      - prototype에 constructor 프로퍼티를 설정한다.(첨부)
        그리고 값에는 오브젝트 이름(sports)를 작성한다.

        즉, 오브젝트 전체를 참조하게 되는 것이다.

      - 따라서 sports오브젝트와 constructor의 값인 sports는 값이 같다.

      - prototype에 __proto__ 오브젝트를 첨부
        그런데 ES5 스펙에 __proto__가 기술되어 있지 않으며 ES6 스펙에 기술.
        그리고 엔진이 사용한다는 뉘앙스로 정의

      - 그렇다면 ES5 기준으로 보면 표준이 아니다.
        왜냐면 ES6에 기술되어 있기 때문이다. 
        그런데도 2000년대 초반부터 파이어폭스에서 사용

      - 그때도 __proto__가 있었다.
        그런데 본강좌는 ES5기준인데 __proto__를 빼버리면 하나가 빠진거 같은 느낌.

      - 왜냐면 __proto__: {} 이걸 설명 안하면 여기에 뭐가 설정되어 있는지 빠지기 때문.

      - 따라서 ES6의 사항이지만 본강좌에서 다룸

       =======================================================================
       =======================================================================

                sports= {
                  arguments: {},
                  caller: {},
                  length: 0,
                  name: "sports",
                  prototype: {
                    constructor: sports,
                    __proto__: Object.prototype
                  },
                  __proto__ : Function.prototype
                }

            ===== function 오브젝트 생성 과정 =====

      6. 빌트인 Object.prototype의 메소드로
      ----> Object 인스턴스를 생성하여
      ----> prototype.__proto__에 첨부
      
      7. sports 오브젝트에 __proto__ 오브젝트 첨부
      ----> sports.__proto__ 구조가 된다.

      8. 빌트인 Function.prototype의 메소드로
      ----> function 인스턴스를 생성하여
      ----> sports.__proto__에 첨부

      9. sports 오브젝트 프로퍼티에 초기값 설정
      ----> arguments, caller, length, name 프로퍼티

      ------------------------------------------------------------------------

      - 지금 arguments: {}, caller: {}, length: 0, name: "sports"은 설명을 안했고
        prototype에 constructor를 설정했고 __proto__를 했다.

      - 그럼이제 __proto__에 값을 설정해야한다. 이것이다.
        이것은 빌트인 Object의 prototype에 연결된 메소드로 오브젝트 인스턴스를 생성한다.

      - 그리고 그것을 __proto__: Object.prototype 이렇게 첨부한다.
        그러면 6개의 메소드가 여기에 첨부된다.

      - 그러면 prototype까지는 정리가 된것.

      - 그렇다면 __proto__ : Function.prototype을 만들 차례.

      - sports 오브젝트에 __proto__ 오브젝트를 첨부한다.
        prototype과 같은 레벨로 첨부

      - 그리고 여기에다가 빌트인 Function Object.prototype에 연결된 메소드로
        function 인스턴스를 생성하여 sports.__proto__에 첨부
        그럼 여기에는 call, bind,apply 메소드가 첨부.

      - 그럼 나머지 4개(arguments: {}, caller: {}, length: 0, name: "sports")가
        남는데 이것은 프로퍼티다. 여기에다가 초깃값을 설정하게 된다.

      - 여기서 __proto__ 끼리 이름은 같지만 구조,즉 계층이 다르다.

      =======================================================================
      =======================================================================

      - function 오브젝트에 prototype이 있으며
      ----> constructor가 연결된다.
      ----> __proto__가 연결되어 있으며
      ----> Object 인스턴스가 연결된다

      - function 오브젝트에 __proto__가 있으며
      ----> Function 인스턴스가 연결된다
      ----> Array 이면 Array 인스턴스가 연결되고
      ----> String 이면 String 인스턴스가 연결된다.

      ------------------------------------------------------------------------


      - 지금까지의 사항을 마무리하는 차원에서 fiunction 오브젝트 구조를 정리하겠다.

      - function 오브젝트(sports)에 prototype이 있다. 그리고 그안에 constructor와,
        __proto__가 있고 __proto__에 빌트인 오브젝트의 프로토 타입에 연결된 메소드로 만든
        인스턴스가 설정된다.(6개의 메소드가 여기 설정된다)
      
      - 그리고 바깥의, __proto__에는 빌트인 Function 오브젝트의 프로토타입에 연결된
        3개의 메소드가 여기 설정된다.(bind ,apply ,call)

      - 그런데 여기서 sports가 지금 function이다. 그런데 이것을 Array를 만든다고하면
        바깥 __proto__에 빌트인 Array.prototype에 연결되어 있는 메소드들이 설정되고
        String이면 빌트인 String.prototype에 연결되어 있는 메소드로 인스턴스를
        만들어서 설정한다.

      - 오브젝트 타입에 따라서 __proto__ : Function.prototype은 바뀔 수 있다.

      - 여기서 눈여겨 볼 것은, 일반적으로 함수다. 라고 한다면 함수 개념으로 받아 들였다.
        그러나 엔진관점에서 본다면 이것은 [[오브젝트]]라는것

        그리고 그안에는

                sports= {
                  arguments: {},
                  caller: {},
                  length: 0,
                  name: "sports",
                  prototype: {
                    constructor: sports,
                    __proto__: Object.prototype
                  },
                  __proto__ : Function.prototype
                }

        이런 프로퍼티로 구성되어 있는 것이다. 즉, 이름 : 밸류, 키 : 밸류 형태인 것이다.

        그래서 우리도 이와같이 이름 : 밸류형태로 오브젝트 관점에서 바라볼 필요가 있다.
        
  
  */
};
