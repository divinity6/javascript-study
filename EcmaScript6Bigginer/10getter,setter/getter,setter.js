/**
 * 프로그램 설명문서 주석
 * 2021.08 25 ~ 29 수업
 *
 *           ===== getter =====
 *
 *      - getter로 선언된 함수를 자동으로 호출
 *      --> 값을 반환하는 시맨틱을 갖고 있으므로
 *          getter 함수에서 값을 반환해야 한다.
 *
 *      - ES5 형태
 *
 *      - ES6 형태
 *
 *      - ES6 장점
 *      --> ES5처럼 프로퍼티의 속성 구조가 아님
 *      --> 작성 편리
 *      --> 다수의 getter 사용 가능
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

{
    "use strict"
    log('------------ ES5 getter 형태 ---------------');

    var book = {};
    Object.defineProperty(book, "title", {
        // value와 같이 사용불가
        // value : '돈',

        get: function () {
            return "책";
        }
    })

    log(book.title);
    // :: 책
    debugger;

    // 1. book.title을 실행하면 title 프로퍼티에서
    //    get 속성의 존재를 체크한다.

    // 2. 있으면, get() 함수를 호출하며
    //    "책"이 반환되어 출력된다

    // 3. book.title.get()처럼 함수로 호출하면
    //    에러가 발생한다.

    // 4. ES5의 Descriptor를 참조

}

{
    "use strict"
    log('------------ ES6 getter 형태 ---------------');

    const book = {
        point: 100,
        // get을 그냥 프로퍼티 이름처럼 사용해버리네
        get getPoint() {
            return this.point;
        }
    }

    log(book.getPoint);
    // :: 100

    log(book.point);
    // :: 100

    debugger;

    // 1. get getPoint(){}처럼 getPoint() 앞에
    //    get을 작성하면 getter로 선언된다

    // 2. getPoint() 함수가 자동으로 호출된다

    /**
     *      - 위의 형태가 ES6의 getter를 선언하는 방식
     *      --> book.getPoint를 하게되면 getPoint가 함수로 호출된다.
     *
     *      - ES6는 ES5처럼 프로퍼티의 속성구조가 아니기 때문에
     *      --> ES5는 오브젝트의 프로퍼티 단위로 설정한다(defineProperty안에...)
     *      --> 따라서 프로퍼티에 종속적이다.
     *      --> (그런 측면에서 보면 제약이 있고 확장성이 약하다)
     *
     *      - 다수의 getter를 사용할 수 있다.
     */
}

{
    "use strict"
    log('------------ 다수의 getter 사용가능 ---------------');

    const book = {
        get getPoint() {
            return "포인트";
        },
        get getTitle() {
            return "제목";
        }
    };

    log(book.getPoint);
    // :: 포인트
    log(book.getTitle);
    // :: 제목
    debugger;

    // 1. 위와같이 오브젝트에 다수의 getter를 선언할 수 있다.
}
/**
 *           ===== setter =====
 *
 *      - 프로퍼티에 값을 할당하면
 *      --> setter로 선언된 함수 자동 호출
 *      --> 값을 설정하는 시멘틱을 갖고 있으므로
 *          setter 함수에서 값을 설정해야 한다.
 *
 *      - ES5 형태
 *
 *      - ES6 형태
 *
 *      - 변숫값을 함수 이름으로 사용
 *
 *      - setter 삭제
 *
 */

{
    "use strict"
    log('------------ ES5 setter 형태 ---------------');
    var book = {title: "HTML"};

    Object.defineProperty(book, "change", {
        set: function (param) {
            // 여기서 this는 호출한 obj를 참조하나봄
            this.title = param;
            debugger;
            // 이렇게되면 change를 무한으로 넘겨주게 되니깐
            // callstack error 가나는구나
            // this.change = param;
            // debugger;
        },
        get: function () {
            debugger;
            // 여기서도 this.change를 무한 호출이네
            // this.title = this.change;
            this.change = this.title;
            return '그만...';
        }
    });

    book.change = "자바스크립트";
    log(book);
    // :: {title: "자바스크립트"}
    debugger;
    log(book.change);
    debugger;

    // 1. book.change = "자바스크립트"; 를 실행하면
    //    change 프로퍼티에서
    //    set 속성의 존재 여부를 체크한다

    // 2. 있으면, set() 함수를 호출한다

    // 3. "자바스크립트"를 파라미터 값으로 넘겨준다.

    /**
     *
     *      - defineProperty로 book 오브젝트에 change 프로퍼티 추가.
     *      --> 그런데 그 속성으로 setter 정의. (앞의 getter와 같다)
     *      --> 다만 앞의 set,get
     *          (set은 값을 할당할때, get은 값을 호출할때)
     *
     *      - book.change = "자바스크립트";로 값을 할당하면 change 프로퍼티에서
     *        setter가 있는 것을 확인한다.(체크)
     *
     *      --> 있으면 setter가 호출되고 이때, 할당하는 값인 "자바스크립트"를
     *          파라미터 값으로 넘겨준다. (이것이 setter)
     */

}
{
    "use strict"
    log('------------ ES6 setter 형태 ---------------');

    // getter와 같다. 다만 함수앞에 get이아닌 set인 것.
    const book = {
        point: 100,
        set setPoint(param) {
            this.point = param;
        }
    };
    book.setPoint = 200;
    log(book.point);
    // :: 200
    debugger;

    // 1. setPoint() 앞에 set을 작성하면
    //    setter로 선언된다.

    // 2. book.setPoint = 200;
    //    setPoint에 값을 할당하면
    //    setPoint()가 자동으로 호출된다

    // 3. 파리미터 값으로 200을 넘겨준다.

    /**
     *      - book.setPoint로 200할당하면 setPoint 함수가 setter인지 체크
     *
     *      --> setter이면 200을 파라미터 값으로 넘겨준다.
     *
     */

}

{
    "use strict"
    log('------------ 변숫값을 함수 이름으로 사용 ---------------');

    const name = "setPoint";
    const book = {
        point: 100,

        // 이것도 setter와 마찬가지
        set [name](param) {
            this.point = param;
        }
    };
    // setter를 호출할때도 이와같은 형태로 호출
    book[name] = 200;
    log(book.point);
    // :: 200

    debugger;
    // 1. name 변숫값인 "setPoint"가
    //    함수 이름으로 사용된다

    // 2. getter도 같은 방법으로 사용할 수 있다.

}

{
    "use strict"
    log('------------ setter 삭제 ---------------');
    const name = "setPoint";
    const book = {
        // setter 정의
        set [name](param) {
            this.point = param;
        }
    };

    debugger;
    delete book[name];

    log(book[name]);
    // :: undefined
    debugger;

    // 1. delete 연산자로 setter를 삭제할 수 있다.

    /**
     *      - 여기서 delete로 간단하게 삭제될 수 있는 논리는
     *        자바스크립트는 기본적으로 구조가 { key : value } 이다
     *
     *      --> 프로퍼티 이다.
     *          (이름이 같으면, 또한 속성에 삭제할 수없는 권한이든
     *           그런것이 없다면 삭제를 시킬 수 있는 것이다)
     */
}


/**
 *      - set은 할당할때,
 *      - get은 호출할때!
 *
 */
