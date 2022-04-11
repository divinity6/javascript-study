/**
 * 프로그람 설명문서 주석
 * 2022.04. 07 수업
 *
 *           ===== await =====
 *
 *      - Syntax
 *      --> [ value ] = await 표현식
 *      --> async 함수 안에 작성한다
 *      --> [ value ] 는 선택이다
 *
 *      - 표현식이 Promise 오브젝트이면
 *      --> resolve()의 파라미터 값을 반환한다
 *      ----> Promise 객체를 반환하지 않는다라는 것!
 *
 *      - 표현식이 Promise 오브젝트가 아니면
 *      --> 표현식의 평가 결과를 반환한다
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ 표현식이 Promise 오브젝트 ---------------');
    function create( param ){
        return new Promise( resolve => {
            /**
             *  - 파라미터가 await 의 value 에 할당
             */
            resolve( param );
        });
    };

    async function getPoint( option ){
        /**
         *  - Promise 인스턴스를 value 에 할당하지 않고
         *    resolve() 함수가 호출될때까지 기다린다.
         *
         *  --> 그 후 resolve() 에서 보낸 param 값을
         *      value 변수에 할당한다는 것.
         *
         *  --> 만약 await 가 없다면 value 에 Promise
         *      인스턴스가 할당될 것이다.
         */
        const value = await create.call( window , option );
        log( value );
        // :: { point : 100 }
        debugger;
    }

    getPoint({ point : 100 });
    debugger;

    // 1. const value = await create( option );
    //    create() 함수를 호출한다

    // 2. 호출된 함수에서 Promise 인스턴스를 반환한다
    //    따라서 아래 코드로 이동하게 되는데
    //    await 로 인해 resolve( param )이 실행되어
    //    param 값을 보낼 때까지 기다린다

    // 3. resolve( param )을 실행한다
    //    보낸 값을 받아 value 변수에 할당한다

    // 4. log( value )를 실행한다
}
{
    log('------------ 표현식이 Promise 가 아닐 때 ---------------');
    async function getPoint( option ){
        // 표현식이 평가 결과가아니라도 비동기로 처리되네
        // - 지연되서 처리됨ㅋㅋㅋ
        const value = await option.point + 200;
        log( value );
        // :: 300
        debugger;
    };
    getPoint( { point : 100 });

    // 1. const value = await option.point + 200;
    //    option 은 파라미터 값으로 { point : 100 } 이다
    //    await 표현식이 Promise 오브젝트가 아니다

    // 2. 이때에는 표현식의 평가 결과를 반환한다

    // 3. await 가 비동기 환경에서
    //    동기 처리를 위한 것이므로
    //    표현식이 비동기 처리가 아니면 의미가 약하다
    /**
     *  - Promise 객체가 아니면 굳이 async / await 로 사용할
     *    이유가 그다지 없다라는 뜻
     *    ( 비동기 처리에 대한 코드를 작성하는 것이 더 의미가 있음 )
     */
}
/**
 *           ===== await =====
 *
 *      - Promise 에서 reject()가 발상했을 때
 *      --> 에러에 대처하는 형태이다
 *
 *      - try-catch 를 사용한 형태
 *
 *      - catch()를 사용한 형태
 *
 *      - Promise 가 아닌 값을 반환하는 형태
 */
{
    log('------------ try-catch 사용 ---------------');

    function create( param ){
        return new Promise(( res , reject ) => {
            reject( param );
        })
    };

    async function getPoint( option ){
        try {
            const value = await create( option );
        } catch( error ){
            log( error );
            // :: { point : 100 }
            debugger;
        }
    };

    getPoint( { point : 100 });

    // 1. reject( param );
    //    Promise 에서 reject()가 실행되면

    // 2. catch( error ) 블록에서 받는다
    //    reject( param )의 param 이
    //    catch( error )의 error 에 설정된다

    // 3. try-catch 로 에러 발생에 대응할 수 있다
    /**
     *  - Promise 를 사용하면서,
     *    try-catch 를 사용한다...
     *    약간 고전적인 냄새가 나는 것이다.
     */
}
{
    log('------------ catch() 사용 ---------------');
    function create( param ){
        return new Promise(( res , reject ) => {
            reject( param );
        })
    };

    /**
     *  - 에러를 대응할때는 되도록 catch() 사용
     */
    async function getPoint( option ){
        // then() 까지 전부 실행되고 나서, getPoint() 함수블록이 실행되는군!
        // - 이 함수 블록도 .then() 의 실행 순서 단계를 한단계 거치는군!!
        const value = await create( option ).catch( value => {
            debugger;
            return 300;
        } ).then( param => {
            log( param );
            debugger;
            return param;
        } );
        log( value );
        log( '마지막 실행' );
        debugger;
    };
    getPoint( { point : 100 });
    // :: 300
    // :: 300
    // :: 마지막 실행
    debugger;

    // 1. reject( param );
    //    reject() 처리이므로 catch()가 실행된다

    // 2. catch( value => { ... } );
    //    reject( param )의 param 값이 value 에 설정된다.

    // 3. return 300;
    //    300이 반환되지 않고 Promise 인스턴스를 반환하므로
    //    아래의 then()이 호출된다

    // 4. then( param => { ... }
    //    catch()에서 return 300 은 정상 처리이므로
    //    첫 번째 파라미터 함수가 실행되며
    //    param 에 300 이 설정된다.
}
{
    log('------------ Promise 가 아닌 값을 반환 ---------------');

    function create( param ){
        return new Promise(( res , reject ) => {
            reject( param );
        })
    };

    async function getPoint( option ){
        const value = await create( option ).catch( value => {
            return 300;
        });
        /**
         *  - catch 에 .then() 이 연결되어 있지 않으면 Promise 인스턴스를
         *    반환하는 것이 아니라 그냥 쌩 값을 반환한다
         */
        log( value );
        // :: 300
        debugger;
    };

    getPoint( { point : 100 } );
    debugger;

    // 1. 앞은 catch().then() 형태이지만
    //    여기는 catch()가 끝이다

    // 2. return 300;
    //    catch()에 then()이 연결되어 있으면
    //    Promise 인스턴스를 반환하지만
    //    then() 연결이 없으면 300을 반환한다

    // 3. log( value )
    //    300을 반환하므로 300이 출력된다
}
/**
 *           ===== for-await-of =====
 *
 *      - Syntax
 *      --> for await ( variable of iterable ) { ... }
 *      --> async 함수에서 사용할 수 있다
 *
 *      - 동기 반복에서 사용할 수 있지만
 *      - 일반적으로 비동기 반복에서 사용
 */
{
    log('------------ 동기 반복에 사용 ---------------');
    const list = [ 10 , 20 ];
    async function show(){
        /**
         * - for-await-of 도 매 반복마다
         *   .then() 의 실행 순서 단계를 한단계 거치는군!!
         *
         * --> 상대가 비록 동기 일지라도!!
         */
        for await ( const value of list ){
            log( value );
            // :: 10
            // :: 20
            debugger;
        }
        debugger;
    };
    show();
    debugger;

    // 1. for await ( variable of iterable ) { ... }
    //    iterable 에 이터러블 오브젝트를 작성한다
    //    [ 10 , 20 ]은 이터러블 오브젝트이다
    //    variable 에 const/let/var 변수를 작성한다

    // 2. for await ( const value of list ){ ... }
    //    [ 10 , 20 ]의 엘리먼트를 하나씩 반복하면서
    //    값을 value 에 설정하고
    //    log( value )로 값을 출력한다

    // 3. 배열에서 Promise 인스턴스를 반환하지 않으므로
    //    이것은 비동기 반복이 아니라 동기 반복이다.
    /**
     *  - 일반적으로 동기보다는 비동기 반복에 사용한다.
     */
}
{
    log('------------ 비동기 반복 ---------------');

    // 제너레이터 함수가 Promise 인스턴스 반환
    async function* point(){
        yield 10;
        yield 20;
    };

    async function show(){
        /**
         *  - async 제너레이터 Point
         *    함수를 실행하면
         *    Promise 인스턴스 반환!!
         *
         *  --> Promise 인스턴스를 반환하는 논리는
         *      다음 세션에서!!
         */
        for await ( const value of point() ){
            log( value );
            debugger;
        }
    };
    const obj = show();
    // :: 10
    // :: 20
    debugger;

    // 1. for await ( const value of point() ){ ... }
    //    point() 제너레이터 함수를 호출하면
    //    Promise 인스턴스를 반환하므로
    //    비동기로 반복하게 된다

    // 2. 제너레이터 함수가 Promise 인스턴스를
    //    반환하는 논리는 다음 세션에서 다룬다
}