/**
 * 프로그램 설명문서 주석
 * 2021.06 11 수업
 *
 *
 *           ===== this로 인스턴스 참조 =====
 *
 *      - this로 메소드를 호출한 인스턴스 참조
 *      ----> var obj = new Book();
 *            ( new Book으로 obj를 만들고 인스턴스에 할당 )
 *      ----> obj.get() 형태에서 this로 obj 참조
 *            ( get() 메소드 안에서 this로 obj를 참조한다
 *              즉, get앞의 obj참조 )
 *
 *      - 인스턴스안에서 메소드 호출 방법
 *      ----> prototype에 연결된 프로퍼티가
 *            __proto__에 설정된다
 *      ----> 그러면 인스턴스의 프로퍼티가 된다
 *            (인스턴스 프로퍼티란)
 *      ----> this.prototype.setPoint() 형태가아닌
 *            this.setPoint()형태로 호출
 *
 *      ----> 인스턴스 프로퍼티란 this.prototype.setPoint()형태가
 *            아닌 this.setPoint()형태로 호출하는 것을 뜻함
 *            (인스턴스 프로퍼티가되면 이와같은 형태로 호출할 수 있다)
 *
 *      ----> 이때, this는 obj를 참조하게 된다.
 *
 */

console.log("=====================================");

"use strict"
// console.log 사용
var log = function (value) {
    console.log('--- ' + value + ' ---');
};

/**
 *
 *             ===== this와 prototype =====
 *
 *      - console.log("1 :", this.point);
 *      --> 생성자 함수에서 this는 생성하는 인스턴스 참조
 *      --> 생성하는 인스턴스에 point 프로퍼티가 없더라도
 *          에러가 나지 않고 undefined를 반환
 *
 *      - obj.getPoint();
 *      --> this가 메소드를 호출한 인스턴스 참조
 *      --> 즉, 메소드 앞에 작성한 인스턴스 참조
 *
 *      - this.setPoint();
 *      --> this가 인스턴스 참조하며
 *      --> 인스턴스에 있는 setPoint() 호출
 *
 *      - this.point = 100;
 *      --> this가 인스턴스를 참조
 *      --> 인스턴스의 point 프로퍼티에 100 할당
 *
 *      ----------------------------------------------------------------
 *
 *      1.new 연산자로 Book()생성자 함수를 호출하게 되면
 *        인스턴스를 만들고 생성자 함수로 이동.
 *
 *      - 이때 this는 인스턴스를 참조하게 된다
 *        ( 그런데 이때, point프로퍼티가 없더라도, 에러가나지않고
 *          undefined를 반환한다. )
 *      --> 이것이 변수와 인스턴스 프로퍼티의 차이이다.
 *          (프로퍼티는 undefined, 변수는 point변수가 없으면 에러가 난다.)
 *      --> this는 자신을 호출한 인스턴스를 this로 참조하게 된다.
 *          따라서, this가 인스턴스를 참조하기 때문에, 인스턴스 안에는 setPoint가 있음
 *          그래서, setPoint 메소드 호출 가능
 *      --> 바로 이것이 단일 함수를 사용하는 것과, 인스턴스를 사용하는 것의 차이이다.
 *
 *      - 인스턴스 안에서는 prototype에 연결되어 있는 것들은 모두 하나의 프로퍼티 개념이다.
 *          따라서 this로 호출할 수 있는 것이다.
 *      --> this는 obj의 인스턴스를 참조하기때문에 point값을 공유할 수 있는 것이다.
 *
 *      - 인스턴스를 만드는 또다른 목적은 인스턴스마다의 고유한 값을 유지하기 위한 면도 있지만,
 *        이와같이 인스턴스라는 하나의 묶음 안에서 처리를 하겠다라는 것이다.
 *        (하나의 덩어리, 이안에서는 this로 악세스)
 *
 *      --> 하나의 메소드에서 설정한 값을 또다른 메소드에서 공유해서 사용가능.(this로)
 *
 *      ---- 인스턴스의 특징 ----
 */

function Book() {
    console.log('1:', this.point);
};

Book.prototype.getPoint = function () {
    this.setPoint();
    console.log("2:", this.point)
};
Book.prototype.setPoint = function () {
    this.point = 100;
};
var obj = new Book();
obj.getPoint();
// :: 1: undefined
// :: 2: 100


debugger;

/**
 *             ===== prototype 메소드 직접 호출 =====
 *
 *      - Book2.prototype.getPoint();
 *      --> 인스턴스를 생성하지 않고 직접 메소드 호출
 *
 *      - Book2.prototype을
 *      --> getPoint()에서 this로 참조
 *
 *      - obj 인스턴스에는 point가 있지만
 *      --> Book2.prototype에 point가 없으므로
 *          undefined를 반환
 *      --> 인스턴스를 생성하여 메소드를 호출하는 것과
 *          직접 prototype을 작성하여 호출하는 것의 차이
 *
 *      --------------------------------------------------
 *
 *      - obj2.getPoint()형태로 호출할 수도 있지만
 *        Book2.prototype.getPoint()형태로도 호출가능.
 *        (그러나 차이점이 있음)
 *
 *      --> obj2.getPoint()로 호출하게 되면
 *          this가 obj2를 참조하지만
 *      --> Book2.prototype.getPoint()형태로 호출하게되면
 *          prototype을 this가 참조하게 된다.
 *          (prototype도 오브젝트다)
 *
 *      - 물론 이것도 point가 프로퍼티 이기때문에 undefined를 반환한다.
 *
 *      *** 또한 곧바로 Book2.prototype.getPoint()식으로 사용하지 않는 것은 아니다 ***
 *          그러나 이때는 call 메소드나 ,apply ,bind메소드를 사용해서
 *          [[ getPoint에서 this가 지정한 오브젝트를 참좀할 수 있도록 만든다 ]]
 */

log('this와 prototype');

function Book2(point) {
    this.point = point;
};
Book2.prototype.getPoint = function () {
    return this.point;
};
var obj2 = new Book2(100);
console.log(obj2.getPoint());
// :: 100
console.log(Book2.prototype.getPoint());
// :: undefined













