/**
 * 프로그램 설명문서 주석
 * 2021.12.07~8 수업
 *
 *           ===== yield 키워드 =====
 *
 *        Syntax: [returnValue] = yield[표현식];
 *       --> [returnValue]와 [표현식]은 선택이다
 *
 *
 *      - yield 키워드 사용형태
 *      --> next()로 호출할 때마다 하나씩 실행
 *
 *      - yield 키워드는
 *      --> 제너레이터 함수 실행을 멈추거나
 *          다시 실행할 때 사용
 *      --> yield 오른쪽의 표현식을 평가하고 결과를 반환
 *      ----> yield 단위로 실행하고 프로그람을 멈춤
 *      --> 표현식을 작성하지 않으면 undefined 반환
 *
 *      - [returnValue]
 *      --> 오른쪽의 평가 결과가 설정되지 않고
 *      --> 다음 next()에서
 *          파라미터로 넘겨준 값이 설정됨
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ yield 키워드 사용 형태 ---------------');

    function* sports(one) {
        debugger;
        yield one + 10;
        debugger;
        yield;
        debugger;
        /**
         *  yield 오른쪽의 표현식을 평가하고 결과 반환.
         *  - value는 건드리지 않음
         */
        const value = yield one + 50;
        // --> next()파라미터 값이 value로 들어가네...
        debugger;
    };

    const obj = sports(30);

    log(obj.next());
    // :: {value: 40, done: false}
    // :: [[GeneratorState]]: "suspended"
    debugger;
    log(obj.next());
    // :: {value: undefined, done: false}
    // :: [[GeneratorState]]: "suspended"
    debugger;
    log(obj.next());
    // :: {value: 80, done: false}
    // :: [[GeneratorState]]: "suspended"
    debugger;
    log(obj.next(200));
    // :: {value: undefined, done: true}
    // :: [[GeneratorState]]: "closed"
    debugger;
}
/**
 *           ===== yield =====
 *
 *        - yield 표현식을 평가하면
 *        --> 호출한 곳으로
 *        --> { value : 값, done : true/false} 반환
 *
 *        - value 값
 *        --> yield 표현식의 평가 결과 설정
 *        --> yield를 실행하지 못하면 undefined
 *
 *        - done 값
 *        --> yield를 실행하면 false
 *        --> yield를 실행하지못하면 true
 */
{
    "use strict"
    log('------------ yield 표현식 평가 ---------------');

    function* sports(one) {
        debugger;
        yield one;
        debugger;
        const check = 20;
        debugger;
    };

    const obj = sports(10);
    log(obj.next());
    // :: {value: 10, done: false}
    debugger;
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. obj.next() 호출
    //    yield one; 실행, {value: 10, done: false}

    // 2. obj.next() 호출
    //    check = 20;을 실행하지만, yield 처리가 아니므로
    //    {value: undefined, done: true} 반환

    // 3. 이 상태에서 계속 next()를 호출하면
    //   {value: undefined, done: true} 반환

    // 4. 함수를 호출할 수 있지만 함수가 실행돼지 않는다.

    /**
     *  - yield를 실행하면 done : false 반환,
     *    실행하지 못하면 done : true 반환
     *
     *  --> 이것으로 체크해야 한다.
     */
}

{
    /**
     *           ===== yield 정리 =====
     */
    "use strict"
    log('------------ yield ---------------');

    function* sports(one) {
        debugger;
        // 다음 next()에서 아무값도 안넘겨주면 undefined 설정
        let two = yield one;
        debugger;
        let param = yield one + two;
        debugger;
        yield param + one;
        debugger;
        return one;
    };

    const obj = sports(10);
    log(obj.next());
    // :: {value: 10, done: false}
    debugger;
    log(obj.next());
    // :: {value: NaN, done: false}
    debugger;
    log(obj.next(20));
    // :: {value: 30, done: false}
    debugger;
    log(obj.next());
    // :: {value: 10, done: true}
    debugger;

    // 1. function* sports(one) {}
    // -  제너레이터 함수를 선언한다
    // -  3개의 yield를 작성했다

    // 2. const obj = sports(10);
    // -  제너레이터 오브젝트를 생성한다
    // -  파라미터 값, 10이 one에 설정된다

    // 3. 첫 번째의 obj.next()를 호출한다
    // -  let two = yield one이 실행된다
    // -  one의 값인 10을 반환한다.
    // -  ** two의 변수에 10을 할당하지 않는다 **
    //    (평가 결과를 변수에 설정하지 않는다는 것을 기억)

    // 4. 두 번째의 obj.next()를 호출한다
    // -  next()에 파라미터 값을 작성하지 않았으므로
    //    two 변수에 undefined가 설정된다
    // -  let param = yield one + two를 실행
    // -  two 변수 값이 undefined이므로 NaN를 반환한다

    // 5. 세 번째의 obj.next(20)를 호출한다
    // -  ** 파라미터 값 20이 바로앞의 param 변수에 설정된다.
    // -  yield param + one을 실행한다.
    // -  20 + 10을 반환한다.

    // 6. 네 번째의 obj.next()를 호출한다
    // -  실행할 yield가 없으므로
    //    더 이상 처리하지 않으며
    // -  끝이라는 것을 나타내는
    //    done : true를 반환한다.

    /**
     *  return 을 하게되면 함수실행이 끝나뻐리면서
     *  value : 10, done : true가 되어뻐리네~~
     */
}