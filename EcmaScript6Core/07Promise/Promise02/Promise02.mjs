/**
 * 프로그람 설명문서 주석
 * 2022.03. 20 수업
 *
 *           ===== new Promise() =====
 *
 *     -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - executor ( function( resolve , reject ) {...} )
 *                             --> 실행자 함수 형식 ( 성공 , 실패처리 함수이름 )
 *                                 ( arguments 는 하나의 콜백함수임! )
 *      - 반환                  - 생성한 Promise 인스턴스
 *      -----------------------------------------------------------
 *
 *      - Promise 인스턴스를 생성하여 반환한다
 *
 *      - 파라미터에 실행자( executor ) 함수를 작성한다
 *      --> 성공, 실패 처리 함수 이름
 *      --> 실행자 코드
 *
 *      - 스펙 : deferred action
 *      --> MDN : Promise chain
 *      --> obj.then(( value ) => { log( value ) },
 *                   ( reason ) => { log( reason ) };
 *      - Promise 오브젝트 형태
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ new Promise() ---------------');
    const obj = new Promise( ( resolve , reject ) => {
        /**
         *  - resolve() 후 reject() 가 실행되는 것이 아니라,
         *    상태가 하나만 발생하므로 둘 중에 하나가 실행된다라는 것
         */
       resolve( '성공' );
       reject( '실패' );
    });

    obj.then( ( value ) => {
        debugger;
        log( value );
    } , ( reason ) => {
        log( reason );
    });
    log( "끝" );
    // :: 끝
    // :: 성공
    debugger;

    // 1. const obj = new Promise(( resolve , reject ) => { ... } );
    //    Promise 인스턴스를 생성하여 obj 에 할당한다

    // 2. resolve 와 reject 이름의
    //    Function 오브젝트를 생성하여 인스턴스에 설정한다
    /**
     *  - 파라미터에 resolve , reject 를 작성했지만
     *  --> 실제 인스턴스에 resolve , reject 이름을 가진
     *      function 을 생성한다.
     *
     */

    // 3. resolve( "성공" ); reject( "실패" );
    //    실행자 처리를 성공하면 resolve() 가 호출되고
    //    실패하면 reject() 가 호출된다

    // 4. 지금 호출하지 않고 코드를 끝까지 실행한 후 호출한다

    // 5. 이것이 Promise 의 비동기 처리( 실행 )이다

    /**
     *  - deferred action or Promise chain 이라고 명칭
     */
    // 6. obj.then(( value ) => { 1 } , ( reason ) => { 2 } );
    //    then() 을 실행하지 않는다
    //    아래로 내려간다

    // 7. log( "끝" )을 실행한다
    //    여기서 전체 흐름이 끝나지만
    //    실행자의 resolve() 와 reject() 실행이 남았다

    // 8. 실행자에서 resolve( "성공" ) 또는
    //    reject( "실패" )를 호출한다
    //    상태가 하나만 발생하므로
    //    상태에 해당하는 함수만 호출한다
    //    여기서는 resolve( "성공" )를 호출한다

    // 9. then()을 호출한다
    //    then() 단위로 파라미터의 함수를 실행하게 된다
    /**
     *  - then 메소드 단위!!
     */

    // 10. then(( value ) => { log( value ) },
    //     실행자에서 resolve( "성공" )를 호출하면
    //     then()의 첫 번째 파라미터 함수가 실행되며
    //     resolve( "성공" )에서 "성공"이 value 에 설정된다

    // 11. 엔진에서는 상태( fulfilled , rejected )에 따라
    //     파라미터의 핸들러 함수를 실행한다
    /**
     *  - resolve 가 실행되었다라는 것은 fulfilled 상태라는 것!
     *  --> 엔진은 이것을 보고서 첫번째 함수, 또는 두 번째 함수를 실행시키는 것!!
     */

    // 12. then(( reason ) => { log( reason ) };
    //     실행자에서 reject( "실패" )를 호출하면
    //     then()의 두 번째 파라미터 함수가 실행되며
    //     reject( "실패" )에서 "실패"가 reason 에 설정된다
    /**
     *  - 이코드에서는 reject 는 실행하지 않는다
     */
}
{
    log('------------ Promise 오브젝트 형태 ---------------');
    debugger;

    const promise = Promise;
    /**
     *  1. Promise 오브젝트 형태를 살펴본다
     *
     *  2. promise 를 펼치면 프로퍼티와 함수가 있다
     *
     *  3. prototype 에 constructor 가 있으며 메소드가 있다
     *  -  자바스크립트의 일반적인 형태이다
     */
    debugger;

    const obj = new Promise( ( resolve , reject )=> {

        // 이안의 코드들은 실행은 하지만 resolve 와 reject 는 호출하지 않는다라는 것.
        resolve( [ 1 , 2 , 3 ] );
        reject( '실패' );
        log( "실행자" );
    });
    /**
     *  1. resolve 와 reject 이름의 Function 오브젝트를 생성한다
     *  -  Function 오브젝트이므로 호출할 수 있다
     *
     *  *** 코드 끝까지 처리한 후 실행한다
     *  11. resolve( [ 1 , 2 , 3 ] )을 호출하며 then()이 호출된다
     *  -   [[PromiseStatus]]: "fulfilled" 이므로
     *  -   then() 의 첫 번째 파라미터 함수를 실행하게 된다
     */

    debugger;

    /**
     *  2. obj.__proto__ 를 펼치면
     *  --> Promise.prototype 에 연결된 메소드가 표시된다
     *
     *  3. [[PromiseStatus]] : "fulfilled"
     *  -  Promise 상태를 나타내며 "fulfilled" 상태를 뜻한다
     *  --> 즉, 성공이라는 뜻이다
     *
     *  4. [[PromiseResult]] : Array(3)
     *  -  resolve([ 1 , 2 , 3 ])의 파라미터에 작성한 값이다
     *  --> 이것을 저장해 둔 것이다.
     *      ( 왜냐하면 인스턴스를 만드는 과정에서 연결이 끊어지니깐
     *        resolve 가 호출되는 과정에서 파라미터 값으로 사용하기 위해서이다. )
     *
     */
    debugger;

    obj.then( value => {
       log( value );
       // resolve( [ 1 , 2 , 3 ])의 [ 1 , 2 , 3 ]이 value 에 설정된다
    }, reason => {
        log( reason );
    });
    /**
     *  1. then() 의 파라미터에 성공, 실패 핸들러 함수를 작성했다
     */
    debugger;
    log( "끝" );
    /**
     *  1. log( "끝" )을 싱행한다
     *  -  실행자 블록으로 이동한다
     *
     *  2. 이때, then() 의 첫번째, 두번째 파라미터 중 실행기준은
     *     [[PromiseStatus]] 기준인 것이다.
     */

    // :: 실행자
    // :: 끝
    // :: [ 1 , 2 , 3 ]
    debugger;

}
