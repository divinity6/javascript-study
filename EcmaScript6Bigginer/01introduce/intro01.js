/**
 * 프로그램 설명문서 주석
 * 2021.07 21 수업
 *
 *
 *           ===== 강좌 방향 =====
 *
 *     - ES6+를 기본 과정과 심화 과정으로 분리
 *     --> 본 강좌에서는 기본을 다룬다.
 *
 *     - 강좌의 키워드
 *     --> 디테일, 깊이, 넓이, 근본
 *     --> 강좌가 분리된 이유이며 목적이다
 *
 *     - 디테일 : 예제 코드와 함께 자세히 다룸
 *     - 깊이 : 하나하나를 깊게 다룸
 *     - 넓이 : 스펙의 95% 이상을 다룬다
 *     - 근본 : 논리적으로 접근하여 근본을 다룬다.
 *              왜? 라는 것에 방점을 두고 접근
 *
 */
console.log("=====================================");

window.onload = function () {
    "use strict"
    // console.log 사용
    var log = function (value) {
        console.log('--- ' + value + ' ---');
    };

};

/**
 *
 *           ===== ES6+ 기본 과정의 주요 내용 =====
 *
 *      - 기본 문법
 *      --> let 변수, const 변수, 화살표 함수
 *      --> Spread, Rest , Destructuring, default value
 *      --> 연산자, getter/setter , Template
 *
 *      - 오브젝트에 추가된 함수
 *      --> Number, String , Object
 *      --> Array , Math , RegExp
 *
 *      - ES6+에 새로 생긴 오브젝트
 *      --> Iterator, Generator, Symbol
 *      --> Map, Set, WeakMap, WeakSet
 *          (WeakMap, WeakSet은 메모리 릭을 방지할 수 있다)
 *
 */

/**
 *
 *           ===== ES6+ 심화 과정의 주요 내용 =====
 *
 *      - ES6+ 새로 생긴 오브젝트
 *      --> Class, Proxy, Reflect, Promise, Module
 *      --> ArrayBuffer, TypedArray, DataView 등의 유형
 *          (이것들은 바이너리 처리를 하기위한것. c++과같은 구조체 사용가능)
 *
 *      ----> 자바스크립트는 64비트로 연산을하게되는데
 *            ArrayBuffer, TypedArray, DataView등을 사용해서 8비트연산, 16비트 연산가능
 *            (즉, 메모리를 줄일수가있다)
 *
 *      - 비동기 통신 전반
 *      --> Node.js 환경에서 다룬다
 *      --> Ajax의 XMLHttpRequest부터
 *      --> async/await 까지의 비동기 통신 전반을
 *          10 단계로 나누어서 다룬다.
 *          (이를 통해 비동기 통신 전반을 정리할 수 있다)
 *
 *      - 스펙의 95% 이상을 다룬다.
 */
