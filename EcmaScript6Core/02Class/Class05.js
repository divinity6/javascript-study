/**
 * 프로그람 설명문서 주석
 * 2022.02 11 수업
 *
 *
 *           ===== getter =====
 *
 *      - getter 는 메소드를 호출하여 값을 구한다
 *      --> 메소드를 호출할 때는 name() 처럼
 *          소괄호()를 작성하지만
 *
 *      --> getter 는 소괄호()를 작성하지 않고
 *          name 만 작성한다
 *
 *      --> 파라미터를 사용할 수 없다
 *
 *      - 클래스에 getter 작성 방법
*
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ getter 작성 방법 ---------------');

    class Point {
        constructor(point) {
            this.point = point;
        }

        /**
         *  - 메소드 앞에 get 을 작성
         */
        get getPoint(){
            return this.point;
        }
    };

    const obj = new Point(100);
    /**
     *  - getter 를 실행할때는 그냥 메소드명만 작성
     *    (getter 는 변수안의 값을 꺼내올때만 쓰는것같은 느낌적인 느낌)
     *
     *  - get 메소드가 호출되고 반환된 값을 반환
     */
    log(obj.getPoint);
    // :: 100
    debugger;

    // 1. get getPoint(){...}
    //    getter 는 메소드 이름 앞에 get 을 작성한다

    // 2. log(obj.getPoint)
    //    getter 이름을 작성하면 getter 가 호출된다

    // 3. getter 에서 100을 반환한다
}
/**
 *           ===== setter =====
 *
 *      - setter 는 메소드를 호출하여 값을 설정한다
 *      --> setter 도 getter 처럼 소괄호() 를
 *          작성하지 않고 이름만 작성한다
 *
 *      - 클래스에 setter 작성 방법
 */
{
    "use strict";
    log('------------ setter 작성 방법 ---------------');

    class Point {
        /**
         *  - 값을 설정해야 하므로 파라미터를 사용할 수 있다
         */
        set setPoint(point){
            this.point = point;
        }
    };

    const obj = new Point();
    obj.setPoint = 100;
    log(obj.point);
    // :: 100
    debugger;

    // 1. set setPoint(point){...}
    //    setter 는 메소드 이름 앞에 set 을 작성한다

    // 2. obj.setPoint = 100;
    //    값을 setter 에 할당하면 setter 가 호출되며
    //    할당하는 값 100을 파라미터로 넘겨준다
}
/**
 *           ===== static 메소드 =====
 *
 *      - Syntax
 *      --> static name(){...}
 *
 *      - static 메소드 작성 방법
 *
 *      - static 메소드의 구조적 특징
 *      --> prototype 이 아닌 클래스에 연결되며
 *      --> 생성한 인스턴스에 할당되지 않는다
 *
 */
{
    "use strict";
    log('------------ static 메소드 ---------------');

    class Point {
        static getPoint(){
            return 100;
        }
    };
    log(Point.getPoint());
    // :: 100
    debugger;

    // 1. static getPoint(){}
    //    메소드 이름 앞에 static 을 작성합니다
    //    정적 메소드라고 부른다

    // 2. Point.getPoint()
    //    Point 클래스 이름에 이어서
    //    getPoint() 를 작성한다
    //    그러면 getPoint() 가 호출된다

    // 3. 인스턴스의 메소드로 호출하지 않는다

    // 4. 호출하는 방법이 다르므로
    //    ES5 에서는 함수와 메소드를 구분했지만
    //    ES6 에서는 static 메소드도 구분해야 한다

    // 5. 클래스만 static 을 사용할 수 있다!!
    /**
     *  - 오직 클래스에서만 static 메소드를 사용할 수 있다.
     *
     *  --> 즉, static 메소드라고 하면, class 에 작성된 것을 뜻한다.
     *
     *  - 빌트-인 오브젝트는 메소드 또는 함수다.
     *    예)
     *    --> Date 오브젝트는 new Date 가능.
     *        또한 Date.now() 는 static 메소드처럼 사용 가능.
     *
     *        그러나 Date.now() 는 static 메소드라고 하지않고
     *        함수라고 부른다
     */
}
{
    "use strict";
    log('------------ 클래스에 연결됨 ---------------');
    class Point {
        static getPoint(){
            return 100;
        }
    };
    const obj = new Point();
    log(obj.getPoint);
    // :: undefined
    debugger;

    // 1. static getPoint(){...}
    //    엔진이 Point 오브젝트를 만들어서
    //    static 메소드를 Function 오브젝트로 만든다

    // 2. 그러므로 Point.getPoint() 형태로 호출할 수 있다

    // 3. const obj = new Point();
    //    obj 인스턴스에 static 메소드가 설정되지 않는다

    // 4. obj 인스턴스에 getPoint 가 없으므로
    //    undefined 가 출력된다
    /**
     *  - static 메소드는 Point 에 곧바로 연결되어있기 때문에 제외됨!
     */
}

/**
 *           ===== 호이스팅 =====
 *
 *      - 클래스는 호이스팅(hoisting) 되지 않는다
 *      --> const, let 변수 처럼
 *      --> class 키워드가 작성된 위치에서
 *          클래스 이름 선언과 오브젝트 생성을 동시에 하기 때문이다
 *
 *      - const obj = Point;
 *      --> 코드 아래에 Point 클래스가 있지만
 *          Point 를 참조하지 못하므로 에러 발생
 *
 *      - Point.getPoint();
 *      --> 코드 앞에서 Point 클래스를 오브젝트로 생성하므로
 *      --> getPoint() 를 호출할 수 있다.
 */
{
    "use strict";
    log('------------ 호이스팅 되지 않음 ---------------');
    try{
        const obj = Point;
    } catch {
        log('호이스팅 불가');
        // :: 호이스팅 불가
    };

    class Point {
        static getPoint(){
            return 100;
        }
    }
    log(Point.getPoint());
    // :: 100
    debugger;
    /**
     *  - 개발자 도구를 켜서 위에 디버깅을 찍으면 호이스팅되서 나오고,
     *    끄면 호이스팅 불가로 나오네 ㅇㅎ
     *
     *  --> 암튼 원래는 class 는 호이스팅이 되지 않는다.
     */
}

/**
 *           ===== new.target =====
 *
 *      - new.target 프로퍼티는
 *      --> 함수 또는 생성자가 new 연산자로 호출된 여부를 반환한다
 *
 *      - new 연산자로 constructor 를 호출하면
 *      --> new.target 은 constructor 를 참조한다
 *
 *      - 함수로 호출하면 undefined 반환
 */
{
    "use strict";
    log('------------ constructor 를 호출 ---------------');

    class Point {
        constructor() {
            log(new.target.name);
            // :: point
            log(new.target);
            // :: class Point {...}
            debugger;
        }
    };
    new Point();

    // 1. new Point()
    //    constructor 를 호출한다

    // 2. new.target.name
    //    constructor 에서 new.target 은
    //    constructor 를 참조한다

    // 3. 또한, constructor 가 클래스를 참조하므로
    //    name 프로퍼티 값으로 Point 가 출력된다
}
{
    "use strict";
    log('------------ 함수 호출 ---------------');
    function book(){
        log(new.target);
        // :: undefined
        debugger;
    };
    book();

    // 1. book()
    //    new 연산자를 사용하지 않고 호출한다

    // 2. new.target
    //    함수로 호출하면 new.target 은
    //    undefined 를 반환한다.
}

/**
 *  - 정리하면
 *  --> getter 는 메소드를 호출하여 값을 구함
 *      이때, 소괄호()를 사용하지 않음
 *
 *  --> setter 는 메소드를 호출하여 값을 설정
 *
 *  --> static 메소드는 class 에 직접적으로
 *      연결되기 때문에 인스턴스를 만들어서 호출할 순 없지만
 *      class.static 메소드 이름 으로 호출하면 호출이 된다.
 *
 *  --> class 는 호이스팅이 되지 않음
 *      class 키워드가 작성된 위치에서 선언과 오브젝트 생성을 동시에 함
 *
 *  --> new.target 프로처티는 함수 또는 생성자가 new 연산자로 호출된 여부를 반환함
 *  ----> 호출되면 constructor 반환 아니면 undefined !
 */