/**
 * 프로그램 설명문서 주석
 * 2021.12.25 수업
 *
 *           ===== toPrimitive =====
 *
 *      - 오브젝트를 대응하는 Primitive 값으로 변환
 *
 *      - 대응, 기대하는 값 타입
 *      --> number, string, default
 *      ----> 오브젝트를 타입의 값으로 변환하겠다는 뜻
 *      --> ToPrimitive 스펙
 *
 *      - 오브젝트를 문자열에 대응
 *
 *      - 오브젝트를 숫자에 대응
 *
 *      - Symbol.toPrimitive() 사용
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 오브젝트를 문자열에 대응 ---------------');
    const point = {bonus : 100};
    log(point.toString());
    // :: [object Object]

    debugger;
    const book = {
        toString() {
            debugger;
            return "책";
        }
    };

    /**
     *  - 템플릿 리터럴 안에 작성하면
     *    엔진이 book 안에서 toString()을 찾고 있으면
     *    그것을 실행하게 된다.
     */
    log(`${book}`);
    // :: "책"

    debugger;

    // 1. 문자열 대응은 toString()을 사용한다

    // 2. point.toString()
    //    Object.prototype.toString() 이 호출된다

    // 3. `${book}`
    //    book 오브젝트의 toString()이 호출된다.

    /**
     *  template 리터럴 안에 작성하면 자동적으로 toString()이 호출되는 구나
     *
     *  ===== 이것이 오브젝트를 문자열에 대응하여 Primitive 값으로 변환하는 개념 =====
     */

}

{
    "use strict"
    log('------------ 오브젝트를 숫자에 대응 ---------------');
    const point = { bonus : 100};
    log(point.valueOf());
    // :: {bonus: 100}
    debugger;

    const book = {
        toString() {
            debugger;
            return 70;
        },
        valueOf() {
            debugger;
            return 30;
        }
    };

    log(book * 20);
    // :: 600
    debugger;

    log(book == 30);
    // :: true
    debugger;

    // 1. 숫자 대응은 valueOf()를 사용한다

    // 2. point.valueOf()
    //    Object.prototype.valueOf()가 호출된다

    // 3. book * 20
    //    book 오브젝트의 valueOf()가 호출되며
    //    toString()이 호출되지 않는다

    // 4. valueOf()를 작성하지 않으면
    //    toString()이 호출된다.

    /**
     *  숫자 연산이나 비교연산을 처리할때는
     *  valueOf 가 없으면 toString 이 호출된다.
     */

    /**
     * - book * 20 은 말도안되는 것이지만
     *   이것은 book을 PrimitiveValue 로 바꿔서 사용하겠다는
     *   의도가 담겨져 있다.
     * --> 따라서 book * 20 이 성립이 된다.
     *
     *   ===== 우선순위는 valueOf , 그다음 toString =====
     */
}

{
    "use strict"
    log('------------ Object에 대응 ---------------');

    const obj = {
        /**
         *  연산하는 타입이 파라미터로 넘어온다!!
         *  - 연산하는 타입을 엔진이 판단해서 넘겨줌
         *  --> 확실하지 않을때는 default 를 넘겨줌
         */
        [Symbol.toPrimitive](hint){
            debugger;
            return hint === "number" ? 30 :
                hint === "string" ? "책" : "default";
        }
    };

    log(20 * obj);
    // :: 600
    debugger;

    /**
     *  template ===> toString
     */
    log(`${obj}` + 100);
    // :: 책100
    debugger;

    /**
     *  - 더하기는 연산으로 치지 않네...
     *  --> 아 그게아니고 엔진이 코드가 원하는 값 타입이 확실하지 않을때는
     *      default 를 넘겨준다
     */
    log(obj + 50);
    // :: default50
    debugger;

    /**
     *  - 또 하나의 룰! 비교 연산을 하게될때는 default 를 넘겨준다.
     */
    log("default" == obj);
    // :: true
    debugger;

    // 1. 20 * obj
    //  - 20을 곱하는 숫자 연산으로 처리
    //  - toPrimitive(hint)의 hint에
    //    엔진이 "number"를 설정한다
    //  - 30을 반환하며 20 * 30 = 600을 출력

    // 2. `${obj}` + 100
    //  - hint에 "default"가 설정된다

    // 3. "default" == obj
    //  - == 비교는 hint에 "default"가 설정된다.

    /**
     *  - 복잡하게 설정되는 코드를 심플하게 하나로 묶어서 사용하려는 것
     *  --> toPrimitive
     *
     *  - 또한, Object 그자체가 아니라, 오브젝트에 해당하는
     *    값으로 변환해서, 사용하겠다라는 것!
    */
}