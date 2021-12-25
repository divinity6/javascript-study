/**
 * 프로그램 설명문서 주석
 * 2021.08 04 수업
 *
 *
 *           ===== 화살표 함수와 인스턴스, 화살표 함수 특징 =====
 *
 *      - 인스턴스에서
 *      --> 화살표 함수의 작성 위치에 따라
 *      --> this가 참조하는 오브젝트가 다르다.
 *          (그냥 무조건 스코프의 오브젝트의 this를 사용한다)
 *
 *      - prototype에 메소드로 작성
 *      - prototype의 메소드 안에 작성
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const log = window.console.log;

log('------------메소드로 작성---------------');

var point = 200;
const Point = function () {
    this.point = 100;
};

Point.prototype.getPoint = () => {
    debugger;
    console.log(this.point);
    // :: 200
};

new Point().getPoint();

// 1. prototype에 화살표 함수를 연결하면
//    함수 안에서 this가
//    글로벌 오브젝트를 참조한다.

// 2. log(this.point)에서
//    글로벌 오브젝트의 point 값인 200을 출력.


log('------------메소드안에 작성---------------');

const Point2 = function () {
    this.point = 100;
};

Point2.prototype.getPoint = function () {
    debugger;
    const add = () => this.point + 20;
    log(add());
    // ::  120
    debugger;
    [1, 2].forEach((value) => {
        debugger;
        log(this.point + value);
        // :: 101 , 102
    })
};
new Point2().getPoint();

// 1. prototype에 일반 함수를 연결하고
//    함수 안에 화살표 함수를 작성한 형태이다

// 2. getPoint()가 일반 함수이므로
//    this가 생성한 인스턴스를 참조한다.

// 3. 또한, 화살표 함수에서도
//    this가 생성한 인스턴스를 참조한다.
//    (화살표함수의 스코프인 오브젝트의 this바인딩 컴포넌트에 바인딩된 this 사용)

// 4. 화살표 함수의 스코프인 getPoint()의
//    this를 사용하기 때문이다.

// === 작성된 위치에 따라 this가 다르다!! ===

/**
 *           ===== 화살표 함수 특징 =====
 *
 *      - function 대신 =>를 사용, 함수 표현식 형태
 *      --> prototype이 없으므로 함수가 가볍다
 *      --> constructor가 없으므로
 *          new 연산자로 인스턴스를 생성할 수 없다.
 *
 *      - 화살표 함수에 this가 없다
 *      --> 화살표 함수로 Function 오브젝트를 생성할 때
 *      --> 정적으로 화살표 함수가 속한 스코프의 this를
 *          화살표 함수에 바인딩한다.
 *
 *      --> 바인딩된 this 참조가 바뀌지 않으며
 *          (왜냐하면 이것은 정적이기 때문이다)
 *          화살표 함수에서 this로 사용한다.
 *
 *      --> 일반 함수는 call()등으로 참조하는 오브젝트를 바꿀 수 있다.
 *      ----> 그러나 화살표함수는 한번 만드는시점(function 키워드를 만나는 시점)에
 *            정리가 되면, 그다음에는 바꿀 수가 없다.
 *
 *      - 메소드보다 단독으로 함수로 사용하는 것이 효율성이 높다.
 *        ( 그럴 수밖에 없지 this가 인스턴스를 참조안하고 스코프 오브젝트의 this를참조하니께,
 *         또한, prototype도 없으니깐... )
 *
 *
 *      ================== 가볍게 사용하기 위해 만든 함수 ==================
 *
 *      - 인스턴스를 만들지 않고 함수로 사용할 때는 =>이 더좋다. 그런데, 거기에서
 *        this를 사용할때는 스코프 오브젝트에 바인딩된 this를 사용하므로,
 *        그런 점도 고려해야 한다.
 *
 *      - 화살표함수의 this는 한번 결정되면 바꿀 수 없다.
 */











