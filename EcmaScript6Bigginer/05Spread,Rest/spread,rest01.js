/**
 * 프로그램 설명문서 주석
 * 2021.08 11 수업
 *
 *
 *           ===== let,const 사용 기준 =====
 *
 *      - 강좌의 let, const 변수 사용 기준
 *      --> let : 변경할 수 있다
 *      --> const : 변경할 수 없다
 *          (const로 Array등을 선언하고 element를 변경 할 수는 있다.)
 *
 *      - let, const 변수의 시멘틱을 우선하여 사용
 *      --> 값이 변경되면 let
 *      --> 초깃값이 변경되지 않으면 const
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

log('------------let,const 사용 기준---------------');
const list = [10, 20];
// 배열의 element 값이 변경되지 않으면 const 사용
// 즉, 하나도 변경되지 않았을 때!

let values = [10, 20];
// 값이 바뀌거나 length가 늘어나면 let 변수 사용
values.push(30, 40);

for (let k = 0; k < list.length; k++) {
}
// for문에서 let은 반복할 때마다 값이 바뀐다.
// 그러나 block안에서 k값이 바뀌지 않으면 const 사용 가능

const book = (param) => param + 10;
// 함수는 const 변수 사용


/**
 *           ===== spread =====
 *
 *      - Syntax: [...iterable]
 *
 *      - [...iterable]
 *      --> [...] 처럼 []안에 점(.) 3개를 작성하고
 *      --> 이어서 이터러블 오브젝트 작성
 *
 *      - 이터러블 오브젝트를 하나씩 전개
 *
 *      - {key : value}의 Object가
 *      --> 이터러블 오브젝트는 아니지만 전개 가능
 *
 *      - 강좌의 용어 사용 기준
 *      --> spread, 분리, 전개를 사용(앞뒤 문맥에 따라)
 *
 */
{
    "use strict";
    log('------------spread 형태---------------');
    const list = [21, 22];
    log([11, ...list, 12]);
    // :: [ 11, 21, 22, 12 ]

    const obj = {key: 50};
    log({...obj});
    // :: { key : 50 }

    debugger;

    /**
     *      - 이터러블 오브젝트를 하나씩 전개하는 것.
     *      --> 위의 코드에서 list를 그냥 갖다놓는 것이 아니다.
     *      --> 그냥 갖다 두기만 한다면 2차원 Array가 될 것이다.
     *          (그런데 그것을 분리 시킨다는 것)
     *
     *      ----> 따라서 위와 같이 1차원이 되는 것.
     *
     *      - {key : value}의 Object는 이터러블 오브젝트는 아니지만 전개 가능
     *      --> 이터러블 오브젝트가 대상이지만, 오브젝트도 작성가능!!
     *
     *
     */
}
{

    "use strict";
    /**
     *           ===== Array spread =====
     *
     *      - spread 대상 배열을 작성한 위치에 엘리먼트 단위로 분리(전개)
     *      - Array spread 작성 형태
     *      - 값이 대체되지 않고 전개
     *
     */

    log('------------Array spread ---------------');

    const one = [21, 22];
    const two = [31, 32];
    const result = [11, ...one, 12, ...two];
    log(result);
    // :: [11, 21, 22, 12, 31, 32]
    log(result.length);
    // :: 6

    // 1. ...one
    //    one 배열의 [21,22]를
    //    엘리먼트 단위로 분리(전개)한다.

    // 2. ...two 위치에
    //    two 배열의 [31, 32]를
    //    엘리먼트 단위로 분리(전개)한다.


    debugger;

}

{
    "use strict";
    log('------------ 값이 대체되지 않음 ---------------');
    const one = [11, 12];
    const result = [11, 12, ...one];
    log(result);
    // :: [11, 12, 11, 12]
    log(result.length);
    // :: 4

    // 1. 앞에 11과 12가 있지만
    //    값을 대체하지 않고
    //    ...을 작성한 위치에 전개한다.

    debugger;

    /**
     *  - 배열은 위와 같이 그 위치에 똑같은 값이 있지만
     *    값을 대체하지않고 전개시킨다
     *  --> 따라서 length: 4
     *
     *  --> 만약, 값이 대체됐다면 값이 2가 되었을 것이다.
     *
     */
}

{
    'use strict';
    log('------------ String spread ---------------');

    /**
     *           ===== String spread =====
     *
     *  - spread 대상 문자열을 작성한 위치에 문자 단위로 전개
     *    (하나씩 전개하는 것)
     *
     *  - String spread 작성 형태
     *
     */

    const target = "ABC";
    log({...target});
    // :: {0: "A", 1: "B", 2: "C"}
    log([...target]);
    // :: ["A", "B", "C"]

    // 1. [...target];
    // 2. target의 "ABC"를 문자 단위로 분리하여
    //    ...target 위치에 설정

    debugger;
}

{
    'use strict';
    log('------------ Object spread ---------------');

    /**
     *           ===== Object spread =====
     *
     *  - spread 대상 Object를
     *    작성한 위치에 프로퍼티 단위로 전개
     *
     *  - Object spread 작성 형태
     *
     *  - 프로퍼티 이름이 같으면 값 대체
     *
     */

    const one = {key1: 11, key2: 22};
    const result = {key3: 33, ...one};
    log(result);
    // :: {key3: 33, key1: 11, key2: 22}

    // 1. ...one
    //    one 오브젝트의 프로퍼티를 전개

    debugger;

    /**
     *      그런데 프로퍼티 이름이 같으면 이녀석은 값을 대체한다.
     */

    log('------------ 프로퍼티 값 대체 ---------------');
    const obj = {book: 10, music: 20};
    const spread = {book: 30, ...obj};

    log(spread);
    // :: {book: 10, music: 20}

    // 1. {book: 30}과 {book: 10}에서
    //    프로퍼티 이름이 같으므로
    //    30이 뒤에 작성한 10으로 대체된다.

    // 2. Object는 이터러블 오브젝트가 아니므로
    //    [...one] 형태로 작성하면 에러가 발생한다.

    debugger;

    /**
     *      - 빌트인 Object는 이터러블 오브젝트가 아니므로
     *        [...one] 형태로 작성할 수는 없고 {...one}형태로 중괄호
     *        안에 작성해야 한다.
     *
     */
}

{
    'use strict';
    log('------------ push spread ---------------');

    /**
     *           ===== push(...spread) =====
     *
     *  - push() 메소드 파라미터에 spread 대상을 작성한 형태
     *
     *  - 배열 끝에 대상을 분리하여 첨부
     *
     */

        // 강좌에서 result가 안에서 바뀐다는 시멘틱
    let result = [21, 22];

    const five = [51, 52];

    result.push(...five);
    log(result);
    // :: [21, 22, 51, 52]

    result.push(..."abc");
    log(result);
    // :: [21, 22, 51, 52, "a", "b", "c"];


    // 1. result 배열 끝에 첨부

    // 2. 배열이면 엘리먼트로 분리하여 첨부하고
    //    문자열이면 문자 단위로 분리하여 첨부

    debugger;
}


















