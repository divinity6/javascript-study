/**
 * 프로그램 설명문서 주석
 * 2021.12.22 수업
 *
 *           ===== toStringTag =====
 *
 *      - Object.prototype.toString()의 확장
 *      --> toString 메소드를 호출하게 되면 @toStringTag가
 *          호출되지만, 이것을 Symbol.toStringTag로 오버라이딩
 *          해서 사용하겠다는 것이 확장의 의미.
 *
 *      - toString()으로 인스턴스 타입을 구하면
 *      --> [object Object] 형태로 반환
 *      --> 인스턴스 타입을 명확하게 구할 수 있다
 *
 *      - Symbol.toStringTag로 구분 가능
 *      --> [object Object] 에서
 *          두 번째에 표시될 문자열을 작성
 *
 *      --> 예) "ABC" 지정, [object "ABC"]로 반환
 *
 *      - prototype에 연결하여 작성
 *
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 인스턴스 타입 ---------------');
    const Book = function Book (){};
    const obj = new Book();
    /**
     * - 앞의 object는 인스턴스를 나타내고, 뒤의
     *   Object는 인스턴스의 type
     */
    log(obj.toString());
    // :: [object Object]
    debugger;
    log({}.toString());
    // :: [object Object]
    debugger;

    /**
     *  - 위와같이 obj와 {}가 어떤대상의 인스턴스타입인지 명확하게 구분할 수 없다.
     *
     *  - Symbol.toStringTag를 오버라이드 해서 사용하면
     *    [object Object]에서 Object를 구분할 수 있다라는 뜻.
     */
}
{
    "use strict"
    log('------------ prototype에 연결하여 작성 ---------------');

    const Sports = function(){};
    const obj = new Sports();
    log(obj.toString());
    // :: [object Object]
    debugger;

    /**
     *  - 이걸 설정하는 즉시, Sports.prototype에는
     *    Symbol(Symbol.toStringTag)가 설정되고
     *
     *    인스턴스 타입이 설정한 농구로 변경됨
     */
    Sports.prototype[Symbol.toStringTag] = "농구";

    log(obj.toString());
    // :: [object 농구]
    debugger;
    /**
     * - 이제 toString 과 "농구"로인해 구분할 수 있는 것이다.
     * --> 이것이 toStringTag의 목적이다.
     * --> 오버라이드
     */

    // 1. 첫 번째의 obj.toString()을 실행하면
    // -  인스턴스 타입을 반환하며
    // -  [object Object]가 반환된다
    // -  function으로 만들었는데 Object가 반환된다

    // 2. Sports.prototype[Symbol.toStringTag] = "농구"
    // -  prototype에 Symbol.toStringTag를 연결하고
    // -  [object Object]에서
    //    두 번째의 Object에 표시될 문자를 "농구"로 작성
    // -  표시될 문자를 임의로 작성가능
    // -  function 마다 지정할 수 있으므로
    //    자세하게 구분하여 작성가능

    // 3. 두 번째의 obj toString()을 호출하면
    // -  [object 농구]를 출력한다
    // -  즉, Symbol.toStringTag에 작성한 문자가 출력된다.

    /**
     *  - 각각마다 자세하게 구분하여 작성할 수 있어서
     *    각각 필요한 타입을 구분하고, 원하는 부분을 나눠둘 수 있겠다.
     */

    const independent = new Sports();
    independent[Symbol.toStringTag] = '독립타입';
    log(independent.toString());
    // :: [object 독립타입]
    debugger;

    /**
     *  애는 prototype보다 상위에 있으니깐 각각개체로 찍히는구나
     */
}











