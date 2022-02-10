/**
 * 프로그람 설명문서 주석
 * 2022.02 08 수업
 *
 *
 *           ===== Class 선언문 =====
 *
 *      - Syntax
 *      --> class Name { body }
 *
 *      - 클래스 작성 방법
 *      --> class 키워드에 이어 클래스 이름 작성한다
 *      --> 이름의 첫 문자는 대문자를 사용한다
 *          개발자들 사이의 관례이다
 *
 *      --> 블록{}을 작성하고
 *          블록 안에 메소드를 작성한다
 *
 *      - 대문자 Class 는 개념적인 클래스를 뜻하고
 *      --> 소문자 class 는 키워드이다.
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ Class 선언문 ---------------');

    /**
     *  - class 는 생성자 함수라고 부를 수 없고
     *    클래스 이름이라고 불러야 한다
     *    ( 개념적으로 조금 차이가 있다 )
     */
    class Point {
        getPoint(){
            return 100;
        }
    };

    const obj = new Point();

    log(obj.getPoint());
    // :: 100
    debugger;

    // 1. 엔진이 class 키워드를 만나면
    //    클래스 오브젝트를 생성한다

    // 2. const obj = new Point();
    //    new 연산자를 사용하여 인스턴스를 생성한다

    // 3. new 연산자를 사용하지 않고
    //    Point() 를 호출하면 에러가 발생한다
    //    --> 비록 Object 이지만 에러

    // 4. obj.getPoint()
    //    인스턴스의 getPoint() 메소드를 호출한다.
}
/**
 *           ===== Class 표현식 =====
 *
 *      - Syntax
 *      --> const/let Name = class {body}
 *
 *      - 클래스 작성 방법
 *      --> 변수 이름 Name 이 클래스 이름이 된다
 *      --> 변수에 Class 오브젝트를 할당하는 형태
 *      --> 다른 것은 클래스 선언문과 같다
 */
{
    "use strict";
    log('------------ Class 표현식 ---------------');
    const Point = class {
        getPoint(){
            return 100;
        }
    };

    const obj = new Point();
    log(obj.getPoint());
    // :: 100
    debugger;

    // 1. 엔진이 class 키워드를 만나면
    //    클래스 오브젝트를 생성하여
    //    Point 변수에 할당한다

    // 2. Point 가 클래스 이름이 된다.
}
/**
 *  1. Point 를 펼치면
 *  -  프로퍼티, prototype, __proto__ 가 있다
 *
 *  2. prototype 을 펼치면
 *  -  constructor 가 있으며, getPoint() 가 있다
 *
 *  3. constructor 는 Point 클래스 전체를 참조한다
 *
 *  4. 클래스에 메소드를 작성하면 prototype 에 연결된다
 *  -  Point.prototype.getPoint = function(){} 형태로
 *     작성한 것과 같다
 *
 *  5. __proto__ 에서 빌트인 Function 오브젝트의 prototype 에
 *     연결된 메소드를 참조한다.
 *
 *                ===== 인스턴스를 맨듬 =====
 *
 *  - 인스턴스를 맨들면 class 의 constructor 를 호출한다
 *    ( 작성하지 않으면 기본값이 constructor 를 호출 )
 *
 *  1. Point 클래스로 인스턴스를 생성한다
 *
 *  2. obj 를 펼치면 __proto__ 가 있으며
 *  -  constructor 와 getPoint() 가 있다
 *
 *  3. Point.prototype 에 연결된 메소드로
 *  -  인스턴스를 생성하고
 *  -  __proto__ 에서 참조할 수 있도록 만든다
 *
 *                 ===== 메소드 호출 =====
 *
 *  1. obj 인스턴스의 getPoint() 메소드를 호출한다
 *  -  obj.__proto__ 에 연결된 getPoint() 가 호출된다
 *
 */

/**
 *
 *           ===== const, let 사용 기준 =====
 *
 *  - 강좌의 const, let 사용 기준
 *  --> 값이 대체되지 않으면 const 를 사용하고
 *  --> 값이 대체되면 let 을 사용한다
 *
 *  - 오브젝트의 프로퍼티가 변경되더라도
 *  --> 오브젝트 자체가 대체되지 않으면 const
 *  --> Class, Array, 인스턴스
 *
 */
/**
 *           ===== 함수, 메소드 기준 =====
 *
 *  - 강좌의 함수, 메소드 사용 기준
 *
 *  - 함수
 *  --> 인스턴스를 생성하지 않고 직접 호출
 *
 *  - 메소드
 *  --> 인스턴스를 사용하여 호출하는 함수로
 *      prototype 에 연결되어 있다
 *  --> 클래스에 작성한 함수
 *
 *  --> prototype 에 연결된 function
 *
 *  --> 빌트인 오브젝트의 prototype 에 연결된 함수
 */
{
    "use strict";
    log('------------ 함수 ---------------');
    /**
     * - isArray 는 prototype 에 연결되어 있지 않기 때문에 함수이다
     */
    log(Array.isArray([]));
    // :: true

    const point = {
        getPoint(){
            return 100;
        }
    };
    /**
     *  - getPoint 또한 point 의 prototype 에 연결되어 있지 않기 때문에
     *    함수다
     */
    log(point.getPoint());
    // :: 100
}
{
    "use strict";
    log('------------ 클래스에 작성한 함수 ---------------');
    class Point {
        getPoint(){
            return 100;
        }
    };

    const obj = new Point();
    /**
     *  - getPoint 는 Point.prototype 에 연결되어
     *    있으므로 메소드이다.
     */
    log(obj.getPoint());
    // :: 100

    // 1. getPoint 는 직접 호출할 수 없고
    //    인스턴스를 사용하여 호출해야 한다
}
{
    "use strict";
    log('------------ prototype 에 연결된 function ---------------');
    const Point = function(){};
    Point.prototype.getPoint = function(){
        return 100;
    };

    const obj = new Point();
    /**
     *  - 인스턴스를 생성하여 호출했기 때문에 메소드이다
     */
    log(obj.getPoint());
    // :: 100

    // 1. Point.prototype.getPoint
    //    prototype 에 연결된 함수는 메소드이다

    // 2. getPoint 를 직접 호출할 수도 있지만
    //    일반적으로 인스턴스를 생성하여 호출한다.

}
{
    "use strict";
    log('------------ 빌트인 오브젝트 ---------------');
    const list = [];
    /**
     *  - Array.prototype.push 이므로 메소드이다
     */
    list.push('책');
    log(list);
    // :: ['책']
    // 1. push() 메소드는 Array.prototype 에 연결되어 있다.
}