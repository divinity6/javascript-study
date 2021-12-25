/**
 * 프로그램 설명문서 주석
 * 2021.12.02 수업
 *
 *           ===== function* =====
 *
 *      - Generator function
 *      --> function* 키워드를 사용한 함수
 *      ----> function 다음에 *을작성. 이것이 하나의 키워드
 *
 *      - 제너레이터 함수 형태
 *      --> function* 선언문,
 *          function* 표현식,
 *          GeneratorFunction
 *
 *      - 작성 방법
 *      --> function* 다음에 소괄호() 작성
 *          이어서 작성해도 되고
 *          하나 이상 띄워도 된다.
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ Generator function 형태 ---------------');

    // 선언문 형태
    function* sports(one) {
    };

    // 표현식 형태
    const book = function*(one) {
    };
    // music = 생성자 함수
    // Object.getPrototypeOf 함수를 작성하면서
    // 파라미터에 generator 함수 작성 그리고 constructor
    // --> music은 생성자 함수
    const music = Object.getPrototypeOf(function* () {
    }).constructor;
    // new 연산자로 생성자 함수 호출
    // --> generator 함수 생성
    const gen = new music();
    debugger;
    /**
     *  generator 함수를 작성하는 방법은
     *
     *  - function*(), function* () 이렇게 두가지 타입
     *
     *
     *  - gen = new music(); 이형태가 generatorFunction
     */
}

/**
 *
 *           ===== function* 선언문 =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - function* name(){}
 *      - 파라미터                 - [param[, param[,paramN]]]opt
 *      - 반환                    - Generator 오브젝트
 *      -----------------------------------------------------------
 *
 *      - function* 다음에 함수 이름 작성
 *
 *      - 제너레이터 함수를 호출하면
 *      --> 함수블록{}을 실행하지 않고
 *      --> Generator 오브젝트를 생성하여 반환
 *
 *      - Generator 오브젝트는 iterator 오브젝트
 *      - 함수 코드 실행
 *      --> Generator 오브젝트의 메소드를 호출할 때
 *
 */

{
    "use strict"
    log('------------ function* 선언문 ---------------');

    function* sports(one, two) {
        yield one + two;
    };

    log(typeof sports);
    // :: function
    debugger;
    /**
     *  새로운 generator Object를 계속 반환
     */
    const obj = sports(1, 2);
    log(typeof obj);
    // :: object
    debugger;
    log(obj.next());
    // :: {value: 3, done: false}

    // 1. function* sports(one, two){}
    //    선언문 형태의 제너레이터 함수다

    // 2. 제너레이터 함수의 타입은 function 이다

    // 3. const obj = sports(1,2);
    //    sports 함수를 호출하면
    //    Generator 오브젝트를 생성하여 반환한다
    //    --> 함수 코드는 실행하지 않는다

    // 4. 이때, 함수 코드를 실행하지 않는다
    //    --> 파라미터값 1과 2는 one, two에 매핑
    /**
     *  --> 그리고 생성된 generator 오브젝트의 프로퍼티로 설정됨
     */


    // 5. 파라미터 값은 생성한 오브젝트에 설정된다

    // 6. new 연산자를 사용할 수 없다
    //    단일 함수로 사용하겠다는 뉘앙스이다

    /**
     *  매우 중요
     */
    // 7. typeof obj
    //    생성한 Generator 오브젝트 타입은 object

    // 8. obj.next()
    //    Generator 오브젝트가 iterator 오브젝트이므로
    //    next() 함수를 호출할 수 있으며
    //    이때 함수 코드가 실행된다.

    /**
     *  즉, sports 함수를 호출해서 generator 오브젝트를 만들면,
     *  그안에는 next 메소드가 있다는 뜻.
     *  --> 즉, 이터레이터 오브젝트라는 뜻
     *
     *  - next 메소드를 호출하는 시점에 generator 함수의 코드블럭이 실행된다.
     *
     *
     *  --> 이것이 generator 함수의 특징이다.
     *
     *  --> 정리 :: 제너레이터 함수를 호출하면 함수블록{}을 실행하지 않고
     *              Generator 오브젝트를 생성하여 반환
     *
     *  --> 반환된 Generator 오브젝트는 iterator 오브젝트
     *
     *  ----> new 연산자를 사용할 수 없다라는 뜻 :
     *        Generator 오브젝트의 prototype에다가 method를 연결해서
     *        인스턴스를 만들어서 사용하는 것이 목적이 아니다라는 것.
     *
     *  ----> iterator 오브젝트로 사용하겠다라는 것.
     *        ( obj.next() 메소드가 존재함 )
     */

}

/**
 *
 *
 *           ===== function* 표현식 =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - function* name(){}
 *      - 파라미터                 - [param[, param[,paramN]]]opt
 *      - 반환                    - Generator 오브젝트
 *      -----------------------------------------------------------
 *
 *      - function* 다음에 함수 이름 작성은 선택
 *      --> 일반적으로 함수 이름을 작성하지 않음
 *      --> function* 왼쪽에 변수를 선언하며
 *          변수 이름이 함수 이름이 된다
 *
 *      - 함수를 선언하는 형태만 다를 뿐
 *      --> 다른 것은 function* 선언문과같다
 *
 */

{
    "use strict"
    log('------------ function* 표현식 ---------------');

    /**
     * 제너레이터 함수 이름 = sports
     */
    const sports = function* (one) {
        yield one;
    };

    /**
     * 제너레이터 오브젝트를 생성하여 반환
     */
    const obj = sports(100);
    /**
     *  yield one; 실행하여 반환
     */
    log(obj.next());
    // :: {value: 100, done: false}
    debugger;

    // 1. const sports = function* (one) {
    //    표현식 형태의 제너레이터 함수다

    // 2. 왼쪽의 sports가 함수 이름이 된다
    //    문법적으로는 * 다음에
    //    함수 이름을 작성할 수 있지만
    //    일반적으로 사용하지 않는다.

    /**
     *  Generator 는 generator 선언문이 있고, 표현식이 있고 GeneratorFunction이 있다.
     */
}