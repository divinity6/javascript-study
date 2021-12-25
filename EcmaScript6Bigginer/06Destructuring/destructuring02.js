/**
 * 프로그램 설명문서 주석
 * 2021.08 18 수업
 *
 *
 *           ===== Object 분할 할당(destructuring) =====
 *
 *      - Object의 프로퍼티를 분할하여 할당
 *
 *      - 프로퍼티 이름이 같은 프로퍼티에 값을 할당
 *
 *      - 프로퍼티 이름을 별도로 작성
 *
 *      - 프로퍼티 값 위치에 변수 이름 작성
 *
 *      - Object 구조에 맞추어 값 할당
 *
 *      - 나머지를 Object로 할당
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

{
    "use strict"
    log('------------ 프로퍼티 값 할당 ---------------');

    const {one, two} = {one: 10, two: 20};
    log(one);
    // :: 10

    log(two);
    // :: 20

    debugger;

    // 1. 왼쪽의 Object가
    //    { name : value } 형태가 아니라
    //    프로퍼티 이름만 작성했다.

    // 2. 프로퍼티 이름이 같은 오른쪽의 프로퍼티 값을
    //    왼쪽의 프로퍼티 값으로 할당한다

    // 3. one에 10, two에 20을 할당한다.
    //    { one : 10, two : 20 } 형태가 된다.

    /**
     *      위의 형태가 오브젝트 분할 할당의 가장 기본적인 형태
     *
     *      - 지금부터 다루는 내용은 위에서 파생되는 형태
     *
     */
}

{
    "use strict"
    log('------------ 프로퍼티 이름을 별도로 작성 ---------------');
    let one, two;
    ({one, two} = {one: 10, two: 20});
    log(one);
    // :: 10

    log(two);
    // :: 20
    debugger;

    // 1. let one , two;
    //    위와같이 프로퍼티 이름을 변수와 별도로 작성하면,

    // 2. ({ one, two} = { one: 10, two : 20 });
    //    전체를 소괄호()안에 작성해야 한다.
    //    --> 소괄호 안에 작성하지 않으면 에러가난다
}

{
    "use strict"
    log('------------ 값 위치에 변수 이름 작성 ---------------');

    let five, six;
    ({one: five, two: six} = {one: 5, two: 6});
    log(five);
    // :: 5

    log(six);
    // :: 6

    debugger;

    // 1. 이름을 별도로 선언하였으므로
    //    소괄호() 안에 작성했다.

    // 2. 오른쪽 one 프로퍼티 값 5를 five에 할당한다.

    // 3. 오른쪽 two 프로퍼티 값 6을 six에 할당한다.

    // 4. console.log(one)을 실행하면 ReferenceError
    //    프로퍼티 이름으로 값을 구할 수 없다.

    // 5. five와 six 변숫값을 구하는 것이 목적이다.
    // --> 프로퍼티를 분할 할당해서 five와 six의 값을 구하겠다라는 것.
}

{
    "use strict"
    log('------------ Object 구조에 맞추어 값 할당 ---------------');

    const {one, plus: {two, three}} = {one: 10, plus: {two: 20, three: 30}};
    log(one);
    // :: 10

    log(two);
    // :: 20

    log(three);
    // :: 30

    debugger;
    // log(plus);

    // 1. plus : { two: 20 , three: 30}
    //    plus는 구조(경로)를 만들기 위한 것이다.

    // 2. 왼쪽에 plus가 있고 two가 있으면
    //    two 프로퍼티 값에 20을 할당한다.

    // 3. 구조가 같지 않으면 실행할 때 에러가 발생한다.

    // 4. console.log(plus)
    //    plus는 구조(경로)를 만들기 위한 것으로
    //    실제로 존재하지 않는다.

    // 5. plus가 없으므로 ReferenceError 발생

    // 6. 할당한 후, 이름으로 값을 구할 수 있다.
}

{
    "use strict"
    log('------------ 나머지를 Object로 할당 ---------------');

    const {one, ...rest} = {one: 10, two: 20, three: 30};
    log(rest);
    // :: { two : 20, three : 30 }
    debugger;

    // 1. rest에 나머지 Object를 할당한다.
}

/**
 *           ===== 파라미터 분할 할당(destructuring) =====
 *
 *      - 호출하는 함수에서
 *        Object 형태로 넘겨준 파라미터 값을
 *        호출받는 함수의 파라미터에 맞추어 할당한다.
 *
 *      - Object 구조에 맞추어 값 할당.
 *
 */

{
    "use strict"
    log('------------ 파라미터 값 할당 ---------------');


    // const {one, two} = {one: 10, two: 20}; 과 같은 형태.
    // 다만 함수의 파라미터에 작성하고, 할당한 형태.

    // 이렇게 넘겨줄때는 key값이 일치해야 하네.
    // function add({one2, two}) {
    function add({one, two}) {
        log(one + two);
        // :: 30
        debugger;
    }

    add({one: 10, two: 20});

    // 1. 호출하는 함수에서 넘겨준 one과 two를
    //    호출받는 함수의 프로퍼티 이름에 맞추어
    //    프로퍼티 값을 분할 할당한다.
}

{
    "use strict"
    log('------------ Object 구조에 맞추어 할당 ---------------');

    function add({one, plus: {two}}) {
        log(one + two);
        // :: 30
        debugger;
    }

    // add({one: 10, test: {two: 20}});
    // object의 값으로 받을때는 받는 곳과 보내는곳의 key가 일치해야한다.
    add({one: 10, plus: {two: 20}});

    // 1. 호출하는 함수에서 넘겨준
    //    Object 구조와 프로퍼티에 맞추어
    //    프로퍼티 값을 할당한다.
}

/**
 *
 *      이와같이 다양한 방법으로 obj의 프로퍼티를 분할하여 할당할 수 있다.
 */







