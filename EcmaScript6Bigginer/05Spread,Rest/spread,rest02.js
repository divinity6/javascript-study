/**
 * 프로그램 설명문서 주석
 * 2021.08 12~13 수업
 *
 *
 *           ===== function spread =====
 *
 *      - 호출하는 함수의 파라미터에 spread 대상 작성
 *
 *      - 처리 순서 및 방법
 *      --> 함수가 호출되면 우선, 파라미터의 배열을 엘리먼트 단위로 전개
 *
 *      --> 전개한 순서대로 파라미터 값으로 넘겨 줌
 *
 *      --> 호출받는 함수의 파라미터에 순서대로 매핑됨
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

{
    "use strict";
    log('------------function spread---------------');

    function add(one, two, three) {
        log(one + two + three);
        // :: 60
    };

    const values = [10, 20, 30];
    add(...values);
    debugger;

    // 1. one : 10 , two : 20 , three : 30이 매핑된다.
}

/**
 *
 *           ===== rest 파라미터 =====
 *
 *      - Syntax: function(param, paramN, ...name)
 *
 *      - 분리하여 받은 파라미터를 배열로 결합
 *      --> spread: 분리, rest: 결합
 *
 *      - 작성 방법
 *      --> 호출받는 함수의 파라미터에
 *      --> ...에 이어서 파라미터 이름 작성
 *      --> 호출한 함수에서 보낸 순서로 매핑
 *
 *      - 파라미터와 Rest 파라미터 혼합 사용
 *
 */

{
    "use strict";
    log('------------rest 파라미터---------------');

    function point(...param) {

        // 분리한 파라미터를 [[배열]]로 결합!!
        log(param);
        // :: [10, 20, 30]
        log(Array.isArray(param));
        // :: true
        debugger;
    }

    const values = [10, 20, 30];
    point(...values);

    // 1. one: 10, two : 20, three: 30이 매핑된다.

}

{
    // 개지리네 이거... 하나씩 넘겨줘도 합쳐서받는 개념이구만(근데 배열이네)
    function point(...param) {
        log(param);
        // :: [10, 20, 30, 40]
        log(Array.isArray(param));
        // :: true
        debugger;
    }

    point(10, 20, 30, 40);
}

{
    "use strict";
    log('------------혼합 사용---------------');

    function point(ten, ...rest) {
        log(ten);
        // :: 10
        log(rest);
        // :: [20, 30]
        debugger;
    }

    const values = [10, 20, 30];
    point(...values);

    // 1. ten에 10이 매핑되고

    // 2. 설정되지 않은 나머지 값 전체가
    //    파라미터 rest에 매핑한다.
    //    그래서 rest 파라미터이다

    // 3. 나머지라는 시멘틱을 나타내기 위해
    //    파라미터 이름을 rest로 사용하기도 한다.
}

/**
 *           ===== Array-like =====
 *
 *      - Object 타입이지만
 *      --> 배열처럼 이터러블 가능한 오브젝트
 *      --> for()문으로 전개할 수 있음(오브젝트 인데도 불구하고)
 *      ----> 이때 length 프로퍼티는 전개되지 않는다.
 *
 *
 *      - 작성 방법(조건!, 기준!)
 *      --> 프로퍼티 key값을 0부터 1씩 증가하면서 프로퍼티 값을 작성
 *      ----> 왜냐하면 앞의 숫자는 배열의 index개념으로 사용하기 때문이다.
 *
 *      --> length에 전체 프로퍼티 수 작성
 *
 *      - 위의 조건을 맞추지 않으면 Array-like가 아니라 일반적인 오브젝트인 것이다.
 *
 *      =========== Array-like는 for문으로 처리를 해야한다 ===========
 *          (length 프로퍼티를 제외하는 처리를 하지 않아도 되기 때문)
 */

{
    "use strict";
    log('------------Array-like---------------');

    // 원래는 length가 3이였음
    const values = {0: "가", 1: "나", 2: "다", length: 4};
    debugger;
    for (let k = 0; k < values.length; k++) {
        log(values[k]);
        // :: 가
        // :: 나
        // :: 다
        // :: undefined
        // (length는 undefined가 찍히네)
    }

    // 1. length 프로퍼티는 전개되지 않는다

    // 2. for ~ in 문으로 전개하면
    //    length 프로퍼티도 전개된다.

    debugger;
    log('------------ Array-like를 배열로 사용 ---------------');
    values.__proto__ = Array.prototype;
    values.forEach(el => console.log(el));
    debugger;
}

/**
 *           ===== rest와 arguments 차이 =====
 *
 *      - Argument 오브젝트
 *      --> 파라미터 작성에 관계없이 전체를 설정
 *      --> Array-like 형태, 따라서
 *          Array 메소드를 사용할 수 없음
 *      --> __proto__가 Object
 *
 *      - rest 파라미터
 *      --> 매핑되지 않은 나머지 파라미터만 설정
 *      - Array 오브젝트 형태
 *        Array 메소드를 사용할 수 있음
 *      - __proto__가 Array
 */

{
    "use strict";
    log('------------ rest, arguments ---------------');
    debugger;

    // Argument 오브젝트
    function book() {
        // 아 쓰바 arguments는 Array-like 형태였네 ㅋㅋㅋ(Object)
        const param = arguments;
        // 0: 10 1: 20 2: 30 callee: ƒ book() length : 3
        debugger;
    };

    book(10, 20, 30);

    // arguments의 __proto__가 Object
    debugger;

    // rest 파라미터
    function point(...rest) {
        debugger;
    }

    point(10, 20, 30);

    // rest의 __proto__가 Array
    debugger;


}






