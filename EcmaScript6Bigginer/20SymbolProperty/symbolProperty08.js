/**
 * 프로그램 설명문서 주석
 * 2021.12.26 수업
 *
 *           ===== generator 함수 연결 =====
 *
 *      - Object{}에 Symobl.iterator를 작성하고
 *      --> generator 함수를 연결하면
 *      --> 반복할 때마다 yield를 수행
 *
 *      - 연결 구조
 *      --> Symbol.iterator의 __proto__에
 *          제너레이터 오브젝트가 있는 구조
 *
 *      - 제너레이터 오브젝트에
 *      --> 이터레이터 오브젝트를 연결하여
 *          값을 공유하는 형태
 *
 *      --> 제너레이터 오브젝트에
 *          이터레이터 오브젝트가 포함된 구조
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{

    "use strict"
    log('------------ generator 함수 연결 ---------------');
    const obj = {};
    /**
     * - 할당 연산자(=)로 인해서 iterator가 generator 함수로
     *   대체되는 뉘앙스가 있지만 그렇지는 않다.
     *
     * - 실제 내부동작 :
     * --> Symbol.iterator.__proto__ = GeneratorFunction 을 할당
     * ----> 즉 Symbol.iterator.__proto__ => GeneratorFunction 타입
     *
     * - iterator 오브젝트와 generator 오브젝트 둘다 존재
     * --> 즉, 연결이라는 표현사용
     */
    obj[Symbol.iterator] = function*(){
        yield 1;
        yield 2;
        debugger;
        yield 3;
    }

    //  error :: Result of the Symbol.iterator method is not an object
    // obj[Symbol.iterator] = function(){
    //     return 1;
    // }

    // 아 위에것은 iterator 가 호출되면
    // obj[Symbol.iterator]를 먼저사용하겠다는 뜻
    /**
     *  - spread, rest 를 사용하면
     *    iterator를 호출한다는 것을 알 수 있다.
     */
    log([...obj]);
    // :: [1, 2, 3]
    debugger;

    const genObj = obj[Symbol.iterator]();
    debugger;
    log(genObj.next());
    // :: {value: 1, done: false}
    log(genObj.next());
    // :: {value: 2, done: false}
    log(obj[Symbol.iterator]().next());
    // :: {value: 1, done: false}
    debugger;

    // 1. obj 의 Symbol.iterator에
    //    제너레이터 함수를 연결했다

    // 2. [...obj]를 실행하면
    //    obj에서 [Symbol.iterator]()를 검색한다
    //

    // 3. 존재하므로 [Symbol.iterator]()를 실행하며
    //    이터레이터 오브젝트를 생성하여 반환한다

    // 4. yield 가 끝날 때까지 반복하면서
    //    yield 에서 반환된 값을 배열에 첨부한다.

    /**
     *  아, 같은 iterator를 공유하게되는구마잉
     */
    const insObj = genObj[Symbol.iterator]();
    log(insObj.next());
    // :: {value: 3, done: false}
    debugger;

}
{
    /**
     *  - generator 오브젝트에 iterator 오브젝트를
     *    연결하여 값을 공유하는 형태
     */
    "use strict"
    log('------------ 이터레이터 오브젝트 연결 ---------------');
    const gen = function*(){
        yield 10;
        debugger;
        yield 20;
    };
    /**
     *  - generator 오브젝트는 iterator 오브젝트
     */
    const genObj = gen();
    log(genObj.next());
    // :: {value: 10, done: false}
    const genObj2 = gen();
    log(genObj2.next());
    // :: {value: 10, done: false}

    debugger;

    /**
     * - 머야 미친, 새로운 인스턴스가 아니라 연결이네...?
     *   이터레이터 안에서 yield 처리를 하나보네.
     */
    const obj = genObj[Symbol.iterator]();
    log(obj.next());
    // :: {value: 20, done: false}
    debugger;

    // 1. genObj.next()
    //    첫 번째 yield 를 수행하여 10을 반환한다

    // 2. const obj = genObj[Symbol.iterator]();
    //    제너레이터 오브젝트의 Symobl.iterator() 호출
    //    이터레이터 오브젝트를 반환한다.

    // 3. obj.next()
    //    제너레이터 함수에서 수행했던
    //    첫 번째 yield는 수행하지 않고
    //    두 번째 yield를 수행하여 값을 반환한다

    // 4. 이터레이터 오브젝트에서 yield 처리를 공유한다.

    /**
     *  ===== 이것은 제너레이터 오브젝트에
     *        이터레이터 오브젝트가 포함된 구조여서 그렇다. =====
     *
     *  - 즉 generator 오브젝트안의 내부프로퍼티인
     *    @@iterator, [Symbol.iterator]를 호출하기 때문
     *
     *  ===== 즉, 같은 iterator를 바라보고 있다 =====
     */
}