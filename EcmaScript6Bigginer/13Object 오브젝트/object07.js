/**
 * 프로그램 설명문서 주석
 * 2021.10.11 수업
 *
 *
 *           ===== 메소드 추가 =====
 *
 *      - __proto__에 function을 추가하면
 *      --> prototype에 설정되며
 *          ( prototype에 설정되는 것은 메소드로 추가하는 것과 같다. )
 *
 *      --> 메소드로 추가하는 것과 같다.
 *
 *      ----> 메소드로 추가하면 어떤 결과가 나오는가?
 *
 *            인스턴스에 property로 함수를 추가하면 추가한 인스턴스만 반영된다.
 *            ( 새로운 인스턴스를 만들면 새로운 인스턴스에는 반영되지 않는다.
 *              그러나, prototype에 메소드를 만들면 앞으로 만들 인스턴스에도
 *              반영이되고, 현재만들어져있는 인스턴스에도 반영이 된다. )
 *
 *      ----> 따라서, 함수로 추가하는것과 메소드로 추가하는것은 전혀 다르다.
 *
 *      --> __proto__에 추가한 후의 prototype 모습
 *
 *      ----> __proto__에 메소드를 추가하면 원본생성자함수의 prototype에도 추가가 된다
 *            (이렇게 만들어졌다는 것은 이미만들어진 인스턴스, 앞으로만들 인스턴스에서
 *             사용할 수 있다라는 것이다. )
 *
 *      - 추가한 메소드를 인스턴스에 공유
 *
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ __proto__에 추가한 후의 prototype 모습 ---------------');
    debugger;

    function Book(param) {
        this.point = param;
    };

    Book.prototype.getPoint = function () {
        return this.point;
    };

    const obj = new Book(100);
    debugger;

    // __proto__에 메소드를 추가한다.
    obj.__proto__.setPoint = function (param) {
        this.point = param;
    };
    /**
     *  1. obj를 펼치면 __proto__에 setPoint가 표시된다
     *
     *  2. Book.prototype을 펼치면 setPoint가 표시된다.
     *     (당연한 것, 왜냐하면, obj.__proto__.setPoint로 추가했기 때문.)
     *
     *  3. 그런데 Book.prototype을 펼치면 여기에 setPoint가 있다.
     *     ( 우리는 위에서 Book.prototype에 getPoint만 설정해뒀는데
     *     __proto__에 추가하니깐, prototype에도 setPoint가 들어왔다. )
     *
     *
     *     ========== 이것이 __proto__에 메소드를 추가하는것의 특징이다. ==========
     *     -> 아시바 이래서 자바스크립트는 상속이라는 개념보다는 연결이라는 개념을 쓰는 것인가...
     */
    debugger;

    /**
     *  @중요
     *
     *  1. 이렇게 표시가 되는 것은
     *  -  __proto__에 메소드를 추가하면, __proto__에 추가하지 않고
     *  -  prototype에 추가하기 때문이다.
     *
     *  2. __proto__에 연결되어 표시된 것은
     *  - 디버깅 툴에서 가독성을 위해
     *  - prototype에 연결된 메소드를 표시한 것이다.
     */

    debugger;

    /**
     *  이것을 공유라고한다.
     *
     *  ===== prototype sharing =====
     */
}

{
    "use strict"
    log('------------ 추가한 메소드를 인스턴스에 공유 ---------------');
    debugger;

    function Book(param) {
        this.point = param;
    };

    Book.prototype.getPoint = function () {
        return this.point;
    };
    const obj = new Book(100);

    // beforeObj 인스턴스를 생성한다
    const beforeObj = new Book(100);
    debugger;

    // __proto__에 메소드를 추가한다.
    obj.__proto__.setPoint = function (param) {
        this.point = param;
    };
    /**
     *  여기에 추가하는 순간 prototype에도 추가되므로,
     *  원래있던 인스턴스, 앞으로 생성될 인스턴스모두에 추가되는 구나.
     */

    debugger;

    const afterObj = new Book(300);

    /**
     *  1. setPoint()가 인스턴스에 할당되므로
     *  -  메소드로 호출할 수 있다.
     */

    debugger;

    beforeObj.setPoint(700);

    /**
     *  @중요
     *
     *  1. beforeObj 인스턴스는
     *  -  setPoint() 메소드를 추가하기 전에 인스턴스를 만들었지만
     *
     *  2. prototype sharing(공유)으로 인해
     *  -  추가된 메소드를 사용할 수 있다.
     *
     *  3. setPoint()가 호출되면
     *  -  Book.prototype에서 setPoint의 존재 여부를 체크하고
     *  -  있으면 __proto__가 아니라 Book.prototype의
     *  -  setPoint()를 호출하기 때문이다.
     */

    debugger;
    /**
     *  @정리
     *  -> __proto__에 function을 추가하면 prototype에 설정되고,
     *     prototype에 설정된다라는 것은, 메소드를 추가하는 것과 같다.
     *
     *  -> 메소드로 추가하괴면 이미 만들어진 인스턴스, 그리고 앞으로 만들어질 인스턴스에서도
     *     protoype에 추가된 메소드를 사용할 수가 있다.
     */
}