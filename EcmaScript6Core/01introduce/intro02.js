/**
 * 프로그람 설명문서 주석
 * 2022.02 03 수업
 *
 *
 *           ===== 강좌 접근 =====
 *
 *		- 본 강좌의 수강자는 자바스크립트를 알고 있다
 *
 *	    - ES6+ 기능 이해 중요
 *
 *	    - 더불어 스펙 설계 그룹의 의도를 헤아리는 것
 *	    ----> 스펙 설계그룹의 의도를 헤아리는 것은
 *	          의도적으로 접근하지 않으면 헤아릴 수 없다
 *
 *	    --> 오브젝트, 메소드를 만든 목적이 무엇인지?
 *	    ----> 왜 이러한 메소드를 만들었는가?
 *
 *	    --> 어떤 배경으로 인해 이것을 만든 것인지?
 *	    ----> 예) 이러한 기능이 불편해서 보완하기위하여 나옴.
 *
 *	    --> 개발자에게 전하려는 메시지가 무엇인지?
 *	    ----> 예) Promise 를 통해서 비동기처리를 전달하고 싶은것.
 *	             단지, Promise 를 가지고 비동기다!!
 *	             이것은 일차원적인 접근이다.
 *	             왜 Promise 를 만들었는가? 이러한 접근
 *
 *	    --> 이러한 것을 생각해 보아야한다
 *
 *		- 그러면 보다 깊게 이해할 수 있으며
 *	    --> 자바스크립트 관련 기술이 연상되고 연결된다
 *
 *	    - 강좌 타이틀의 "심화"에 이런 의도가 담겨있다.
 *	    --> 이것을 염두에 두고 강좌를 진행한다.
 *
 *	    ----> 11단계로 나누어 비동기 프로세스를 정리
 *	          - 이것이 연결
 *	            ( 하나하나 기능이 아닌, 기능이 연결,연결,연결되서 하나의 시나리오 )
 *
 *	          - 웹관련 API 들을 어떻게 javascript 와 연결시킬것인가?
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
/**
 *
 *
 *           ===== ES6+ 위치 =====
 *
 *		- 개발자 관점에서 ES6+ 위치
 *	    --> ES5 가 프로그라밍 언어의 기본에 중점을 둔 반면
 *	    --> ES6+ 는 관련된 API 의 통합과 융합이다
 *	    ----> 앞의 WebWorkers 라는 API 를 통합하지 않으면
 *	          멀티 스레드를 할 수 없다.
 *	    ----> Fetch API 를 융합하지 않았다면, 강력한 Fetch
 *	          메소드를 사용할 수 없다.
 *	          ( 이러한 것들이 JS 가 나아갈 방향이다 )
 *
 *	    --> 이것은 ES6+ 가 나아갈 방향이다
 *	        ( 물론, 다른 API 들도 JS 와 인터페이스가 되도록 다 만든다.
 *	          그러나 Fetch 는 함수로 그냥 호출하면된다. 완전히 묶인것! )
 *
 *	    - 특히, ES6+ 심화 강좌의 오브젝트가 이 방향이다
 *
 *	    - 관련된 API 를 통합, 융합하여
 *	    --> 비동기로 병행 처리와 병렬 처리를 할 수 있으며
 *	    ----> 병행 처리 : Promise
 *	    ----> 병렬 처리 : WebWorkers
 *	    --> 비동기 통신을 쉽고 간단하게 구현할 수 있다.
 *	    ----> 이것이 Fetch
 *
 *	    - 이에 초점을 맞추시고 강좌를 들으면
 *	    --> 더 쉽게 이해할 수 있으며
 *	    --> 자바스크립트를 다른 시각으로 접근할 수 있다.
 *	    ----> 앞의 3강좌는 JS를 코딩적인 측면, 문법적인 측면에서
 *	          접근했지만, 심화강좌에서는 SPEC 을 설계한 사람들의
 *	          의중을 읽는 것.
 *
 */
{
    "use strict";
    log('------------  ---------------');
    // :: false
    debugger;
}