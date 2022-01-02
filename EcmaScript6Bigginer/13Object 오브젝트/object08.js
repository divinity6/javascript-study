/**
 * 프로그램 설명문서 주석
 * 2021.10.12 수업
 *
 *      -> 인스턴스에 사용
 *
 *           ===== setPrototypeOf() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Object.setPrototypeOf()
 *      - 파라미터                - 오브젝트 또는 인스턴스
 *                              - 오브젝트의 prototype 또는 null
 *      - 반환                   - 첫 번째 파라미터
 *      -----------------------------------------------------------
 *
 *      - 두 번째 파라미터의 prototype으로
 *      --> 첫번째 파라미터의 __proto__를 설정함
 *
 *      - 첫 번째 파라미터에 인스턴스 작성
 *      --> setPrototypeOf() 실행 후 인스턴스 구조
 *
 *      - ES5에 getPrototypeOf()가 있음
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ setPrototypeOf() ---------------');

    // 성격으로보면 obj라는 인스턴스이다.
    let obj = {0: 10, length: 1};
    Object.setPrototypeOf(obj, Array.prototype);
    debugger;

    // 1. obj는 인스턴스이다.

    // 2. 인스턴스에는 prototype이 없으며
    //    __proto__가 있으므로
    //    __proto__에 설정하는 것과 같다.

    /**
     *  즉, 위에서는 Array.prototype에 있는 메소드들이 obj.__proto__에 설정된다라는 것.
     */
}

{
    "use strict"
    log('------------ setPrototypeOf() 실행 후 인스턴스 구조 ---------------');

    const obj = {0: 10, 1: 20, length: 2};

    /**
     *  1. Array-Like 오브젝트이다.
     *
     *  2. 오른쪽의 obj를 펼치면
     *  -  prototype은 없고 __proto__만 있다.
     *
     *  3. 이것은 오브젝트가 아니라
     *  -  Object.prototype에 연결된 메소드로
     *  -  생성한 인스턴스를 뜻한다
     *
     *  4. __proto__에 Object.prototype에 연결된
     *  -  메소드가 설정되어 있으므로
     *  -  Array 오브젝트의 메소드를 사용할 수 없다.
     *
     */
    debugger;

    Object.setPrototypeOf(obj, Array.prototype);
    /**
     *  1. obj의 __proto__에 Array.prototype에 연결된
     *  -  메소드를 설정한다.
     *
     *  2. 오른쪽의 obj를 펼치면
     *  -  Object.prototype에 연결된 메소드가 없어지고
     *  -  Array.protoype에 연결된 메소드가 표시된다.
     *
     *  3. 설명을 위한것으로 일반적으로 이렇게 사용하지 않지만
     *  -  이처럼 __proto__에 설정된 메소드를 바꿀 수 있다.
     */

    debugger;

    const callback = (element, index, all) => log(element);
    // :: 10
    // :: 20
    obj.forEach(callback);

    /**
     *  1. obj가 배열이 아니므로 forEach()를 사용할 수 없지만
     *  -  바로 앞에서 __proto__에 Array.prototype에 연결된
     *  -  메소드를 설정했으므로 사용할 수 있다.
     *
     *  2. 콜백 함수가 호출되면서 반복하게 된다
     *  -  console에 10 , 20이 출력된다.
     */

    debugger;

    const check = Object.prototype;

    // Object.prototype이 바뀌지 않는다
    // 오근데 check.__proto__ :: null 이네.
    debugger;
    /**
     * 즉, Object.prototype에 연결된 메소드가 바뀌지않았다.
     * -> 이것이 Object.setPrototypeOf()를 사용하는것의 특징이다.
     *
     *    __proto__에다 메소드를 추가하면 원본 prototype에 변하지만
     *    setPrototypeOf()를 사용하면 원본객체는 그대로 있고
     *    첫번째 파라미터(인스턴스)의__proto__만 변경된다.(원본에는 반영 x)
     */
}
/**
 *      - ES5에 getPrototypeOf()가 있다.
 *      --> 그런데 ES6에 setPrototypeOf()가 나왔다
 *      --> get이 있으면 set이 존재해야 하기에...
 *      --> 일반적인 어플에서도 이것은 규칙아닌 규칙이다.
 *          ( 값을 설정하는게 있으면 값을 구하는게 있어야하고,
 *          값을 구하는게 있으면 어딘가에서 설정하는것이 있어야 하는 것. )
 */