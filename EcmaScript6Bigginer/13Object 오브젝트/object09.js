/**
 * 프로그램 설명문서 주석
 * 2021.10.13 수업
 *
 *      -> prototype 사용
 *
 *           ===== setPrototypeOf() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                    - 데이터(값)
 *
 *      - 형태                    - Object.setPrototypeOf()
 *      - 파라미터                 - 오브젝트 또는 인스턴스
 *                               - 오브젝트의 prototype 또는 null
 *      - 반환                    - 첫 번째 파라미터
 *      -----------------------------------------------------------
 *
 *      - 첫 번째 파라미터에 prototype을 작성한 케이스
 *
 *      - 첫 번째 파라미터의 prototype.__proto__에
 *      --> 두 번째 파라미터의 prototype에 연결된 프로퍼티를 설정
 *          ( 여기서 설정이란 대체를 시키는 것이 아니라 __proto__를 만들어서 여기에 설정하는 것. )
 *
 *      - prototype 연결 후의 인스턴스 구조
 *
 *      ===== 그러나 이것은 상속이 아니다 =====
 *
 *      - 상속을 위한 목적이라면
 *      --> super등의 상속 처리 키워드를 제공하는
 *      --> Class를 사용하는 것이 좋다.
 *
 *      ==================================================
 *
 *      - 왜냐하면 인스턴스를 상속시켜서 만든다는 이야기는,
 *        생성자함수를 실행한다는 이야기다.
 *
 *      - 생성자 함수에서는 일반적으로 this로 참조할 수 있는,
 *        프로퍼티들을 작성하게 된다.
 *        ( 이것이 인스턴스의 특징 )
 *
 *      - 이것과 프로토 타입의 확장과는 개념이 다름
 *        ( 생성자 함수의 처리 기능이 없다. )
 *
 *       @중요
 *
 *      ------------ 따라서, 생성자 함수 처리기능이 필요없으면
 *                   setPrototypeOf()로 prototype을 확장
 *                   시키는 것               ------------
 *
 *     ==================================================
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;

{
    "use strict"
    log('------------ prototype 연결 후의 인스턴스 구조 ---------------');
    debugger;

    // 함수 블록에 코드를 작성하지 않았다
    function Book() {
    };

    Book.prototype.getBook = function () {
    };

    function Point() {
    };

    Point.prototype.getPoint = function () {
    };

    debugger;

    Object.setPrototypeOf(Point.prototype, Book.prototype);

    /**
     *      1. Point.prototype.__proto__에
     *      -  Book.prototype에 연결된 프로퍼티를 설정한다
     *
     *      2. Point.prototype에 설정하므로 이것을 펼치면
     *      -  Book.prototype.getBook()이 있어야 하는데 없다.
     *
     *      3. 또한 Point.prototype에 연결한 메소드가
     *      -  지워지지 않고 유지된다
     */
    debugger;

    /**
     *
     *      4. 한편, Point.prototype.__proto__를 펼치면
     *      -  getBook()이 표시된다
     *
     *      5. setPrototypeOf() 함수 이름의 뉘앙스가
     *      -  prototype에 설정하는 것처럼 보이지만
     *      -  prototype에 __proto__를 만들고 여기에 설정한다.
     */
    /**
     *      6. prototype에 설정하면 getPoint()가 지워지므로
     *      -  Point에 작성된 메소드를 사용할 수 없게 된다
     *
     *      7. 이를 피하기 위해 __proto__를 만들어 설정한 것.
     *
     *      8. __proto__로 구조적으로 계층을 만들어 설정하므로
     *      -  같은 이름의 메소드가 있더라도 대체되지 않는다
     *
     *      9. 식별자 해결을 할 때, __proto__ 순서로 검색하므로
     *      -  같은 이름의 메소드가 있을때, 앞의 메소드가 호출된다.
     */

    const obj = new Point(300);
    /**
     *      1. new Point(300)를 실행하면
     *      -  Point.prototype에 연결된 메소드로 인스턴스를 생성한다
     *
     *      2. 오른쪽의 obj를 펼치면
     *      -  obj.__proto__.__proto__ 구조다
     *      -  이것은 Point.prototype 구조와 같다
     *
     *      3. 위의 __proto__에 Point.prototype에 연결된 메소드가 설정되고,
     *      -  아래의 __proto__에 Book.prototype에 연결된 메소드가 설정된다.
     *
     *      ========== 이런식으로 prototype을 확장시킬 수 있다 ==========
     *
     */

    debugger;
    obj.getBook();

    /**
     *  오 근데 obj.__proto__의 constructor는 Book이구만,
     *  ( Point.prototype.__proto__도 마찬가지... )
     */

    debugger;

}