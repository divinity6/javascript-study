/**
 * 프로그람 설명문서 주석
 * 2022.03. 08 수업
 *
 *           ===== getPrototypeOf() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - prototype 또는 null
 *      -----------------------------------------------------------
 *
 *      - target.__proto__ 를 반환한다
 *      --> target 이 확장 불가라도 반환한다
 *
 *      - Reflect.getPrototypeOf() 형태로 작성
 *
 *      - prototype 의 __proto__ 를 반환
 *
 *      ----> prototype 을 반환하는 것처럼 시멘틱이 느껴지지만
 *            실제로는 __proto__ 를 반환한다
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Reflect.getPrototypeOf() 형태 ---------------');
    let proto = Reflect.getPrototypeOf( Array );
    log( proto === Function.prototype );
    // :: true
    log( proto === Array.prototype);
    // :: false
    const list = [];
    proto = Reflect.getPrototypeOf( list );
    log( proto === Array.prototype);
    // :: true
    debugger;

    // 1. let proto = Reflect.getPrototypeOf( Array )
    //    Array 오브젝트의 __proto__ 를 반환한다

    // 2. Array.prototype 에 Array 오브젝트의 메소드가 있으며
    //    Array.__proto__ 에 Function.prototype 의
    //    메소드가 있다

    // 3. __proto__ 를 반환하므로
    //    Function.prototype 이 반환된다

    // 4. 사용하는 오브젝트의
    //    prototype 과 __proto__ 구조가 연상되어야 한다

    // 5. proto === Function.prototype; true 를 반환한다

    // 6. proto === Array.prototype; false 를 반환한다

    // 7. const list = [];
    //    Array 인스턴스를 생성하면 list.__proto__ 에
    //    Array.prototype 의 메소드가 있다

    // 8. proto = Reflect.getPrototypeOf( list );
    //    proto 에 list.__proto__ 가 할당된다

    // 9. log( proto === Array.prototype )
    //    proto 와 Array.prototype 이 같다
}

{
    "use strict"
    log('------------ __proto__ 반환 ---------------');
    const proto = Reflect.getPrototypeOf( Array.prototype );
    log( proto.map );
    // :: undefined
    log( proto.hasOwnProperty );
    // :: ƒ hasOwnProperty() { [native code] }
    debugger;

    // 1. Reflect.getPrototypeOf( Array.prototype )
    //    Array.prototype.__proto__ 를 반환한다
    //    여기에 빌트인 Object.prototype 의
    //    메소드가 있다

    // 2. log( proto.map )
    //    map() 은 Array.prototype 에 있으므로
    //    undefined 가 반환된다

    // 3. log( proto.hasOwnProperty )
    //    hasOwnProperty() 는 Object.prototype 의 메소드로
    //    Array.prototype.__proto__ 에 있다

    /**
     *  - 실제로는 target.__proto__ 를 반환한다.
     */
}
/**
 *           ===== setPrototypeOf() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - prototype, 설정할 prototype 또는 null
 *      - 반환                  - 처리 성공 : true , 실패 : false
 *      -----------------------------------------------------------
 *
 *      - target.__proto__ 에
 *        prototype 에 연결된 메소드를 설정한다
 *
 *      - Reflect.setPrototypeOf() 형태로 작성
 */
{
    "use strict"
    log('------------ Reflect.setPrototypeOf() 형태 ---------------');
    class Point {
        getPoint() { return 100 }
    };
    const target = function(){};
    target.prototype.getPoint = function(){ return 200 };

    Reflect.setPrototypeOf( target , Point.prototype );
    log( target.getPoint() );
    // :: 100

    debugger;

    // 1. Reflect.setPrototypeOf( target , Point.prototype );
    //    target 의 __proto__ 에 Point.prototype 에
    //    연결된 메소드를 설정한다

    // 2. log( target.getPoint() )
    //    target.__proto__ 의 getPoint() 가 호출된다
    //    target.prototype.getPoint() 가 호출되지 않는다
}
/**
 *           ===== ownKeys() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - Array, 프로퍼티 키
 *      -----------------------------------------------------------
 *
 *      - target 의 모든 프로퍼티 키를 배열로 반환한다
 *      --> [[Configurable]] : false 이거나
 *          오브젝트가 확장 불가라도 반환한다
 *      --> 단, 상속받은 프로퍼티는 제외한다
 *
 *      - Reflect.ownKeys() 형태로 작성
 */
{
    "use strict"
    log('------------ Reflect.ownKeys() 형태 ---------------');
    const sym = Symbol("심볼");
    const target = {};
    Object.defineProperties( target , {
        point : { value : 100 , configurable : false },
        [ sym ] : { value : 200 },
    });
    debugger;
    // 추가 금지 설정
    Reflect.preventExtensions( target );
    // :: true
    /**
     *  - 확장 불가 및 symbol 도 반환
     */
    log( Reflect.ownKeys( target ));
    // :: ['point', Symbol(심볼)]
    debugger;

    // 1. log( Reflect.ownKeys( target ) )
    //    target 오브젝트가 확장 불가이지만
    //    모든 프로퍼티 키를 배열로 반환한다
    //    Symbol 도 반환한다
}
/**
 *           ===== getOwnPropertyDescriptor() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - keys, 프로퍼티 키
 *      - 반환                  - 디스크립터 또는 undefined
 *      -----------------------------------------------------------
 *
 *      - target 에서 프로퍼티 디스크립터를 반환한다
 *      --> 상속받은 프로퍼티는 제외한다
 *
 *      - Reflect.getOwnPropertyDescriptor()
 *      --> 형태로 작성
 */
{
    "use strict"
    log('------------ Reflect.getOwnPropertyDescriptor() 형태 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 100 , configurable : true
    });

    const desc = Reflect.getOwnPropertyDescriptor( target , "point" );
    log( desc );
    // :: { value : 100 , configurable : true , writable : false , enumerable : false }
    debugger;

    // 1. Reflect.getOwnPropertyDescriptor( target , "point" );
    //    target 에 { value : 100 , configurable : true } 를
    //    작성했지만 디폴트 속성도 반환한다

    /**
     *  - Reflect 는 진짜 에러를 방지하기 위해서 쓰는 구나...
     *  --> 처리를 실패해도 에러가 아닌 false 나 undefined 등을 반환하니깐...
     */
}