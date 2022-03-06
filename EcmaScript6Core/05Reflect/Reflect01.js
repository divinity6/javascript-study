/**
 * 프로그람 설명문서 주석
 * 2022.03. 06 수업
 *
 *           ===== Reflect 오브젝트 =====
 *      ------------------------------------------------
 *           - Proxy 오브젝트 및 [[Get]],[[Set]] 의
 *             this 를 변경하거나 에러를 대응하기 위한 오브젝트
 *             ( proxy trap 로 처리 할 수 있는지 check 등 )
 *      ------------------------------------------------
 *
 *      - 빌트인 오브젝트
 *
 *      - constructor 가 없으므로
 *      --> 인스턴스를 생성할 수 없다
 *
 *      - Reflect.get() 형태로 호출
 *
 *      - 에러 대응 형태
 *      --> try-catch 로 에러 대응
 *      --> true , false 를 반환
 *
 *
 */

console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ Reflect 함수 호출 ---------------');
    const target = { point : 100 };
    log( target.point );

    // :: 100
    log( Reflect.get( target , "point" ) );
    // :: 100
    debugger;

    // 1. Reflect.get( target , "point" );
    //    target 에서 point 프로퍼티 값을 구한다
    //    target 에 대상 오브젝트를 작성하고
    //    "point" 에 프로퍼티 키를 작성한다

    // 2. [[Get]]( "point" , receiver ) 형태로
    //    target 의 [[Get]] 을 실행한다
    //    receiver 는 Reflect.get() 에서 다룬다

    // 3. 100 을 반환한다

    // 4. 값을 구하는 것은 target.point 와 같지만
    //    Reflect.get() 은 부가 기능이 있다
}
{
    "use strict"
    log('------------ try-catch 로 에러에 대응 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 100,
        writable : false,
    });
    try {
        Object.defineProperty( target , "point" , {
            value : 200
        });
    } catch {
        log( "에러 발생" );
    };
    // :: 에러 발생

    debugger;
    // 1. { value : 100 , writable : false }
    //    { writable : false } 이므로
    //    value 속성 값을 바꿀 수 없다

    // - try-catch 에서
    // 2. value : 200
    //    value 속성 값을 바꾸면 에러가 발생한다.
    //    그래서 try-catch 를 사용했다.

}

{
    "use strict"
    log('------------ 반환 값을 체크하여 대응 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 100 , writable : false,
    });

    debugger;
    /**
     * - Reflect 는 반환값이 해당하는 값이 맞는지 체크하는건가...?
     * --> 아하, 처리가능하면 처리하고 반환은 true 를 하는구나
     *
     * --> 반대로, 처리 불가능하면 false 를 반환하네!!
     */
    const check = Reflect.defineProperty( target , "point" , {
        value : 200
    });
    log( check );
    // :: false
    debugger;

    // 1. { value : 100 , writable : false }
    //    { writable : false } 이므로
    //    속성 값을 바꿀 수 없다

    // - Reflect 오브젝트 사용
    // 2. value : 200
    //    value 속성 값을 바꾸면 에러가 발생한다

    // 3. 이때, 프로그램이 중단되지 않고
    //    처리 실패를 뜻하는 false 를 반환한다
    //    성공이면 true 를 반환한다

    // 4. log( check );
    //    false 가 출력된다
}
/**
 *           ===== Proxy 사용 =====
 *
 *      - Reflect 오브젝트의 함수는
 *      --> Proxy 트랩에 1:1 로 대응하며
 *          트랩 이름과 함수 이름이 같다
 *
 *      - 심지어 트랩 파라미터와
 *      --> Reflect 함수의 파라미터가 같다
 *
 *      - Reflect 오브젝트 형태
 */

{
    "use strict"
    log('------------ Proxy 와 Reflect 의 파라미터가 같다 ---------------');
    const target = { point : 100 };
    const handler = {
        /**
         * - 트랩의 파라미터와 Reflect 의 파라미터도 같다
         */
        get( target , key , receiver ){
            debugger;
            return Reflect.get( target , key , receiver ) + 200;
        }
    };
    const obj = new Proxy( target , handler );
    debugger;
    log( obj.point );
    // :: 300
    debugger;

    // 1. log( obj.point )
    //    getter 이므로 get() 트랩이 호출된다

    // 2. 트랩 : get( target , key , receiver ){ ... }
    //    target 파라미터에 target 이 설정된다
    //    key 에 "point" 가 설정되고
    //    receiver 에 Proxy 인스턴스가 설정된다

    // 3. Proxy 의 get() 트랩과 Reflect.get() 함수에서
    //    트랩 이름과 Reflect 함수 이름이 같으며
    //    파라미터도 같다
    //    13개 트랩에 대응하는 Reflect 함수가 있다

    // 4. 트랩 : return Reflect.get( target , key , receiver ) + 200;
    //    Reflect.get() 은 obj.point 로 값을 구하는 본래 기능을 수행한다

    // 5. 구한 값 100 에 200 을 더해 반환하는 것은 부가 기능으로
    //    이것은 트랩의 기능이다.
    /**
     *  - Reflect.get() 의 기능은 obj.point 와 같이 값을 구하는
     *    본래의 기능을 수행한다라는 것.
     *
     *  --> 13 개의 ProxyTrap 과 대응한다!
     */
}

{
    "use strict"
    log('------------ Reflect 오브젝트의 형태 ---------------');
    debugger;

    const obj = Reflect;
    /**
     *  1. Reflect 오브젝트 구조를 보기 위해 obj 에 할당했다.
     *
     *  2. obj 에 표시된 함수를
     *  - Reflect.get() 형태로 사용할 수 있다
     *
     *  3. 함수 이름이 Proxy Trap 이름과 같다
     *
     *  4. Reflect 오브젝트에
     *  - Prototype 과 Prototype.constructor 가 없다
     *  - 따라서 new 연산자로 인스턴스를 생성할 수 없으며
     *  - Prototype 에 메소드를 연결할 수 없다
     *
     *  5. 표시된 construct 는 Reflect.construct 이다.
     *     ( ProxyTrap 의 construct 와 같음 )
    */
    debugger;
}
