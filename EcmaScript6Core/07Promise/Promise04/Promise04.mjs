/**
 * 프로그람 설명문서 주석
 * 2022.03. 20 수업
 *
 *           ===== resolve() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 형태                  - Promise.resolve()
 *      - 파라미터               - value, promise , thenable
 *      - 반환                  - 성공 상태의 Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 성공( fulfilled ) 상태의
 *      --> Promise 인스턴스를 생성하여 반환한다
 *      --> Promise.resolve() 형태로 작성한다
 *      ----> 즉, 인스턴스가 아닌 함수 형태로 호출한다
 *
 *      --> 파라미터 값에 따라 생성 방법이 다르다
 *
 *      - 파라미터에 값을 작성하면
 *      --> 파라미터 값으로
 *          Promise 인스턴스를 생성하여 반환
 *
 *      - 파라미터에 Promise 인스턴스를 작성하면
 *      --> 파라미터의 Promise 인스턴스의 값을 사용하여
 *          Promise 인스턴스를 생성하여 반환
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ resolve() 파라미터에 값 작성 ---------------');
    // Promise 객체를 생성해서 [[PromiseResult]] 에 파라미터 값을 매핑하는 구나
    const obj = Promise.resolve( ["sports" , "music"] );

    obj.then( value => {
        log( value );
        debugger;
    });
    log("끝");
    // :: 끝
    // :: [ "sports" , "music" ]

    debugger;

    // 1. const obj = Promise.resolve( [ "sports" , "music" ] );
    //    resolve() 파라미터에 값을 작성했다
    //    값을 하나만 작성할 수 있으므로 다수를 작성하려면
    //    Array , Object 등을 사용해야 한다

    // 2. new 연산자를 사용하지 않지만
    //    Promise 인스턴스를 생성하여 반환한다
    //    성공( fulfilled ) 상태로 설정한다

    // 3. 성공 상태이므로
    //    then()의 첫 번째 파라미터 함수가 호출된다

    // 4. obj.then( value => { log( value ) } );
    //    Promise.resolve( [ "sports" , "music" ])의
    //    파라미터 값이 value 에 매핑된다.
}
{
    log('------------ 파라미터에 Promise 인스턴스 작성 ---------------');
    const obj = Promise.resolve( [ "sports" , "music" ]);
    debugger;
    /**
     * - resolve 에서 obj[[PromiseResult]] 값을 그대로
     *   resolve[[PromiseResult]] 에 매핑시키는구나.
     *
     * -[[PromiseStatus]] 또한 'fulfilled';
     */
    const resolve = Promise.resolve( obj );
    debugger;
    resolve.then( param => {
    debugger;
    log( param );
    // ;; [ 'sports' , 'music' ]
    });
    debugger;

    // 1. Promise.resolve( obj )
    //    resolve() 파라미터에
    //    Promise 인스턴스를 작성했다

    // 2. Promise 인스턴스를 생성하여 반환한다
    //    성공( fulfilled ) 상태로 설정한다

    // 3. resolve.then( param => { log( param ) };
    //    obj 인스턴스의 resolve() 파라미터 값이
    //    param 에 설정된다
}
/**
 *           ===== thenable() =====
 *
 *      - Promise.resolve()의 파라미터에
 *      --> then()을 작성한 형태이다.
 */
{
    log('------------ thenable ---------------');
    /**
     *  - thenable 형태로 작성하면
     *    obj 의 [[PromiseStatus]] 는 'pending' 상태이다
     *    ( 즉, then() 이 아직 안끝났으므로 대기상태임 )
     */
    const obj = Promise.resolve({
        /**
         *  - Object 안에 then 을 작성한 형태구나!!
         *  --> 이거가 obj.then() 처럼 사용되네!!
         *  --> 이름은 then 으로 고정해서 써야하구만!!
         */
        then( resolve , reject){
            debugger;
            resolve( [ 1 , 2 ] );
        },
    });
    obj.then( value => {
        log( value );
        debugger;
    });
    log( "끝" );
    // :: 끝
    // :: [ 1 , 2 ]
    debugger;

    // 1. const obj = Promise.resolve( { then(){ ... } } );
    //    resolve() 파라미터에 then(){ ... }을 작성했다
    //    Promise 인스턴스를 생성하여 반환한다
    //    then()을 실행하지 않고 아래로 이동한다

    // 2. obj.then( value => { log( value ) };
    //    then()을 실행하지 않는다

    // 3. log( "끝" )을 실행한다

    // 4. 이어서 Promise.resolve()의 then()을 실행한다

    // 5. then( resolve , reject ){ resolve( [ 1 , 2 ] ) };
    //    resolve( [ 1 , 2 ] )를 호출하며
    //    아래 then()의 첫 번째 파라미터 함수가 실행된다

    // 6. obj.then( value => { log( value ) } );
    //    resolve( [ 1 , 2 ] )의 [ 1 , 2 ]가 value 에 설정된다

    /**
     *  - Promise.resolve() 함수 안에 then() 을 작성한 것을
     *    thenable 이라고 한다
     */
}
/**
 *           ===== reject() =====
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 형태                  - Promise.reject()
 *      - 파라미터               - reject 사유
 *      - 반환                  - 실패 상태의 Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 실패( reject ) 상태의
 *      --> Promise 인스턴스를 생성하여 반환한다
 *      --> Promise.reject() 형태로 작성한다
 *
 *      - 파라미터에 reject 사유를 작성한다
 *
 *      - then()을 연결한 형태
 *
 *      - catch()를 연결한 형태
 */
{
    log('------------ then()을 사용한 형태 ---------------');
    const obj = Promise.reject( "실패" );

    /**
     *  - 실패 상태이므로 then 의 2 번째 파라미터가 실행!!
     */
    obj.then( value => log( value ), value => {
        debugger;
        log( value )
        // :: 실패
    });
    debugger;

    // 1. const obj = Promise.reject( '실패' );
    //    new 연산자를 사용하지 않지만
    //    Promise 인스턴스를 생성하여 반환한다
    //    실패( reject ) 상태로 설정된다

    // 2. 실패 상태이므로
    //    then()의 두 번째 파라미터 함수가 호출된다

    // 3. obj.then( ... , value => log( value ) );
    //    Promise.reject( "실패" )에서 "실패"가
    //    value 에 설정된다.
}
{
    log('------------ catch()을 사용한 형태 ---------------');
    const obj = new Error('에러 발생');
    /**
     * - Error 오브젝트로 Promise 인스턴스 생성
     */
    Promise.reject( obj ).catch( error => {
        log( error.message);
        debugger;
    } );
    log( "끝" );
    // :: 끝
    // :: 에러 발생
    debugger;

    // 1. const obj = new Error( "에러 발생" );
    //    Error 인스턴스를 생성한다

    // 2. Promise.reject( obj )
    //    obj 인스턴스를 사용하여
    //    Promise 인스턴스를 생성한다
    //    reject()를 실행하지 않는다

    // 3. log( "끝" )을 실행한다

    // 4. Promise.reject( obj )를 실행하며
    //    catch()가 호출된다

    // 5. catch( error => log( error.message ) );
    //    obj 인스턴스가 error 에 설정된다.
}
/**
 *  =====================================================
 *          성공과 실패가 결정되어 있는 상태라면!
 *              Promise.resolve() 또는,
 *              Promise.reject() 함수로
 *          Promise 인스턴스를 생성할 수 있다
 *
 *          - 이어서 then(), catch()등을 실행할 수 있다
 *  =====================================================
 */