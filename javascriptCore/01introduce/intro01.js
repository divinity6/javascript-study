/**
  * 프로그램 설명문서 주석
  * 2021.03 09 수업
  * 
  *           
  *           ===== 강좌 방향 =====
  * 
  *       - 자바스크립트(ES5) 엔진 처리 중심
  * 
  *       - ES5 기준
  * 
  * 
  *       ==== ES3 / ES5 스펙의 아키텍처, 메커니즘 관련 키워드
  * 
  *       *** ES3 스펙 ***
  *     
  *       Execution Contexts*
  *         Definitions
  *           Function Object
  *           Types of Executable Code
  *           Variable Instantiation
  *           Scope Chain and Identifier Resolution*
  *           Global Object
  *           Activation Object*
  *           This
  *         Arguments Object
  *           Entering An Execution Context
  *           Global Code
  *           Eval Code
  *           Function Code
  * 
  * 
  *       *** ES5 스펙 ***
  * 
  *       Executable Code and Execution Contexts*
  *           Types of Executable Code
  *             Strict Mode Code
  *           Lexical Environments*
  *             Environment Records
  *             Lexical Environment Operations
  *             The Global Environment
  *           Execution Contexts
  *             Identifier Resolution
  *           Establishing an Execution Context
  *             Entering Global Code
  *             Entering Eval Code
  *             Entering Function Code
  *           Declaration Binding Instantiation
  *           Arguments Object
  * 
  * 
  *       ------------------------------------------------------------------------
  * 
  *       - 전체 숲을 보는 관점으로 대략적인 개념을 살펴 보겠다.
  * 
  *       === ES3 스펙 ===
  * 
  *       - Execution Contexts(실행 콘텍스트)안에 속하는 내용들에 대하여 ::
  *       ----> Execution Contexts(실행 콘텍스트)란?
  *             함수가 호출되었을 때, 함수가 실행될 수 있는 환경!
  *             그리고 함수가 실행되었을 때, 결과를 저장되는 영역!
  * 
  *       ----> 즉, 함수의 모든 처리는 이안에서 이루어진다.
  * 
  *       - Definitions(정의들)
  * 
  *       - Function Object
  *       ----> 엔진이 Function 키워드를 만났을 때 만드는 Function 오브젝트를 뜻한다.
  * 
  *       - Types of Executable Code(실행 가능 코드들)
  *       ----> 여기에는
  *             Global Code
  *             Eval Code
  *             Function Code
  *             의 세가지 코드가 존재한다.
  * 
  *       ----> 그런데 Eval Code는 함수이다. 즉, 문자열로 작성하기 때문에
  *             Global Code 와 Function Code 와는 다르다.
  *       
  *       ----> 그런데 Global Code 와 Function Code는 위치만 다를 뿐, 코드는 같다.
  *             그런데도 분류를 한것은 실행하는 영역이 다르기 때문이다.
  * 
  * 
  *       - Variable Instantiation(변수의 인스턴스 화)
  *       ----> 변수를 어떻게 인스턴스화 시켜서 처리할 것인가.(이러한 개념)
  * 
  *       - Scope Chain and Identifier Resolution(스코프 체인과 식별자 해결, 결정)
  *       ----> 사실 식별자 해결이 굉장히 중요한 의미다.
  *       ----> 즉, 함수를 호출할 때 , 어떻게 함수 이름을 찾을것인가. 그리고 변수에
  *             값을 설정할때 어떻게 변수이름을 찾을 것인가.
  *       
  *       ----> 여기서 id는 변수 이름과 함수이름을 뜻한다.
  * 
  *       - Global Object(전역객체)
  *       ----> Global Object 와 Function Object를 분리한 것은 위의 이유와 같다 
  *       ----> 즉, 영역이 다르기 때문에 그렇다.
  * 
  *       - Activation Object( 함수가 호출되었을때 함수를 실행할 수 있는 환경 )
  *       ----> 그리고 함수가 실행되었을 때 실행된 결과를 저장하는 오브젝트이다.
  *       ----> 오브젝트니깐 프로퍼티다. 즉, 이안에는 다른 오브젝트가 존재할 수 있다.
  * 
  *       - This
  *       ----> This는 인스턴스에서 중요한 위치다.
  * 
  *       - Arguments Object
  *       ----> 함수의 파라미터를 처리하는 오브젝트
  * 
  *       ----------------------------------------------------------------------------
  * 
  *       === ES5 스펙 ===
  * 
  *       Executable Code and Execution Contexts( 실행 가능한 코드와 실행 콘텍스트)
  *       이것은 ES3와 같다.
  * 
  *       - Types of Executable Code(실행 가능 코드들)
  *       ----> 이것은 ES3에서도 있엇다. 
  *       
  *       - Strict Mode Code(스트릭트 모드)
  *       ----> 그리고 여기에 스트릭트 모드가 추가된다.
  *       ----> 이것은 use strict로 작성했을 때의 실행 모드이다.
  * 
  *       - Lexical Environments( 정적인 환경 )
  *       ----> 중요한 내용
  *       ----> Lexical (정적인), 이와 반대되는 개념이 Dynamic(동적인)
  *             자바스크립트는 정적 환경을 취한다.
  * 
  *       ----> 따라서 Execution Contexts(실행 콘텍스트)가 하나의 어떤 실행하는 묶음이라고 한다면
  *             그 안에서 Lexical Environments, 환경적인 측면을 처리하는 것.
  * 
  *       - Environment Records(함수가 호출되어 실행 될때,)
  *       ----> 그리고 실행되기 전에 그사항들을 기록하는 것.
  * 
  *       - Lexical Environment Operations ( 정적인 환경에 할당 )
  *       ----> Operations은 할당이라고 보아도 된다.
  *       ----> 물론 여러가지 의미가 있지만, 어떤 변수에 값을 할당했을 때
  *             그것을 정적인 환경에 설정하는 것.
  * 
  *       ----> 물론 이것은 Environment Records이것과도 관련이 있다.
  * 
  *             즉, 이러한 구조를 갖고 있는것.
  * 
  *       - The Global Environment ( 전역 환경 )
  *       ----> 앞에서 말했던 Global Object를 처리하는 Environment
  * 
  *       - Identifier Resolution( 식별자 해결 결정 )
  *       ----> 매우 중요하다
  *       ----> Execution Contexts(실행 콘텍스트)가 어떤 실행하는 묶음이라고 한다면
  *             Identifier Resolution( 식별자 해결 )은 바탕이 되는 개념이다.
  * 
  *             함수를 호출 했을때, 어디서 찾을 것인가. 이런 어떠한 개념
  * 
  *       - Entering Global Code ( 글로벌 코드 )
  *       - Entering Eval Code  ( 이발 코드 )
  *       - Entering Function Code ( 펑션 코드 )
  *       ----> 여기서 Entering의 개념은 함수안으로 엔진 컨트롤이 이동 했을 때,
  *             함수안에 작성된 코드를 어떻게 처리할 것인가. 이런어떤 개념적인 이야기다.
  * 
  *       - Declaration Binding Instantiation( 선언 , 바인딩 , 인스턴스화 )
  *       ----> 여기에서 키워드는 바인딩이다.
  *             바인딩은 Variable(변수)하고도 관계가 있고 This하고도 관계가 있다.
  * 
  *       ----> 변수를 어떻게 Execution Contexts(실행 콘텍스트)의 Environment(환경)
  *             에다가 binding(바인딩)시켜서 Records(레코딩)할 것인가.
  *   
  *       ----> 그리고 This를 어떻게 binding(바인딩)할 것인가.
  *             This는 함수 밖에 있는 오브젝트고,
  *             변수는 함수 안에 작성할 수도 있고, 함수 밖에 작성할 수도 있다.
  * 
  *       ----> 이런것들을 Execution Contexts(실행 콘텍스트)안에 어떻게 묶을 것인가 하는 이야기.
  *             그리고 그것들은 Environment Records( 레코드 )에 기록될 것이다.
  * 
  *       ----> Environment( 환경 )에 정리가 될 것이다.
  * 
  *       - 왜냐하면 Lexical Environments에 함수에서 실행되는 모든 조건들.
  *       ----> 즉, 변수와 함수들이 모두 여기에 Recording( 레코딩 )이 되기 때문에 그렇다.
  *     
  *       - Arguments Object( 아규멘트 오브젝트 )
  *       ----> 함수의 파라메타를 처리하는 오브젝트
  * 
  * 
  *       -----------------------------------------------------------------------------------
  * 
  *       - 여기서 관련 키워드의 중심에는 함수가 있다.
  * 
  *       ---> 함수가 실행되기 전에, 어떻게 할 것인가, 그리고 함수가 호출되었을 때, 어떻게 처리할 것인가
  *            이런것이 이안에 담겨있다고 할 수 있다.
  * 
  */
console.log("=====================================");
 
window.onload = function() {
  "use strict"
  // console.log 사용
  var log = function( value ){
    console.log('--- ' + value +' ---');
  };

};
