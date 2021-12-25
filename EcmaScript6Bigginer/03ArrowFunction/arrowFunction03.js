/**
 * 프로그램 설명문서 주석
 * 2021.08 03 수업
 *
 *
 *           ===== 화살표 함수와 this =====
 *
 *      - strict 모드에서 함수를 호출할 때
 *      --> 함수 앞에 오브젝트 작성은 필수
 *      --> 화살표 함수로 해결
 *
 *      - 화살표 함수에서
 *      --> this가 글로벌 오브젝트 참조
 *      --> this 값이 undefined
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

log('------------오브젝트 작성은 필수---------------');

function book() {
    "use strict"
    debugger;

    function getPoint() {
        debugger;
        log(this);
    };
    // window.getPoint();
    getPoint();
    // :: undefined
};
window.book();

// 1. strict 모드에서는 window.book() 처럼
//    호출하는 함수 앞에 오브젝트를 작성해야 한다
//    이렇게 하지 않으면 book() 함수 안에서
//    this 값이 undefined 이다.

// 2. 또한, getPoint()처럼
//    window를 앞에 작성하지 않으면
//    getPoint() 안에서 this 값이 undefined 이다.

// 3. 이를 피하기 위해 window.getPoint()로 호출하면
//    window 오브젝트에
//    getPoint()가 없으므로 에러가 난다

// 4. strict 모드의 함수에서는
//    this를 참조하기 위해서는
//    this를 별도로 저장한 후
//    사용해야 하는데 번거롭다.

/**
 *  그런데 화살표 함수로 이것을 해결할 수 있다
 *              (나이스 인것)
 * */

log('------------화살표 함수 사용---------------');
"use strict"
var point = 100;

function sports() {
    "use strict"
    debugger;
    const getPoint = () => {
        debugger;
        log(this.point);
        // :: 100
    }
    getPoint();
};
window.sports();

// 1. 화살표 함수로 작성하면
//    getPoint()로 호출할 수 있다.

// 2. 또한, getPoint() 화살표 함수 안에서
//    this가 undefined 가 아니라
//    글로벌(window) 오브젝트를 참조한다

// 3. var point = 100을 작성했으므로
//    100이 출력된다.

/**
 *  이와같이 화살표함수는 유용하게 사용할 수 있다.
 *
 *  !단, 글로벌 변수를 사용한다는 전제가 있는 것이다.
 *  - 만약 point가 let이나 const면 차이가 있다.
 *
 *
 *  - 화살표 함수 안에서서 this가 글로벌오브젝트를 참조한다.
 *  --> 그런데 this값이 undefined이다
 */

"use strict"
debugger;

const book2 = {
    point: 500,
    getPoint: function () {
        "use strict"
        log(this.point);
        // :: 500
    }
};
book2.getPoint();
/**
 *  1. 일반 함수인 book2.getPoint()를 호출하면
 *  -  함수 안에서 this가 book 오브젝트를 참조한다.
 *  -  따라서 console에 500이 출력된다.
 *
 */
debugger;

var point2 = 100;
const sports2 = {
    getPoint: () => {
        // this: undefined
        debugger;
        log("this.point2", this.point2);
    }
};
sports2.getPoint();
/**
 *  1. 화살표 함수인 sports2.getPoint()를 호출하면
 *  -  오른쪽 local에 this: undefined가 표시된다.
 *
 *  2. 이것은, 화살표 함수는 함수에
 *  -  this를 갖고 있지 않기 때문이다.
 *  --> 즉, 화살표 함수에는 this가 없다.
 *
 *  3. 이때, [[this가 window 오브젝트를 참조]]한다.
 *  - 항상 window오브젝트를 참조하는 것은 아니고, 상황에 따라 다르긴하지만
 *    대부분, window 오브젝트를 참조한다.
 *
 *    ===== 이것이 화살표 함수의 또하나의 특징이다 =====
 *
 */
debugger;

/**
 *  1. console.log("this.point" , this.point2);
 *  -  var point2 = 100;에서 var 키워드를 사용했으므로
 *  - point2 변수가 window 오브젝트에 설정된다
 *  - 따라서 console에 100이 출력된다.
 *
 *  2. 지금부터 this가 window 오브젝트를 참조하는
 *  -  논리를 살펴보겠다.
 */

debugger;

/**
 *           ===== this가 정적 스코프 참조 =====
 *
 *      - 화살표 함수에서 정적 스코프의 this를 사용
 *
 *      - 정적(렉시컬 lexical)스코프란
 *      --> 엔진이 해석할때, 화살표 함수를 만나면
 *      --> function 오브젝트를 생성하고
 *      --> 화살표 함수가 속한 스코프를 생성한 오브젝트에 바인딩
 *      ----> 아래에서 show 함수가 속한 스코프는 window 죽, 완전 바깥이다
 *
 *      - 오브젝트에 바인딩된 스코프의 this를
 *      --> ( 이때의 this는 화살표 함수가 속한 오브젝트의 this 바인딩컴포넌트에 있는 this를 뜻한다. )
 *      --> 화살표 함수에서 this로 사용
 *      ----> 화살표 함수는 this를 가지고 있지 않으니깐 자신이 속한 스코프의 this를 사용하겠다라는 것.
 *            ( 화살표함수에는 this 바인딩 컴포넌트가 없는 것이아니라 this 바인딩컴포넌트에
 *              스코프의 오브젝트 this 바인딩컴포넌트에 있는 this를 바인딩한다. )
 */

log('------------스코프를 this로 사용---------------');
var title = "책";

const book3 = {
    // show의 scope는 window오브젝트이기 때문에
    // window 참조
    show: () => log(this.title),
    // :: 책
};
book3.show();


const windowTest = function () {
    debugger;
    var inner = {
        outerTest: function () {
            debugger;
            var book = {
                title: '책2',
                // 여기에 속한 this는 outerTest
                // 왜냐하면 스코프에 inner가 들어가 있기 때문.
                innerTest: () => log(this),
            }
            // innerTest의 scope는 outerTest!!
            book.innerTest();
        }
    }
    inner.outerTest();
}
windowTest();
/**
 *  1. show() 화살표 함수에서
 *     this가 window 오브젝트를 참조하는 것은
 *
 *  2. 함수 밖 스코프의 변수를 사용하듯이
 *     show()의 스코프인 book3 오브젝트에
 *     설정된 스코프의 this를
 *     화살표 함수에서 this로 사용하기 때문이다.
 *
 *  3. book3 오브젝트가
 *     글로벌 오브젝트에 설정되므로
 *     this가 window 오브젝트를 참조하게 된다.
 */

debugger;

/**
 * 함수는 엔진이 function 키워드를 만나 Function Object를 생성할 때 [[Scope]]를 설정하며 바뀌지 않는다.
 * 물론, 화살표 함수도 같다.한편, 화살표 함수에는 prototype이 없으며,
 * 이것은 new 연산자로 인스턴스를 생성해도 의미가 없다는 뜻이다.
 *
 * this로 인스턴스(오브젝트)를 참조하려는 것인데,
 * 인스턴스를 생성하지 않으니 화살표 함수에서 this 사용은 궁극적인 목적과 차이가 있다.
 * 화살표 함수에서 this는 자신이 속한 스코프를 참조한다.
 * 그런데, 자신이 속한 스코프 기준이 환경에 따라 달라지는 경우가 있다.
 * 따라서 화살표 함수에서 this를 사용하려면, this가 참조하는 스코프를 파라미터로 넘겨주는 것이 확실하다.
 *
 */