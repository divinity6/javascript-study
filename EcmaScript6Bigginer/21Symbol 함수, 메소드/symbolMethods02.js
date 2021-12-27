
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
 */

{
    "use strict"
    log('------------ description ---------------');
}
