/**
 * 프로그램 설명문서 주석
 * 2021.09 15 수업
 *
 *           ===== assign() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Object.assign()
 *      - 파라미터                - 열거 가능 오브젝트
 *                              - 열거 가능 오브젝트(opt) 다수 작성 가능
 *      - 반환                   - 첫 번째 파라미터 오브젝트
 *      -----------------------------------------------------------
 *      - 두 번째 파라미터의 오브젝트 프로퍼티를
 *      --> 첫 번째 파라미터의 오브젝트에 복사하고 첫 번째를 반환
 *
 *      --> own property만 복사
 *          (자신이 만든 프로퍼티만 복사 가능)
 *          즉, 상속받은 프로퍼티는 복사할 수 없다.
 *
 *      - 첫 번째 파라미터가 값 타입일때는 첫 번째 파라미터 값 타입으로 인스턴스를 생성해서 반환함!
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ assign() ---------------');

    const sports = {
        event: "축구",
        player: 11,
    };
    let dup = {};

    Object.assign(dup, sports);
    log(dup);
    // :: {event: '축구', player: 11}
    debugger;
}

/**
 *           ===== 첫 번째 파라미터 작성 =====
 *
 *      - 첫 번째 파라미터는 반드시 작성
 */

{
    "use strict"
    log('------------ 첫 번째 파라미터는 필수 ---------------');
    try {
        const obj = Object.assign(null, {});
    } catch (e) {
        log("null 작성불가");
        // :: null 작성불가
    }
    debugger;

    // 1. 첫 번째 파라미터를 작성하지 않거나
    //    null, undefined를 작성하면 TypeError

}

{
    /**
     *   - Number, String, Symbol, Boolean 값 작성한 형태
     */
    "use strict"
    log('------------ Number 값 작성 ---------------');
    const obj = Object.assign(100);
    // valueOf는 프리미티브 값을 출력하는 메소드
    log(obj.valueOf());
    // :: 100

    debugger;
    // 1. 첫 번째 파라미터에 Number를 작성하고
    //    두 번째 파라미터를 작성하지 않았다.

    // 2. Number 인스턴스를 생성하여
    //    파라미터 값 100을
    //    [[PrimitiveValue]]에 설정한다.

    // 3. 생성한 Number 인스턴스를 반환한다.

    // 4. Boolean, String, Symbol도
    //    같은 방법으로 처리한다.
}

/**
 *           ===== 두 번째 파라미터 작성 =====
 *
 */
{
    /**
     *              ** 중요 || Object.create 공부하장 **
     *      - 열거 가능 오브젝트 작성
     */
    "use strict"
    log('------------ 열거 가능 오브젝트 작성 ---------------');
    let obj = {};

    // 열거 가능
    Object.assign(obj, {ten: 10});
    log(obj);
    // :: {ten: 10}

    /**
     *  Objcet.create => 첫번째 파라미터에 있는 값을 프로토 타입으로 왼쪽에할당,
     *                   두 번째 파라미터에는 추가할 값
     */


    const one = Object.create({}, {
        // 여기서 book, sports는 값 속성 , enumerable 속성에 따라 assgin 가능, 불가능
        // 두번째 매게변수는 키를 *속성 설명자*에 매핑함.
        book: {value: 100, enumerable: false},
        sports: {value: 200, enumerable: true},
    });
    Object.assign(obj, one);
    log(obj);
    // :: {ten: 10 , sports: 200 }
    debugger;

    /**
     *  - 아 싀바 이해했음 바로이해되네.
     *    __proto__ 안에 __proto__가 또 들어가는 것은
     *    test2가 prototype이 되는 {}를 만들어서 그런거구만!!
     */
    let test = {};
    let test2 = {value : 10};
    test = Object.create(test2);

    debugger;

    /**
     *  즉, 열거 가능 프로퍼티만 복사된다.
     */
}

{
    /**
     *      - 오브젝트 다수 작성
     *        ( 프로퍼티 이름이 같으면 값이 대체된다. )
     */
    "use strict"
    log('------------ 오브젝트 다수 작성 ---------------');
    const book = {title: "책"};
    const sports = {item: "축구"};
    const obj = Object.assign({}, book, sports);
    log(obj);
    // :: {title: '책', item: '축구'}

    debugger;
    // 1. 두 번째 파라미터 이후에 콤마로 구분하여
    //    오브젝트를 작성할 수 있다.

}

{
    /**
     *      - 값을 작성
     */
    "use strict"
    log('------------ 값을 작성 ---------------');
    let obj = {ten: 10};

    // 두번째 파라미터 이후는 오브젝트가 아니라 값이다.
    // 열거가능 오브젝트가 아니기 때문에 복사되지 않는다.
    Object.assign(obj, undefined, null, 200);
    log(obj);
    // :: {ten: 10}

    // 프로퍼티 값으로 작성하면 복사가 된다.
    const one = {un: undefined, nu: null};
    Object.assign(obj, one);

    log(obj);
    // :: {ten: 10, un: undefined, nu: null}

    debugger;

    // 1. 값으로 작성한 undefined, null , 200이
    //    복사되지 않는다

    // 2. 열거 가능한 오브젝트가 아니기 때문이다.
}

{
    /**
     *      - 값과 오브젝트를 작성
     */
    "use strict"
    log('------------ 값과 오브젝트 형태 ---------------');
    const obj = Object.assign(100, {book: 200});
    /**
     *  이녀석의 타입은 Number,
     *  __proto__도 Number임.
     *  단지 primitiveValue만 100일 뿐임
     */
    log(obj.valueOf());
    // :: 100

    log(obj.book);
    // :: 200

    debugger;
    // 1. 100이므로 Number 인스턴스를 생성한다

    // 2. 두 번째 파라미터가 Object 이므로
    //    생성한 Number 인스턴스에 복사한다.

    // 3. Number 인스턴스에 Object를 복사하는 것은
    //    데이터 타입이 맞지 않는다.

    // 4. Objcet 이므로 복사가 된다는 것을
    //    설명하기 위한 것이다.
}

{
    /**
     *      - 값이 설정된 인스턴스 형태
     */
    "use strict"
    log('------------ 값이 설정된 인스턴스 형태 ---------------');
    const obj = Object.assign(100, {book: 200});
    debugger;

    /**
     *  1. 오른쪽의 obj를 펼치면
     *  -  book: 200이 있으며 Object에서 사용하는
     *     프로퍼티 형태이다
     *
     *  2. __proto__에 Number 오브젝트의 메소드가 있다.
     *
     *  3. [[PrimitiveValue]] : 100
     *  -  프리미티브 값을 나타내며
     *  -  첫 번째 파라미터에 작성한 100이다.
     *
     *  ============ 이것은 복사가 된다는 것을 설명하기 위한 것이지 정상적인 모습은 아니다 ============
     */

}