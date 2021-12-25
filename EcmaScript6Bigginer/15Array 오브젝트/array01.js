/**
 * 프로그램 설명문서 주석
 * 2021.10.19 수업
 *
 *           ===== from() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Array.from()
 *      - 파라미터                - 변환 대상, 이터러블 오브젝트
 *                              - 전개할 때마다 호출할 함수opt
 *                              - 호출된 함수에서 this로 참조할 오브젝트opt
 *      - 반환                   - Array 오브젝트
 *      -----------------------------------------------------------
 *
 *      - 첫 번째 파라미터의 오브젝트를
 *        Array 오브젝트로 변환
 *
 *      - 두 번째 파라미터에 함수 작성opt
 *      --> 이터러블 오브젝트를 전개할 때마다 호출
 *
 *      - 세 번째 파라미터에 오브젝트 작성opt
 *      --> 호출된 함수에서 this로 참조
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ Array 오브젝트로 변환, 반환 ---------------');
    const like = {0: "zero", 1: "one", length: 2};
    const list = Array.from(like);
    log(list);
    // :: ['zero', 'one']

    log(Array.from("ABC"));
    // :: ['A', 'B', 'C']
    debugger;

    // 1. Array-like 오브젝트를
    //    Array 오브젝트로 변환하여 반환한다.

    // 2. "ABC"를 문자 단위로 분리하여 배열로 반환

}

{
    "use strict"
    log('------------ arguments 변환 ---------------');

    function args() {
        debugger;
        return Array.from(arguments);
    }

    log(args(1, 2, 3));
    // :: [1, 2, 3]

    debugger;

    // 1. Argument 오브젝트는 Array-like이다
}

{
    "use strict"
    log('------------ Node List ---------------');
    const nodes = document.querySelectorAll('.sports');
    const show = (node) => log(node.textContent);
    // :: 축구
    // :: 농구

    log(Array.from(nodes));
    // :: [li.sports, li.sports]
    /**
     *  - Array.from의 파라미터에 nodeList 작성
     *  --> 그러면 el단위로 배열로 반환
     *      ( 반환된 것이 배열이므로 forEach로 반복가능 )
     */
    Array.from(nodes).forEach(show);

    debugger;

    // 1. NodeList가 이터러블 오브젝트이므로
    //    Array.from()으로 읽을 수 있다.
}

{
    "use strict"
    log('------------ 콜백 함수 호출 ---------------');
    const like = {0: "zero", 1: "one", length: 2};
    /**
     *  배열의 element단위로 파라미터에 들어와서 엘리먼트 하나씩 반복하면서
     *  element에 첨부시켜 반환
     */
    log(Array.from(like, value => {
        debugger;
        return value + "변경"
    }));
    // :: ['zero변경', 'one변경']

    debugger;
    // 1. 이터러블 오브젝트를 하나씩 읽는다

    // 2. 읽은 값을 넘겨주면서 콜백 함수를 호출한다

    // 3. 콜백 함수에서 반환된 값을
    //    배열에 첨부하여 반환한다.
}

{
    "use strict"
    log('------------ this로 오브젝트 참조 ---------------');
    const like = {0: 10, 1: 20, length: 2};

    log(Array.from(like, function (value) {
        debugger;
        return value + this.plus;
    }, {plus: 70}));
    // :: [80, 90]
    debugger;

    // 1. 콜백 함수에서 this로
    //    3번째 파라미터의 오브젝트를 참조한다

    // 2. 화살표 함수를 사용하면 콜백 함수에서
    //    3번째 파라미터의 오브젝트를 참조하지 않는다.
    //    (당연하지 this가 없는데)
}

/**
 *           ===== of() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                   - Array.of()
 *      - 파라미터                - 변환 대상 값, 다수 작성 가능
 *      - 반환                   - Array 오브젝트
 *      -----------------------------------------------------------
 *
 *      - 파라미터 값을 Array로 변환, 반환
 *
 *      - 파라미터에 변환 대상 값을 작성
 *      --> 콤마로 구분하여 다수 작성 가능
 *
 */

{
    "use strict"
    log('------------ Array로 변환, 반환 ---------------');
    const result = Array.of(1, 2, 3);
    log(result);
    // :: [1, 2, 3]
    log(Array.of());
    // :: []

    debugger;
    // 1. Array 오브젝트를 생성하고

    // 2. 파라미터 값 1, 2, 3을
    //    Array 오브젝트에 첨부하여 반환한다

    // 3. 파라미터를 작성하지 않으면
    //    빈 Array 오브젝트를 반환한다.

    /**
     *  이렇게 파라미터에다가 ,로 구분하여 다수 작성 가능.
     */
}