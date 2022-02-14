/**
 * 프로그람 설명문서 주석
 * 2022.02 11 수업
 *
 *
 *           ===== super 키워드 =====
 *
 *      - super class 와 sub class 에
 *      --> 같은 이름의 메소드가 있으면
 *          sub class 의 메소드가 호출된다
 *          ( 메소드 오버라이딩 )
 *
 *      - super 키워드를 사용하여
 *      --> super class 의 메소드를 호출할 수 있다
 *      --> super.getTitle() 형태
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ super 키워드 사용 ---------------');
    class Book {
        getTitle(){
            log("슈퍼");
        }
    }

    class Point extends Book {
        getTitle() {
            // super class 의 getTitle() 호출
            /**
             *  함수가 아닌 일반 super 는 __proto__ 에
             *  있는 것을 호출하넹!!
             */
            super.getTitle();
            log("서브");
        }
    }
    new Point().getTitle();
    // :: 슈퍼
    // :: 서브
    debugger;

    // 1. new Point().getTitle();
    //    인스턴스를 생성하고 getTitle() 을 호출하면
    //    sub class 의 메소드가 호출된다

    // 2. super.getTitle();
    //    super 키워드가 super class 를 참조하므로
    //    super class 의 getTitle() 이 호출된다
    /**
     *  super 키워드가 super class 를 참조하기 때문에 그렇다
     */
}
/**
 *           ===== constructor 호출 =====
 *
 *      - sub 와 super 에 constructor 를 모두 작성하지 않으면
 *      --> default constructor 가 호출된다
 *      ----> 즉, prototype.constructor 가 호출되는 것
 *
 *      - sub 에 작성하지 않고 super 에만 작성하면
 *      --> 파라미터 값을 super 로 넘겨준다
 *
 *      - sub 에는 작성하고 super 에 작성하지 않으면
 *      --> 에러가 발생한다
 *
 *      - sub 와 super 에 constructor 를 모두 작성하면
 *      --> sub 에서 super() 로 호출해야 한다
 */
{
    "use strict";
    log('------------ 모두 작성하지 않음 ---------------');

    class Book {
        setTitle(title){
            this.title = title;
        }
    };

    class Point extends Book {};
    const obj = new Point();
    obj.setTitle("책");
    log(obj.title);
    // :: 책
    debugger;

    // 1. const obj = new Point();
    //    Point class 에 constructor 를 작성하지 않으면
    //    Point.prototype.constructor 가 호출된다

    // 2. 이어서 Book class 의 constructor 를 호출한다
    //    Book class 에 constructor 를 작성하지 않으면
    //    Book.prototype.constructor 가 호출된다

    // 3. 즉, 각 class 의 constructor 를 호출하며
    //    class 에 constructor 를 작성하지 않으면
    //    class 의 prototype.constructor 가 호출된다

    /**
     *  - 이렇게 constructor 를 호출하는 것은 constructor 를
     *    호출해야 인스턴스를 맨들기 때문에 그렇다
     *
     *  --> class 는 실행을 위한 Object 만을 맨들어 둔것
     *  --> obj 에 할당할 인스턴스는 constructor 에서 만든다
     */
}

{
    "use strict";
    log('------------ 슈퍼 클래스에만 작성 ---------------');
    class Book {
        constructor(title) {
            this.title = title;
        }
    };

    class Point extends Book {
    };

    const obj = new Point('책');
    log(obj.title);
    // :: 책
    debugger;

    // 1. const obj = new Point('책');
    //    sub 의 prototype.constructor 가 호출된다
    //    이어서 super 의 constructor 를 호출하면서
    //    파라미터 값인 "책"을 파라미터로 넘겨준다
}

{
    "use strict";
    log('------------ 서브 클래스에만 작성 ---------------');
    class Book {
        setTitle(title){
            this.title = title;
        }
    };

    class Point extends Book {
        // constructor(point) {
        //     this.point = point;
        // }
    };

    const obj = new Point(100);
    debugger;

    // 1. sub 에 constructor 를 작성하면
    //    super 에도 constructor 를 작성해야 한다
}
{
    "use strict";
    log('------------ 서브와 슈퍼 모두 클래스 작성 ---------------');
    class Book {
        /**
         * Point 의 constructor 안의 super 파라미터 값이 매핑됨
         */
        constructor(title , point) {
            this.title = title;
        }
    };

    class Point extends Book {
        constructor(title, point) {
            super( title , point);
            /**
             *  - this 를 사용하기 전에 super 를 호출해야 한다
             */
            this.point = point;
        };
    };
    const obj = new Point("책" , 100);
    log(`${obj.title} , ${obj.point}`);
    // :: 책 , 100
    debugger;

    // 1. super(title , point);
    //    super 의 constructor 를 호출하며
    //    title 파라미터 값을 파라미터로 넘겨준다

    // 2. 이렇게 명시적으로
    //    super 의 constructor 를 호출해야 한다

    // 3. sub 의 constructor 에서 this 를 사용하면
    //    this 를 사용하기 전에
    //    super() 를 호출해야 한다.

    /**
     *  - 왜 constructor 에서 this 를 사용하기전에
     *    super 를 호출해야 하냐면,
     *
     *  --> this 가 instance 를 참조하게 되는데,
     *      아직, super class 의 constructor 가
     *      실행되지 않았으므로 Book class 의 인스턴스가 생성되지
     *      않았다.
     *
     *  --> obj.__proto__.__proto__ 에다가 Book.prototype 에 연결된 메소드로
     *      인스턴스를 만들어야 한다.
     *      그것을 하는 것이 super( title , point) 이다
     */
}