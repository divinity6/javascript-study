/**
 * 프로그람 설명문서 주석
 * 2022.03. 01 수업
 *
 *           ===== getPrototypeOf() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - 오브젝트 또는 null
 *      -----------------------------------------------------------
 *
 *      - [[GetPrototypeOf]] 의 트랩이다
 *      --> target 의 prototype 을 반환한다
 *      --> target 이 확장불가라도 prototype 을 반환한다
 *      --> String, Number 처럼 값을 반환하면 TypeError
 *
 *      - 트랩 준수 사항
 *      --> target 이 "확장 불가"일 때
 *      --> Object.getPrototypeOf( target ) 와
 *          같은 값을 반환해야 한다
 *          ( 즉, 확장 불가일 경우에는 반환되는 prototype 변경 불가 )
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ getPrototypeOf() 트랩 ---------------');

    class Point {
        getPoint(){
            return 100;
        }
    };

    const handler = {
        getPrototypeOf( target ){
            debugger;
            return target.prototype;
        }
    };

    const obj = new Proxy( Point , handler );
    const proto = Object.getPrototypeOf( obj );
    log( proto.getPoint );
    // :: ƒ getPoint(){  return 100; }
    debugger;

    // 1. const obj = new Proxy( Point, handler );
    //    첫 번째 파라미터에 Point 클래스를 작성했다
    //    트랩에서 Point.prototype 을 구하기 위해서이다
    //    obj.[[Target]] 에서 Point 클래스가 설정된다

    // 2. const proto = Object.getPrototypeOf( obj );
    //    getPrototypeOf() 트랩이 호출된다

    // 3. 트랩 : getPrototypeOf( target ){ ... }
    //    target 에 Point 클래스가 설정된다

    // 4. 트랩 return target.prototype;
    //    Point.prototype 을 반환한다

    // 5. log( proto.getPoint );
    //    Point.prototype 에 getPoint() 가 있으므로
    //    메소드 코드가 출력된다
}
/**
 *           ===== getPrototypeOf() 트랩 호출 =====
 *
 *      - getPrototypeOf() 트랩이 호출되는 형태
 *      --> Object.getPrototypeOf()
 *      --> __proto__
 *      --> instanceOf
 *      --> Object.prototype.isPrototypeOf()
 *      --> Reflect.getPrototypeOf()
 */
{
    "use strict"
    log('------------ __proto__ ---------------');
    class Point {
        getPoint() { return 100; }
    }

    const handler = {
        getPrototypeOf(target) {
            debugger;
            // 여기서 this 는 handler 를 참조한다
            return this.list ? Array.prototype : target.prototype;
        }
    };
    const obj = new Proxy( Point , handler );
    handler.list = true;
    debugger;
    const proto = obj.__proto__;
    log( proto.map );
    // :: ƒ map() { [native code] }
    debugger;

    // 1. handler.list = true;
    //    getPrototypeOf() 트랩에서 체크 값으로 사용한다

    // 2. const proto = obj.__proto__
    //    getPrototypeOf() 트랩이 호출된다
    //    트랩에서 Array.prototype 을 반환한다

    // 3. log( proto.map );
    //    map 메소드가 있으므로 코드가 출력된다

    // 4. 조건에 따라 반환되는 prototype 을 바꿀 수 있다.
    /**
     *  - 조건에 따라 반환되는 prototype 을 변경할 수 있는게 개꿀이네...
     *  --> 이것이 트랩의 목적이다
     *
     *  --> obj.__proto__ 를 getPrototypeOf() 에서 설정한 값으로 변경.
     *      왜냐, __proto__ 로 호출했으니깐...
     */
}

{
    "use strict"
    log('------------ instanceof ---------------');

    class Point {
        getPoint() { return 100; };
    };
    const handler = {
        getPrototypeOf( target ){
            debugger;
            // 아 여기서 prototype 을 반환하면
            // 받는곳에서 다시 instanceof 로 비교하나본데...?
            // 근데 true 가 출력되네...
            return Point.prototype;
        }
    };
    const target = new Point();
    log( target instanceof Point );
    // :: true
    /**
     *  - Point.prototype 이 인스턴스가 아니므로
     *    false 출력.
     */
    log( Point.prototype instanceof Point);
    // :: false
    debugger;
    const obj = new Proxy( target , handler );
    log( obj instanceof Point );
    // :: true
    debugger;

    // 1. log( target instanceof Point )
    //    target 을 Point 로 만들었으므로 true 가 출력된다

    // 2. log( Point.prototype instanceof Point )
    //    Point.prototype 이 인스턴스가 아니므로
    //    false 가 출력된다

    // 3. log( obj instanceof Point)
    //    getPrototypeOf() 트랩이 호출된다
    //    트랩에서 Point.prototype 을 반환한다

    // 4. ( Point.prototype instanceof Point ) 형태가 되므로
    //    false 가 출력되어야 하는데 true 가 출력된다
    /**
     *  - getPrototypeOf 프록시 트랩을 사용했을 때,
     *    호출 형태가 instanceof 이면 인스턴스 여부를 정확히 체크하지 못한다.?
     */
}

/**
 *           ===== setPrototypeOf() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - prototype, prototype 또는 null
 *      - 반환                  - 처리 성공 : true, 실패 : false
 *      -----------------------------------------------------------
 *
 *      - Object.setPrototypeOf() 특징
 *      --> target 의 __proto__ 에 두 번째 파라미터를 설정한다
 *      -----> 뉘앙스로는 target 의 prototype 에 값을
 *             설정할 것 같지만 대상은 __proto__ 이다.
 *
 *      - Object.setPrototypeOf() 의 트랩이다
 *
 *      - 트랩 준수 사항
 *      --> target 이 확장 불가일 때
 *      --> 두 번째 파라미터의 prototype 과
 *          Object.getPrototypeOf( target ) 으로
 *          구한 것과 값이 같아야 한다
 *          ( 즉, 트랩에서 변경 불가 )
 */
{
    "use strict"
    log('------------ Object.setPrototypeOf() ---------------');
    class Book { setTitle(){ return "책"; } };
    class Point { getPoint(){ return 100; } };
    debugger;
    Object.setPrototypeOf( Book , Point.prototype );

    log( Book.prototype.getPoint );
    // :: undefined
    log( Book.__proto__.getPoint );
    // ƒ getPoint() {   return 100; };

    const obj = new Book();
    log( obj.getPoint );
    // :: undefined
    debugger;

    // 1. Object.setPrototypeOf( Book, Point.prototype);
    //    Book.__proto__ 에 있는 Function.prototype 이
    //    Point.prototype 으로 대체된다

    // 2. log( Book.prototype.getPoint )
    //    Book.__proto__ 에 설정되므로 undefined 가 출력된다

    // 3. Book.__proto__.getPoint
    //    getPoint() 코드가 출력된다

    // 4. log( obj.getPoint )
    //    Book.prototype 으로 인스턴스를 생성하므로
    //    obj 인스턴스에 getPoint 가 없다.
    /**
     *  - Object.setPrototypeOf 를 하게되면 즉, 첫번째 파라미터의
     *    __proto__ 에 두 번째 파라미터가 설정된다.
     *
     *  - 이것은 함수이름에서 나오는 시멘틱으로 인해 헷갈릴 수 있다.
     *  --> prototype 이 대체되거나 지워지겠구나... 라고생각할 수 있다.
     *      그러나 그렇지 않고 __proto__ 에 설정된다.
     */
}

{
    "use strict"
    log('------------ setPrototypeOf() 트랩 ---------------');

    class Book { setTitle(){ return "책"; }};
    class Point { getPoint(){ return 100; }};

    const handler = {
        setPrototypeOf( target , proto ){
            debugger;
            Object.setPrototypeOf( target , proto );
            // true 를 반환하지 않으면 에러 발생
            return true;
        }
    };

    const obj = new Proxy( Book , handler );
    Object.setPrototypeOf( obj , Point.prototype );
    debugger;
    log( Book.prototype.getPoint );
    // :: undefined
    log( Book.__proto__.getPoint );
    // ƒ getPoint() {   return 100; };
    log( obj.getPoint );
    // :: // ƒ getPoint() {   return 100; };
    debugger;

    // 1. Object.setPrototypeOf( obj , Point.prototype );
    //    setPrototypeOf() 트랩이 호출된다

    // 2. 트랩 : setPrototypeOf( target , proto ){ ... }
    //    target 에 book 클래스가 설정되고
    //    proto 에 Point.prototype 이 설정된다

    // 3. 트랩 : Object.setPrototypeOf( target , proto );
    //    Book.__proto__ 와 obj.[[Target]].__proto__ 가
    //    Point.prototype 으로 대체된다

    // 4. true 를 반환하지 않으면 에러가 발생한다

    // 5. log( Book.prototype.getPoint )
    //    undefined 가 출력되며, Point.prototype 이
    //    Book.prototype 에 설정되지 않기 때문이다

    // 6. log( Book.__proto__.getPoint )
    //    getPoint 코드가 출력된다

    // 7. log( obj.getPoint )
    //    getPoint 코드가 출력되며
    //    obj.[[Target]].__proto__ 에
    //    getPoint 가 있기 때문이다
}
/**
 *           ===== setPrototypeOf() 트랩 호출 =====
 *
 *      - setPrototypeOf() 트랩이 호출되는 형태
 *      --> Object.setPrototypeOf()
 *      --> Reflect.setPrototypeOf()
 */
