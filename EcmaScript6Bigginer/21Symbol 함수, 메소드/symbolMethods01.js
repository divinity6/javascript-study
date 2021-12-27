
/**
 * 프로그램 설명문서 주석
 * 2021.12.28 수업
 *
 *           ===== for() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Symbol.for()
 *     - 파라미터             - Symbol key 값
 *     - 반환                - 생성 또는 검색된 Symbol
 *     -----------------------------------------------------------
 *
 *     - 글로벌 Symbol 레지스트리(registry)에
 *     --> {key : value} 형태로 Symbol 을 저장
 *     --> 파라미터()의 문자열이 key가 되고
 *         Symbol()로 생성한 값이 value 가 됨
 *     --> registry 의 사전적 의미: 등록, 기록
 *     ----> 즉, Global Symbol registry 라는
 *           오브젝트에 {key : value} 형태로 저장
 *
 *     - 글로벌 Symbol 레지스트리는 공유 영역
 *     --> 다른 오브젝트에서도 사용 가능
 *     --> 같은 key가 존재하면 등록된 값을 사용
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Symbol.for() ---------------');
    /**
     * - {key : value} 형태로 Symbol 값을 생성해서 one에 할당.
     */
    const one = Symbol.for("sports");
    log(one);
    // :: Symbol(sports)
    debugger;

    // 1. {key: value} 형태로 one에 설정한다
    //    one 이 글로벌 Symbol 레지스트리에 저장된다

    // 2. 파라미터인 "sports"가 key가 되고
    //    Symbol()로 생성한 값이 value가 된다.

    // 3. Symbol("sports") 함수에서 파라미터가
    //    주석이었던 것과는 차이가 있다.

    /**
     *  - Symbol()로 생성한 Symbol 값은 PrimitiveValue 이다
     *    반면, Symbol.for()로 생성한 것은 {key : value}형태이다.
     *  --> 구조가 다르다.
     *
     *  - 글로벌 Symbol 레지스트리는 다른 오브젝트에서도 사용 가능.
     *    (Global)
     */
}

{
    "use strict"
    log('------------ 글로벌 Symbol 레지스트리 ---------------');
    /**
     *  - Symbol("sports")가 key 가 되고
     *    Symbol 값이 value 가 되어 one에 설정
     *    또한, 글로벌 Symbol 레지스트리에 등록
     */
    var one = Symbol.for("sports");
    /**
     *  - Symbol.for("sports")
     *
     *  - 우선 "sports"로 글로벌 Symbol registry 에
     *    key(sports) 가 존재하는지 체크
     *
     *  - 존재하면 Symbol 값을 사용하지 않고,
     *    one 의 value 에 설정된 Symbol 값을 그대로 사용
     *
     *  - key(sports) 도 마찬가지로 그대로 사용
     */
    const two = Symbol.for("sports");

    // 정보) 여기서 값은 대체된것이 아닌 one 의값임!!
    log(one === two);
    // :: true
    debugger;

    // 문자열로 변환하여 key 값으로 사용
    log(Symbol.for(true));
    // :: Symbol(true)
    debugger;

    // 1. one 의 key 값과 two 의 key 값이 같으므로
    //    Symbol 값을 생성하지 않고
    //    one에 설정된 값을 사용한다.

    // 2. one === two
    //    그래서 비교 결과가 true이다

    // 3. Symbol.for(true)
    //    true 를 문자열로 변환하여 key 값으로 사용

    /**
     *  - 글로벌 시멘틱이 나타내듯이 모든 Object에서 공유하게 된다
     *    그런데 파라미터에 작성한 sports가 key가 된다.
     *
     *  - 다른 Object 에서 sports를 사용하게 되면 혼동될 수 있다.
     *    이런점을 고려해서 시스템을 설계해야 한다.
     *
     *  --> Symbol 값을 공유할 것이냐, 아니면 별도의 Symbol 값을
     *      만들어서 사용할 것이냐
     */
}

/**
 *           ===== keyFor() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Symbol.keyFor()
 *     - 파라미터             - 검색할 Symbol
 *     - 반환                - Symbol key, undefined
 *     -----------------------------------------------------------
 *
 *     - 글로벌 Symbol 레지스트리에서
 *       Symbol 의 key 를 구한다
 *
 *     --> 파라미터에 Symbol.for()로 등록한 Symbol 작성
 *
 *     - Symbol key 가 존재하면
 *     --> key 를 반환하고
 *     --> 존재하지 않으면 undefined 반환
 */
{
    "use strict"
    log('------------ Symbol.keyFor() ---------------');
    const one = Symbol.for("book");
    const six = Symbol.keyFor(one);
    const sports = Symbol.keyFor(window.one);

    log(six);
    // :: book
    log(sports);
    // :: sports
    debugger;

    // 1. const six = Symbol.keyFor(one);
    //    파라미터에 글로벌 Symbol 레지스트리에
    //    등록한 Symbol 을 작성한다

    // 2. one 의 key 인 "book"을 반환한다.

    // 3. Symbol key 가 존재하지 않으면 undefined 반환.
}

/**
 *          ===== Symbol.for() =====
 *
 *      - 이걸로 글로벌 Symbol registry 에 작성한 값은
 *        나중에 덮어써지지 않고(대체되지않고)
 *
 *      - 처음에 작성된 값을 반환(사용)
 */