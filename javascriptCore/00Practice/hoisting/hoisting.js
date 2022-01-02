/**
  * 프로그램 설명문서 주석
  * 2021.04 02 수업
  * 
  *           ===== 코딩 시간 =====
  * 
  *         - 목적
  *         ----> JS의 { name: value } 이해
  *         ----> 함수 표현식과 함수 선언문 이해
  * 
  *         - 4개의 코드로 실행하고
  *           결과가 나오는 이유를 설명하시오!!
  * 
  *         - 함수 이름은 같으며 가운데서 함수 호출
  * 
  *         1. 함수 선언문, 함수 호출(), 함수 선언문
  *         2. 함수 표현식, 함수 호출(), 함수 표현식
  *         3. 함수 선언문, 함수 호출(), 함수 표현식
  *         4. 함수 표현식, 함수 호출(), 함수 선언문
  * 
  */
console.log("=====================================");

"use strict"
// console.log 사용
var log = function( value ){
  console.log('--- ' + value +' ---');
};

window.onload = function() {
  // 1. 예시
  log('1. 함수 선언문, 함수 호출(), 함수 선언문');
  function book() {
      function getBook() {
        return "책1";
      }
      // 여기서 함수 호출
      console.log(getBook());
      // :: 책2
      function getBook(){
        return "책2";
      }
  }
  book();

  /**
   *  ===== 1. 논리 설명
   * 
   *  1) 먼저 엔진컨트롤이 function 키워드를 만나면
   *     book()의 외부 Scope에다가 잠시 설정해둔다.
   * 
   *  2) 그리고 아래로 이동해 book()을 만나 엔진컨트롤이 book()안으로
   *     이동할 때 설정해둔 외부 Scope를 외부 렉시컬 환경 참조에 넣는다
   *     (실행 콘텍스트에 넣는 것)
   * 
   *  3) 그다음 실행을 하기 전에 먼저 내부 코드를 해석한다.
   *     이 때, 다른 것은 다 건너뛰고 함수 선언문을 해석하고 저장한다.
   *     여기에서 getBook()은 함수 선언문이기 때문에 function 오브젝트 형태로
   *     book()의 내부 Scope에 { getBook : ƒ(){...} } 형태로 저장한다.
   * 
   *  4) 그다음 초기화를 시킨다. 이 때 함수 내부의 변수의 값들을 초기화 시킨다.
   *     초기화 시킬 때 값을 undefined로 할당해 두는데 지금은 다른 값은 없어서 할당하지
   *     않는다.
   * 
   *  5) 그다음에 코드를 실행하게 되는데 맨위의 getBook()은 건너 뛰고
   *     console.log(getBook());을 실행하게 되는데
   *     getBook()의 값은 코드를 해석할때 getBook(){ "책2"}가 들어있으므로
   *     "책2"가 반환된다.
   */





  // 2. 예시
  log('2. 함수 표현식, 함수 호출(), 함수 표현식');

  function coffee(){
      var getCoffee = function(){
        return "커피1";
      };
      debugger;
      console.log(getCoffee());
      // :: 커피1

      getCoffee = function(){
        return "커피2";
      };
  };
  coffee();


  /**
   *  ===== 2. 논리 설명
   * 
   *  1),2)는 동일하기 때문에 생략한다
   * 
   *  3) 엔진컨트롤이 coffee()안으로 이동하게 되면 먼저
   *     내부 코드를 해석한다. 이때도 선언문을 먼저 해석하고 저장하는데
   *     해석하고 저장할 선언문이 없다.
   * 
   *  4) 그다음 변수초기화를 하는데 이단계에서
   *     함수 표현식인 getCoffee 에 undefined를 설정한다. 그리고 아래로 내려와
   *     값을 설정하려 봤더니 값에 undefined가 있기 때문에 값을 설정하지 않는다.
   * 
   * 
   *  5) 마지막으로 실행을 하는데 위의 함수표현식을 실행해 getCoffee를 다시 할당하고
   * 
   *  6) console.log(getCoffee())로 실행했을때 커피1을 반환한다.
   * 
   */





  // 3. 예시
  log('3. 함수 선언문, 함수 호출(), 함수 표현식');

  function phone(){
      function getPhone(){
        return "폰1";
      }
      console.log(getPhone());
      // :: 폰1

      var getPhone = function(){
        return "폰2";
      }
  };
  phone();

  /**
   *  ===== 3. 논리 설명
   * 
   *  1),2)는 위에서 설명했기에 생략한다
   *  
   *  3) 엔진컨트롤이 phone()안으로 이동하면 먼저 내부 코드를 해석한다.
   *     이 때 함수 선언문을 먼저 해석하고 스코프에 저장하는데, 함수 선언문인 
   *     getPhone(){...}을 저장한다.
   * 
   *  4) 그리고 초기화 단계에서 변수를 초기화하는데 아래 getPhone변수를 undefined로
   *     초기화 하려고 봤더니 값이 있기 때문에 초기화 하지않는다
   * 
   *  5) 마지막으로 실행 단계에서 getPhone()을 스코프에 저장하고
   *     console.log()를 실행하여 getPhone()의 값을 받는다. 이 값은 폰1이 반환된다.
   */





  // 4. 예시
  log('4. 함수 표현식, 함수 호출(), 함수 선언문');

  function computer(){
      var getComputer = function(){
            return "컴퓨터1";
      };
      console.log(getComputer());
      // :: 컴퓨터1

      function getComputer(){
            return "컴퓨터2";
      };
  }
  computer();

  /**
   *  ===== 4. 논리 설명
   * 
   *  1),2)는 앞에서 설명했기 때문에 설명을 생략한다.
   *  
   *  3) 먼저 엔진컨트롤이 computer()안으로 이동하면 내부코드를 해석하고
   *     함수선언문인 getComputer(){...}를 내부 스코프에 설정한다.
   * 
   *  4) 그다음 변수를 초기화 하는데 함수 표현식인 getComputer를 undefined로
   *     초기화 하려고 했으나 값이 이미 있기 때문에 건너뛴다.
   * 
   *  5) 실행단계에서 표현식인 getComputer에 값을 할당한다.
   *     그리고 나서 console.log()를 실행하는데 스코프에 표현식이 할당되어 있기 때문에
   *     "컴퓨터1"이 반환된다.
   */

  
  // 강의 질문에 올라온 예시
  function book(){
      let getBook = function(){ //함수 표현식
            return "book1";
      }
      console.log(getBook());
      debugger;
      getBook = function(){ //함수 표현식
            return "book2";
      }
  }
  book();
};
