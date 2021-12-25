/**
 * 프로그램 설명문서 주석
 * 2021.12.12 수업
 *
 *           ===== next() =====
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *
 *     - 형태                - generatorObject.next()
 *     - 파라미터             - 제너레이터로 넘겨 줄 파라미터 값opt
 *     - 반환                - {value : 값, done : true/false}
 *     -----------------------------------------------------------
 *
 *     - next()는 yield 단위로 실행
 *     --> yield 수만큼 next()를 작성해야
 *     --> yield 전체를 실행
 *
 *     - next()를 호출하면
 *     --> 이전 yield의 다음부터 yield까지 실행
 *
 *     - yield를 작성하지 않았을 때
 *     - 제너레이터 함수에 return 문을 작성 했을 때
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 이전부터 다음까지 ---------------');
    function* sports(value){
        value += 20;
        // ++를 앞에다 작성하면 반환전에 더하고
        // 뒤에작성하면 반환후 더하는구만...
        const param = yield ++value;
        value = param + value;
        yield ++value;
    };

    const obj = sports(10);
    log(obj.next());
    // :: {value: 31, done: false}
    debugger;
    log(obj.next(20));
    // :: {value : 52, done: false}
    debugger;

    // 1. 첫 번째의 obj.next()를 호출하면
    //    value += 20을 실행하고
    //    yield ++value;를 실행한다

    // 2. {value: 31, done: false}를 반환한다

    // 3. 왼쪽의 param에 값을 할당하지 않는다

    // 4. 두 번째의 obj.next(20)을 호출하면
    //    첫 번째 yield의 다음부터
    //    다음의 yield 까지 실행한다

    // 5. 여기서 yield의 다음이란 파라미터 값 20을
    //    param에 설정하는 것을 뜻한다

    // 6. 20 + 31은 51이 되며

    // 7. yield ++value;에서 1을 더해 52를 반환한다.
}

{
    "use strict"
    log('------------ yield를 작성하지 않음 ---------------');
    function* sports(value){
        ++value;
        log(value);
        // :: 11
    };
    const obj = sports(10);
    log(obj.next());
    // :: {value: undefined , done: true}
    debugger;

    // 1. 첫 번째 obj.next()를 호출하면
    //    제너레이터 함수를 실행하여
    //    value 값이 증가하지만

    // 2. yield가 없으므로 값이 반환되지 않는다.
}
{
    "use strict"
    log('------------ return 문 작성 ---------------');
    function* sports(value){
        return ++value;
    };

    const obj = sports(10);
    log(obj.next());
    // :: {value: 11, done: true}
    debugger;
    log(obj.next());
    // :: {value: undefined, done: ture}
    debugger;

    // 1. 첫 번째 obj.next()를 호출하면

    // 2. return ++value에서 11을 반환한다

    // 3. return으로 값을 반환하지만 {done: true}다.

    /**
     *  done: true => 해당 제너레이터 함수는 종료되었다는 뜻.
     */
}

/**
 *           ===== next() =====
 *
 *      - 함수는 호출할 때마다 변수에 초깃값을 설정
 *      - 제너레이터 함수는
 *      --> 제너레이터 오브젝트를 생성 할 때 초깃값을 설정
 *      --> next()로 실행할 때마다 초깃값을 설정하지 않음
 *      --> 변숫값을 그대로 유지
 */
{
    "use strict"
    log('------------ 변숫값을 그대로 유지 ---------------');
    debugger;

    const sports = function* (param){
        const one = param + 10;
        yield one;
        var two = 2;
        yield one + two;
    };

    // 이와같이 제너레이터오브젝트를 만들게되면 sports 제너레이터 함수 안으로
    // 실행콘텍스트 초기화 단계에서 한번들어간것이다.
    // (단지, 안의 코드를 실행시키지 않은것뿐,
    // --> 파라미터는 매핑되고, 함수선언문이 있으면 function object 설정되고 나머지
    //     값들은 초깃값 undefined가 설정됨
    const obj = sports(10);
    // :: {value: 20, done: false}

    /**
     *  1. 제너레이터 함수에 2개의 yield가 있다
     *  -  또한 const one과 var two가 있다
     *
     *  2. obj의 [[Scopes]]를 펼치면
     *  -  0:Local
     *     one: undefined;
     *     param : 10;
     *     two : undefined;
     *
     *  3. param에 10이 있다는 것은
     *  -  sports 함수 안으로 들어간 것이다
     *  -  sports 함수가 호출되어
     *  -  실행 콘텍스트의 초기화 단계에서 초깃값을 설정한 것이다.
     *  -  단지, 함수 안의 코드를 실행하지 않은 것이다.
     */

    debugger;

    // next 메소드 호출
    log(obj.next());
    /**
     *  const sports = function* (param){
     *      const one = param + 10;
     *      yield one;
     *  };
     *
     *  1. obj.next()를 호출하면
     *  -  sports 제너레이터 함수 안으로 이동한다
     *
     *  2. const one = param + 10;에서 멈추게 하면
     *  -  one: undefined, param: 10, two: undefined 이다
     *  -  이 값은 제너레이터 오브젝트를 만들때 설정한 값이다
     *
     *  3. const one = param + 10;
     *  -  one 변수의 값이 20으로 변경된다.
     *
     *  4. yield one;에서 {value: 20, done: false}를 반환한다.
     */

    debugger;
    // 다시 next() 호출
    log(obj.next());
    // :: {value: 22, done: false}

    /**
     *  const sports = function* (param){
     *      var two = 2;
     *      yield one + two;
     *  };
     *
     *  1. obj.next()를 호출하면
     *  -  sports 제너레이터 함수 안으로 이동한다.
     *
     *  2. var two = 2;에서 멈추게하면
     *  --> one 변수의 값이 살아있다.
     *  -  one: 20, two : undefined이다.
     *  -  one 변숫값 20은 이전 처리에서 설정한값이다.
     *
     *  ===== 이것이 generator 함수의 특징이다 ====
     *  - 변수로 선언된 값이 지워지지 않고 그대로 유지된다라는 것!!
     */

    debugger;

    /**
     *  3. 함수를 빠져 나온 후 다시 obj.next()를 호출하면
     *  -  함수 안으로 이동하게 되며
     *  -  함수 안의 변수에 초깃값을 설정하는데
     *  -  앞의 obj.next()로 one 변수에 할당한 값이 그대로 남아있다.
     *
     *  4. 이것이 제너레이터 함수의 특징이다
     *  -  제너레이터 오브젝트를 생성할 때 초깃값을 설정하고
     *  -  next()를 호출할 때마다 초깃값을 설정하지 않는다.
     */
    debugger;

}

