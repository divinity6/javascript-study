/**
 * 프로그람 설명문서 주석
 * 2022.03. 07 수업
 *
 *           ===== defineProperty() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *                             - descriptor, 추가/변경할 디스크립터
 *      - 반환                  - 처리 성공 : true , 실패 : false
 *      -----------------------------------------------------------
 *
 *      - target 에 프로퍼티를 추가, 변경한다
 *
 *      - Reflect.defineProperty() 형태
 *
 *      - Object.defineProperty() 와 차이
 *      --> true , false 를 반환
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Reflect.defineProperty() 형태 ---------------');
    const target = {};
    Reflect.defineProperty( target , "point" , {
        // 프로퍼티 값 , 속성
        value : 100, writable : true,
    });

    // default 속성도 같이 반환함
    log( Object.getOwnPropertyDescriptor( target , "point" ) );
    // :: {value: 100, writable: true, enumerable: false, configurable: false}
    debugger;

    // 1. Reflect.defineProperty( ... )
    //    target 에 프로퍼티를 설정한다.
}
{
    "use strict"
    log('------------ Object.defineProperty() 와 차이 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 100 ,
        configurable : false,
    });
    // configurable 이 false 이므로 값 변경 불가!
    const result = Reflect.defineProperty( target , "point" , {
        value : 200,
    });

    log( result );
    // :: false
    debugger;
    log( Reflect.get( target , "point" ) );
    // :: 100
    debugger;

    // 1. Object.defineProperty(...) 는
    //    처리에 성공하면 Object 를 반환하고
    //    실패하면 TypeError 가 발생한다
    //    따라서 try-catch 를 사용해야 한다

    // 2. Reflect.defineProperty(...) 는
    //    처리에 성공하면 true 를, 실패하면 false 를 반환한다
    //    try-catch 를 사용하지 않아도 된다

    // 3. point 프로퍼티가 { configurable : false } 이므로
    //    에라가 발생하게 되며 false 를 반환했다.
    //    따라서 100 이 200 으로 바뀌지 않는다
    /**
     *  - Reflect 는 처리 성공 하면 boolean 값으로 반환하니 에러가 안나는구나!
     */
}
/**
 *           ===== preventExtensions() =====
 *
 *     ----> 아 애는 defineProperty 와 다르게
 *           프로퍼티 단위가 아니라 오브젝트 자체에 설정하는 거구만...
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - 처리 성공 : true , 실패 : false
 *      -----------------------------------------------------------
 *
 *      - target 에 프로퍼티 추가 금지를 설정한다
 *      --> 더 이상 프로퍼티를 추가할 수 없도록 맨드는 것
 *
 *      - Reflect.preventExtensions() 형태
 */
{
    "use strict"
    log('------------ Reflect.preventExtensions() 형태 ---------------');
    const target = {};

    // 추가금지 설정!!
    log( Reflect.preventExtensions( target ) );
    // :: true
    debugger;
    const result = Reflect.defineProperty( target, "point" , {
        value : 100,
    });
    log( result );
    // :: false
    debugger;

    // 1. log( Reflect.preventExtensions( target ) );
    //    처리를 성공하면 true 를, 실패하면 false 를 반환한다

    // 2. const result = Reflect.defineProperty(...);
    //    프로퍼티를 추가할 수 없는데 추가하고 있다
    //    처리 실패이므로 false 가 반환된다
}
/**
 *           ===== isExtensible() =====
 *
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - 확장 가능 : true , 불가 : false
 *      -----------------------------------------------------------
 *
 *      - target 에 프로퍼티 추가 가능 여부를 반환한다
 *
 *      - Reflect.isExtensible() 형태
 *
 *      - 아래 함수를 실행한 상태이면 false 를 반환한다
 *      --> Object.seal()
 *          Object.freeze()
 *          Object.preventExtensions()
 */
{
    "use strict"
    log('------------ Reflect.isExtensible() 형태 ---------------');
    const target = { point : 100 };
    // 추가할 수 있으므로 ture
    log( Reflect.isExtensible( target ) );
    // :: true

    // target 에 추가 금지 설정
    Reflect.preventExtensions( target );
    log( Reflect.isExtensible( target ));
    // :: false
    debugger;

    // 1. Reflect.isExtensible( target );
    //    target 오브젝트에
    //    프로퍼티를 추가할 수 있으면 true 를 반환하고
    //    추가할 수 없으면 false 를 반환한다
}