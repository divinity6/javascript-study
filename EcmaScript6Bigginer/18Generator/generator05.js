/**
 * 프로그램 설명문서 주석
 * 2021.12.13 수업
 *
 *           ===== yield 반복 =====
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ yield 반복 ---------------');
    let status = true;
    function* sports(){
        let count = 0;
        while(status) {
            yield ++count;
        }
    };

    const obj = sports();
    log(obj.next());
    //:: {value: 1, done: false}
    debugger;
    log(obj.next());
    // :: {value: 2, done: false}
    debugger;
    status = false;
    log(obj.next());
    debugger;
    // :: {value: undefined, done: true}

    /**
     *     - yield를 반복하는 형태
     *     - let status = true;
     *     --> while() 문을 제어하기 위한 상태 값이다
     *
     *     - 첫 번째 next() 호출
     *     --> let count = 0;을 실행하여
     *         count 변수에 0을 설정한다
     *     --> 누적 값을 구하기 위한 것이다.
     *
     *     - while(status) { yield ++count; }
     *     --> status가 true이므로 yield를 수행한다
     *     --> {value: 1, done: false} 반환
     *
     *     - 두 번째 next()를 호출한다
     *     --> status가 true이므로 yield를 수행한다.
     *     --> {value: 2, done: false} 반환
     *
     *     - 세 번째 next()를 호출한다
     *     --> status가 false이므로
     *         yield ++count;를 수행하지 않는다
     *     --> {value: undefined, done: true} 반환
     *     --> {done: true}이므로
     *         이터레이터를 더 이상 사용할 수 없다.
     */
}

/**
 *           ===== 다수의 yield 처리 =====
 */
{
    "use strict"
    log('------------ 한 줄에 다수의 yield 작성 ---------------');
    // 심플하게 한줄로 작성가능
    function* sports(){
        return yield yield yield;
    };

    const obj = sports();
    log(obj.next());
    // :: {value: undefined, done: false}
    debugger;
    log(obj.next(10));
    // :: {value: 10, done: false}
    debugger;
    log(obj.next(20));
    // :: {value: 20, done: false}
    debugger;
    log(obj.next(30));
    // :: {value: 30, done: true}
    debugger;

    /**
     *     - 한 줄에 다수의 yield와 return 작성
     *     --> return yield yield yield;
     *
     *     - 첫 번째 next() 호출
     *     --> 첫 번째 yield를 수행한다
     *     --> yield에 반환 값이 없으므로
     *         {value: undefined, done: false} 반환
     *
     *     - 두 번째 next(10) 호출
     *     --> 파라미터 값: 10
     *     --> 두 번째 yield를 수행한다
     *     --> 함수에 파라미터 값을 받을 변수가 없으면
     *         파라미터로 넘겨 준 값을 반환
     *         {value: 10, done: false} 반환
     *
     *     - 세 번째 next(20) 호출
     *     --> 파라미터 값: 20
     *     --> 세 번째 yield를 수행한다
     *     --> 함수에 파라미터 값을 받을 변수가 없으므로
     *         파라미터로 넘겨 준 값을 반환
     *         {value: 20, done: false} 반환
     *
     *     - 네 번째 next(30) 호출
     *     --> 파라미터 값: 30
     *     --> 처리할 yield가 없으므로 done: true 반환
     *     --> return 문을 작성했으므로
     *         파라미터로 넘겨 준 값을 반환
     *         {value: 30, done: true} 반환
     *
     *     - return 문을 작성하지 않으면
     *     --> 30이 아닌 undefined 반환
     *         {value: undefined, done: true} 반환
     */
}
/**
 *  ===== 아, next()의 파라미터 값을 그전단계의 yield에 설정하나보넨넨 =====
 */