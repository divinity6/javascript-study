/**
 * 프로그램 설명문서 주석
 * 2021.11.24 수업
 *
 *           ===== entries() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Array.prototype.entries()
 *      - 반환                    - Array 이터레이터 오브젝트
 *      -----------------------------------------------------------
 *
 *      - Array 오브젝트를
 *        Array 이터레이터 오브젝트로 생성, 반환
 *
 *      - 배열의 엘리먼트를
 *        [key, value] 형태로 변환
 *      --> Array 이터레이터 오브젝트 구조
 *
 *      - for-of 문으로 전개
 *
 *      - 이터레이터는 다시 반복할 수 없다
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ Array 이터레이터 오브젝트 생성 ---------------');
    const iterator = ["A", "B"].entries();
    log(iterator.next().value);
    // :: [0 , A]
    log(iterator.next().value);
    // :: [1, B]

    debugger;

    // 1. ["A" , "B"].entries();
    //    Array 이터레이터 오브젝트를 생성한다

    // 2. Array 이터레이터 오브젝트는
    //    [key , value] 형태다

    // 3. 배열의 인덱스가 key가 되고
    //    엘리먼트 값이 value가 된다.
}

{
    "use strict"
    log('------------ Array 이터레이터 오브젝트 구조 ---------------');
    debugger;

    const list = ["A", "B"];
    const iterator = list.entries();
    /**
     *  1. 오른쪽의 iterator를 펼치면 __proto__가 있다
     *
     *  2. 이를 펼치면 next()가 있다.
     *
     *  3. 따라서 이터레이터 오브젝트이며 next()를 호출할 수 있다.
     *     (반복가능하며, next()를 호출가능해야 이터레이터 프로토콜)
     *
     */

    const result = iterator.next();

    /**
     *  1. 오른쪽의 result를 펼치면
     *  -  value가 있으며, done : false가 있다
     *
     *  2. value의 타입은 Array 이며 이를 펼치면
     *  -  0: 1, 1 : "A", length : 2
     *
     *  3. result.value는 Array 오브젝트형태다
     *     (prototype === Array)
     *  -  list에 Array 오브젝트를 할당했으며
     *  -  result.value와 list가 같다
     *  -  다만, done: false가 있는 것이 Array 오브젝트와 다르다.
     *
     *  4. 이 형태가 Array 이터레이터 오브젝트 구조다.
     */

    log(result);
    // :: {value: Array(2), done: false}
    debugger;

    log(iterator.next().value);
    /**
     *  1. value 프로퍼티로 값을 구해야
     *   - done: false를 제외하고 값을 구할 수 있다.
     */
    debugger;
}

{
    "use strict"
    log('------------ Array 이터레이터 오브젝트 전개 ---------------');

    const iterator = ["A", "B"].entries();
    for (const property of iterator) {
        log(property);
        // :: [0, 'A']
        // :: [1, 'B']
        debugger;
    }

    /**
     *  1. 전개만 할 때는 next()가 불편하다
     *     이유는, 끝난 것을 체크해야 하기 때문이다
     *
     *  2. 연속해서 전개만 할 때는 for-of가 편리하다
     *
     *  3. of 앞의 property 변수에 [0,A] 형태로 설정되므로
     *     값을 사용하려면 코드를 추가해야 하며
     *     이때 분할 할당을 사용하면 편리하다.
     *
     */
}

{
    "use strict"
    log('------------ 분할 할당 ---------------');
    const iterator = ["A", "B"].entries();
    for (const [key, value] of iterator) {
        log(`${key} : ${value}`);
        // :: 0 : A
        // :: 1 : B
        debugger;
    }

    // 1. 분할 할당으로
    //    key , value를 분할할 수 있다.
}

{
    "use strict"
    log('------------ 다시 반복 불가 ---------------');
    const iterator = ["A", "B"].entries();

    for (const [key, value] of iterator) {
        log(`${key} : ${value}`);
        // :: 0 : "A"
        // :: 1 : "B"
        debugger;
    }

    for (const property of iterator) {
        // :: property === undefined
        log("다시 전개");
        debugger;
    }

    log(iterator.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. 끝까지 읽은 이터레이터 오브젝트를
    //    다시 읽을 수 없다

    // 2. for (const property of iterator){}에서
    //    "다시 전개"가 출력되지 않은 것은
    //    다시 읽을 수 없기 때문이다.

    // 3. iterator.next()
    //    이터레이터 오브젝트를 전부 읽으면
    //    {value: undefined, done: true}를 반환한다.

    /**
     *  이터레이터 오브젝트는 다시 읽을 수 없다.
     */
}