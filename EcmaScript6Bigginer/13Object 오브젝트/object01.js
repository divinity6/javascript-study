/**
 * 프로그램 설명문서 주석
 * 2021.09 14 수업
 *
 *           ===== is() =====
 *
 *      --> 시멘틱 그대로 ~~이니? 라는 뜻
 *      --> === 보다 더 졍교함.
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 형태                  - Object.is()
 *      - 파라미터               - 비교 대상 값
 *                             - 비교 대상 값
 *      - 반환                  - 타입까지 같으면 true, 아니면 false
 *      -----------------------------------------------------------
 *
 *      - 두 개의 파라미터 값과 값 타입을 비교
 *      --> 같으면 true, 아니면 false 반환
 *
 *      - 오브젝트 비교 목적이 아님
 *      --> []와 [] 비교, {}와 {} 비교는 false
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ is() ---------------');

    const result = Object.is(10, "10");
    log(result);
    // :: false

    // 위는 타입까지 비교한다.

    const one = {test: "test"}, two = {test: "test"};

    log(Object.is(one, two));
    // :: false;

    // false가 나왔다. 이것은 당연한 것. 비록 Object인 것은 같지만,
    // one이 참조하는 메모리 주소와, two가 참조하는 메모리 주소가 다름.

    // 따라서, 다른 오브젝트로 인식
    debugger;
    /**
     *  is는 오브젝트를 비교하는 것보다는, 값과 값 타입을 비교하는 비중이 더 크다.
     *  ( 참조하고 있는 메모리주소도 비교 )
     */
}
/**
 *            ===== is() =====
 *
 *      - JS 값 비교 방법
 *      --> 값과 타입까지 모두 비교 : ===
 *      --> 타입은 비교하지 않고 값만 비교 : ==
 *
 *      - Object.is()와 === 비교 차이
 *      --> NaN 비교
 *      --> +0과 -0 비교
 *
 *      - 활용한 형태
 */
{
    "use strict"
    log('------------ JS 값 비교 방법 ---------------');
    log((undefined == null));
    // :: true

    log((undefined === null));
    // :: false

    log(Object.is(undefined, null));
    // :: false

    debugger;

    // 1. Object.is()는 타입까지 비교한다

    // 2. ===에서 =를 수를 세는 것보다
    //    Object.is()가 가독성이 좋을 수 있다.

    // 3. 타이핑 실수(==)를 피할 수 있지만
    //    ===에 익숙한 개발자도 있다.

    /**
     *  실수를 예방할 수 있기에 Object.is()쓰는 것도 추천
     */
}
{
    "use strict"
    log('------------ NaN 비교 ---------------');

    // NaN끼리 값타입까지 비교했는데 false
    // 이것은 앞에서 문제가 되어서 Number.isNaN으로 비교했엇음

    log((NaN === NaN));
    // :: false

    // 그런데 Object.is로 값을 비교하면 true가 나온다.
    log(Object.is(NaN, NaN));
    // :: true

    // NaN과 0/0을 값 타입까지 비교하면 false
    log((NaN === 0 / 0));
    // :: false

    // 그러나 Object.is로 비교하면 true가 나온다.
    log(Object.is(NaN, 0 / 0));
    // :: true

    debugger;

    /**
     *  - NaN을 비교할 때는 Number.isNaN가 있다.
     *    (이것이 더 시멘틱이 가깝다)
     *
     *  - 설명을 위해 NaN을 다룬 것뿐,
     *    시멘틱때문에 Object.is 보다 Number.isNaN을 추천
     */
}

{
    "use strict"
    log('------------ +0과 -0의 비교 ---------------');

    // 0과 -0을 타입까지 비교하더라고 true가 나온다.(이것은 아닌 것)
    log((0 === -0));
    // :: true

    // Object.is를 0과 -0을 비교하면 false가 나온다.(이것이 정확)
    // 엄밀히 따지는 것.
    log(Object.is(0, -0));
    // :: false

    debugger;
}

{
    "use strict"
    log('------------ 활용 형태 ---------------');
    
    function check(data){
        if (Object.is(typeof data, "object")){
            log(data);
        } else {
            log("object 타입이 아님");
        };
    };

    check({value : 10});
    // :: {value: 10}

    // 이것은 number가 된다.
    check(200);
    // :: object 타입이 아님

    debugger;

    // 1. Object.is(typeof data, "objcet")
    // 2. typeof data 결과로 비교한다.
}
















