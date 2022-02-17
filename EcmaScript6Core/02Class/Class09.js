/**
 * 프로그람 설명문서 주석
 * 2022.02 17 수업
 *
 *
 *           ===== this 참조 =====
 *
 *      - 인스턴스.메소드() 형태로 호출하면
 *      --> 메소드에서 this 가 인스턴스를 참조한다
 *
 *      - static 메소드에서 this 는
 *      --> 메소드가 속한 클래스를 참조한다
 *          (인스턴스를 참조하지 않는다)
 *
 *      - static property
 *
 *      - constructor 에서
 *      --> this.constructor 는 생성하는 인스턴스가 아니라
 *      --> 클래스 오브젝트를 참조한다
 *
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ 클래스 참조 ---------------');

    class Point {
        static setPoint(point){
            /**
             *  여기서 this 는 class 참조
             */
            this.value = point;
        };
    };

    Point.setPoint(100);
    log(Point.value);
    // :: 100
    log(new Point().value);
    // :: undefined
    debugger;

    // 1. class Point {...}
    //    엔진이 class 키워드를 만나면
    //    클래스 오브젝트로 만든다

    // 2. this.value = point;
    //    this 가 메소드를 호출한 오브젝트를 참조한다
    //    즉, this 가 Point 클래스를 참조하므로
    //    Point 클래스에 {value: 100} 형태로 설정된다

    // 3. Point.value
    //    Point 클래스에서 value 값을 구하게 되며
    //    100 이 반환된다

    // 4. new Point().value
    //    Point 인스턴스를 생성하고 value 값을 구하면
    //    undefined 가 반환된다

    // 5. Point 클래스에 설정된 value 프로퍼티는
    //    생성한 인스턴스에 포함되지 않는다

    /**
     *  즉, static 메소드는 class 자체에 설정된다
     *  - static 메소드 안에서 this 는 class 자체를 참조한다
     */
}

{
    "use strict";
    log('------------ static property ---------------');
    class Point {
        static value = 100;
    };
    log(Point.value);
    // :: 100
    Point.bonus = 300;
    log(Point.bonus);
    // :: 300
    log( new Point().value);
    // :: undefined;
    debugger;

    // 1. static value = 100;
    //    값을 static property 에 설정한다

    // 2. ES2020 기준으로 스펙 제안 단계이다
    //    하지만 대부분의 브라우저에서 지원한다

    // 3. Point.value
    //    Point 클래스와 static 프로퍼티로 값을 구한다

    // 4. Point.bonus = 300;
    //    Point 클래스에 static 프로퍼티로 설정되며
    //    {bonus: 300} 형태이다

    // 5. Point.bonus
    //    Point 클래스와 static 프로퍼티로 값을 구한다

    // 6. new Point().value
    //    Point 인스턴스를 생성하고 value 값을 구하면
    //    undefined 가 반환된다

    // 7. Point 클래스의 static 프로퍼티는
    //    생성한 인스턴스에 포함되지 않는다

    /**
     *  여기에서 bonus = 300 도 static property 로 설정된다
     */
}

{
    "use strict";
    log('------------ this.constructor 참조 ---------------');

    class Point {
        constructor() {
            /**
             *  여기에서 this 는 instance 참조,
             *  constructor 는 __proto__ 의 class Point 를 참조
             */
            log(this.constructor.get());
            // :: 100
        }

        static get(){
            return 100;
        }
    }
    new Point();
    debugger;

    // 1. this.constructor.get()
    //    this.constructor 가 Point 클래스를 참조하므로
    //    static 메소드를 호출할 수 있다
}

/**
 *           ===== Generator =====
 *
 *      - 클래스의 제너레이터 함수는
 *      --> prototype 에 연결된다
 *      --> 인스턴스로 맨들어서 호출해야 한다
 */
{
    "use strict";
    log('------------ 제너레이터 함수 ---------------');

    class Point {
        /**
         *  class 안에서도 generator 함수를 쓸 수 있구나...
         */
        *getPoint(){
            yield 10;
            yield 20;
        }
    };

    const gen = new Point();
    const obj = gen.getPoint();

    log(obj.next());
    // :: {value: 10, done: false}
    log(obj.next());
    // :: {value: 20, done: false}
    log(obj.next());
    // :: {value: undefined, done: true}
    debugger;

    // 1. const obj = gen.getPoint();
    //    인스턴스의 제너레이터 함수를 호출하면
    //    이터레이터 오브젝트를 생성하여 반환한다

    // 2. obj.next()
    //    obj.next() 를 실행할 때마다
    //    yield 에서 [ 실행 결과 ] 처럼 반환한다
    /**
     *  - generator 함수도 prototype 에 연결되니깐
     *    인스턴스에서 호출해야한다.
     */
}