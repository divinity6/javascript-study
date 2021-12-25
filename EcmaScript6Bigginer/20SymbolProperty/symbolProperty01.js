/**
 * 프로그램 설명문서 주석
 * 2021.12.21 수업
 *
 *           ===== Well-Known Symbols =====
 *
 *      - 스펙에서 @@iterator 형태를 볼 수 있음
 *      --> ES2019 스펙: Well-Known Symbols
 *
 *      - @@는
 *      --> Well-Known Symbols 을 나타내는 기호
 *      --> @@match와 Symbol.match가 같다
 *      --> 스펙에서는 @@match 형태를 사용하고
 *      --> 개발자는 Symbol.match 형태를 사용
 *      ----> 스펙에서는 @@를 쓰는데 왜 개발자는 Symbol로 쓰는가?
 *
 *      - ES2019 기준: 12개 Well-Known Symbol
 */

/**
 *           ===== Well-Known Symbols =====
 *
 *      - Well-Known Symbol이란
 *      --> 스펙에서 알고리즘에 이름을 부여하고
 *      --> 이름으로 참조하기 위한 빌트인 Symbol 값
 *
 *      - 개발자 코드 우선 실행
 *      --> match()를 실행하면
 *          디폴트로 @@match를 실행
 *      ----> 즉, 엔진에서는 @@match가 실행된다는 뜻
 *
 *      --> 소스 코드에 Symbol.match를 작성하면
 *      --> @@match가 실행되지 않고
 *          Symbol.match가 실행된다
 *
 *      ----> String.prototype.match가 호출되면
 *            우선, 개발자 코드에서 Symbol.match가 작성된 것을 찾는다.
 *            없다고 한다면, @@match 실행.
 *      ----> 아니면 Symbol.match 실행.
 *
 *      ----> 그런데 지금까지는 Symbol.match가 없었다.
 *            그래서 @@match가 실행되었는데 이제는 개발자에게 유용한 형태로 오픈
 *
 *      --> Symbol.match 를 사용함으로써 @@match에서 제공하는 기능을
 *          변경하거나 추가하거나 할 수 있는 것이다.
 *
 *      --> 이것이 바로 SymbolProperty의 목적이다.
 *
 *      - 개발자 코드로 @@match의 디폴트 기능을
 *      --> 오버라이딩 할 수 있음
 *          (오버라이딩 : 부모 클래스에서 이미 정의된 메소드를 자식클래스에서 다시 정의)
 *
 *      ----> Symbol.match 가 먼저 호출되기 때문
 *      ----> 물론, Symbol.match 도 @@match가 실행된다.
 *
 *            그러나, Symbol.match가 wrapper 개념이기 때문에
 *            @@match의 실행 결과, 또는 개발자가 필요한 부분을
 *            오버라이딩해서 사용할 수 있다라는 것.
 *
 *    ======= 이것이 기존의 방법과 Well-known Symbol 방법의 차이 =======
 *    - 개발자가 유형성을 가질 수 있도록 오픈시켜줬다는 것.
 *    --> 기존에는 엔진에서 제공하는 것만 사용할 수 있었는데,
 *        이제는 개발자가 필요한 것을 추가할 수 있다는 것.
 *
 *    - 바로 이것이 Well-Known Symbols의 목적이다.
 *      (사고방식이 달라진 것)
 */


/**
 *           ===== Well-Known Symbols =====
 *
 *     ----------------------------------------------------------------
 *     - Symbol                         - 대응
 *
 *     - Symbol.asyncIterator           - for-await-of
 *     - Symbol.isConcatSpreadable      - Array.prototype.concat()
 *     - Symbol.match                   - String.prototype.match()
 *     - Symbol.search                  - String.prototype.search()
 *     - Symbol.split                   - String.prototype.split()
 *     - Symbol.toStringTag             - String.prototype.toString()
 *
 *     - Symbol.hasInstance             - instanceOf
 *     - Symbol.iterator                - for-of
 *     - Symbol.replace                 - String.prototype.replace()
 *     - Symbol.species                 - constructor
 *     - Symbol.toPrimitive             - ToPrimitive()
 *     - Symbol.unscopables             - with
 *     ----------------------------------------------------------------
 *
 *     ----> 예) for-await-of 를 호출하게되면,
 *              Symbol.asyncIterator 가 있으면 이것을 먼저 실행하고,
 *              없으면 @@asyncIterator 를 실행함.
 *
 *     - 강좌에서 다루는 것
 *     --> isConcatSpreadable, iterator, match,
 *     --> species, toPrimitive, toStringTag
 *
 *     - 강좌에서 다루지 않는 것
 *     --> asyncIterator, hasInstance(instanceof 처리)
 *     ----> for-await-of ) ES6 심화과정에서 다룰 예정
 *     ----> hasInstance ) instanceof에 대응
 *     --> replace, search, split 는 match 와 비슷
 *     --> unscopables 는 "use strict"에서 with 문을 사용할 수 없음
 *     ----> with문은 사용권장 x
 *
 *              ===== JS는 정적 스코프 사용 =====
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ symbol-keyed-property ---------------');
}