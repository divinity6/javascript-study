/**
 * 프로그람 설명문서 주석
 * 2022.03. 04 수업
 *
 *           ===== construct() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - argumentsList, Array 또는 Array-like
 *                             - newTarget, ( 선택 )
 *      - 반환                  - 생성한 인스턴스
 *      -----------------------------------------------------------
 *
 *      - new 연산자의 트랩이다
 *      --> 인스턴스를 생성하여 반환한다
 *
 *      - construct() 트랩이 호출되는 형태
 *      --> const obj = new Proxy( Point, handler );
 *          new obj() 를 실행할 때 호출
 *
 *      --> Reflect.construct()
 *
 */
console.log("=====================================");
"use strict"
// console.log 사용
const {log} = window.console;
{
    "use strict"
    log('------------ construct() 트랩 ---------------');
    class Point {
        constructor( point ){
            debugger;
            this.point = point;
        }
    };

    const handler = {
        // target === Point class
        // args 에 배열형태로 할당
        construct( target , args , proxy){
            debugger;
            let point = args[ 0 ];
            if (Object.is( args[ 1 ] , "add" )){
                point += args[ 2 ];
            };
            return new target( point );
        }
    };

    const obj = new Proxy( Point , handler );
    debugger;
    const pointObj = new obj( 100 , "add" , 300 );
    log( pointObj );
    // :: 400
    debugger;

    // 1. const obj = new Proxy( Point , handler );
    //    Point 클래스로 Proxy 인스턴스를 생성한다

    // 2. const pointObj = new obj( 100, "add" , 300 );
    //    construct() 트랩이 호출된다

    // 3. 트랩 : construct( target , args , proxy ) { ... }
    //    target 에 Point 클래스가 설정되고
    //    args 에 [ 100, "add" , 300 ] 형태로 설정된다
    //    proxy 에 new Proxy() 로 생성한
    //    obj 인스턴스가 설정된다

    //  construct(){ ... } 트랩 처리
    // 4. Point 클래스의 constructor 를 호출하기 전에
    //    조건에 따라 인스턴스의 초깃값을 정리한다

    // 5. 트랩을 호출할 때마다 정리하지 않고
    //    트랩에서 일괄적으로 정리하면 효율이 높다

    // 6. 트랩을 이렇게 활용할 수 있다.

    /**
     * - 생성자를 호출하기 전에( 즉, Class 의 constructor 를 호출하기 전에... )
     * --> 트랩에 설정할 로직을 작성해서 넘겨주면
     * --> Class 를 심플하게 가져갈 수 있다!!
     *
     * --> Class 는 객체이기 때문에, 객체안에
     *     비즈니스 로직들이 들어가는 모습은 좋은 모습은 아니다.
     *
     * - 다른 클래스에서 상속을 받을 수 있고, 나름대로의 처리를 할 수 있는것.
     * --> Class 자체로...( 왜냐하면 Class 는 객체이기 때문 )
     *
     * - 그런 부분들을 터치하지 말고 Proxy 를 통해 정리를 하게 된다면
     * --> 코드가 깨끗하게 정리가 될 수 있는 것이다.
     */
}

/**
 *           ===== apply() =====
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 호출할 함수
 *                             - this, ( 선택 ) this 로 참조할 오브젝트
 *                             - ( 선택 ) 호출할 함수에 넘겨 줄 파라미터
 *      - 반환                  - 호출된 함수에서 반환한 값
 *      -----------------------------------------------------------
 *
 *      - 함수 호출 트랩이다
 *      --> Proxy 인스턴스 호출로
 *          트랩이 실행된 형태이다
 *
 *      --> call(), apply() 호출로
 *          트랩이 실행된 형태는 다음 페이지에 다룬다
 */
{
    "use strict"
    log('------------ apply() 트랩 ---------------');
    function getPoint( ...values ){
        debugger;
        return values.map( value => value + 10 );
    };

    const handler = {
        // that === undefined
        apply( target , that, params ){
            debugger;
            return target.apply( this , params );
        }
    }
    debugger;
    const obj = new Proxy( getPoint , handler);
    /**
     *  프록시 인스턴스를 호출!!
     */
    log( obj( 100 , 200 ) );
    // :: [ 110, 210 ];
    debugger;

    // 1. log( obj( 100 , 200 ) );
    //    obj 는 Proxy 인스턴스이며 이를 호출하면
    //    apply() 트랩이 호출된다

    // 2. 트랩 : apply( target , that , params ){ ... }
    //    target 에 getPoint 함수가 설정된다
    //    that 은 다음페이지에서 다룬다
    //    params 에 [ 100 , 200 ] 이 설정된다

    // 3. Proxy 인스턴스 호출로 인해 트랩이 실행되면
    //    that 에 값이 설정되지 않는다!!
    /**
     *  - Proxy 인스턴스를 호출해서 트랩을 실행하면
     *    that 에 값이 설정되지 않는구나!!
     */
}
/**
 *          ===== apply() 트랩 호출 =====
 *
 *      - apply() 트랩이 호출되는 형태
 *      --> Function.prototype.apply() 호출
 *      --> Function.prototype.call() 호출
 *      --> proxy( ...args ) : Proxy 인스턴스
 *      --> Reflect.apply()
 */
{
    "use strict"
    log('------------ apply() 호출 ---------------');
    function getPoint( ...values ){
        debugger;
        return values.map( ( value ) => {
            return value + this.bonus;
        });
    }

    const handler = {
        apply( target , that , params ){
            debugger;
            return target.apply( that , params );
        }
    };

    const obj = new Proxy( getPoint , handler );
    const add = { bonus : 10 };
    debugger;
    log( obj.apply( add , [ 100 , 200 ] ) );
    // :: [ 110 , 210 ]
    debugger;

    // 1. obj.apply( add , [ 100 , 200 ] );
    //    apply() 호출하면 apply() 트랩이 호출된다

    // 2. 첫 번째 파라미터에 getPoint() 에서
    //    this 로 참조할 오브젝트를 작성한다

    // 3. 두 번째 파라미터에 getPoint() 로 넘겨 줄
    //    파라미터 값을 작성한다

    // 4. 트랩 : apply( target , that , params ){ ... }
    //    target 에 getPoint 함수가 설정되고
    //    that 에 add 오브젝트가 설정된다
    //    params 에 [ 100 , 200 ] 이 설정된다
}
{
    "use strict"
    log('------------ call() 호출 ---------------');
    function getPoint( values ){
        debugger;
        return values.map( value => value + this.bonus );
    };

    const handler = {
        // rest 파라미터로 배열형태로 받음
        apply( target , that , ...params ){
            debugger;
            return target.apply( that , params );
        }
    };

    const obj = new Proxy( getPoint , handler );
    const add = { bonus : 10 };
    debugger;
    log( obj.call( add , 100 , 200 ) );
    // :: [ 110 , 210 ]
    debugger;

    // 1. obj.call( add , 100 , 200 )
    //    call() 호출하면 apply() 트랩이 호출된다

    // 2. 첫 번째 파라미터에 getPoint() 에서
    //    this 로 참조할 오브젝트를 작성한다

    // 3. 두 번째 파라미터 이후에 getPoint() 로 넘겨 줄
    //    파라미터 값을 작성한다

    // 4. call() 호출이므로
    //    두 번째 파라미터 이후에 콤마로 구분하여
    //    값을 작성한다

    // 5. 트랩 : apply( target , that , ...params ) { ... }
    //    target 에 getPoint 함수가 설정되고
    //    that 에 add 오브젝트가 설정된다
    //    params 에 [ 100 , 200 ] 이 설정된다.

    /**
     *  - apply() 트랩은 , call() 과 apply() 를 하나로
     *    묶은 형태가 되는 것이다.
     *
     *  --> 호출하는 형태는 call, apply 메소드와 같다!!
     */
}

/**
 *          ===== ownKeys() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *      - 반환                  - Array, 프로퍼티 키
 *      -----------------------------------------------------------
 *
 *      - Object.getOwnPropertyNames() 의 트랩이다
 *      --> target 의 모든 key 를 배열로 반환한다
 *
 *      --> [[Configurable]] : false 이거나
 *          오브젝트가 확장 불가라도 반환한다
 *
 *      - ownKeys() 트랩이 호출되는 형태
 *      --> Object.getOwnPropertyNames()
 *      ----> 열거 불가능하든 어찌든 모든 프로퍼티 키 반환
 *      --> Object.getOwnPropertySymbols()
 *      --> Object.keys()
 *      ----> 열겨 가능한 프로퍼티 키 반환
 *      --> Reflect.ownKeys()
 */
{
    "use strict"
    log('------------ ownKeys() 트랩 ---------------');
    const target = {};
    Object.defineProperties( target , {
        point : {
            value : 100,
            enumerable : true
        },
        bonus : {
            value : 200,
        }
    });

    const handler = {
        ownKeys( target ){
            debugger;
            return Object.getOwnPropertyNames( target );
        }
    };
    const obj = new Proxy( target , handler );
    debugger;
    log( Object.getOwnPropertyNames( obj ) );
    // :: [ "point" , "bonus" ]
    log( Object.keys( obj ) );
    // :: [ "point" ]
    debugger;

    // 1. log( Object.getOwnPropertyNames( obj ) );
    //    ownKeys() 트랩이 호출된다

    // 2. 트랩 : return Object.getOwnPropertyNames( target );
    //    target 오브젝트의 모든 프로퍼티 key 를 반환한다

    // 3. log( Object.keys( obj ) );
    //    트랩을 호출하며, 모든 프로퍼티 key 를 반환한다

    // 4. 한편, Object.keys() 는 { enumerable : false } 인
    //    프로퍼티는 반환하지 않는다
    //    그래서 "point" 만 출력된다
}
/**
 *          ===== getOwnPropertyDescriptor() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - target, 대상 오브젝트
 *                             - key, 프로퍼티 key
 *      - 반환                  - 디스크립터 또는 undefined
 *      -----------------------------------------------------------
 *
 *      - Object.getOwnPropertyDescriptor() 의 트랩이다
 *      --> 프로퍼티 디스크립터를 반환한다
 *
 *      - getOwnPropertyDescriptor() 트랩이 호출되는 형태
 *      --> Object.getOwnPropertyDescriptor()
 *      --> Reflect.getOwnPropertyDescriptor()
 */
{
    "use strict"
    log('------------ getOwnPropertyDescriptor() 트랩 ---------------');
    const target = {};
    Object.defineProperty( target , "point" , {
        value : 100 ,
        configurable : true,
    });
    const handler = {
        getOwnPropertyDescriptor( target , key ){
            const desc =
                Object.getOwnPropertyDescriptor( target , key );

            if ( desc.configurable ){
                debugger;
                return { value : 300 , configurable: true };
            }
        }
    };
    const obj = new Proxy( target , handler );
    debugger;
    log( Object.getOwnPropertyDescriptor( obj , "point" ));
    // :: {value: 300, writable: false, enumerable: false, configurable: true}
    debugger;

    // 1. log( Object.getOwnPropertyDescriptor( obj , "point" ) );
    //    트랩이 호출된다

    // 2. 트랩 : if ( desc.configurable ) { ... }
    //    디스크립터의 configurable 값이 true 이면
    //    value 속성 값을 바꾸어 반환한다

    // 3. point 프로퍼티가 { configurable : true } 이므로
    //    트랩에서 값을 바꾸어 반환할 수 있다
    //    { configurable : false } 일 때는 바꿀 수 없다
    /**
     *  - ProxyTrap 마무리!!!
     */
}