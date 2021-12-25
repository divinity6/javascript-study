/**
  * 프로그램 설명문서 주석
  * 2021.03 10~11 수업
  * 
  *           
  *           ===== 엔진 관점의 핵심 키워드 =====
  * 
  *       *** ES3 스펙 ***
  *     
  *       Execution Contexts
  *         Definitions
  *           Function Object
  *           Types of Executable Code
  *           Variable Instantiation
  *           Scope Chain and Identifier Resolution
  *           Global Object
  *           Activation Object
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
  *           Lexical Environments
  *             Environment Records
  *             Lexical Environment Operations
  *             The Global Environment
  *           Execution Contexts
  *             Identifier Resolution*
  *           Establishing an Execution Context
  *             Entering Global Code
  *             Entering Eval Code
  *             Entering Function Code
  *           Declaration Binding Instantiation
  *           Arguments Object
  * 
  *      ----------------------------------------------------------------------------------
  * 
  *      - 엔진 처리는 크게 해석과 실행으로 나눌 수 있다. (Context Execution)
  * 
  *      --->  해석이란 컴파일과 실행할 환경을 설정하는 것.
  *      --->  실행이란 해석단계에서 설정된 환경을 바탕으로 코드를 실행하는 것.
  * 
  *     - 따라서, 실행환경을 만드는 것은 함수가 호출되기 전에도 할 수 있고, 호출된 후에도 할 수 있다.
  *     ---> 그러나 실행이라는 것은 함수가 호출된 다음에 하는 것이다.
  * 
  *     - 여기의 키워드는 Context다. 즉, 함수라는 단위를 어떻게 묶음으로 가져갈 것인가.
  *       어떤 덩어리로 가져갈 것인가.
  * 
  *     ---> 예) 여러 박스에 함수에 있는 내용들을 분산 시켰다. 그럼 이것은 아니지 않는가?
  *          그런데 하나의 박스안에 즉, Context안에다가 함수에서 발생 할 수 있는 것을 모두다
  *          집어 넣는다면 심플하다.
  * 
  *          왜냐하면 Context하나만 가지고 메모리에 올라가면 되는 것이다. 그런데 여러 박스에
  *          분산시켰다. 그러면 여러박스를 다 가지고 올라가야 하지 않는가?
  * 
  *      === 그리고 함수가 호출되었을 때 어떻게 실행하는 묶음을 가져갈 것인가 하는 것이 바로
  *      === - Execution Context 이다. - ===
  * 
  *      - 그렇다면 실행 콘텍스트(Execution Context)를 왜 묶음으로 가져 가느냐 하는 것.
  *        여기에 의문을 가져야한다.
  *        왜 묶음으로 가져가야 하는가?
  * 
  *      - Identifier Resolution : 이물음에 대한 해답 및 답변이 
  *        식별자 해결, 결정(Identifier Resolution)이다
  * 
  *      - 함수가 호출되었을때 함수의 이름을 찾아야 한다.
  *      ----> 함수의 이름을 찾는데 그것이 실행 콘텍스트(Execution Context),즉,
  *            실행하는 묶음 안에, 덩어리 안에 있다면 심플하다.
  * 
  *      ----> 거기서 바로 끄집어 내면 되기 때문에 심플하다.
  *      ----> 그런데 그것이, 콘텍스트(Context) 밖에 있다. 그러면 그것을 찾으러 가야한다.
  *            이것은 아닌것이다.
  * 
  *            그러면 엔진 처리도 복잡해지고 시간도 많이 소요된다.
  *            그래서 아니다, Context안에다 집어다 넣어 놓자. 
  *            그러면 바로 끄집어면 되지 않느냐하는것이다.
  * 
  *      - 그리고 변수에다 값을 할당 했다. 
  * 
  *      ----> 그런데 이 변수가 밖에 있다. 그럼 그것도 아닌것이다. 
  *            메모리에서 지금 실행 중이기 때문이다.
  * 
  *      ----> 변수가 밖에 있다, 라고 한다면 그 변수위에 있는
  *            관련된 오브젝트, 즉, Context를 또하나 끌고 올라와야 한다.
  *            생각해보면 이것은 아닌 것이다.
  * 
  *            그러면 엔진이 그만큼 시간도 많이걸리게 된다.
  * 
  *      - 그리고 식별자 해결에서 파생된 단어가 스코프다(scope).
  *      ----> 식별자가 어디에 있는가?, 구조적으로 가져간 것이다.
  *            그런데 그 구조적으로 가져가는 것도, 엔진관점에서 본다면
  *            부담이 된다, 라는 것.
  * 
  *      === 그것이 바로 스코프 체인(Scope Chain)이다. ===
  * 
  *      - 부담 된다라는 것. 왜냐하면 Context 개념으로 올라와서
  *        메모리에서 실행을 하고있는데 Scope Chain이라는 개념으로
  * 
  *      - 다시 어딘가에서 끌고 와야된다. 이건 또, 부담이 되는 것이다.
  *        Context 개념에서 벗어나는 것이지 않는가?
  * 
  *      ----> 단일 Scope로 가져가서 실행 Context 안에다 그야말로 박스 개념안에다가
  *            몽땅 다 포장해서 박스 안에서 처리를 한다면, 엔진도 심플하게 처리할 수
  *            있고, 빠르다.
  * 
  * 
  *      ====================== 이런 개념이 바로 Context 개념이다 ======================
  * 
  *      === 그런데 그것은 궁극적으로 무엇을 위하는 것인가 하면 바로 ===
  *      === 이 식별자 해결(identifier Resolution)을 위한 것이다.  ===
  * 
  *      - 식별자, 즉, 함수이름, 변수이름을 어떻게 빨리 찾을 것인가?
  *        그리고 실행할 것인가? 라는 것이다.
  * 
  *      *** 분산되지 않고 하나의 Context 개념으로, 하나의 덩어리 안에서, 뭉치안에서
  *          하겠다는 것이 엔진의 기본적인 방향이다. ***
  * 
  *     =====>> 이것이 핵심이다.
  * 
  *     정리하자면 식별자 해결(identifier Resolution)을 하기위해서 Context가 필요 했던 것이고
  *     함수가 호출 되었을 때, 식별자 해결을 하게되니깐 실행콘텍스트(Execution Context)라는 하나의
  *     묶음으로 묶어 버린 것. 
  * 
  *     - 이것을 얼마만큼 가져갈 것인가? 라는 것. 이것을 어떤 단위로 가져 갈 것인가?
  *       
  *       그런데 ES3에서는 Scope Chain 이라는 개념을 썼고, ES5에서는 Lexical Environments
  *       라는 개념을 썼다라는 것이다.
  * 
  *                   ========= 여기에는 엄청나게 큰 차이가 있다 =========
  * 
  *     - ES5를 슈가 버전이다.라고 이야기를 하는 사람도 있다. 그러나 그렇지 않다.
  *       이것은 엄청나게 큰 것이다.
  * 
  *       왜냐, Scope Chain 개념과 Lexical Environments 개념은 Context가 다르기 때문이다
  * 
  *       === 묶음이 다르다 ===
  * 
  *     - 하나의 묶음으로 가져가는게 최선이다. 최고로 좋다. 그안에서 처리하면 되기 때문이다.
  *       그런데 여러개로 분산되어 있다. 박스가, 그리고 그 박스마다 가서 변수를 찾아야 한다.
  *       이것은 아닌 것이다.
  * 
  *     - 박스가 결국 Scope란 개념이다. 이것을 정확하게 안다면 코드도 달라질 수 있다 라는 것.
  * 
  *     === 우리가 작성하는 코드 ===
  * 
  *     - Lexical Environments의 개념. 그리고 Identifier Resolution을 위한 어떤 매커니즘,
  *       아키텍처에 대해 정확하게 이해한다면 굉장히 좋은 코드를 만들 수 있다.
  * 
  *     - 이강좌의 핵심이기도 하다. 물론 이것과 앞에 관련된 사항. 그리고 이로 인해서 파생되는
  *       내용, 그리고 이로 인해서 결과적인 사항을 중점적으로 다룰 것이다.
  * 
  *     === 그러나 이것의 키워드는 실행 콘텍스트와 특히, 콘텍스트. 그리고 식별자 해결,결정. ===
  *     
  *       
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
