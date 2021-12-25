/**
 * 프로그램 설명문서 주석
 * 2021.08 24 수업
 *
 *
 *           ===== for-of =====
 *
 *      - Syntax: for (variable of iterable){ }
 *
 *      - 이터러블 오브젝트를 반복
 *
 *      - iterable
 *      --> 이터러블 오브젝트를 작성
 *      --> 표현식을 작성하면 평가 결과를 사용
 *
 *      - variable
 *      --> 변수 이름 작성
 *      --> 이터러블 오브젝트를 반복할 때마다
 *          variable에 값이 할당됨
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

{
    "use strict"
    log('------------ for-of ---------------');

    const list = [1, 2, 3];
    for (let k = 0; k < list.length; k++) {
        log(list[k]);
        // : 1, 2, 3
    }

    // list 자리에 iterable 오브젝트를 작성한다.
    // 표현식을 작성하면 표현식을 평가하고 결과를 사용
    for (let value of list) {
        // value 에는 값을 작성
        log(value);
        // :: 1, 2 ,3
    }
    debugger;

    // for-of문은 처음부터 끝까지 무조건적으로 읽는 것.

}

/**
 *           ===== for-of =====
 *
 *      -- 아래와 같은 이터러블 오브젝트를 사용할 수 있다.
 *
 *      - 배열
 *      --> 배열을 반복하면서
 *          엘리면트를 하나씩 전개
 *
 *      - String
 *      --> 문자열을 반복하면서
 *          문자를 하나씩 전개
 *
 *      - NodeList
 *      --> NodeList를 반복하면서
 *          엘리먼트를 하나씩 전개
 *
 *      ---->
 *            <ul>
 *              <li class='show'>첫 번째</li>
 *              <li class='show'>두 번째</li>
 *              <li class='show'>세 번째</li>
 *            </ul>
 */
{
    "use strict"
    log('------------ for-of,Array ---------------');

    // 엘리먼트를 하나씩 읽어가면서 반복
    for (let value of [1, 2, 3]) {
        log(value);
        // :: 1 , 2 , 3
    }
}

{
    "use strict"
    log('------------ for-of,String ---------------');
    // 문자열을 하나씩 전개
    for (let value of "ABC") {
        log(value);
        // :: A , B , C
    }
    debugger;
}

{

    "use strict"
    log('------------ for-of,NodeList ---------------');
    // node문을 for-of를 이용해서 깨끗하게 처리할 수 있다.
    const nodes = document.querySelectorAll(".show");
    for (let node of nodes) {
        log(node.textContent);
        //:: 첫 번째
        //:: 두 번째
        //:: 세 번째
        debugger;
    }
}

/**
 *           ===== for-in, for-of 차이 =====
 *
 *      - for-in
 *      --> 오브젝트를 대상으로 하며 그중에서도
 *          열거 가능한 프로퍼티가 대상
 *
 *      --> { key : value } 형태는
 *          디폴트가 enumerable : true
 *
 *      --> Object.defineProperty()는
 *          디폴트가 enumerable : false
 *
 *      - for-of
 *      --> 이터러블 오브젝트가 대상
 *
 *      --> Object는 전개되지 않음
 *
 *      --> prototype의 프로퍼티도 전개되지 않음
 */

{
    "use strict"
    log('------------ 열거 가능한 프로퍼티가 대상 ---------------');
    // enumerable 이 false이면 개발자도구에서 연한색으로 보이네
    const obj = {};
    Object.defineProperties(obj, {
        sports: {
            enumerable: false, value: "스포츠"
        },
        book: {
            enumerable: true, value: "책"
        }
    });

    for (let item in obj) {
        log(item + ":" + obj[item]);
        // :: 'book' : '책'
        debugger;
    }

    // 여기서 열거하면 sports는 enumerable : false이므로 열거되지 않고
    // book만 열거가 된다.

    // defineProperty의 enumerable 디폴트값은 false이다

    // 그런데 key : value 형태로 바로 작성하면 default가 enumerable : true 이다.
}

/**
 *           ===== for-of, Object =====
 *
 *      - Object는 이터러블 오브젝트가 아니므로
 *        for-of 사용 불가
 *
 *      - Object를 for-of로 전개할 수 있는 방법
 *      --> Object.keys()로
 *          프로퍼티 이름을 배열로 만들고
 *
 *      --> 만든 배열을 for-of로 전개
 */

{
    "use strict"
    log('------------ for-of, Object ---------------');
    const sports = {
        soccer: "축구",
        baseball: "야구"
    }

    const keyList = Object.keys(sports);

    for (let key of keyList) {
        log(key + ":" + sports[key]);
        // :: "soccer" : "축구"
        // :: "baseball" : "야구"
    }
    debugger;
}













