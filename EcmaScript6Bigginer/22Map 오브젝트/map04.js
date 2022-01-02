/**
 * 프로그람 설명문서 주석
 * 2022.01.02 수업
 *
 *           ===== entries() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.entries()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - 생성한 이터레이터 오브젝트 생성
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스로 이터레이터 오브젝트 생성하여 반환
 *     --> Map 인스턴스에 설정된 순서로 반환
 *     --> next()로 [key, value] 반환
 *
 */

console.log("ㅇ====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ entries() ---------------');
    const obj = new Map([
        ["one" , 100],
        ["two" , 200]
    ]);

    /**
     * - entries 메소드를 호출하면 iterator 오브젝트를 반환한다.
     */
    const iter = obj.entries();
    // :: MapIterator
    /**
     *  next() 호출시 Map 오브젝트의 entry 가 하나씩 반환됨
     */
    log(iter.next());
    // :: {value : ['one' ,100], done: false}
    log(iter.next());
    // :: {value : ['two', 200], done: false}
    log(iter.next());
    // :: {value : undefined, done: true}
    debugger;

    /**
     *  - 이처럼 entries() 메소드를 사용해서 Map 인스턴스로
     *    iterator 오브젝트 생성해서 반환,
     *
     *  --> next() 메소드를 호출할 때마다 entry 반환
     */
}

/**
 *
 *           ===== keys() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.keys()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - 생성한 이터레이터 오브젝트
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스의 key 로 이터레이터 오브젝트 생성, 반환
 *     --> value 는 포함하지 않는다
 *     --> Map 인스턴스에 설정된 순서대로 반환
 *
 *     - next()로 key 반환
 */

{
    "use strict"
    log('------------ keys() ---------------');
    const obj = new Map([
        ["one" , 100],
        ["two" , 200]
    ]);

    const iter = obj.keys();
    // :: MapIterator
    log(iter.next());
    // :: {value: "one", done: false}
    log(iter.next());
    // :: {value : "two", done: false}
    log(iter.next());
    // :: {value : undefined, done : true}
    debugger;
}

/**
 *
 *           ===== values() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype.values()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - 생성한 이터레이터 오브젝트
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스의 value 로 이터레이터 오브젝트 생성, 반환
 *     --> key 는 포함하지 않는다
 *     --> Map 인스턴스에 설정된 순서대로 반환
 *
 *     - next()로 value 반환
 */

{
    "use strict"
    log('------------ values() ---------------');
    const obj = new Map([
        ["one" , 100],
        ["two" , 200]
    ]);

    const iter = obj.values();
    // :: MapIterator
    log(iter.next());
    // :: {value: 100, done: false}
    log(iter.next());
    // :: {value : 200, done: false}
    log(iter.next());
    // :: {value : undefined, done : true}
    debugger;
}


/**
 *
 *           ===== Symbol.iterator() =====
 *
 *      -----------------------------------------------------------
 *     - 구분                - 데이터(값)
 *     - 형태                - Map.prototype[Symbol.iterator]()
 *     - 파라미터             - 파라미터 없음
 *     - 반환                - {done: true/false, value: 값}
 *     -----------------------------------------------------------
 *
 *     - Map 인스턴스로 이터레이터 오브젝트를 생성하여 반환
 *     --> Map.prototype.entries() 메소드와 같다
 *     --> next()로 [key, value] 반환
 */
{
    "use strict"
    log('------------ Symbol.iterator ---------------');
    const obj = new Map([
        ["one" , 100],
        ["two" , 200]
    ]);

    /**
     * - 여기서 iter[[IteratorKind]] : "entries"
     *   즉, entries() 메소드와 같은역할을 한다는 것을 알 수 있다.
     */
    const iter = obj[Symbol.iterator]();
    log(iter.next());
    // :: {value: ['one', 100], done: false}
    log(iter.next());
    // :: {value: ['two', 200], done: false}
    log(iter.next());
    // :: {value: undefined, done: true}
    debugger;
}



