/**
 * 프로그람 설명문서 주석
 * 2022.03. 06 수업
 *
 *           ===== has() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *      - 반환                  - key 가 존재하면 true , 아니면 false
 *      -----------------------------------------------------------
 *
 *      - target 에 key 의 존재 여부를 반환한다
 *
 *      - Reflect.has( target , key ) 형태로 작성
 *
 *      - 상속받은 prototype ,
 *        자기자신의 __proto__ 도 검색
 *
 *      - 핸들러의 has() 트랩 호출
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ has( target , hey ) 형태 ---------------');

    const target = {
        point : 100,
    };
    log( Reflect.has( target , "point" ) );
    // :: true
    debugger;

    // 1. Reflect.has( target , "point" );
    //    target 오브젝트에 "point" 가 프로퍼티 키로
    //    존재하면 true 를 반환하고
    //    존재하지 않으면 false 를 반환한다.
}
{
    "use strict"
    log('------------ 상속받은 prototype 까지 검색 ---------------');

    function target(){};
    target.prototype = Object.create( target.prototype.__proto__ , {
        point : { value : 200 }
    } );
    target.__proto__ = Object.create( target.__proto__ , {
        book : { value : "책" }
    } );
    log( Reflect.has( target , "hasOwnProperty"));
    // :: true
    log( Reflect.has( target , "point"));
    // :: false
    log( Reflect.has( target , "book"));
    // :: true
    debugger;

    // 1. Reflect.has( target , "hasOwnProperty" );
    //    target 함수에 hasOwnProperty() 를
    //    작성하지 않았지만 true 가 반환된다

    // 2. target 함수 구조를 보면
    //    target.__proto__ 에 hasOwnProperty() 가 없지만
    //    target.__proto__.__proto__ 에 있기 때문이다.

    /**
     *  - __proto__ 를 검사하지, prototype 은 검사하지 않는다!!
     */
}
{
    "use strict"
    log('------------ has() 트랩 호출 ---------------');
    const target = { point : 100 };
    const handler = {
        has( target , key ){
            debugger;
            return Reflect.has( target , key );
        }
    };

    const proxy = new Proxy( target , handler );
    log( "point" in proxy );
    // :: true
    debugger;

    // 1. log( "point" in proxy );
    //    has() 트랩이 호출된다

    // 2. 트랩 : has( target , key ){ ... }
    //    target 오브젝트, "point" 가 설정된다

    // 3. 트랩 : return Reflect.has( target , key );
    //    return 을 작성하지 않으면
    //    target 에 key 가 존재하더라도 false 가 반환된다
    /**
     *  - 따라서 반드시 return 을 작성해야한다.
     */
}
/**
 *           ===== deleteProperty() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *      - 반환                  - 삭제 성공 : true , 실패 : false
 *      -----------------------------------------------------------
 *
 *      - target 에서 key 를 삭제한다
 *
 *      - Reflect.deleteProperty() 형태
 *
 *      - false 반환
 *
 *      - 인덱스로 배열 엘리먼트 삭제
 */
{
    "use strict"
    log('------------ Reflect.deleteProperty() 형태 ---------------');

    const target = { point : 100 };
    log( Reflect.deleteProperty( target , "point" ));
    // :: true
    log( Reflect.deleteProperty( target , "point "));
    // :: true
    debugger;

    // 1. Reflect.deleteProperty( target , "point" );
    //    삭제 처리를 성공하면 true 를 반환하고
    //    실패하면 false 를 반환한다

    // 2. 두 번째의
    //    Reflect.deleteProperty( target , "point" );
    //    프로퍼티가 존재하지 않더라도 true 를 반환한다
    //    프로퍼티 삭제 여부가 아닌
    //    삭제 처리 수행의 성공/실패가 기준이다

    // 3. 이어서 false 가 반환되는 경우를 살펴볼 것이다.
}

{
    "use strict"
    log('------------ false 반환 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 100,
        configurable : false,
    });
    log( Reflect.deleteProperty( target , "point" ));
    // :: false
    debugger;

    // 1. Reflect.deleteProperty( target , "point" );
    //    point 가 { configurable : false } 이므로
    //    삭제할 수 없다
    //    이때, false 를 반환한다

    // 2. 이것이 삭제 처리 실패이다.
}

{
    "use strict"
    log('------------ 인덱스로 배열 엘리먼트 삭제 ---------------');
    const target = [ 1, 2, 3, 4 ];
    Reflect.deleteProperty( target , 1 );
    log( target );
    // :: [1, empty, 3, 4]
    debugger;

    // 1. Reflect.deleteProperty( target , 1 );
    //    target 이 배열일 때
    //    두 번째 파라미터 1은 배열의 인덱스이다

    // 2. 1번 인덱스 값인 2를 삭제히며
    //    삭제한 인덱스의 엘리먼트에 undefined 를 설정한다
    //    3 과 4 를 앞으로 당기지 않는다.
    /**
     *  - 이것이 배열의 일반적인 삭제 메카니즘.
     *  --> 3, 4를 앞으로 당기지 않는다.
     *
     *  --> Reflect.deleteProperty 로 배열의 엘리먼트를
     *      삭제하면 length 는 변하지 않는다.
     *      단, 값이 undefined 로 변한다
     */
}