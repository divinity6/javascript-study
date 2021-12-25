/**
 * 프로그램 설명문서 주석
 * 2021.12.19 수업
 *
 *      - yield 는 키워드이지만 yield*은 표현식이다.
 *
 *           ===== yield* =====
 *
 *      - Syntax: yield* 표현식
 *
 *      - yield*의 표현식에 따라 처리하는 방법이 다르다
 *      --> 사례를 통해 살펴보겠다.
 *
 *      - yield*의 표현식이 배열
 *      --> next()로 호출할 때마다
 *          배열의 엘리먼트를 하나씩 처리
 *
 *      - yield*의 표현식이 제너레이터 함수
 *      --> 함수의 yield를 먼저 처리
 *
 *      - yield* 표현식에서 자신 호출
 *      --> 재귀 호출
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 표현식이 배열 ---------------');

    function* sports(){
        // yield*의 표현식을 object로 작성하게되면
        // object is not iterable 에러가난다
        // (array-like도 동일)
        yield yield* [10, 20];
    };

    const obj = sports();
    log(obj.next());
    // :: {value: 10, done: false}
    debugger;
    log(obj.next(50));
    // :: {value: 20, done: false}
    debugger;

    /**
     * - 아하 한줄에 세미콜론(;)없이 쭉 작성하면
     *   yield* 표현식부터 평가하고 반환하는구나!!
     */
    log(obj.next());
    // :: {value: undefined, done: false}
    debugger;

    // 새로운 obj를 만들어서 반환을 하는구나
    const newObj = sports();
    log(newObj.next());
    debugger;

    // 1. 첫 번째의 obj.next()를 호출하면
    //    yield* [10,20]; 에서 10을 반환
    //    {value: 10, done: false} 반환

    // 2. 두 번째의 obj.next()를 호출하면
    //    yield* [10,20];에서 20을 반환한다
    //    {value: 20, done: false} 반환

    // 3. yield*의 표현식이 배열이면
    //    next()를 호출할 때마다
    //    배열의 엘리먼트를 순서대로 반환한다.
}

{
    "use strict"
    log('------------ 표현식이 제너레이터 함수 ---------------');

    function* point(count){
        debugger;
        yield count + 5;
        debugger;
        yield count + 10;
    };

    function* sports(value){
        debugger;
        /**
         *  generatorObject를 자동으로 만들고 내부를 실행한다.
         *
         *  - 아 yield에 *이 붙으면 표현식을 평가하고 실행까지시키나...?
         */
        yield* point(value);
        yield value + 20;
    }
    const obj = sports(10);
    log(obj.next());
    // :: {value: 15, done: false}
    debugger;
    log(obj.next());
    // :: {value: 20, done: false}
    debugger;
    log(obj.next());
    // :: {value: 30, done: false}
    debugger;

    /**
     *  1. 첫 번째의 obj.next()를 호출하면
     *  -  yield* point(value);를 실행한다
     *
     *  2. yield*의 표현식에 함수를 작성했으므로
     *  -  point(value)를 호출한다
     *  -  point()가 제너레이터 함수이므로
     *  -  우선, 제너레이터 오브젝트를 생성한다
     *
     *  3. next()로 호출해야 yield가 수행되지만
     *  -  자동으로 point() 첫 번째인
     *     yield count + 5;를 수행한다
     *  -  {value: 15, done: false} 반환
     *
     *  4. 다시 point()를 호출한 곳에서 반환 값을 받아 반환한다.
     *
     *  5. 두 번째의 obj.next()를 호출한다
     *  -  point()dml yield count + 10;을 실행한다.
     *  -  {value: 20, done: false} 반환
     *
     *  6. 세 번째의 obj.next()를 호출한다
     *  -  point()의 yield를 모두 처리했으므로
     *  -  sports()의 yield value + 20;을 실행
     *  -  {value: 30, done: false} 반환
     *
     */

    /**
     *  즉, ! yield*의 표현식이 generator 함수일때는
     *  - 그 함수내부에 yield가 없을때까지 먼저 실행한다는 뜻!!
     */
}

{
    "use strict"
    log('------------ 표현식에서 자신 호출 ---------------');

    function* sports(point){
        debugger;
        /**
         *  yield 로 인해 함수를 빠져나가기 때문에 무한루프를 돌지않는다.
         *  ( 반환하는게 없으면 무한루프에 빠진당~ )
         */
        yield point;
        yield* sports(point + 10);
    };

    const obj = sports(10);
    log(obj.next());
    // :: {value: 10, done: false}
    debugger;
    log(obj.next());
    // :: {value: 20, done: false}
    debugger;
    log(obj.next());
    // :: {value: 30, done: false)
    debugger;

    // 1. 첫 번째의 obj.next()를 호출하면
    // -  yield point;를 실행한다
    // -  {value: 10, done: false} 반환

    // 2. 두 번째의 obj.next()를 호출한다
    // -  yield* sports(point + 10);에서
    //    자신을 호출한다
    // -  첫 번째 줄의 yield point;를 실행한다
    // -  {value: 20, done: false} 반환

    // 3. 세 번째의 obj.next()를 호출한다
    // -  yield* sports(point + 10);에서
    //    자신을 호출한다
    // -  첫 번째 줄의 yield point;를 실행한다
    // -  {value: 30, done: false} 반환

    // 4. {주의} yield point;가 없으면
    //    무한 반복을 하게 된다.

    /**
     *  - 즉, generator 함수안에서 yield* 표현식으로 재귀함수를 호출할때,
     *    yield로 빠져나갈 수 있도록 설계하면 무한루프를 돌지 않는다.
     */
}

/**
 *  ===== yield* 표현식은 =====
 *  - 배열을 작성할 수 있고,
 *  - 제너레이터 함수를 작성할 수 있고,
 *  - 자기 자신(재귀)을 호출할 수 있다.
 */