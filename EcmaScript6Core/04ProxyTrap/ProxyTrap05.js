/**
 * 프로그람 설명문서 주석
 * 2022.02 27 수업
 *
 *           ===== defineProperty() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *                             - descriptor, 추가/변경할 디스크립터
 *      - 반환                  - 처리성공: true, 실패: false
 *      -----------------------------------------------------------
 *
 *      - Object.defineProperty() 의 트랩이다
 *      --> target 에 프로퍼티를 추가하거나
 *      --> 속성 값을 변경한다
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ defineProperty() 트랩 ---------------');
    const target = {};
    const handler = {
        /**
         *
         * @param target    :: proxy[[Target]]
         * @param key       :: key
         * @param desc      :: 설정된 descriptor
         */
        defineProperty( target , key , desc ){
            debugger;
            if ( desc.value > 0 ){
                desc.value = desc.value * -1;
            };
            // 아하 여기서 다시 defineProperty 를 해서 proxy, target 에 설정하는 구만
            Object.defineProperty( target , key , desc );
            return true;
        }
    };

    const proxy = new Proxy( target , handler );
    debugger;
    Object.defineProperty( proxy , "point" , {
        value : 100,
        writable : true,
    });
    log(target.point);
    // :: -100
    debugger;

    // 1. Object.defineProperty( obj , "point" , {...} );
    //    defineProperty() 트랩이 호출된다

    // 2. 트랩 : defineProperty( target , key , desc ){...}
    //    desc 에 {...} 에 작성한 디스크립터가 설정된다

    // 3. 트랩 : if ( desc.value > 0 ){...}
    //    value 속성 값이 100 이며, 0 보다 크므로
    //    100 에 -1 을 곱해 -100 으로 바꾼다

    // 4. 트랩에서 속성 값을 바꿀 수 있다.

    /**
     *           ===== defineProperty() 트랩 호출 =====
     *
     *      - defineProperty() 트랩이 호출되는 형태
     *      --> Object.defineProperty()
     *      --> Reflect.defineProperty()
     */
    /**
     *          ===== defineProperty() 트랩 준수사항 =====
     *
     *      - strict mode 일 때
     *      --> 트랩에서 false 를 반환하면 TypeError
     *
     *      - target 오브젝트가 확장 불가이면
     *      --> 프로퍼티를 추가할 수 없다
     *      --> Object.preventExtensions(target);
     *
     *      - target 오브젝트의 프로퍼티가
     *      --> [[Writable]] : false 또는
     *          ( :: 프로퍼티 값 변경 가능, 불가 여부 )
     *          [[Configurable]] : false 이면
     *          ( :: 프로퍼티 삭제 가능, 불가 여부 )
     *      --> 프로퍼티 값을 변경할 수 없다
     */
}

/**
 *           ===== preventExtensions() =====
 *
 *           - Object.preventExtensions()
 *           --> 확장 방지
 *           ----> 오브젝트에 프로퍼티 추가 금지 설정
 *           ----> 프로퍼티 삭제,변경은 가능
 *           ----> 추가 금지를 설정한 후에는 추가 가능으로 변경 불가
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - 처리성공: true, 실패: false
 *      -----------------------------------------------------------
 *
 *      - Object.preventExtensions() 트랩이다
 *      --> target 오브젝트에
 *          오브젝트의 확장 금지를 설정한다
 *          ( 더 이상 프로퍼티를 추가할 수 없다 )
 */
{
    "use strict"
    log('------------ preventExtensions() 트랩 ---------------');
    const target = { point : 100 };
    const handler = {
        /**
         * - true 를 반환하면 Proxy 인스턴스를 반환함.
         */
        preventExtensions( target ){
            debugger;
            if ( target.point ){
                Object.preventExtensions( target );
                return true;
            }
            return false;
        }
    }

    const proxy = new Proxy( target , handler );
    debugger;
    // 만약 여기서 true 를 반환한다면 아래 obj.point 는 말이 안된다!
    const obj = Object.preventExtensions( proxy );
    log( obj.point );
    // :: 100
    /**
     * - Object.isExtensible()
     * --> 오브젝트에 프로퍼티 추가 금지 여부 반환
     */
    log(Object.isExtensible( target ));
    // :: false
    debugger;

    // 1. const obj = Object.preventExtensions( proxy );
    //    preventExtensions() 트랩이 호출된다

    // 2. 트랩 : if ( target.point ){...}
    //    point 에 값이 있을 때만
    //    확장 금지를 설정하기 위해 비교한 것이다

    // 3. 트랩에서 true 를 반환하면
    //    true 를 반환하지 않고 Proxy 인스턴스를 반환한다

    // 4. log( obj.point );
    //    Proxy 인스턴스의 point 프로퍼티 값을 출력한다

    // 5. log( Object.isExtensible( target ) );
    //    확장 불가 상태이므로 false 를 반환한다.

    /**
     *           ===== preventExtensions() 트랩 호출 =====
     *
     *      - preventExtensions() 트랩이 호출되는 형태
     *      --> Object.preventExtensions()
     *      --> Reflect.preventExtensions()
     */

    /**
     *           ===== preventExtensions() 트랩 준수사항 =====
     *
     *      - target 오브젝트가 확장 불가일 때
     *      --> 즉, Object.isExtensible( target ) 결과가 false 일때
     *      --> false 를 반환하면 TypeError
     *      --> true 만 반환할 수 있다.
     */
}

/**
 *           ===== isExtensible() =====
 *           - Object.isExtensible()
 *           --> 오브젝트에 프로퍼티 추가 금지 여부 반환
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - 확장가능: true, 불가: false
 *      -----------------------------------------------------------
 *
 *      - Object.isExtensible() 트랩이다
 *      --> target 의 확장 가능 여부를 반환한다
 *
 *      - false 를 반환하게 하는 오브젝트 상태
 *      --> Object.seal();
 *      ----> 오브젝트에 프로퍼티 추가, 삭제 금지 설정
 *      ----> ""추가 금지는 오브젝트 단위로 설정""하고
 *            ""삭제 금지는 프로퍼티 단위로 설정""
 *      ----> 추가 금지를 하더라도 변경은 가능
 *
 *      --> Object.freeze();
 *      ----> 오브젝트에 프로퍼티 추가 , 삭제 , 변경 금지 설정
 *            (말 그대로 꼼짝 못하게 하는 것)
 *
 *      --> Object.preventExtensions();
 *      --> Reflect.preventExtensions();
 */
{
    "use strict"
    log('------------ isExtensible() 트랩 ---------------');
    const target = { point : 100 };
    const handler = {
        isExtensible( target ) {
            debugger;
            return Object.isExtensible( target );
        }
    };

    const obj = new Proxy( target , handler );
    debugger;
    log( Object.isExtensible( obj ) );
    // :: true
    debugger;
    log( Object.seal( target ) );
    debugger;
    log( Object.isExtensible( obj ) );
    // :: false
    debugger;

    // 1. log( Object.isExtensible( obj ) )
    //    isExtensible() 트랩이 호출된다

    // 2. target 오브젝트가 확장 가능 상태이므로
    //    true 를 반환한다

    // 3. Object.seal( target );
    //    target 오브젝트를 확장 불가 상태로 설정한다

    // 4. log( Object.isExtensible( obj ) );
    //    확장 불가 상태이므로 false 를 반환한다

    /**
     *           ===== isExtensible() 트랩 호출 =====
     *
     *      - isExtensible() 트랩이 호출되는 형태
     *      --> Object.isExtensible()
     *      --> Reflect.isExtensible()
     */

    /**
     *          ===== isExtensible() 트랩 준수사항 =====
     *
     *      - Object.isExtensible( target ) 결과와
     *      --> 같은 값을 반환해야 한다
     *      --> 즉, 결과를 바꿀 수 없다
     *      --> 같지 않으면 TypeError 가 발생한다
     */
}
