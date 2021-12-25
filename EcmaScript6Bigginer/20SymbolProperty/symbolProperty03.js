/**
 * 프로그램 설명문서 주석
 * 2021.12.22 수업
 *
 *           ===== isConcatSpreadable =====
 *
 *      - Array.prototype.concat()은
 *      --> 배열의 엘리먼트를 전개하여 반환
 *
 *      - [Symbol.isConcatSpreadable] = true
 *      --> one 배열 끝에 two 배열의 엘리먼트를 하나씩 연결
 *      ----> 이것은 기본값과 같다
 *
 *      - [Symbol.isConcatSpreadable] = false
 *      --> 전개하지 않고 two 배열 자체를 연결
 *
 *      - Array-Like 전개
 *
 */

console.log("====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 배열이 대상 ---------------');

    const one = [10, 20], two =["A" , "B"];
    const show = () => {
        log(one.concat(two));
    };
    show();
    // :: [10, 20, 'A', 'B']
    debugger;
    two[Symbol.isConcatSpreadable] = true;
    show();
    // :: [10, 20, 'A', 'B']
    debugger;
    two[Symbol.isConcatSpreadable] = false;
    show();
    // :: [10, 20, ['A','B']]
    debugger;
    /**
     * - 기본적으로는 two 엘리먼틀 전개하여 첨부하는데
     *   배열 자체를 첨부하겠다고 한다면,
     *
     *   [Symbol.isConcatSpreadable] = false;를 선언하면됨.
     */

    // 1. 대상이 Array 이면 전개하는 것이 디폴트다

    // 2. @@isConcatSpreadable을 true로 처리

    one[Symbol.isConcatSpreadable] = false;
    show();
    // :: [[10, 20] , ['A','B']]
    debugger;
}

{
    "use strict"
    log('------------ Array-like가 대상 ---------------');
    /**
     * Array-like는 반대가 된다.
     */
    const one = [10, 20];
    const like = {0: "A", 1: "B", length:2};
    const show = () => {
        log(one.concat(like));
    }

    show();
    // :: [10, 20, {0: "A", "B", length: 2}]
    debugger;
    like[Symbol.isConcatSpreadable] = true;
    show();
    // :: [10, 20, 'A', 'B']
    debugger;
    like[Symbol.isConcatSpreadable] = false;
    show();
    // :: [10, 20, {0: "A", "B",length: 2}]
    debugger;

    // 1. 대상이 Array-like 이면
    //    전개하지 않는것이 디폴트이다
    //    Array와 반대이다

    // 2. @@isConcatSpreadable을 false로 처리

    // 3. Array-like에서 값만 전개

    /**
     *  - 대상이 배열이냐, Array-like냐에 따라서 전개하는 기준이 달라진다.
     *
     *  ===== 아 이제보니깐 isConcatSpreadable
     *        이게 concat을 전개할 것인지 묻는거네 ㅋㅋㅋㅋ =====
     */
}