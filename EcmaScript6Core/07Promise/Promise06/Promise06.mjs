/**
 * 프로그람 설명문서 주석
 * 2022.04. 05 수업
 *
 *           ===== Promise 매커니즘 분석 =====
 *
 *      - new Promise(function(){}) 형태
 *
 *      - 실행자의 파라미터에 함수 이름 작성
 *
 *      - 파라미터 위치로 성공/실패 함수 처리
 *
 *      - 실행자에 resolve(); reject() 순서로 작성
 *
 *      - then()의 핸들러 함수에서 사용할 값을 인스턴스에 저장
 *
 *      - Promise 인스턴스 반환
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ new Promise() ---------------');
    new Promise( function( resolve , reject ){
       resolve("성공");
       debugger;
    });

    debugger;

    // 1. new Promise( function( resolve , reject ){ ... } )
    //    new 연산자로 Promise 를 호출하면
    //    prototype.constructor 를 호출하며
    //    인스턴스를 만든다

    // 2. 일반적으로 new Point( one , two )처럼
    //    인스턴스의 초깃값을 파라미터에 작성하지만

    // 3. 비동기 처리를 위한 환경을 만들기 위해
    //    파라미터에 함수를 사용했다
    //    코드의 확장성을 고려한 접근이다

    // 4. 실행자 함수는 constructor 의 확장이며
    //    constructor 에서 연속해서 실행한다
    /**
     *  - 정해진 패턴이 아니라, 개발자가 함수안에 작성한 코드로
     *    처리를 하겠다라는 접근!
     */
}
{
    log('------------ 실행자의 파라미터에 함수 이름 작성 ---------------');
    /**
     *  - resolve , reject 은 이미 Function 오브젝트로 만들어져 있다.
     */
    new Promise(( resolve , reject ) => {
        resolve('성공');
        reject('실패');
        debugger;
    }).then( value => log( value ) , reason => log( reason) );
    // :: 성공
    debugger;

    // 1. resolve, reject 는 함수 이름이며
    //    엔진이 이름의 Function 오브젝트를 생성한다

    // 2. resolve( '성공' );
    //    실행자의 파라미터가 Function 오브젝트 이므로
    //    resolve() 함수를 호출할 수 있다

    // 3. 함수 호출은 단지 파라미터 값인 '성공'을
    //    설정하는 것 외에도 부자거인 처리를 한다는
    //    의도가 포함되어 있다
    /**
     *  - 파라미터 '성공' 을 then 에서 사용하기 위해 값을 설정한다!
     *    이것만이 함수로만든 의도가 아니다
     *  --> resolve() 함수를 호출하면, 엔진에서 맨든 함수니깐
     *      부가적인 처리를 할 수 있다
     */

    // 4. abc() 처럼 실행자의 파라미터에
    //    함수 이름이 없는 함수를 호출하면
    //    에러가 발생하지 않지만
    //    then()의 핸들러 함수가 실행되지 않는다
    /**
     *  - 따라서 반드시 Promise 의 파라미터에 있는 함수이름을
     *    함수안에 작성해야 한다.
     *  --> 그래야 then()의 핸들러 함수가 실행된다.
     */

    // 5. resolve('성공')이 호출되면
    //    실행자 파라미터의 resolve 가 호출되며
    //    파라미터의 resolve 함수는 엔진에서 만든 것이므로
    //    엔진 내부 처리를 할 수 있다
}
{
    log('------------ 파라미터 위치로 성공/실패 함수 처리 ---------------');
    new Promise( ( one , two ) => {
        two();
    }).then( value => log('성공') , reason => {
        log('실패');
        debugger;
    });
    // :: '실패'
    debugger;

    // 1. two()를 호출하면
    //    then()의 두 번째 파라미터 함수가 호출된다

    // 2. 두 번째 파라미터는 실패를 나타내는 함수이다
    //    즉, 엔진은 호출된 파라미터 위치의 함수로
    //    성공/실패를 처리한다는 뜻이다

    // 3. 임의의 함수 이름을 사용할 수 있다
    //    resolve()와 reject()를 사용한 것은
    //    일반적인 시멘틱이기 때문이다

    // 4. 호출된 파라미터의 함수에 따라
    //    비동기 처리를 위한 즉, then()에서 사용하기 위한
    //    fulfilled 또는 rejected 를 Promise 인스턴스의
    //    [[ PromiseStatus ]]에 설정한다
    /**
     *  - Promise 처리가 끝나야 [[ PromiseStatus ]] 에 설정함
     */
}
{
    log('------------ 실행자에 resolve(), reject() 순서로 작성 ---------------');
    // resolve() , reject() 작성 순서만 다름
    new Promise(( resolve , reject ) => {
        reject('실패');
        resolve('성공');
        debugger;
    }).then( value => log( value ) , reason => {
       log( reason );
       debugger;
    });

    new Promise(( resolve , reject ) => {
        resolve('성공');
        reject('실패');
        debugger;
    }).then( value => {
        log( value );
        debugger;
    }, reason => log( reason ) );

    // :: 실패
    // :: 성공
    debugger;

    // 1. 성공과 실패가 모두 발생한다는 것은
    //    논리에 맞지 않는다
    //    따라서 성공/실패 중에서 하나만 발생한다

    // 2. reject() 함수, resolve() 함수 순서로 작성하면
    //    [[ PromiseStatus ]]가 rejected 가 된다

    // 3. resolve() 함수, reject() 함수 순서로 작성하면
    //    [[ PromiseStatus ]]가 fulfilled 가 된다

    // 4. 먼저 호출한 함수의 상태를 설정한다
    /**
     *  - resolve(), reject() 두개를 작성할 수 있지만,
     *    반드시 하나만 발생하며 발생하는 순서는
     *    작성한 순서, 호출한 순서에 따른다는 것이다
     */
}

{
    log('------------ then()의 핸들러 함수에서 사용할 값을 인스턴스에 저장 ---------------');
    const obj = new Promise( ( resolve , reject ) => {
        resolve( '성공' );
        debugger;
    });

    debugger;
    obj.then( value => {
        log( value );
        debugger;
    });
    log( '끝' );

    // :: 끝
    // :: 성공
    debugger;

    // 1. resolve( '성공' );
    //    파라미터 값 '성공'을 Promise 인스턴스의
    //    [[ PromiseResult ]]에 저장한다

    // 2. then()이 비동기로 처리되므로
    //    then()에서 값을 사용하기 위한 것이다

    /**
     *  - 비동기로 then 을 실행하기 전에 연결이 끊어지는데
     *    파라미터 값을 알수 없기 때문에 Promise 인스턴스에 그 값을
     *    설정하게 된다라는 것.
     */

    // 3. [[ PromiseStatus ]]에 값을 설정하는 것도
    //    같은 접근이다.
}
{
    log('------------ Promise 인스턴스 반환 ---------------');

    new Promise( resolve => {
        resolve( 100 );
        /**
         * - 여기에서 return 값 200 을 반환하는 것이 아니라
         *   Promise 200 을 생성하여 반환한다
         */
    }).then( value => {
        log( value );
        debugger;
        return 200

        /**
         *  - Promise 인스턴스가 반환되므로, Promise 인스턴스에
         *    있는 then 을 호출할 수 있는 것이다.
         */
    }).then( value => {
        log( value );
        debugger;
    });

    // :: 100
    // :: 200

    // 1. then(), catch() 에서
    //    Promise 인스턴스를 생성하여 반환한다

    // 2. 처음의 then()은 비동기로 실행되지만
    //    이어지는 처리는 동기/비동기로 실행할 수 있다

    // 3. 실행 중인 then()에서 비동기 처리를 하지 않으면
    //    이어지는 then()/catch()는
    //    동기 형태로 처리하게 된다

    // 4. 실행 중인 then()에서 다시 비동기로 처리하면
    //    이어지는 then()/catch()는
    //    비동기로 처리하게 된다.
    /**
     *  - 만약 위에서 return 200 을 하지않고
     *    new Promise()로 인스턴스를 만들어서 처리게되면
     *    그것은 비동기가 될것이다
     */

    // 5. Promise 인스턴스를 생성하여 반환하므로
    //    이어지는 처리를 동기/비동기로 모두 처리할 수 있다.
    /**
     *  - then 에서 뭘반환하든 , Promise 객체의 인스턴스로 반환하므로,
     *    다시 then()에서 동기/비동기를 다 받아 카바 할 수 있다
     *
     *  --> then(), catch() 에서 Promise 인스턴스를 반환하므로
     *      이어지는 처리를 모두 카바가능!
     */
}