
/**
 * 프로그램 설명문서 주석
 * 2021.12.29 수업
 *
 *           ===== Map 오브젝트 =====
 *
 *     - Map 오브젝트
 *     --> key 와 value 의 컬렉션
 *
 *     - Map 오브젝트 형태
 *     --> [key, value] 형태처럼
 *     --> 대괄호 안에 key 와 value 를 작성
 *     --> 다양한 타입을 key로 사용할 수 있음
 *
 *     - Map 의 key 처리
 *     --> for-of 문에서 작성한 순서대로 읽혀진다.
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Map() ---------------');

    // 대괄호 안에 key, value 작성
    /**
     *  이렇듯 key 에 다양한 타입을 사용할 수 있다
     *  --> 이것이 Map 오브젝트의 특징
     */
    const obj = new Map([
        ["key" , "value"],
        [{book: 200}, "오브젝트"],
        [100, "Number"],
    ]);
    // :: obj.toString === [object Map]
    debugger;
    for (let keyValue of obj){
        log(keyValue);
        // :: ["key" , "value"]
        // :: [{book: 200}, "오브젝트"]
        // :: [100, "Number"]
    }
    debugger;
    log(obj);
    // :: Map(3) {'key' => 'value', {…} => '오브젝트', 100 => 'Number'}

    /**
     *  - 지금까지 key 로 사용할 수있는 타입은 String 과 Symbol 이었다.
     *  --> 그런데 Map 오브젝트는 key 위치에 Object, function 작성 가능.
     *  --> Key 에 다양한 type 작성 가능.
     *  ----> 이렇게 작성한 것은 for-of 문에서 작성한 순서대로 읽혀진다.
     *        (이 순서를 보장한다)
     */

    // ----- for-of 로 작성하면 Array 타입으로 반환하고
    //       그냥 찍으면 Map Object 형태로 반환하넹... -----
}

/**
 *           ===== new Map =====
 *
 *     -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - new Map()
 *     - 파라미터             - [이터러블 오브젝트]opt
 *     - 반환                - 생성한 Map 인스턴스
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스를 생성하여 반환
 *     - 파라미터에 이터러블 오브젝트 작성
 *     - Same-Value-Zero 비교 알고리즘
 *     --> key 값을 비교
 *     --> key 값이 같으면 value 가 대체됨
 *     - 잘못 작성한 형태
 */
{
    "use strict"
    log('------------ Map 인스턴스 작성 ---------------');

    const obj = new Map([
        ["key" , "value"],
        [100, "Number"]
    ]);
    debugger;
    log(obj);
    // :: Map(2) {'key' => 'value', 100 => 'Number'}
    log(typeof obj);
    // :: "object"
    log(obj.toString());
    // :: '[object Map]'
    debugger;

    /**
     * - 빈 Map 오브젝트를 만들때는 파라미터를 아무것도 작성하지 않음
     */
    const empty = new Map();
    log(empty);
    // :: Map(0) {size: 0}
    debugger;

    // 1. 파라미터를 배열 안에 배열로 작성한다
    //    대괄호[]가 2개이다

    // 2. 100이 key고  "Number"가 value이다

    // 3. new 연산자를 사용하지 않으면 TypeError

    // 4. 파라미터를 작성하지 않아도 된다

    // 5. new 연산자로 인스턴스를 생성하므로 타입은 object 이다.

    /**
     *  new 연산자를 사용하지 않으면 TypeError
     */
}

{
    "use strict"
    log('------------ SameValueZero 비교 ---------------');
    const obj = new Map([
        [100, "Number"],
        ["100", "String"],
        [{book : "책"}, "value"]
    ]);
    debugger;

    for (let [key, value] of obj){
        log(`${key} : ${value}`);
        // :: 100 : Number
        // :: 100 : String
        /**
         * `` 안에 작성하면 toString 을 호출하기 때문...
         */
        // :: [object Object] : value
    }
    debugger;

    // 1. 100 과 "100" 은 타입이 다르다.
    // --> 타입이 다르면 값이 다른것으로 인식한다.
}

{
    "use strict"
    log('------------ 값이 대체된다 ---------------');

    /**
     * key 가 같으면 값이 대체되네...
     */
    const obj = new Map([
        [100, "첫 번째"],
        // 첫 번째의 value 가 두 번째의 value 로 대체됨
        [100, "두 번째"],
        [{book : 100} , "세 번째"],
        [{book : 100} , "네 번째"],
        [undefined , "다섯 번째"],
        [undefined , "여섯 번째"],
        [null , "일곱 번째"],
        [null , "여덟 번째"],
    ]);
    debugger;
    for (let [key, value] of obj){
        log(`${key} : ${value}`);
        // :: 100 : 두 번째
        // :: [object Object] : 세 번째
        // :: [object Object] : 네 번째
        // :: [object Object] : 여섯 번째
        // :: [object Object] : 여덟 번째
    }
    debugger;

    // 1. key 값이 타입까지 같으면 value 가 대체된다.
}

/**
 *      - Map 오브젝트는 key/value pair 의 collection 이다.
 *
 *      --> key 값은 SameValueZero algorithm 을 이용하여 식별한다.
 *      --> key 값이 같을때는 값이 대체. SameValueZero 비교 알고리즘.
 *
 *                ===== SameValueZero(x,y) key 비교 알고리즘 =====
 *
 *      - 파라미터를 x,y 두개를 받는다.
 *      --> true : 같음, :: 각각 다른 값을 가짐
 *          false : 다름 :: 값이 대체됨
 *
 *      1. ReturnIfAbrupt(x)
 *
 *      2. ReturnIfAbrupt(y)
 *
 *      3. x 와 y 의 타입이 다를때
 *      ----> return false
 *
 *      --> 타입이 같을때
 *      4. 타입 x 가 undefined , return true
 *
 *      5. 타입 x 가 Null , return true
 *
 *      6. 타입 x 가 Number
 *      ------> x 가 NaN , y 도 NaN , return true
 *      ------> x 가 +0 , y 는 -0 , return true
 *      ------> x 가 -0 , y 는 +0 , return true
 *      ------> x 와 y 가 같은 Number 값일 때 , return true
 *      ------> 그 외 , return false
 *
 *      7. 타입 x 가 String
 *      ------> x 와 y 가 정확히 동일한 코드 단위 시퀀스
 *              (해당 인덱스도 동일하고 코드 단위도 동일하면)
 *              , return true, 그렇지 않으면 return false
 *
 *      8. 타입 x 가 Boolean
 *      ------> x 와 y 가 모두 true 거나 false 이면,
 *              return true, 그렇지 않으면 return false
 *
 *      9. 타입 x 가 Symbol
 *      ------> x 와 y 가 같은 Symbol 값이면
 *              return true, 그렇지 않으면 return false
 *
 *      10. 타입 x 와 y 가 같은 Object 값일때,
 *      ------> return true, 그렇지 않으면 return false
 *
 *
 *
 *      - Object.is() 함수를 사용하면 결과적으로 같은 효과를 낼 수
 *        있지만, 어떻게 비교를 하는지에 대해서는 정확히 알 필요가 있다.
 *
 *      =========== 의사코드(슈도코드, pseudocode) ===========
 *
 *      슈도코드를 작성하면서 프로그람을 작성할 것을 권함.
 *
 */

{
    "use strict"
    log('------------ 잘못 작성한 형태 ---------------');

    try {
        // 대괄호를 하나만 작성하면.
        new Map(["one", 1]);
    } catch {
        log("[['one', 1]]");
        // :: [['one', 1]]
    };

    // 대괄호를 안에 작성하지 않고 {} 작성
    const obj = new Map([{five : 5}]);
    for (let [key , value] of obj){
        log(`${key} : ${value}`);
        // :: undefined : undefined
        debugger;
    }

    log(obj);
    // :: Map(1) {undefined => undefined}
    debugger;

    // 1. new Map(["one", 1])
    //    대괄호 2개를 작성해야 한다

    // 2. new Map([{five: 5}])
    //    key 만 작성하면, 에러가 발생하지 않지만
    //    key 와 value 에 undefined 가 설정된다.
}







