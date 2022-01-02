/**
 * 프로그램 설명문서 주석
 * 2021.10.04 수업
 *
 *      - 지금부터의 4개의 강좌가 내용이연결된 것( 단계별로 다룬다. )
 *
 *           ===== 메소드 호출 방법 =====
 *
 *      - prototype과 __proto__에 연결된
 *        메소드를 호출하는 방법이 다르다.
 *        (당연히 구조가 다르기 때문에 당연한 것)
 *
 *      - prototype에 연결된 메소드 호출
 *      --> Array.prototype.slice() 처럼
 *          prototype을 작성하여 호출가능
 *
 *      - __proto__에 연결된 메소드 호출
 *      --> 인스턴스를 생성하여 호출
 *      --> new 연산자로 생성한 인스턴스 구조
 *
 *
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ prototype에 연결된 메소드 호출 ---------------');

    /**
     * 생성자 함수 생성
     */
    function Book() {
        this.point = 100;
        // let point = this.point;
    };

    Book.prototype.getPoint = function () {
        log(Object.is(this, Book.prototype));
        // :: true
        // :: false
        debugger;
        return this.point;
    };

    log(Book.prototype.getPoint());
    // :: undefined

    log(Book.prototype.getPoint.call(Book));
    // :: undefined
    debugger;

    // 1. Book.prototype.getPoint()
    //    prototype을 작성하여 호출하면
    //    getPoint()에서 this가 Book.prototype을 참조

    // 2. Book.prototype.getPoint.call(Book)
    //    this가 Book을 참조한다

    // 3. this.point를 참조하려면
    //    인스턴스를 생성하고
    //    인스턴스의 메소드를 호출해야 한다.
}

{
    "use strict"
    log('------------  __proto__에 연결된 메소드 호출 ---------------');

    function Book() {
        this.point = 100;
    };

    Book.prototype.getPoint = function () {
        return this.point;
    };

    const obj = new Book();

    /**
     *      1. 오른쪽의 obj를 펼치면
     *      - point: 100이 있으며 [[인스턴스 프로퍼티]]다.
     *      - 생성자 함수에서 this.point = 100으로 설정한 것이다
     *
     *      2. __proto__를 펼치면
     *      - prototype에 연결된 메소드가 표시된다
     *      - getPoint는 Book.prototype.getPoint를 참조한다.
     *      - __proto__에 복사하지 않는다.
     */

    debugger;

    log(obj.getPoint());

    /**
     *      1. 생성한 인스턴스 이름을 사용하여
     *      -  getPoint()메소드를 호출하면
     *      -  호출된 메소드에서 this로 인스턴스를 참조할 수 있다.
     */
    debugger;

    /**
     *      메소드를 호출하는 방법은 
     *      - prototype을 작성하여 호출하는 방법,
     *      - instance를 생성하여 호출하는 방법,
     *      
     *      --> 2가지 방법이 있다
     *          (일반적으로는 new 연산자를 사용하여 인스턴스를 만들어서 호출)
     */
}

























