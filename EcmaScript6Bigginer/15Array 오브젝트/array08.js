/**
 * 프로그램 설명문서 주석
 * 2021.11.25 수업
 *
 *           ===== keys() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Array.prototype.keys()
 *      - 반환                    - Array 이터레이터 오브젝트
 *      -----------------------------------------------------------
 *
 *      - Array 오브젝트를 Array 이터레이터 오브젝트로 생성, 반환
 *      --> entries()와 같으며
 *      --> [key, value] 형태에서
 *          value는 반환하지 않고 key만 반환
 *          (따라서, 배열안에 값이 하나만 있는 형태)
 *
 *      - 배열 인덱스가 key가 된다.
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ next() 사용 ---------------');
    const iterator = ["A", "B"].keys();

    log(iterator.next());
    // :: {value: 0, done: false}
    log(iterator.next());
    // :: {value: 1, done: false}
    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. 생성한 Array 이터레이터 오브젝트는 [key 형태다]

    // 2. value에 인덱스가 설정된다.
}

{
    "use strict"
    log('------------ for-of로 전개 ---------------');

    const iterator = ["A", "B"].keys();
    for (const property of iterator) {
        log(property);
        // :: 0
        // :: 1
        debugger;
    }
    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. key만 설정되므로 값이 하나다.
    //    따라서 분할 할당을 하지 않아도 된다.
}

/**
 *
 *           ===== values() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Array.prototype.values()
 *      - 반환                    - Array 이터레이터 오브젝트
 *      -----------------------------------------------------------
 *
 *      - Array 오브젝트를
 *        Array 이터레이터 오브젝트로 생성, 반환
 *
 *      - [key , value] 형태에서
 *        key는 반환하지 않고 value만 반환
 *
 *      - 배열의 엘리먼트 값이 value가 된다
 *
 *      - [Symbol.iterator]() 사용
 *
 *      - 값이 연동된다.
 *
 */
{
    "use strict"
    log('------------ next() 사용 ---------------');
    const iterator = ["A", "B"].values();
    log(iterator.next());
    // :: {value: 'A', done: false}
    log(iterator.next());
    // :: {value: 'B', done: false}
    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. 생성한 Array 이터레이터 오브젝트는
    //    [value] 형태이다.
}

{
    "use strict"
    log('------------ for-of로 전개 ---------------');
    const iterator = ["A", "B"].values();
    for (const property of iterator) {
        log(property);
        // :: A
        // :: B
        debugger;
    }

    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // :: 1. values만 설정되므로 값이 하나다.
}

{
    "use strict"
    log('------------ Symbol.iterator() 사용 ---------------');
    const check = Array.prototype.values
        === Array.prototype[Symbol.iterator];

    log(check);
    // :: true;
    debugger;

    const iterator = ["A", "B"][Symbol.iterator]();
    for (const property of iterator) {
        log(property);
        // :: A
        // :: B
    }

    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. Array.prototype.values()와
    //    Array.prototype[Symbol.iterator]가 같다

    // 2. 따라서 values() 대신에
    //    [Symbol.iterator]()를 사용해도
    //    결과가 같다

    /**
     *  values 메소드 대신에 Symbol.iterator 메소드를 사용해도 값이 같다.
     */
}

{
    "use strict"
    log('------------ 값 연동 ---------------');
    let list = ["A", "B"];
    let iterator = list.values();
    list[0] = "연동";
    log(iterator.next());
    // :: {value: '연동', done: false}
    debugger;
    log(iterator.next());
    // :: {value: 'B', done: false}
    debugger;
    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. Array 이터레이터 오브젝트에서
    //    배열의 메모리 주소를 참조하므로 값이 연동된다.

    /**
     *  연동된다는 것을 신경써야 한다.
     */
}