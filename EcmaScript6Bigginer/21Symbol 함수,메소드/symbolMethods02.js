
/**
 * 프로그램 설명문서 주석
 * 2021.12.28~ 수업
 *
 *           ===== toString() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Symbol.prototype.toString()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - 반환한 문자열
 *     -----------------------------------------------------------
 *
 *     - Symbol 을 생성했던 형태를 문자열로 변환하여 반환
 *     --> Symbol 값은 반환되지 않음
 *
 *     - + 로 문자열을 연결하면 TypeError
 *     --> toString()으로 변환하면 연결은 되지만
 *         Symbol 값은 연결되지 않음
 *
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ toString() ---------------');
    log(Symbol("100").toString());
    // :: Symbol(100)
    // :: type === string
    log(Symbol("100"));
    // :: Symbol(100)
    // :: type === symbol
    debugger;

    // 글로벌 심볼 레지스트리에 등록된 형태
    const sym = Symbol.for("book");
    log(sym.toString());
    // :: Symbol(book);
    debugger;

    // 단, .for 는 출력되지 않는다.

    try {
        // Symbol 값을 구하고 "ABC" 연결.
        log(Symbol() + "ABC");
    } catch {
        log("+로 연결 불가");
    };
    // :: +로 연결 불가

    log(Symbol(100).toString() + "ABC");
    // :: Symbol(100)ABC
    debugger;

    // 1. toString() 으로 변환하면 연결은 되지만
    //    Symbol 값은 연결되지 않는다
}

/**
 *          ===== description =====
 *
 *      - Symbol.prototype.description
 *
 *      - Syntax, ES2019
 *      --> Symbol("설명").description;
 *      --> Symbol.for("키").description;
 *      --> Symbol.iterator.description;
 *
 *      - Symbol 오브젝트의 주석, 설명을 반환
 *      --> Symbol() 함수의 파라미터를 반환
 *
 *      - toString()과 차이
 */

{
    "use strict"
    log('------------ description ---------------');
    log(Symbol("sports").description);
    // :: sports
    log(Symbol.for("book").description);
    // :: book
    log(Symbol.iterator.description);
    // :: Symbol.iterator
    debugger;
}

{
    "use strict"
    log('------------ toString()과 차이 ---------------');
    log(Symbol("book").toString());
    // :: Symbol(book)
    log(Symbol("").toString());
    // :: Symbol()
    log(Symbol().toString());
    // :: Symbol()
    debugger;
    /**
     *  Symbol() 안에 작성한 형태대로 반환
     */

    log(Symbol.for("book").description);
    // :: book
    log(Symbol("book").description);
    // :: book
    log(Symbol("").description);
    // :: ""
    log(Symbol().description);
    // :: undefined
    debugger;
    /**
     *  - description 은 파라미터 값이 출력
     *  --> 파라미터 값을 작성하지 않으면 undefined 가 출력됨.
     */
}

/**
 *
 *           ===== valueOf() =====
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Symbol.prototype.valueOf()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - 프리미티브 값
 *     -----------------------------------------------------------
 *
 *     - valueOf() 가 프리미티브 값을 반환하지만
 *     --> Symbol 은 값을 반환하지 않고
 *     --> Symbol 을 생성한 형태를 반환
 *
 *     - Symbol.for() 는 for를 제외하고 반환
 *
 */

{
    "use strict"
    log('------------ valueOf() ---------------');

    log(Symbol("100").valueOf());
    // :: Symbol(100)
    // :: type === symbol
    log(Symbol.for("200").valueOf());
    // :: Symbol(200);
    // :: type === symbol
    debugger;

    /**
     * - Symbol 은 Symbol 내부의 값을 외부로 노출하지 않는 것이
     *   최우선이다.
     * --> 이것을 위해서라면, 다른 것은 포기하겠다라는 각오...
     *
     */
}
/**
 *
 *           ===== getOwnPropertySymbols() =====
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Object.getOwnPropertySymbols()
 *     - 파라미터             - Object
 *     - 반환                - 배열
 *     -----------------------------------------------------------
 *
 *     - Object 의 함수이지만
 *     --> Symbol 이 대상이므로 여기서 다룬다.
 *
 *     - 파라미터의 Object 에서
 *     --> Symbol 만 배열로 반환.
 *     ----> only Symbol 만... ( 다른 프로퍼티는 반환하지 않는다 )
 *
 *     --> 다른 프로퍼티는 반환하지 않는다.
 *
 */

{
    /**
     *  - 아 이거 특정한 값만 따로 설정하기 좋겠네...
     *  --> 특정 값들은 심볼로 설정해두면 되자늠...
     */
    "use strict"
    log('------------ getOwnPropertySymbols() ---------------');
    const obj = {point: 100};
    // 프로퍼티 key 로 Symbol 사용
    obj[Symbol("one")] = 200;
    obj[Symbol.for("two")] = 300;
    debugger;

    /**
     *  - getOwnPropertyNames 는 Symbol 은 반환하지 않네
     */
    log(Object.getOwnPropertyNames(obj));
    // :: ['point']
    log(Object.getOwnPropertySymbols(obj));
    // :: [Symbol(one), Symbol(two)]
    const list = Object.getOwnPropertySymbols(obj);
    debugger;
    // 배열로 반환하니깐 이터러블 오브젝트!
    for(const sym of list){
        // symbol 의 값이나오는 것이니깐!!
        log(`${sym.description} : ${obj[sym]}`);
        // :: one : 200;
        // :: two : 300;
        debugger;
    }

    // 1. Object.getOwnPropertyNames(obj)
    //    obj 에서 프로퍼티 이름을 배열로 반환한다
    //    Symbol 은 반환하지 않는다

    // 2. Object.getOwnPropertySymbols(obj)
    //    obj 에서 Symbol 만 배열로 반환한다

    // 3. for-of 문으로 전개된다.

}