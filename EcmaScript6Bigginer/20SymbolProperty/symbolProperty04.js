/**
 * 프로그램 설명문서 주석
 * 2021.12.22 수업
 *
 *           ===== species =====
 *
 *      - species 의 사전적 의미
 *      --> (공통 특성을 지닌) 종류, 인류, 종
 *
 *      - Symbol.species 는 constructor를 반환
 *      --> constructor 를 실행하면
 *          인스턴스를 생성하여 반환하므로
 *      --> 결국, 인스턴스를 반환하게 된다
 *
 *      ----> constructor 를 반환한다는 것은
 *            인스턴스를 생성하여 반환한다는 뜻.
 *
 *      - Symbol.species 를 오버라이드 하면
 *      --> 다른 인스턴스를 반환할 수 있다는 의미
 *
 *      ----> constructor 를 오버라이드 하면,
 *            constructor 가 참조하는 생성자 함수를 바꿀 수 있다는 이야기.
 *
 *      ----> 그럼 바꾼 constructor 의 인스턴스가 반환되게됨.
 *
 *      - 우선 Symbol.species 와 관련된 개념을 살펴보겠다
 *      --> 메소드를 실행한 후의 결과 형태
 *
 *      ----> 인스턴스의 메소드를 호출하면 인스턴스의 결과값이 설정된
 *            인스터스를 만들어서 반환함.
 *
 *      --> Symbol.species 기능
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 메소드를 실행한 후의 결과 형태 ---------------');
    debugger;

    const obj = [1, 2, 3];
    /**
     *  1. [1, 2, 3]으로 Array 오브젝트를 생성하여 obj에 할당한다
     *
     *  2. 오른쪽의 obj를 펼쳐서 obj 구조를 보면
     *  -  prototype 은 없고 __proto__ 만 있으므로
     *
     *  3. obj는 빌트인 Array 오브젝트가 아니라
     *  -  Array.prototype 에 연결된 메소드로 생성한 인스턴스다
     *
     *  4. 다만, new 연산자를 사용하지 않았으므로
     *  -  강좌에서 인스턴스라고 하지 않고 오브젝트라고 한것 뿐.
     */
    debugger;

    const one = obj.slice(1, 3);
    // :: [2 ,3]

    /**
     *  1. 위 코드를 실행한 후의 one과 obj의 구조는 차이가 없으며
     *  -  값 [2, 3]만 다르다
     *
     *  2. 이것은 인스턴스에 있는 메소드를 호출하면
     *  -  메소드 실행 결괏값을 반환하지 않고
     *
     *  3. 결괏값이 설정된 인스턴스를 반환하기 때문이다.
     */
    debugger;
    const two = one.slice(1, 2);
    // :: [3]

    /**
     *  1. 바로 앞에서 반환된 one 으로 메소드를 호출할 수 있다는 것은
     *  -  one이 인스턴스이기 때문이다
     *
     *  2. 또한 slice(1, 2)메소드를 실행하면
     *  -  결과 값이 설정된 인스턴스를 반환한다.
     */
    debugger;

    /**
     *  ## 정리하면 ##
     *
     *  1. Array 인스턴스의 메소드를 호출하면
     *  -  값을 반환하는 것이 아니라
     *
     *  2. 반환할 Array 인스턴스를 생성하고
     *  -  메소드에서 구한 값을 반환할 Array 인스턴스에 설정하여
     *  -  Array 인스턴스를 반환한다.
     *
     *          ===== 즉, Array 인스턴스를 반환한다 =====
     */

    /**
     *  - Symbol.species 는 반환하는 인스턴스를 오버라이드 시킬수 있다.
     *    즉, 바꿀 수 있다!!
     */
}

{
    "use strict"
    log('------------ Symbol.species 기능 ---------------');

    /**
     *  Sports 는 class 이름이고 extends 는 키워드,
     *  Array 는 빌트인 array 오브젝트
     */
    class Sports extends Array {};
    const obj = new Sports(10, 20, 30);
    const one = obj.slice(1, 2);
    log(one);
    // :: [20]

    class Music {};
    const classic = new Music();
    log(classic);
    debugger;

    // 1. class Sports extends Array {}
    // -  빌트인 Array 오브젝트를 상속(확장, 연결) 받는다

    /**
     *  정리)
     *  - 상속이라는 개념은 OOP 개념.
     *  - extends 는 확장 개념
     *  - JS는 프로토 타입에 연결해서 상속을 받음
     *  --> Sports.prototype 에다가
     *      Array.prototype 을 연결하는 개념
     *
     *  - 즉, 연결이 더 시멘틱에 가까움
     */

    // 2. const obj = new Sports(10, 20, 30);
    // -  인스턴스를 생성한다
    // -  따라서 obj는 인스턴스다

    // 3. const one = obj.slice(1,2);
    // -  obj 인스턴스의 slice()를 호출하면
    // -  slice() 처리 결과를 인스턴스에 설정하여
    //    인스턴스를 반환한다

    // 4. 이렇게 인스턴스의 메소드를 호출했을 때
    // -  인스턴스를 반환하도록 하는 것이
    // -  Symbol.species 기능이다.

    /**
     *  - new 연산자로 Sports를 호출하면
     *    Sports.prototype.constructor 를 호출해서
     *    인스턴스를 생성하여 반환.
     *
     *  --> 그래서 obj 에 인스턴스가 할당되는 것은 논리적으로 성립이됨.
     *
     *  --> 그런데 obj.slice(1,2)를 하면 인스턴스를 생성하여
     *      one 에 할당되는데, obj 에는 prototype 이 없고,
     *      prototype 이 없기 때문에 constructor 가 없다.
     *
     *   ===== constructor 를 호출하지 않고도 어떻게 인스턴스를
     *         만들었냐라는 것!! =====
     *
     *   -  이것이 포인트
     *   --> Symbol.species 가 constructor 를 불러주는 역할을 하는 것.
     *   ----> 따라서, 인스턴스를 반환하도록 하는 것이다.
     *
     *   정리 ) obj 에는 constructor 가 없다.
     *         그런데도 one 에는 instance 가 할당된다.
     *
     *       - constructor 가 존재하지 않는데도 instance
     *         가 만들어지는 논리적인 근거는 무엇인가?
     *
     *       - 이때, Symbol.species 가 인스턴스를 만드는 역할을 하는 것.
     *
     *       - Symbol.species 을 오버라이드 하면 다른 인스턴스를
     *         생성할 수 있다라는 것.
     *       --> 이것이 Symbol.species 의 관점.
     *
     *    ===== 다음장에서 Symbol.species 를
     *          오버라이드 하는 형태에 대해서 살펴봄 =====
     */
}
