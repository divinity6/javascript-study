/**
  * 프로그램 설명문서 주석
  * 2021.03 18~21 수업
  * 
  *           ===== ES3:scope chain =====
  * 
  *       - scope chain은
  *       ----> 실행 콘텍스트와 관련이 있으며
  *       ----> 식별자 해결을 위해 사용
  * 
  *       - scope chain은
  *       ----> 식별자를 검색하기 위한
  *       ----> { name : value } 리스트
  * 
  *  ----------------------------------------------------
  * 
  *     - ES3에 정의된 스코프 체인의 정의 이다.
  * 
  *     ----> ES5에서는 scope는 사용하지만
  *           scope chain은 사용하지 않는다.
  * 
  *     - 여기서 스코프 체인은 식별자를 검색하기 위한 [[[오브젝트 리스트]]]이다.
  *       즉, 다수인 것이다.
  * 
  *   --------------------------------------------------------
  * 
  *   정리))
  * 
  *       - 함수가 호출되면
  *       ----> scope를 생성하고
  *       ----> 함수의 변수와 함수를
  *             { name : value } 형태로 설정
  * 
  *       - 생성한 scope를
  *       ----> scope chain에 연결하고
  *       ----> scope chain에서 식별자를 해결한다.
  * 
  *       - 동적 처리
  * 
  *       - ES3의 실행 콘텍스트 환경
  *       ----> scope chain
  *       ----> Activation Object
  * 
  *     ---------------------------------------------------------------
  * 
  *     - 변수와 함수를 name : value 형태로 설정
  *       함수의 이름이 name : value 에 function 오브젝트가 위치
  * 
  *     - scope chain에서 식별자를 해결한다.
  *       즉, scope를 만들면! [[[그것을 scope chain에다가 연결]]]해야 한다.
  *       그것을 리스트, 구조적, 계층적으로 만들고! 거기에서 식별자를 
  *       검색하고 해결한다는 것
  * 
  *     - 그런데 여기서 중요한 포인트가 있다.
  * 
  *     - !!!이것들을 동적 처리로 한다라는 것!!!
  * 
  *     - 함수가 호출되면 그안의 변수 이름과 함수 이름을 프로퍼티로 만들고
  *       그것을 scope chain에다가 연결 시킨다는 것
  * 
  *     - 때문에 함수가 새로 생길 때마다 scope chain이 [[동적으로 처리]]된다.
  * 
  *     - 반면 ES5는 Lexcical Environment! 즉, 정적환경이다.
  *       함수가 호출되었을 때, 정적환경에다가 함수안의 변수와 함수를 설정하고
  *       이외의 처리는 하지 않는다.
  * 
  *     - 그러면 ES3는 두번 동작이 발생하고 한번은 정적이 아닌, 함수가 생성될
  *       때마다 동적으로 만들어 진다라는 것.
  * 
  *     - 개념적으로 봐도 ES5처럼 하나의 콘텍스트안에서 처리하는 것이 빠를까? 아니면
  *     - ES3처럼 scope chain과 같이 연결하고 그것을 사용해서 식별자를 해결하는것이
  *       빠를까? 당연히 정적 환경이 빠르다!
  * 
  *     - ES3의 실행 콘텍스트 환경을 보면 스코프 체인이 있고 액티베이션 오브젝트가 있다.
  *       액티베이션 오브젝트(Activation Object)는 함수가 실행될 때, 실행된 결과를, 
  *       그리고 실행하기 위한 환경을 만드는 것이다.
  * 
  *     = 그런데 ES5에서는 scope chain은 없고 Activation Object에 대응하는 
  *       Lexical Environment가 있다라는 것이다.
  * 
  *     = 아키텍처적으로 큰 차이가 난다. (동적이냐, 정적이냐라는 것)
  * 
  *     --- 키워드 : 동적이냐? 정적이냐? ---
  * 
  *     - 이것에 따라서 엔진의 처리속도가 다르기 때문에 그렇다.
  *       시간이 많이걸리는가, 적게걸리는가, 그런 차이다.
  * 
  *     - 이것은 개발자에게 있어 굉장히 중요한 아이템,요소,항목이다.
  * 
  * 
  *     ----------------------------------------------------------------------
  * 
  *           ===== 스펙의 scope chain 사용 =====
  * 
  *     - 스펙의 scope chain 사용 횟수
  *     ----> ES3: 37
  *           ES5: 1
  *           ES6: 0
  * 
  *     - ES5: 바뀐 것을 나타내기 위해 사용
  *     ----> Lexical Environment의 Declarative Environment Record에
  *           함수의 변수와 함수 이름을 바인드
  *     ----> scope chain을 사용하지 않으며 DER에서 변수와 함수 이름을 검색
  * 
  * 
  *     -------------------------------------------------------------------------
  * 
  *     ES3에서는 scope chain을 사용했으나 ES5에서는 scope chain을 사용하지 않는다라는
  *     것을 알 수 있다.
  *     그리고 ES5의 한번은 바뀐것을 나타내기 위해 사용한 것이다.
  * 
  *     - 무엇이 바뀌었는가? scope chain의 형태를 Lexical 환경의
  *       선언적 환경 레코드로 배치한다라는 것.
  * 
  *     - 즉, 함수가 호출되었을 때, 함수의 변수와 함수 이름을 (선언적환경 레코드)에 바인딩
  *       한다는 것.
  * 
  *     - ES3는 scope chain에 바인딩 했었다.
  *       구조체가 scope chain은 하나가 더 있는 것이고
  *       Declarative Environment Record은 없는 것이다.
  * 
  *     - 그럼으로써 유일하게 Context를 만들 수 있다. 그러나 ES3에서는 scope chain이라는
  *       하나의 다른 구조체를 가지고 있는 것이다.(Activation Object와 함께)
  * 
  *       따라서 두개가 하나의 콘텍스트 개념으로 가져가는데 이것은 콘텍스트라고 하기에는
  *       좀 무리가 있다.
  *       그러나 ES5에서는 완전하게 콘텍스트 개념으로 가져간다라는 것.
  * 
  *       이것이 왜중요한가?
  * 
  *     - 함수가 호출되어 메모리에 올라갈 때 콘텍스트 하나만 올라가면 된다 라는 것.
  *       물론 이환경에 맞춰 우리가 코드를 작성해야한다는 전제는 있지만 기본적으로
  *       아키텍쳐가 받쳐준다라는 것.
  * 
  *     - ES3에서는 아키텍처가 받쳐주지 못했다라는 것.
  *       ES5에서는 완전하게 정적환경에서 아키텍처가 받쳐준다는 것.
  * 
  *     - 이제 엔진의 처리속도를 향상하기 위해서는 남아있는 것에 맞춰서 코드를
  *       작성하면 된다라는 것.
  * 
  *     == ES5에서 Lexical Environment를 정립했다는 것은 신의 한수로 볼 수 있다. ==
  * 
  *     Scope chain = ES3 기준
  * 
  *     Lexical Environment = ES5 이상
  * 
  *      
  * 
  * 
  * 
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
  
};
