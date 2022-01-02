// 신년이 밝았습니다~ 신난다 근데난 솔로 ㅠ
/**
 * 프로그람 설명문서 주석
 * 2022.01.02 수업
 *
 *           ===== set() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.set()
 *     - 파라미터             - key
 *                          - value
 *     - 반환                - key,value 가 설정된 인스턴스
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스에 key, value 설정
 *     --> key, value 순서로 파라미터 작성
 *     --> key, value 를 설정한 인스턴스 반환
 *
 *     - key 값이 같으면 value 가 바뀐다.
 *
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ set() ---------------');
    let obj = new Map();
    // key , value
    obj.set("one" , 100);
    // :: { "one" => 100 }
    obj.set({}, "오브젝트");
    // :: { {} => "오브젝트"}
    obj.set(function(){},"Function");
    // :: { function(){} => "Function"}
    obj.set(new Number("100") , "인스턴스");
    // :: {Number{100} => "인스턴스"}
    obj.set(NaN , "Not a Number");
    // :: { NaN => "Not a Number" }
    debugger;
    const num = new Number("100");
    log(num);
    // :: Number{100}

    for (let [key , value] of obj) {
        log(`${key} : ${value}`);
        // :: one : 100
        // :: [object Object] : 오브젝트
        // :: function(){} : Function
        // :: 100 : 인스턴스
        // --> toString 메소드를 호출하니깐 100이 반환됨!
        // :: NaN : Not a Number;
    }

    debugger;

    /**
     *  - 위에 new Number 에서
     *    Primitive type object wrapper used 를 권장하지 않는 것은
     *    PrimitiveValue 빌트-인 값을 wrapper 객체로 한번더 묶으면
     *  --> PrimitiveValue 을 사용해 비교하거나 식을 작성할떼
     *      개발자가 의도하지 않는대로 실행될수도 있기에 그렇다
     *
     *      예) const bool = new Boolean(false)
     *      - if (bool) log("나 타버렷어요 ㅠㅠ");
     *
     *      ----> 위식은 if 문을 탐
     *            왜냐! bool을 wrapper 객체로 감쌋고 wrapper 객체는
     *            존재하기 때문이지~
     *
     */

}

{
    "use strict"
    log('------------ key 값이 같으면 value 가 바뀐다 ---------------');
    let obj = new Map();
    const book = {};
    obj.set(book , "첫 번째");
    obj.set(book , "두 번째");
    obj.set({}, "세 번째");
    obj.set({}, "네 번째");

    for (let [key , value] of obj) {
        log(`${key} : ${value}`);
        // :: [object Object] : "두 번째"
        // :: [object Object] : "세 번째"
        // :: [object Object] : "네 번째"
    }
    debugger;

    // 1. obj.set(book, "첫 번째);
    //    외부에 작성한 book 오브젝트의 메모리 주소를
    //    key 값으로 사용한다

    // 2. obj.set(book, "두 번째");
    //    book 오브젝트의 메모리 주소와 같은
    //    key 값이 있으므로 값이 대체된다.
}
/**
 *           ===== get() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.get()
 *     - 파라미터             - key 값
 *     - 반환                - [key, value] 에서 value, undefined
 *     -----------------------------------------------------------
 *
 *     - Map 에서 key 값이 같은 value 반환
 *     --> key 값이 같지 않거나 타입이 다르면 undefined 반환
 *     --> 오브젝트 설정과 추출
 */
{
    "use strict"
    log('------------ get() ---------------');
    let obj = new Map([
        // [[Entries]] 2개 작성
        ["one" , 100],
        ["200" , "String 타입"],
    ]);
    log(obj.get("one"));
    // :: 100
    log(obj.get("two"));
    // :: undefined
    log(obj.get(200));
    // :: undefined
    debugger;

    // 1. two 가 key 에 없으므로 undefined 를 반환한다

    // 2. 200 이 있지만 타입이 다르므로 undefined 를 반환한다.
}

{
    "use strict"
    log('------------ 오브젝트 추출 ---------------');
    let obj = new Map();
    const like = {sports : "스포츠"};
    obj.set(like , {value : "농구"});
    log(obj.get(like));
    // :: {value : "농구"}
    debugger;
    // 1. 같은 메모리 주소를 사용한다.
}
/**
 *           ===== has() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.has()
 *     - 파라미터             - key 값
 *     - 반환                - key 가 존재하면 true, 아니면 false
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스에서 key 의 존재 여부를 반환
 *     --> key 가 있으면 true, 아니면 false
 */
{
    "use strict"
    log('------------ has() ---------------');
    const obj = new Map([
        ["one" , 100],
    ]);
    log(obj.has("one"));
    // :: true
    log(obj.has("two"));
    // :: false
    debugger;
}
/**
 *  - 이와같이 Map 오브젝트는
 *    set, get ,has 메소드를 사용해서 [[Entries]]를 설정하거나 읽을 수 있다.
 */
















