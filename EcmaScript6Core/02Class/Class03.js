/**
 * 프로그람 설명문서 주석
 * 2022.02 09 수업
 *
 *
 *           ===== Class 작성 기준 =====
 *
 *      - 클래스는 strict 모드에서 실행되므로
 *      --> 이에 맞추어 코드를 작성해야 한다.
 *      ----> "use strict" 를 작성하지 않아도
 *            기본적으로 strict 모드에서 실행된다는 것.
 *
 *      - 클래스에 메소드 작성 방법
 *      --> function 키워드를 작성하지 않는다
 *      --> 메소드와 메소드 사이에 콤마(,)를 작성하지 않는다
 *      --> 세미콜론(;) 작성은 선택이다.
 *
 *      - 클래스의 typeof 는 function 이다
 *      --> Class 타입이 별도로 있지 않다.
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ 메소드 작성 방법 ---------------');

    class Point {
        setPoint(point){
            this.point = point;
        }

        getPoint(){
            return this.point;
        }
    };

    log(typeof Point);
    // :: function
    debugger;
}

/**
 *           ===== Computed name =====
 *
 *      - 메소드 이름을 조합하여 사용
 *      --> 대괄호[] 안에 조합할 이름을 작성
 *      --> 조합한 결과가 메소드 이름이 된다.
 *
 */
{
    "use strict";
    log('------------ 메소드 이름 조합 ---------------');
    const name = "Point";
    class Point {
        static ["get" + name](add){
            return add ? 100 : 50;
        }
    };

    log(Point["get" + name](true));
    // :: 100
    debugger;

    // 1. static ["get" + name](add){...}
    //    "get" 과 name 변숫값인 "Point"를 연결하여
    //    메소드 이름으로 사용한다

    // 2. 엔진이 class 키워드를 만나면
    //    클래스를 오브젝트로 만들게 되며
    //    []의 조합 결과를 메소드 이름으로 사용한다

    // 3. 따라서 class 키워드 앞에
    //    name 변숫값을 정의해야 한다

    // 4. Point["get" + name](true)
    //    메소드 이름을 조합하여 호출할 수 있다

    /**
     *  - 반드시 class 앞에 name 변숫값을 정의해야 함!
     *  --> 왜냐하면 엔진이 class 키워드를 만나면 []의 조합결과를
     *      메소드이름으로 사용하기 때문.
     *
     *
     *  - 클래스의 메소드는 반드시 new 연산자를 사용해 인스턴스를
     *    만들어서 인스턴스[ methods 이름 ] 형태로 사용해야 한다
     *
     *  - 단, 예외가 있다.
     *  --> methods 앞에 static 키워드를 작성하면,
     *      정적 메소드라고 부르고 class 이름에 메소드
     *      이름으로 호출할 수 있다.
     *
     *  --> 일반적인 메소드는 인스턴스를 만들어야 하지만
     *      static 메소드는 class[ methods 이름 ] 형태로 작성한다.
     *
     *  ----> 그러면 static 메소드가 호출된다.
     */
}
/**
 *                ===== Class 작성 기준 =====
 *
 *      - 메소드를 prototype 에
 *      --> 연결하여 작성하지 않는다
 *
 *      - 클래스 밖에서 메소드를
 *      --> prototype 에 연결할 수 있다
 *
 *      - 클래스는 열거할 수 없다
 *
 *      - prototype 에 메소드 추가
 */
{
    "use strict";
    log('------------ 메소드를 prototype 에 연결하여 작성하지 않음 ---------------');
    const Point = class {
        setPoint(point){
            this.point = point;
        }
    };
    /**
     *  위처럼 작성하면 아래처럼 들어간다는 뜻!
     *  - 찍어보면 동일한코드가나오고 동일한기능을 함!
     */
    log(Point.prototype.setPoint);
    // ::  setPoint(point){ this.point = point; }
    debugger;
    // 1. setPoint(){...} 형태로 작성하면
    //    엔진이 prototype 에 연결된 구조로 변환한다

    // 2. log(Point.prototype.setPoint)
    //    prototype 에 연결된 구조로 변환하므로
    //    메소드 코드가 출력된다.
}
{
    "use strict";
    log('------------ 클래스 밖에서 메소드 연결 ---------------');
    const Point = class {};
    const obj = new Point();
    Point.prototype.getPoint = function(){
        return 100;
    };
    log(obj.getPoint());
    // :: 100
    debugger;

    // 1. Point.prototype.getPoint = function(){...}
    //    클래스 밖에서 prototype 에 메소드를 연결할 수 있다

    // 2. obj.getPoint()
    //    prototype 에 추가로 연결한 메소드를
    //    인스턴스에서 호출할 수 있다.
    /**
     *  클래스를 선언한 후에도 prototype 에 메소드를 연결하면 호출할 수 있다.
     */
}
{
    "use strict";
    log('------------ prototype 에 메소드를 추가한 후의 class 구조 ---------------');

    const Book = class {
        setTitle(title) {
            this.title = title;
        }
    };
    /**
     *  1. Book 을 펼치면, 프로퍼티와 prototype 이 있다
     *
     *  2. prototype 을 펼치면, setTitle() 이 있다
     */
    debugger;

    const obj = new Book();
    obj.setTitle("자바스크립트");
    /**
     *  1. obj 를 펼치면, title 프로퍼티가 있으며
     *  -  이것은 setTitle() 에서 설정한 것이다
     *
     *  2. title 처럼 인스턴스에 바로 연결된 프로퍼티를
     *  -  인스턴스 프로퍼티라고 부른다
     *
     *  3. obj.__proto__ 를 펼치면, setTitle()이 있다
     *  -  메소드는 __proto__ 안에 표시된다.
     */
    debugger;

    Book.prototype.getTitle = function(){
        return this.title;
    }
    /**
     *  1. Book.prototype 에 getTitle() 이 추가된다
     *
     *  2. obj.__proto__ 에 getTitle() 이 표시된다
     *
     *  3. prototype 에 메소드를 추가로 연결하면
     *  -  생성된 모든 인스턴스에서 메소드를 사용할 수 있다.
     *
     *  4. 이것을 prototype sharing(공유) 이라고 부른다.
     */
    debugger;

    log(obj.getTitle());
    /**
     *  1. obj 인스턴스의 getTitle() 메소드가 호출되며
     *  -  "자바스크립트"를 반환한다.
     */
    debugger;
}