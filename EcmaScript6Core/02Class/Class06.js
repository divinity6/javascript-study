/**
 * 프로그람 설명문서 주석
 * 2022.02 11 수업
 *
 *
 *           ===== 상속 =====
 *
 *      - 상속(Inheritance)은 OOP 기능 중 하나이다
 *      --> 클래스에 다른 클래스를 포함시키는 형태이다
 *      --> 따라서 포함시킨 클래스의 메소드와 프로퍼티를
 *          내 것 처럼 사용할 수 있다
 *
 *      - 상속해주는 클래스, 상속받을 클래스를
 *      --> 부모 클래스, 슈퍼(super) 클래스라고 부른다
 *      --> 강좌에서는 슈퍼 클래스로 표기한다
 *      --> super 키워드로 슈퍼 클래스를 참조한다
 *
 *      - 상속받는 클래스를
 *      --> 자식 클래스, 서브(sub) 클래스라고 부른다
 *      --> 강좌에서는 서브 클래스로 표기한다
*
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
/**
 *           ===== extends 키워드 =====
 *
 *      - Syntax
 *      --> subClass extends superClass {...}
 *
 *      - extends 키워드로 상속을 구현한다
 *
 *      - 상속 구조
 *
 *      - 메소드 오버라이딩(Overriding)
 */
{
    "use strict";
    log('------------ extends 키워드로 상속 구현 ---------------');

    class Book {
        constructor(title) {
            this.title = title;
        };

        getTitle(){
            return this.title;
        }
    };

    class Point extends Book {
        setPoint(point){
            this.point = point;
        }
    };

    const obj = new Point('책');
    log(obj.getTitle());
    // :: 책
    debugger;
    // 1. class Point extends Book {...}
    //    Point 가 상속받는 서브 클래스이고
    //    Book 이 상속해주는 슈퍼 클래스이다

    // 2. 엔진이 extends 키워드를 만나면
    //    Point 클래스에서 Book 클래스를 상속받아
    //    구조적, 계층적인 형태로 만든다

    // 3. Book.prototype 에 연결된 메소드를
    //    Point.prototype 에 구조적으로 연결한다

    // 4. setPoint(point){...}
    //    setPoint() 는 Point 클래스의 메소드이다


    /**
     *  Point.constructor 에 super() 가 없으니깐 부모 constructor 를 타는구나...
     */
}
{
    "use strict";
    log('------------ 상속 구조 ---------------');
    class Book {
        constructor(title) {
            this.title = title;
        };

        getTitle(){
            return this.title;
        }
    };
    /**
     *  1. 엔진이 Book.prototype.getTitle() 형태로 만든다
     */
    debugger;
    class Point extends Book {
        setPoint(point){
            this.point = point;
        }
    };
    /**
     * 1. Book {setPoint(point){...}}
     * -  setPoint() 는 Point 클래스의 메소드이며
     * -  Point.prototype 에 연결된다
     *
     * 2. 엔진이 extends 키워드를 만나면
     * -  Point 클래스에서 Book 클래스를 상속받아
     *    서브와 슈퍼 구조를 만든다
     */
    debugger;

    /**
     *  3. Point.prototype.__proto__ 를 펼치면 getTitle() 이 있으며
     *  -  Book.prototype 에 연결된 메소드들이다
     *
     *  4. prototype.__proto__ 에
     *  -  상속해주는 클래스의 prototype 에 연결된 메소드를
     *  -  구조적, 계층적으로 만든다
     *  -  이것이 상속이다.
     */
    debugger;

    /**
     *  1. Point.__proto__ 를 펼치면
     *  -  상속받은 Book 클래스 전체가 표시된다
     */
    debugger;

    // ------------------------------------
    const obj = new Point("책");
    /**
     *  1. new Point("책")를 실행하면
     *  -  우선 Point 클래스의 constructor 를 호출한다
     *  --> sub class 의 constructor 호출!!
     *      ( constructor 를 작성하지 않아도 Point 를 타는 것은
     *        prototype 에 들어있는 constructor 를 타는 것! )
     *
     *  -  즉, Point.prototype 의 constructor 를 호출한다
     *
     *  2. 이어서 Book 클래스의 constructor 를 호출하며
     *  -  constructor 에 파라미터 값인 "책" 을 넘겨준다
     *  --> 이때 this 는 new 로 호출한 인스턴스를 참조한다
     */

    debugger;
    /**
     *  1. obj 를 펼치면 {title : "책"} 이 있으며
     *  -  이것은 인스턴스 프로퍼티이다
     *  --> 그런데 이프로퍼티를 Point.constructor 에서 설정한 것이 아니라
     *      Book.constructor 에서 설정한 것이라는 것.
     *
     *  2. 이런 방법으로 인스턴스마다
     *  -  고유의 프로퍼티 값을 가질 수 있다
     *
     *  3. 고유의 값을 갖는 것이 인스턴스 가장 큰 목적이다
     *
     *  4. 상속이 클래스의 가장 큰 목적이 아니다
     *  -  상속은 인스턴스 프로퍼티를 지원하기 위한 수단이다
     *  --> 예) 인스턴스를 100개를 맨들면 맨드는 이유는 무엇인가,
     *          100개의 메소드는 모두 동일하다.
     *          그러나 프로퍼티 값은 모두 다르다
     *
     *      --> 인스턴스마다 메소드를 모두 맨들면 동일하기때문에
     *          슈퍼클래스에 있는 메소드를 상속받는 것.
     *
     *      --> 그럼으로써 객체 지향을 구현하면서 하나의 건물로 만드는 것.
     *          건물 == obj
     */

    debugger;

    /**
     *  5. obj.__proto__ 를 펼치면 setPoint() 가 있으며
     *  -  이것은 sub class 메소드이다
     *
     *  6. obj.__proto__.__proto__ 를 펼치면 getTitle() 이 있으며
     *  -  이것은 super class 메소드이다
     *
     *  ----> obj 라는 건물을 사용하는 주체는 1층의 sub class 가된다
     *        2층의 super class 는 아닌 것이다.
     */

    debugger;

    /**
     *  7. 이처럼 __proto__ 를 사용하여
     *  -  super class 의 prototype 에 연결된 메소드를
     *  -  구조적, 계층적으로 연결한다
     *  -  이것이 상속 구조이다
     *
     *  8. 인스턴스의 메소드를 호출하면
     *  -  __proto__ 구조를 따라 아래로 내려 가면서
     *  -  메소드를 식별한다
     *  -  식별하는 위치에 메소드가 있으면 실행한다
     */
    debugger;
}
{
    "use strict";
    log('------------ 메소드 오버라이딩 ---------------');
    class Book {
        constructor(title) {
            this.title = title;
        };

        getTitle(){
            return this.title;
        }
    };
    /**
     *  1. Book 클래스에 getTitle() 을 작성했다
     */
    debugger;
    class Point extends Book {
        getTitle(){
            return '서브 클래스';
        }
    };
    /**
     *  1. 오버라이드 설명을 위해
     *  -  Point 클래스에도 getTitle() 을 작성했다
     *
     *  2. getTitle() 이 양쪽 클래스에 있다
     */

    debugger;

    const obj = new Point('책');
    /**
     *  1. obj.__proto__ 를 펼치면 getTitle()이 있으며
     *  -  이것은 sub class 의 메소드이다
     *
     *  2. obj.__proto__.__proto__ 를 펼치면 getTitle() 이 있으며
     *  -  이것은 super class 의 메소드이다.
     */
    debugger;

    log(obj.getTitle());
    // :: '서브 클래스'
    /**
     *  1. obj.getTitle() 을 호출하면
     *  -  먼저 sub class 에서 찾는다
     *  -  즉, obj.__proto__ 에서 찾는다
     *
     *  2. 없으면 super class 에서 찾는다
     *  -  즉, obj.__proto__.__proto__ 에서 찾는다
     *
     *  3. obj.__proto__ 에 즉, sub class 에
     *  -  getTitle() 이 있으므로 이것을 호출한다
     *
     *  4. 이것을 메소드 오버라이딩이라고 한다
     */
}