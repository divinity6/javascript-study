/**
 * 프로그램 설명문서 주석
 * 2021.09 29 ~ 30 수업
 *
 *           ===== entries() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Object.entries()
 *      - 파라미터                 - 열거 가능한 오브젝트
 *      - 반환                    - [[key, value]] 형태
 *      -----------------------------------------------------------
 *
 *      - 열거 가능한 오브젝트의 { key : value }를
 *      --> [[key , value]] 형태로 변환
 *
 *      - 작성한 순서가 바뀌는 경우
 *
 *      - 문자열은 문자 하나씩 분리
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ entries() ---------------');

    const obj = {music: "음악", book: "책"};

    const list = Object.entries(obj);

    /**
     * list가 이터러블 오브젝트이기 때문에 for-of 문을 작성할 수 있다.
     */
    for (let keyValue of list) {
        log(keyValue);
        debugger;
        // :: ['music', '음악']
        // :: ['book', '책']
    }
    // 1. list는 이터러블 오브젝트이다

    // 2. [[key, value]] 형태를 Map 형태라고 부른다
    //    Map은 Map 오브젝트에서 다룬다.
    //    - 대괄호안에 작성된 [key, value] 형태를 Map 형태라고 부른다!
    //    - 이것은 이터러블 오브젝트다!

    /**
     *  즉, entries() 함수는 key,value형태의 오브젝트를
     *  Map형태의 key, value 형태로 변환한다.
     */
}

{
    "use strict"
    log('------------ 작성한 순서가 바뀌는 경우 ---------------');
    const obj = {10: "십", book: "책", 7: "칠"};
    const list = Object.entries(obj);
    for (let keyValue of list) {
        log(keyValue);
        // :: ['7', '칠']
        // :: ['10', '십']
        // :: ['book', '책']
        debugger;
    }

    // 1. 맨처음 코드처럼 key가 전부 영문자일 때는
    //    key 값을 분류하지 않고 작성한 대로 반환

    // 2. 반면, 위 코드처럼 숫자와 문자가 섞여 있으면
    //    숫자, 문자 순서로 분류한다.

    /**
     *  작성한 순서가 중요하면, 다른 관점에서 접근해야 한다.
     */
}

{
    "use strict"
    log('------------ 문자열 분리 ---------------');

    // 문자열은 인덱스를 key 값으로 사용한다.
    const list = Object.entries("ABC");
    for (let keyValue of list) {
        log(keyValue);
        // :: ['0', 'A']
        // :: ['1', 'B']
        // :: ['2', 'C']
        debugger;
    }

    // 1. 문자열은 문자 하나씩 분리하며

    // 2. 인덱스를 key 값으로 사용한다.
}

/**
 *
 *           ===== values() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Object.values()
 *      - 파라미터                 - 열거 가능한 오브젝트
 *      - 반환                    - [[value]] 형태
 *      -----------------------------------------------------------
 *
 *      - 열거 가능한 오브젝트의 { key : value }를
 *      --> 값만 [value1, value2] 형태로 변환(배열)
 *
 *      - 작성한 순서가 바뀌는 경우
 *
 *      - 문자열은 하나씩 분리
 */

{
    "use strict"
    log('------------ values() ---------------');

    const obj = {music: "음악", book: "책"};
    // 음악과 책만 추출
    const list = Object.values(obj);

    for (let value of list) {
        log(value);
        // :: 음악
        // :: 책
        debugger;
    }

    /**
     *  - 위와같이 values() 함수는 프로퍼티에서 프로퍼티 값을 이터러블 오브젝트로 반환.
     *
     *    그런데 그 형태는 [ value1 , value2 ]와 같은 형태
     */
}

{
    "use strict"
    log('------------ 정렬하여 반환() ---------------');

    const obj = {10: "십", book: "책", 7: "칠"};
    const list = Object.values(obj);

    for (let value of list) {
        log(value);
        // :: 칠
        // :: 십
        // :: 책
        debugger;
    }

    // 1. 위위의 코드처럼 key가 영문자 일때는
    //    key 값을 분류하지 않지만

    // 2. 바로위처럼 숫자와 문자가 섞여 있으면
    //    숫자, 문자 순서로 분류한다.
}

{
    "use strict"
    log('------------ 문자열 분리 ---------------');
    const list = Object.values("ABC");
    for (let value of list) {
        log(value);
        // :: "A"
        // :: "B"
        // :: "C"
        debugger;

    }

    // 1. 문자열을 문자 하나씩 분리한다.

    /**
     * - entries , values는 애초에 열거가능한 오브젝트만 가능!
     *   (바뀌면 이터러블 오브젝트로 변환되네)
     *
     * - 아, 즉 entries()는 key값까지 함께 배열에 넣어서 출력하고(Map 형태),
     *   (String 형태일경우 없으면 만들어서라도...)
     *
     * - values()는 value값만 배열로 반환하네.
     */

}

/**
 *  *           ===== fromEntries() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Object.fromEntries(), ES2019
 *      - 파라미터                 - 이터러블 오브젝트
 *      - 반환                    - 새로운 오브젝트
 *      -----------------------------------------------------------
 *
 *      - [[key , value]] 형태(Map 형태)를
 *      --> { key : value } 형태(오브젝트 형태)로 변환
 *
 *      - 프로퍼티 키 값이 같으면 값 대체
 */
{
    "use strict"
    log('------------ fromEntries() ---------------');

    // map형태로 data 작성
    const list = [["one", 10], ["two", 20]];
    const obj = Object.fromEntries(list);
    log(obj);
    // :: {one: 10, two: 20}

    debugger;
}

{
    "use strict"
    log('------------ 프로퍼티 키 값이 같은 경우 ---------------');

    // 프로퍼티 키가 같으면 값이 대체
    // ( 따라서, 작성한 순서가 중요 )
    const list = [["one", 10], ["one", 20]];
    const obj = Object.fromEntries(list);
    log(obj);
    // :: {one: 20}

    debugger;
}

/**
 *  *           ===== getOwnPropertyDescriptors() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Object.getOwnPropertyDescriptors()
 *      - 파라미터                 - 대상 오브젝트
 *      - 반환                    - 프로퍼티 디스크립터를 포함한 오브젝트
 *      -----------------------------------------------------------
 *
 *      - Object의 프로퍼티 디스크립터를 반환
 *      --> 데이터 디스크립터
 *      --> 악세스 디스크립터
 *
 *      - 상속받은 오브젝트는 반환하지 않음
 */

{
    "use strict"
    log('------------ 데이터 디스크립터 ---------------');
    const obj = {music: "음악"};

    // 아래와 같이 4개의 descriptor속성을 반환
    const des = Object.getOwnPropertyDescriptors(obj);

    for (let name in des.music) {
        log(name + ":" + des.music[name]);
        // :: value:음악
        // :: writable:true
        // :: enumerable: true
        // :: configurable: true
        debugger;
    }

    // 1. { music : "음악" }
    //    프로퍼티 디스크립터 중에서

    // 2. 데이터 디스크립터를 반환한다.
}

{
    "use strict"
    log('------------ 악세스 디스크립터 ---------------');
    const obj = {
        get music() {
        }
    };
    const des = Object.getOwnPropertyDescriptors(obj);

    for (let name in des.music) {
        log(name + ":" + des.music[name]);
        // :: get:get music() {}
        // :: set:undefined
        // :: enumerable: true
        // :: configurable: true
        debugger;
    }

    // 1. {get music(){}}

    // 2. 악세스 디스크립터를 반환한다.

    /**
     *  - get은 위에 작성했기 때문에 music()함수가 나오고
     *
     *  --> set은 작성하지 않았기 때문에 undefined가 출력된다.
     *
     *  --> enumerable, configurable은 디폴트 값이 true다
     *
     *  - getOwnPropertyDescriptors 함수는 상속받은 오브젝트는 반환하지 않는다.
     *    (즉, OwnProperty만 반환한다.)
     */
}
