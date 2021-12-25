/**
 * 프로그램 설명문서 주석
 * 2021.11.07 수업
 *
 *           ===== find() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Array.prototype.find()
 *      - 파라미터                - 콜백 함수
 *                              - 콜백 함수에서 this로 참조할 오브젝트(opt)
 *      - 반환                   - 배열의 엘리먼트 또는 undefined
 *      -----------------------------------------------------------
 *
 *      - 배열의 엘리먼트를 하나씩 읽어가면서 콜백 함수 호출
 *
 *      --> 콜백 함수에서 true를 반환하면 find()를 종료하면서
 *      --> 현재 처리중인 엘리먼트 값을 반환
 *
 *      - 파라미터 : 엘리먼트, 인덱스, 배열 전체
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ find ---------------');

    const list = ["A", "B", "C"];
    const cb = (value, index, all) => value === "B";
    const result = list.find(cb);
    log(result);
    // :: "B";
    debugger;

    // 1. ["A", "B", "C"]를 반복하면서 콜백 함수 호출
    // 2. 콜백 함수에서 엘리먼트 값이 B이면
    //    true를 반환한다

    // 3. 콜백 함수에서 true를 반환하면
    //    현재 처리중인 엘리먼트 값인 B를 반환하고
    //    find() 실행을 종료한다

    // 4. 조건에 맞으면 find() 실행을 종료하므로
    //    배열 앞에서 true가 되면 효율이 높다.
}
{
    "use strict"
    log('------------ undefined 반환 ---------------');
    const list = ["A", "B", "C"];
    const cb = (value, index, all) => value === 77;
    const result = list.find(cb);
    log(result);
    // :: undefined
    debugger;

    // 1. 콜백 함수에서 조건에 맞는 값이 없으면
    //    undefined를 반환한다.
}
{
    "use strict"
    log('------------ this로 참조할 오브젝트 작성 ---------------');
    const list = ["A", "B", "C"];

    /**
     *  콜백함수를 화살표(=>) 함수로 작성하면 this가 window를 참조하므로
     *  find의 this가 두 번째 파라미터의 오브젝트를 참조하지 못함.
     */
    function cb(value, index, all) {
        return value === "A" && value === this.check;
    };
    const result = list.find(cb, {check: "A"});
    log(result);
    // :: "A"
    debugger;

    // 1. 두 번째 파라미터에 콜백 함수에서
    //    this로 참조할 오브젝트를 작성한 형태다

    // 2. 콜백 함수를 화살표 함수(=>)로 작성하면
    //    콜백 함수에서 this가 window를 참조하므로
    //    두 번째 파라미터의 오브젝트를 참조하지 못한다

    // 3. 일반 함수를 작성해야 한다.

}

/**
 *           ===== findIndex() =====
 *
 *      - 앞서 다루었던 find 메소드와 같다. 다만,
 *        엘리먼트 값을 반환하는 것이아니라 인덱스를 반환한다.
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Array.prototype.findIndex()
 *      - 파라미터                - 콜백 함수
 *                              - 콜백 함수에서 this로 참조할 오브젝트(opt)
 *      - 반환                   - 배열 인덱스 또는 -1
 *      -----------------------------------------------------------
 *
 *      - 배열의 엘리먼트를
 *        하나씩 읽어가면서 콜백 함수 호출
 *
 *      --> 콜백 함수에서 true를 반환하면 findIndex()를 종료하면서
 *      --> 현재 처리중인 엘리먼트의 인덱스를 반환
 *
 *      - 파라미터 : 엘리먼트, 인덱스, 배열 전체
 */

{
    "use strict"
    log('------------ findIndex() ---------------');
    const list = ["A", "B", "C"];
    const cb = (value, index, all) => value === "B";
    log(list.findIndex(cb));
    // :: 1
    debugger;

    // 1. ["A", "B", "C"]를 반복하면서 콜백 함수 호출
    // 2. 콜백 함수에서 엘리먼트 값이 B이면 true를 반환한다
    // 3. 콜백 함수에서 true를 반환하면 현재 처리중인 엘리먼트의 인덱스를 반환하고,
    //    findIndex()를 종료한다.
}

{
    "use strict"
    log('------------ -1 반환 ---------------');
    const list = ["A", "B", "C"];
    const cb = (value, index, all) => value === 77;
    log(list.findIndex(cb));
    // :: -1
    debugger;

    // 1. 콜백 함수에서 조건에 맞는 값이 없으면 -1을 반환한다

    // 2. indexOf(searchValue, fromIndex)는 값을 직접 지정할 수 있으며
    //    검색을 시작할 인덱스를 지정할 수 있다.

    // 3. 콜백 함수가 없으므로 다양한 조건으로 체크 불가

    // 4. 단, 값만으로 인덱스를 찾을 때는 indexOf()가 효율적

    // 5. includes(searchValue, fromIndex)는 true/false를 반환한다.
}

/**
 *  - 지금까지 다루었던 검색에 관한 것을 정리해보면
 *    find() = 값 반환
 *    findIndex() = 인덱스 반환
 *    indexOf() = 인덱스 반환
 *
 *  - indexOf에는 콜백함수가 없다.
 */