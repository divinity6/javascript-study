/**
 * 프로그램 설명문서 주석
 * 2021.12.19 수업
 *
 *           ===== primitive 값 =====
 *
 *      - 자바스크립트에서 Primitive 값은
 *      --> 오브젝트가 아니라 값이며 함수를 갖고 있지 않음
 *
 *      - const num = 100;을 할당하면
 *      --> num 변수에 100만 할당되며 아무것도 첨부되지 않음
 *      ----> 예) JS에서 함수를 선언하면 기본적으로 prototype은 들어간다
 *               그런데 primitive 값은 값만 할당되고 아무것도 첨부되지 않음
 *      --> 100이 primitive 값
 *
 *      - ES5의 primitive 값 타입
 *      --> string, number, boolean, null, undefined
 *
 *      - ES6 에서 symbol 타입 추가
 *      --> 즉, symbol 값은 primitive 값!
 *      --> symbol은 값이다!
 *
 *      - 100과 같이 값이라는 관점에서 접근해야 한다.
 */

/**
 *          ===== wrapper 오브젝트 =====
 *
 *      - wrapper 오브젝트는?
 *      --> 프리미티브 값이 포함된 오브젝트
 *      --> wrapper 오브젝트에는 메소드가 있다
 *          (이 메소드로 primitive 값을 처리할 수 있다)
 *
 *      - wrapper 오브젝트가 있는 프리미티브 값 타입
 *      --> string: String, number: Number 오브젝트
 *      --> boolean: Boolean, symbol: Symbol 오브젝트
 *
 *      - const obj = new String(100);
 *      --> obj 인스턴스의 [[PrimitiveValue]]에
 *          100이 설정된다.
 *      --> [[PrimitiveValue]] 형태
 *
 *      - undefined, null은 wrapper 오브젝트 없음
 *      --> 따라서, undefined, null은 값으로만 사용가능
 *          (메소드를 이용해서 undefined, null 처리 불가능)
 *
 *      정리 : Symbol 값은 외부에 노출되지 않는 것이 가장 크다.
 *            (따라서, Symbol 오브젝트마저도 외부에 노출되는 것을 막았다)
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ PrimitiveValue ---------------');
    const str = String(100);
    const obj = new String(100);
    debugger;

    // 1. new String(100)을 하게되면
    //    파라미터 값을 문자열로 바꾸어
    //    obj에 할당하게 된다.

    // 2. 값이 아닌 object로 할당되니깐
    //    값을 어딘가에 저장해야 한다.
    //  - 이때, obj 인스턴스의 [[PrimitiveValue]]에 100이 설정
    //    (엔진에서 설정한 이름)
}

{
    "use strict"
    log('------------ PrimitiveValue 형태 ---------------');
    debugger;

    const sports = new String(100);
    /**
     *  1. 오른쪽의 sports를 펼치면
     *
     *  2. [[PrimitiveValue]] : "100"이 있다
     *  -  [[PrimitiveValue]]가 프리미티브 값을 나타내는
     *  -  프로퍼티 이름이며, "100"이 프로퍼티 값이다
     *
     *  3. sports가 wrapper 오브젝트이다
     */

    debugger;

    const sym = Symbol("ABC");

    /**
     *  1. sports를 펼치면 [[PrimitiveValue]]가 표시되지만
     *
     *  2. sym은 펼칠 수가 없으며
     *  - [[PrimitiveValue]]가 표시되지 않는다.
     *  - wrapper 오브젝트가 있다고 했는데 String 처럼 오브젝트가 안보인다
     *    (논리가 맞지 않는 면이 있다.)
     *
     *  3. 그렇다고 Symbol에 Primitive 값이 없는 것은 아니며
     *
     *  4. 이것은 Symbol은 Primitive 값을
     *  -  외부에 노출시키지 않는 특성 때문이다.
     */
    debugger;
    /**
     *          ===== Symbol 의 특징으로 접근 =====
     *
     *  - Number, String, Boolean 은 Object를 가지고 있고,
     *    Symbol도 마찬가지로 wrapper 오브젝트를 가지고 있지만,
     *    Symbol을 호출하면 단순하게 보인다
     *    (PrimitiveValue 나 wrapper 오브젝트가 보이지 않는다)
     *
     *  - Number, String 오브젝트와는 개념적인 차이가 있다.
     *    [[primitiveValue]]가 표시되지 않는다고해서 값이 없는것은 아니다.
     *    (이 특성을 이해하는 것이 중요)
     *
     *  === Symbol 은 primitive 값을 외부에 노출시키지 않는 특성 ===
     *
     */

    /**
     *  - Symbol("ABC"); 을 하게되면 내부적으로 값을 만들게 된다.
     *  --> 그런데 그 값을 외부에 노출시키지 않는다는 것.
     *      (이것이 가장 중요하다라는 것, top level 중요!)
     *  --> Symbol은 이것을 위해서라면 뭐든지 하겠다라는 것.
     *
     *  - Symbol로 만든 값을 외부로 노출시키지 않기 위해서
     *    wrapper 오브젝트가 표시되는것도 포기했다라는 뜻!!
     *
     *  - Symbol로 만든 값은 외부에서 볼수가 없다.
     *
     *    ===== 값은 있되 그값을 외부에서 볼 수 없게 하겠다 =====
     *    -------> Symbol의 가장 큰 특징
     *
     */
    debugger;

}
/**
 *  - Symbol은 new 연산자를 통해서 인스턴스를 만들 수도 없다.
 *    ( 왜냐하면 instance를 만들면 PrimitiveValue가 외부에
 *      노출될 가능성이 있기 때문. -> 이것조차 포기하겠다!! )
 */