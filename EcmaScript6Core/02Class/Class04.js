/**
 * 프로그람 설명문서 주석
 * 2022.02 10 수업
 *
 *
 *           ===== constructor =====
 *
 *      - constructor 는 생성자로
 *      --> 인스턴스를 생성하고 초기화 한다
 *
 *      - ES5 까지는 constructor 를 작성할 수 없었으나
 *      --> ES6 부터는 작성할 수 있다.
 */
console.log( "=====================================" );
"use strict"
// console.log 사용
const { log } = window.console;
{
    "use strict";
    log('------------ 클래스에 constructor 작성 ---------------');

    class Point {
        constructor(point) {
            this.point = point;
        }
    };

    const obj = new Point(100);
    console.log(obj);
    // :: Point {point: 100}
    debugger;

    /**
     *  ===== 인스턴스 생성 방법 =====
     */
    // 1. const obj = new Point(100);
    //    new 연산자가 Point 클래스 오브젝트의
    //    constructor 를 호출한다
    //    파라미터 값인 100을 constructor 로 넘겨준다

    // 2. constructor(point){...}
    //    point 파라미터 값은 100이 된다

    // 3. 엔진은 빈 오브젝트{}를 생성한다
    //    이것이 인스턴스 이다

    // 4. 인스턴스에 프로퍼티 이름과 값을 설정하여
    //    인스턴스 구조를 만든다
    //    __proto__ , __proto__.constructor 등

    // 5. 그다음 constructor 블록의 코드를 실행한다

    // 6. this.point = point;
    //    this 가 생성한 인스턴스를 참조한다
    //    인스턴스{}를 먼저 생성하므로
    //    this 로 참조할 수 있다

    // 7. point 는 인스턴스 프로퍼티가 된다
    //    point 파라미터 값이 100이므로
    //    point 프로퍼티 값은 100이 된다

    // 8. 생성한 인스턴스를 반환한다.
    //    리턴문이 없지만 생성한 인스턴스 반환
}
/**
 *           ===== constructor 미작성 =====
 *
 *      - constructor 를 작성하지 않은 상태에서
 *      --> new 연산자로 인스턴스를 생성하면
 *      --> prototype 에 연결된 constructor 가 호출된다
 */
{
    "use strict";
    log('------------ constructor 를 작성하지 않음 ---------------');

    class Point {
        setPoint(point){
            this.point = point;
        }
    };
    const obj = new Point();
    obj.setPoint(100);
    log(obj);
    // :: Point {point: 100}
    debugger;
    // 1. 엔진이 class 키워드를 만나
    //    Point 클래스 오브젝트를 생성할때
    //    constructor 에서 클래스 전체를
    //    참조하도록 환경을 만든다

    // 2. constructor 를 작성하지 않으면
    //    prototype.constructor 를 사용하므로
    //    인스턴스를 생성할 수 있지만
    //    인스턴스에 초깃값을 설정할 수 없다

    // 3. 클래스에 constructor 를 작성하면
    //    prototype.constructor 를 오버라이드 하게 된다.
    /**
     *  - 즉, constructor 는 초깃값을 설정하려는 목적으로도 사용한다.
     */
}
/**
 *          ===== constructor 반환 =====
 *
 *      - constructor 에 return 을 작성하지 않으면
 *      --> 생성한 인스턴스를 반환한다
 *
 *      - constructor 에서 Number, String 을 반환하면
 *      --> 이를 무시하고 인스턴스를 반환한다
 *
 *      - constructor 에서 Object 를 반환하면
 *      --> 인스턴스를 반환하지 않고 Object 반환
 */
{
    "use strict";
    log('------------ Number 반환 ---------------');
    class Point {
        constructor(point){
            this.point = point;
            return point;
            this.book = '책';
        }
    };
    const obj = new Point(100);
    log(obj.point);
    // :: 100
    log(obj instanceof Point);
    // :: true
    debugger;

    // 1. return point;
    //    constructor 에서 파라미터로 받은
    //    Number 타입의 100을 반환한다

    // 2. 이때, 100을 반환하지 않고
    //    생성한 인스턴스를 반환한다

    // 3. log(obj.point)
    //    obj 가 인스턴스이므로
    //    프로퍼티로 값을 구할 수 있다

    // 4. log(obj instanceof Point);
    //    obj 가 Point 클래스로 만든 인스턴스이므로
    //    true 가 출력된다
}
{
    "use strict";
    log('------------ Object 반환 ---------------');
    class Point {
        constructor(point) {
            return {point};
        }
    };
    /**
     * {point} 가 obj 가 됨
     */
    const obj = new Point(100);
    log(obj);
    // :: {point: 100}
    log(obj instanceof Point);
    // :: false
    debugger;

    // 1. return {point}
    //    constructor 에서 Object 를 반환한다

    // 2. 생성한 인스턴스를 반환하지 않고
    //    return 표현식의 결과를 반환한다

    // 3. log(obj)
    //    return 한 Object 가 출력된다

    // 4. log(obj instanceof Point);
    //    obj 가 Point 으로 만든 인스턴스가 아니므로
    //    false 가 출력된다
    /**
     *  - constructor 가 무조건적으로 인스턴스를 반환하지는 않는다는 이야기
     *  --> 위의 상황은 특별한 케이스지만, 위의 상황으로 반환하는 경우가 존재함
     *  --> Spec 을 설계한 사람들이 위의것을 허용한 것은 이유가 있을것이다
     *  --> Spec 의 의도가 무언가 있다.
     *  ----> 이런부분들을 간파해서 프로그람을 개발할때 반영 및 참조할 필요가 있다!!
     */
}