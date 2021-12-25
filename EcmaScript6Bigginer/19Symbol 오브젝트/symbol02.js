/**
 * 프로그램 설명문서 주석
 * 2021.12.20 수업
 *
 *           ===== Symbol() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Symbol()
 *     - 파라미터             - 설명,주석opt
 *     - 반환                - 유일한 Symbol 값
 *     -----------------------------------------------------------
 *
 *     - Symbol() 함수는 값을 생성하여 반환
 *     --> 반환된 값을 볼 수 없음
 *     --> new 연산자를 사용할 수 없음
 *
 *     - 프로그램 전체를 통해 유일한 값 제공 (중요한 기능)
 *     - Symbol 값으로 연산 불가
 *     - Symbol 타입 변경 불가
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ Symbol() ---------------');
    const sym = Symbol();
    log(sym);
    // :: Symbol()
    log(typeof sym);
    // :: symbol
    debugger;

    // 1. const sym = Symbol()
    //    Symbol 오브젝트가 아니라
    //    Symbol 값을 생성하여 반환한다

    // 2. 새로운 값을 생성하여 반환하므로
    //    값을 생성한다는 표현이 적절하다

    // 3. log(sym)
    //    생성한 Symbol 값이 출력되지 않고
    //    Symbol 값을 생성한 코드 형태가 표시된다
    /**
     *    값을 생성한 코드형태로 표시 -> 생성한 값 외부노출 x 의도
     */

    // 4. typeof sym
    //    Symbol로 생성한 값 타입은 symbol이다.

}

{
    "use strict"
    log('------------ 유일한 값 생성 ---------------');
    const one = Symbol();
    const two = Symbol();

    log(one == two);
    // :: false
    debugger;

    // 1. Symbol()을 실행할 때마다
    //    프로그램 전체에서 하나만 있는 값을 생성

    // 2. 따라서 one의 값과 two의 값이 다르다.
}
{
    "use strict"
    log('------------ Symbol 값으로 연산 불가 ---------------');
    let sym = Symbol();
    try {
        // 에러 발생
        const add = sym + 5;
    } catch(e){
        log("연산 불가");
        // :: 연산 불가
    }
    debugger;

    // 1. const add = sym + 5;
    //    Symbol이 값이지만 연산할 수 없다.
    /**
     *  - Symbol은 값이지만 연산 불가,
     *  --> sym + 5 하게되면
     *  --> add 변수에 무엇인가 값이 할당
     *      그러면 Symbol 값이 노출된다
     *      (이것을 방지하기 위함)
     */
}

{
    "use strict"
    log('------------ Symbol 타입 변경 불가 ---------------');
    let sym = Symbol();
    let str = String(1);


    try {
        +str;
        +sym;
    }catch {
        log(sym);
        // :: Symbol()
        log(str);
        // :: 1
        log("값 타입 변경불가")
        // :: 값 타입 변경불가
    }
    debugger;

    // 1. ++sym
    //    단항 +연산자는 Number 타입으로 바꾼다
    //    Symbol 타입을 바꿀 수 없다

    // 2. 이외에도 비교할 수 없는 등의
    //    Symbol 값 사용에 제약이 있다

    // 3. 이것은 외부에 값이
    //    노출되지 않도록 하기 위해서다.

    // 4. 외부에 Symbol 값이 노출되는 처리
    //    (계산, 변환 등)을 할 수 없다.
}


/**
 *           ===== Symbol() =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터
 *     - 형태                - Symbol()
 *     - 파라미터             - 설명,주석opt
 *     - 반환                - 유일한 Symbol 값
 *     -----------------------------------------------------------
 *
 *     - 파라미터에 주석, 설명을 작성
 *
 *     - Symbol 값을 문자열로 바꿔서 연결
 *
 *     - Template에 사용
 */

{
    "use strict"
    log('------------ 파라미터에 주석, 설명 작성 ---------------');
    const sym = Symbol("주석, 설명");
    /**
     *  Symbol 값을 만든 코드형태가 출력
     */
    log(sym);
    // :: Symbol(주석, 설명);
    debugger;

    // 1. const sym = Symbol("주석, 설명");
    //    파라미터에 Symbol()로 생성한 값의
    //    설명, 주석을 문자열로 작성한다

    // 2. 생성한 Symbol 값을 볼 수 없으므로
    //    값 설명이 필요할 때 사용한다

    // 3. Symbol() 실행에 영향을 미치지 않는다

    // 4. log(sym)
    //    생성한 Symbol 값이 출력되지 않고
    //    Symbol 값을 생성한 코드가 표시된다.
}

{
    "use strict"
    log('------------ 문자열로 연결 ---------------');
    const sym = Symbol("설명");
    log(sym.toString() + "연결");
    // :: Symbol(설명)연결
    debugger;

    // 1. sym = Symbol("설명");

    // 2. Symbol 값을 toString()으로 변환하면
    //    에러가 발생하지 않지만

    // 3. 값이 변횐되지 않고
    //    값을 만든 형태에 문자열을 연결한다.

    // 4. new String(sym) 형태는 에러가 발생한다.
}

{
    "use strict"
    log('------------ Template에 사용 ---------------');
    const sym = Symbol("주석, 설명");
    try {
        `${sym}`
    } catch{
        log("`${sym} 불가`");
        // :: `${sym} 불가`
    }
    debugger;

    // 1. Symbol 값을 Template에 사용할 수 없다.

    /**
     *  - Template를 사용하면 Symbol 값이 String으로 변환된다
     *    string 으로 변환된다는 이야기는 Symbol 값이 외부로
     *    노출된다는 뜻이기 때문에 Template를 사용할 수 없다.
     *
     *  - 외부로 노출될수 있는 형태라면 모든것을 허용하지 않는다는 것.
     *
     *          ===== 이것이 Symbol의 특징이다 =====
     */
}






