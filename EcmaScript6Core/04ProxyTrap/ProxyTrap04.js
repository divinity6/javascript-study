/**
 * 프로그람 설명문서 주석
 * 2022.02 27 수업
 *
 *           ===== has() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *      - 반환                  - 존재하면 true, 아니면 false
 *      -----------------------------------------------------------
 *
 *      - in 연산자의 트랩이다 ( in 할때 호출 )
 *      ----> 아하 in 연산자를 사용해서 호출하는 구낭!
 *      --> target 에 key 의 존재 여부를 반환한다
 *      --> 프로퍼티 값을 true/false 로
 *          변환하여 반환한다
 *
 *      --> 두 번째 파라미터에 Symbol 작성 가능
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ has() 트랩 ---------------');
    // 만약 point : 0 이면 target[ key ] 로 반환하면 false 로 인식한다
    const target = { point : 100 };
    const handler = {
        has( target , key ){
            debugger;
            /**
             *  - 값을 그대로 return 하지 않고
             *    true/false 로 변환하여 return 한다
             */
            return target[ key ];
            // return 50;
        }
    };

    const obj = new Proxy( target , handler );
    // "point" 가 obj 에 있는지 물어보는 것
    log( "point" in obj );
    // :: true
    log( "book" in obj );
    // :: false
    debugger;

    // 1. log( "point" in obj );
    //    has() 트랩이 호출된다

    // 2. has( target , key ){...}
    //    target 이 target 에, "point" 가 key 에 설정된다

    // 3. return target[key]
    //    target 에 point 가 있으며 값은 100이다

    // 4. 이때, 100을 그대로 return 하지 않고
    //    true/false 로 변환하여 return 한다

    // 5. 100 은 true 로 변환되므로 true 를 반환한다
    //    0 을 true/false 로 변환하면 false 이다

    // 6. log( "book" in obj );
    //    obj 에 book 이 없지만, has() 트랩을 호출한다

    // 7. return target[ key ];
    //    undefined 를 반환하게 되지만
    //    undefined 를 false 로 변환하여 반환한다
}
/**
 *           ===== has() 트랩 호출 =====
 *
 *      - has() 트랩이 호출되는 형태
 *      --> key in proxy
 *      --> key in Object.create( proxy , { 프로퍼티 } )
 *      --> Reflect.has()
 */
{
    "use strict"
    log('------------ key in Object.create() ---------------');
    const target = { point : 600 , bonus : 100 };
    const handler = {
        has( target , key ) {
            debugger;
            return target[key];
        }
    };
    const proxy = new Proxy( target , handler );
    const obj = Object.create( proxy , {
        /**
         *  내부메서드 [[Has]] 는 값이 0 이어도 true 를 반환하는 구먼...
         */
        // point : { value : 500 },
        point : { value : 0 },
    } );
    // obj 자체가 가지고있는 point 를 타기때문에 handler.has() 트랩을 안탐
    log( "point" in obj );
    // :: true
    log( "bonus" in obj );
    // :: true

    debugger;
    // 1. log( "point" in obj );
    //    obj 인스턴스 프로퍼티로 point 가 있으므로
    //    has() 트랩을 호출하지 않는다

    // 2. point 값 500을 반환하지 않고
    //    true/false 로 변환하여 반환하므로
    //    true 가 반환된다

    // 3. log("bonus" in obj );
    //    obj 인스턴스 프로퍼티로 bonus 가 없으므로
    //    has() 트랩을 호출한다

    // 4. has() 트랩에서
    //    target[ key ] 의 값은 100이며
    //    100을 true/false 로 변환하면 true 이다
}
/**
 *           ===== has() 트랩 준수사항 =====
 *
 *      - 오브젝트에 프로퍼티가 있으면서
 *      --> 오브젝트가 프로퍼티 추가 금지이거나
 *          [[Configurable]] : false 이면
 *          ( :: 프로퍼티 삭제 가능, 불가 여부 )
 *
 *      --> false 를 지정하여 반환할 수 없지만
 *      --> true 는 지정하여 반환할 수 있다
 *          ( 의도적으로 true/false 를 지정해서 반환한다 라는 뜻
 *            --> 그러나 이것은 좋은 방법은 아니고 아래의 방법으로 반환하는게
 *                더 좋다 )
 *
 *      - 강제로 true/false 를 반환하지 않고
 *      --> has() 트랩에서 구한 값을
 *      --> true/false 로 변환하여 반환한다
 */
{
    "use strict"
    log('------------ false 를 지정하여 반환 불가 ---------------');
    const target= { point : 100 };

    /**
     *  - preventExtensions()
     *  --> 오브젝트에 프로퍼티 추가 금지 설정
     *  --> 프로퍼티 삭제,변경은 가능
     *  --> 추가 금지를 설정한 후에는 추가 가능으로 변경 불가
     */
    Object.preventExtensions( target );

    const handler = {
        has( target , key ){
            log( "has 트랩 실행" );
            debugger;
            // return false;
            return target[ key ];
        }
    };

    const obj = new Proxy(target , handler);
    log("point" in obj);
    // :: true;
    debugger;

    // 1. Object.preventExtensions( target );
    //    target 오브젝트를
    //    프로퍼티 추가 금지 상태로 설정한다

    // 2. log( "point" in obj );
    //    추가 금지 상태라도 has() 트랩이 호출된다

    // 3. // return false
    //    추가 금지 상태에서
    //    false 를 지정하여 반환하면 에러가 발생한다
    //    그래서 주석으로 처리했다.

    // 4. return target[ key ];
    //    has() 트랩에서 구한 값을
    //    true/false 로 변환하여 반환하면
    //    에러가 나지 않는다
}

/**
 *           ===== deleteProperty() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 데이터(값)
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *      - 반환                  - 처리 성공 : true, 실패 : false
 *      -----------------------------------------------------------
 *
 *      - delete 연산자의 트랩이다 ( delete 할때 호출 )
 *      --> 오브젝트의 프로퍼티를 삭제한다
 *
 *      - delete 연산자는
 *      --> 프로퍼티가 없어도 true 를 반환하므로
 *      --> 코드처럼 조건을 체크하여
 *          true/false 를 반환하면
 *          완전하게 처리할 수 있다
 */
{
    "use strict"
    log('------------ deleteProperty() 트랩 ---------------');
    const target = { point : 100 };
    const handler = {
        deleteProperty( target , key ){
            debugger;
            if ( key in target ){
                delete target[key];
                return true;
            }
            return false;
        }
    };

    const obj = new Proxy( target , handler );
    log( delete obj.point );
    // :: true;
    debugger;
    log( target.point );
    // :: undefined
    log( delete obj.point );
    // :: false
    log( delete target.point );
    // :: true
    debugger;

    // 1. log( delete obj.point )
    //    deleteProperty() 트랩이 호출된다

    // 2. if ( key in target ){...}
    //    target 오브젝트에 point 프로퍼티가 있으므로
    //    point 프로퍼티를 삭제하고 true 를 반환한다

    // 3. log( target.point );
    //    트랩에서 point 프로퍼티를 삭제했으므로
    //    undefined 가 출력된다

    // 4. log( delete obj.point );
    //    --> 이것은 삭제 했으므로 없어도,
    //    deleteProperty() 트랩이 호출된다
    //    트랩에서 target 에 point 프로퍼티가 없으므로
    //    false 를 반환한다

    // 5. log( delete target.point )
    //    deleteProperty() 트랩이 호출되지 않는다
    //    [[Delete]] 가 호출된다
    //    일반적인 delete 처리이다.
}
/**
 *           ===== deleteProperty() 트랩 호출 =====
 *
 *      - deleteProperty() 트랩이 호출되는 형태
 *      --> delete[ key ]
 *      --> Reflect.deleteProperty()
 */

/**
 *           ===== deleteProperty() 트랩 준수사항 =====
 *
 *      - target 오브젝트의 프로퍼티가
 *      --> [[Configurable]] : false 이면
 *          ( :: 프로퍼티 삭제 가능, 불가 여부 )
 *      --> 프로퍼티를 삭제할 수 없으며 에러가 발생한다
 */
{
    "use strict"
    log('------------ 프로퍼티 delete 불가 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 500 ,
        configurable : false
    });
    const handler = {
        deleteProperty(target, key) {
            /**
             * - Object.getOwnPropertyDescriptor()
             *
             * --> 프로퍼티 디스크립터의 속성 이름, 값 반환
             * --> 다른 오브젝트에서 받은 프로퍼티는 제외
             */
            const descriptor = Object.getOwnPropertyDescriptor( target , key );
            debugger;

            // configurable 이 true 이어야만 삭제할 수 있다
            if ( descriptor.configurable ){
                delete target[key];
                return true;
            }
            return false;
        }
    };
    const obj = new Proxy( target , handler );
    log(delete obj.point);
    // :: false
    debugger;

    // 1. log( delete obj.point )
    //    deleteProperty() 트랩이 호출된다

    // 2. Object.getOwnPropertyDescriptor( target , key );
    //    point 프로퍼티의 디스크립터를 구한다

    // 3. if ( descriptor.configurable ){...}
    //    configurable 이 true 이면 삭제할 수 있으며
    //    point 프로퍼티를 삭제하고 true 를 반환한다

    // 4. 한편, { configurable : false } 이므로
    //    false 를 반환한다
}