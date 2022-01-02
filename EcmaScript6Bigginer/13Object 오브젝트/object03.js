/**
 * 프로그램 설명문서 주석
 * 2021.09 28 수업
 *
 *           ===== Deep Copy =====
 *
 *      - Object를 할당하면 프로퍼티 값이 연동됨
 *      --> 한 쪽 오브젝트의 프로퍼티 값을 바꾸면
 *          다른 오브젝트의 프로퍼티 값도 바뀜
 *
 *      - assign() 함수로 복사
 *
 *      - 그래도 연동되는 형태
 *
 *      - 연동되지 않게 하려면 프로퍼티 단위로 복사
 *
 *      - JSON 함수 활용
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ 프로퍼티 값 연동() ---------------');
    const sports = {
        item: "축구"
    };

    let copy = sports;

    // copy도 같이 바뀌네
    sports.item = "농구";
    log(copy.item);
    // :: 농구

    debugger;

    // 1. sports.item = "농구";

    // 2. copy.item 값도 바뀐다.

    // 연동이 필요한 경우도있지만 연동이 필요하지 않은 경우에는 assign() 함수로 복사하면 된다.
}

{
    "use strict"
    log('------------ assign() 함수로 복사 ---------------');
    const sports = {
        item: "축구"
    };
    let copy = {};
    Object.assign(copy, sports);
    sports.item = "농구";
    log(copy.item);
    // :: 축구

    debugger;

    // 1. 연동되지 않는다.
}
/**
 *  위와같이 간단한 형태는 연동되지 않지만 복잡한 경우에는 연동되는 경우도 있다.
 *
 *  아래가 그 예시.
 */

{
    "use strict"
    log('------------ 그래도 연동되는 형태 ---------------');
    const book = {

        // 프로퍼티 오브젝트 값에 오브젝트작성
        item: {title: "자바스크립트"}
    };
    let copy = {};
    Object.assign(copy, book);
    copy.item.title = "책";

    log(book.item.title);
    // :: 책

    debugger;

    // 1. {item : {title: "자바스크립트"}

    // 2. Object 안에 Object가 있는 형태다
    //    item.title 값이 연동된다

    // 3. 이것은 프로퍼티를 복사하지 않고
    //    Object 참조를 복사하기 때문이다.

    /**
     *  아, 즉 book.item이 참조하고있는 곳을 복사하는 것인가..?
     *
     *  즉, Object(item)의 메모리 주소를 복사하기 때문에 연동이 된다.
     */
}

/**
 *  연동되지 않게 하려면 프로퍼티 단위로 복사를 해야한다.
 */
{
    "use strict"
    log('------------ 프로퍼티 단위로 복사 ---------------');
    const book = {
        item: {title: "자바스크립트"},
    };
    let copy = {};
    for (let key in book) {
        let value = book[key];

        // 빈오브젝트 할당
        copy[key] = {};
        debugger;

        for (let name in value) {
            copy[key][name] = value[name];
            debugger;
        }

    }
    book.item.title = "책";
    log(copy.item.title);
    // :: 자바스크립트

    debugger;
    // 1. 프로퍼티 단위로 복사하면 연동되지 않지만

    // 2. 단계의 깊이가 유동적이면 코드가 복잡해진다
    //    ( 값이 깊어질수록 재귀함수를 사용한다.)

    // 3. 다단계 계층 구조에서
    //    깊이 연동되지 않도록 복사하는 것을
    //    deep copy , deep clone이라고 부른다.

    /**
     *  다단계 계층구조에서 deep copy를 하려면 정해진방식으로 할 수는 없기 때문에
     *  JSON 함수를 사용하는 방법이 있다.
     */
}

{
    "use strict"
    log('------------ Deep Copy, Deep Clone ---------------');
    const book = {
        item: {title: "자바스크립트"},
    }
    const copy = JSON.parse(JSON.stringify(book));
    book.item.title = "책";
    log(copy.item.title);
    // :: 자바스크립트

    debugger;

    // 1. JSON.stringify()로 문자열로 변환한 후

    // 2. JSON.parse()로 파싱하면 연동되지 않는다

    // 3. 이것도 하나의 방법이다.
}