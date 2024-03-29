/**
  * 프로그램 설명문서 주석
  * 2021.03 12~13 수업
  * 
  *           
  *           ===== Execution Context 형태(실행 콘텍스트 형태) =====  
  * 
  *           - book() 함수가 호출되면
  *           ----> show Function 오브젝트를 생성한다
  *           ----> show의 [[Scope]]에 스코프 설정 
  *     
  *           - show() 함수가 호출되면 EC 생성
  *           ----> 함수 실행을 위한 Context 환경 구축
  *           ----> LEC, VEC, TBC 생성 첨부
  *           ----> LEC에 ER, OLER 첨부
  *           ----> ER에 DER, OER 첨부
  *         
  *           - DER에 show()의 변수, 함수 기록
  *           - OLER에 show의 [[Scope]]를 설정
  *           - this 바인딩 컴포넌트에 this 참조 설정
  * 
  */
console.log("=====================================");
 
window.onload = function() {
  "use strict"
  // console.log 사용
  var log = function( value ){
    console.log('--- ' + value +' ---');
  };

  log('Execution Context (실행 콘텍스트 형태)');

  function book(){
  
    var point = 123;
    function show(){
      var title = "JS책";
      debugger;
      // getPoint();
      // this.bookAmount
    };
    debugger;

    function getPoint(){
      return point;
    };
    show();
  };
  book();
  debugger;

  /*


    @show 실행 콘텍스트(EC): {
      렉시컬 환경 컴포넌트(LEC): {
        환경 레코드(ER): {
          선언적 환경 레코드(DER): {
            title: "JS 책"
          },
          오브젝트 환경 레코드(OER): {}
        },
        외부 렉시컬 환경 참조(OLER): {
          point: 123,
          getPoint: function() {}
        }
      },
      변수 환경 컴포넌트(VEC): {},
      this 바인딩 컴포넌트(TBC): {
        글로벌 오브젝트(window)
      }
    }

    --------------------------------------------------------------

    - book()함수가 호출되면 엔진 컨트롤이 함수 안으로 이동하게 된다.

    ----> point 변수 선언,

    ----> function 키워드를 만나면 show()라는 이름을 가진 function 오브젝트 생성.
          여기서 show function 오브젝트의 [[Scope]]에 스코프를 설정한다.
          [[]]는 엔진이 설정하는 프로퍼티를 뜻한다.

    ----> 그리고 여기서 스코프는 show()함수가 속한 book()안의 모든 영역을 뜻한다
          여기에 있는 point 와 getPoint()를 [[Scope]]에 설정하게 된다.

    ----> 그리고 내려와서 getPoint() function 오브젝트를 만들고(show 함수와 같이),
          show함수를 호출하게 된다.

    ----> 1)) 그러면 엔진 컨트롤이 show()안으로 이동하게 되지만!!!
              들어가기전에 우선 실행 콘텍스트(Execution Context)를 만든다
          
          아래 1)번으로 이동

    ----> 2)) var title 변수를 만나게 되면 환경 레코드(Environment Records)안의
              선언적 환경 레코드(Declaration Environment Records)에
              title ="JS책"을 
              title: "JS책" 와 같이 프로퍼티 형태로 설정한다.

    ----> 또한 오브젝트 환경 레코드가 있지만 이것은 뒤에서 다루겠다.

    ----> 여기에서 함수에서 값을 구하는 형태에 대해서 살펴보겠다.
          우선 파라미터에서 값을 구할 수 있다. 
          그리고 변수를 선언해서 값을 구할수도 있고, 
          또 안에서 함수를 호출하여 호출된 함수에서 반환된 값을 값으로 사용할 수 있다.

          그리고! 또하나의 방법은 [[[함수 밖의 변수를 값으로 사용]]]할 수가 있다.

    ---------> 이것에 대한 논리!!!

              show() function 오브젝트를 만들 때 show()가 
              속한 범위를 [[Scope]]안에다 설정해 두었다.

          아래 5)번 이동

    ----> 3)) 그리고 함수에서 값을 구할 수 있는 또하나의 방법은 this로 참조해서
              this.bookAmount 처럼 값을 구할 수 있다.

              그런데 여기서 this란 show()함수 앞에 작성한 오브젝트를 참조한다.

    ----> 현재 오브젝트를 작성하지 않았지만 this로 참조할 수 있는 것을

          아래 7)번 이동

    ----> 4)) 따라서 글로벌 오브젝트에 있는 bookAmount라는 
              프로퍼티 값을 이곳에서 구할 수있다.
    
    --------------------------------------------------------------------------

    @Execution Context 실행 콘텍스트(EC): {

      1) ---> 이것은 함수를 실행하기 위한 Context환경을 구축하기 위한 것이다.
            !! 즉, 하나의 덩어리 안에서 함수가 실행될 수 있도록 만드는 것이다.
            실행 Context 구성요소들을 살펴 보겠다.

      @Lexical Environments Component 렉시컬 환경 컴포넌트(LEC): {

      2) ---> 정적이다. 다이나믹이 아니다. 그리고 같은 레벨에 변수 환경 컴포넌트가 있다.

      6) ---> 그런데 이것이 하나의 Context인 것이다. 안의 덩어리이다.
              그래서 @외부 렉시컬 환경 참조(OLER)가 함수밖에 있는 것이지만
              마치 내것처럼 쓸 수 있는 것이다.

              왜냐하면 하나의 덩어리 이기 때문이다.
              콘텍스트 이기 때문에 그렇다
              -- 상단 3)) 주석문으로 이동 --

        @Environment Records 환경 레코드(ER) : {
          @Declarative Environment Records 선언적 환경레코드(DER) : {
            title: "JS책"
          },

          @Object Environment Records 오브젝트 환경 레코드(OER): {}
        },
        @외부 렉시컬 환경 참조(OLER): {
        5) ---> 그런데 이[[Scope]]에 설정된 것을 바로 외부 렉시컬 환경 참조에 설정한다.
                따라서 point와 getPoint()함수가  point: 123, getPoint: function(){}
                처럼 설정되게 된다.

          point: 123,
          getPoint: function(){}
        }
      },

      @Variable Environment Component 변수 환경컴포넌트 (VEC): {}
      
      3) ---> 변수환경 컴포넌트와 렉시컬 환경 컴포넌트의 초깃값은 같다.
              같게 해야할 이유가 있지만 이것은 뒤에서 설명하도록 하겠다.

      @This Binding Component this 바인딩 컴포넌트(TBC): {

      4) ---> 그리고 This 바인딩 컴포넌트를 만든다.
              This로 참조할 오브젝트를 Binding시키는 것이다.

              -- 상단 2)) 주석문으로 이동 --

      7) ---> 바로 This Binding 컴포넌트에다가 바인딩 시키는 것이다.
              show 함수 앞에다가 오브젝트를 작성하지 않았고, 
              그러면 그것은 글로벌 오브젝트가 되지만 글로벌 오브젝트는
              실체가 없다.
              따라서 host object 개념으로 window 오브젝트를 참조하게 된다.

               -- 상단 4)) 주석문으로 이동 --


        Global Object  글로벌 오브젝트(window)
      }
    }

    --------------------------------------------------------------------------

    
    ----> 즉, 실행 콘텍스트 안에 함수에서 구할 수 있는 값의 덩어리를 만들어 놓는 것이다.

          따라서 함수가 메모리에 올라갔을 때, 메모리에 실행 될때 함수에서 다른 값을 구하기위해
          메모리를 빠져나오거나 메모리에 올리거나 그럴 필요가 없다
          
          === 왜냐하면 하나의 콘텍스트 개념으로 묶어두었기 때문이다 ===

          === 이것이 자바스크립트의 정적 콘텍스트 개념이다. ===

          이러한 환경을 정적으로 만든다라는 것.( 동적으로 만드는 것이 아니다 )
          이것은 굉장히 중요한 의미를 갖는다.

          그렇다면 이에맞추어서 코드를 작성해 준다면 엔진은 심플하게 처리 할 수 있다.
          즉, 빠르게 처리 할 수 있다.

    ---> 이것이 우리가 실행 콘텍스트를 알아야할 이유이면서 목적이다.
         아래의 환경에 맞춰서 코드를 작성해 준다면 굉장히 빠르게 처리된다! 라는 것.

    === 여기에서 렉시컬 개념을 다시정리하면 

        우리가 function 키워드를 만나서 show() function 오브젝트를 만든다.
        이때 이미 """[[Scope]]가 결정된다."""

        이것을 정적,렉시컬(Lexical)이라고 한다.
        렉시컬 스코프(lexical scope)다!

    ---> 그리고 함수를 호출 했을 때 show함수에 대한 스코프를 그때 만든다면 그것은
         Dynamic인 것이다.(동적 scope가 되는 것이다.)


    === scope의 구조를 본다면 환경 컴포넌트가 있고,(렉시컬 환경 컴포넌트)
        그리고, 그안에 스코프에 관련된 것이 존재하게 되고(환경 레코드, 외부 렉시컬 환경 참조)
        그리고 또 그안에 각각의 식별자(title:"JS책")가 존재하게 되는 것이다.

    === 이러한 것이 전부 다 정적으로 된다!! 라는 것.


    !!! === 물론 자바스크립트는 동적으로 스코프를 만드는 것이 있다. === !!!
    
    몇 가지가 된다. 
    ( 뒤에서 다루겠지만 기본적으로 자바스크립트는 정적으로 스코프를 만들고 정적으로 환경을
      만든다. 라는 것. )

    이것이 중요한 포인트이다.

    정적!, 그리고 환경이라는 개념을 가져간다라는 것!

    환경,Environment! 환경의 구성요소는 Scope 개념이 들어가 있고, 그리고 식별자 해결을 위한
    처리가 들어가 있다라는것.

    이것이 Execution Context형태의 기본적인 포인트라고 할 수 있다!!!!

  */
    


};
