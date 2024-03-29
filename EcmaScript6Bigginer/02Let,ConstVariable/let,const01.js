/**
 * 프로그램 설명문서 주석
 * 2021.07 22 수업
 *
 *
 *           ===== 변수 구분 =====
 *
 *      - 로컬(지역)변수, 글로벌(전역) 변수
 *      
 *      - 변수를 구분하는 이유는?
 *      --> 기능과 목적이 다르기 때문
 *      
 *      - 글로벌 변수의 기능, 목적
 *      --> 다른 js파일에서 변숫값 공유
 *      --> 파일에서 공통 변수 개념으로 사용
 *      ----> 파일에서 최상위 레벨의 변수,따라서
 *            파일에있는 모든 함수에서도 사용가능
 *            
 *      --> 의도는 좋으나 처리 속도가 떨어짐
 *      
 *      - 로컬 변수의 기능,목적
 *      --> 빠르게 식별자를 해결하기 위해
 *          가까운 스코프의 변수를 사용하려는 것
 *
 *      ----> 빠르게 식별자를 해결하기 해 스코프라는 개념사용
 *          예) 함수라는 스코프를 두고 이영역 안에서 변수를 찾으면 빨리 찾을 수 있음
 *          
 *      ----> 여기까지는 문제가 없었다. 그런데
 *      
 *      - var 키워드 문제가 생김
 */
console.log("=====================================");
// "use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};
/**
 *
 *           ===== 글로벌 변수 오해 =====
 *
 *      - 글로벌 변수는
 *      --> 글로벌 오브젝트의 로컬 변수
 *      ----> 함수안에 있는 변수와 마찬가지로 
 *            글로벌 변수는 글로벌 오브젝트에 있는 로컬 변수
 *      --> var value = 100처럼
 *      --> var 키워드 사용이 정상
 *      
 *      - var 키워드를 작성하지 않으면
 *      --> 글로벌 변수로 간주하는데
 *      --> 이것이 문제
 *
 */

log('글로벌 변수 문제');

value = 100;
function point(){
    value = 300;
    console.log("함수:", value);
};
point();

// 1. var 키워드를 사용하지 않고
//    value를 글로벌 변수로 선언하고 100 할당

// 2. point() 함수 안에서 value 변수에 300 할당
//    value 변수가 로컬 변수가 아니므로
//    글로벌 오브젝트의 value 변수에 300 할당

// 3. 함수 안에서 글로벌 변수에
//    값을 설정하는 것은 좋은 모습이 아니다
//    (함수 안에 있는 것은 함수 안에서 되도록 끝내는 방향으로 가야한다)

// 4. 로컬 변수와 글로벌 변수를
//    구분한 목적을 생각해야 한다.
// --> 스코프를 가지고 빠른 식별자 해결을 하기위함.

/**
 *
 *           ===== use strict 사용 =====
 *
 *      - 함수 안에서
 *      --> var 키워드를 사용하지 않으면 에러 발생
 *      --> ES5에서 도입했으나 근본적인 접근은 아님
 *      
 *      - ES6+
 *      --> "use strict"가 디폴트 환경
 *      --> 전체는 아님 (대부분이 use strict 환경에서 돌아간다)
 *      --> ES6에서 개발할때는 첫 줄에 선언하는 것이 안정적인 접근
 *
 */

log('글로벌 변수 사용 불가');
'use strict';
debugger;
function point2(){
    'use strict';
    try {
        // 글로별 변수
        // 함수안에서 글로벌 오브젝트에 값 설정
        value = 300;
    } catch(e) {
        console.log("글로벌 변수 사용 불가");
    };
};
point2();








