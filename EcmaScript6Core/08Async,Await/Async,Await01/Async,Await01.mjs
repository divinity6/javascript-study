/**
 * 프로그람 설명문서 주석
 * 2022.04. 06 수업
 *
 *           ===== async/await 개요 =====
 *
 *      - 비동기 환경에서 실행하지만
 *      --> 실행이 끝나야 다음을 실행한다
 *      --> 즉, 실행은 비동기이고
 *          실행 순서는 동기이다
 *
 *      - async 는 키워드가 아니며
 *      --> "async function"이 키워드 개념이며
 *      --> async 함수라고 부른다
 *
 *      - await 는 키워드
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;

{
    log('------------ async/await ---------------');
    function create( param ){
        debugger;
        return new Promise( resolve => {
            debugger;
            resolve( { book : '책'} );
        });
    };

    // async function 자체가 키워드 개념
    async function getPoint( option ){
        log( option );
        debugger;
        /**
         *  - Promise 실행자가 끝날때까지 아래 구문을 무시하고 진행하고,
         *    Promise 실행자가 끝나면, 그때 실행하는 구나!.
         *    ( await 가 끝나면... )
         */
        // await 은 키워드
        const value = await create( option );
        debugger;
        /**
         *  - value 에 Promise 객체가 들어가는 것이아니라
         *    Promise().then() 처럼 파라미터로 받아온것을
         *    실행하는 개념이구만
         */
        log( value );
        debugger;
    };
    // pending 상태구나
    const obj = getPoint( { point : 100 });
    // :: { point : 100 }
    // :: { book : '책'}
    debugger;

    // 1. async function getPoint( option ){ ... }
    //    비동기 함수로 선언한다

    // 2. const value = await create( option );
    //    create() 함수를 호출한다

    // 3. 호출된 함수에서 Promise 인스턴스를 생성하여 반환한다
    //    따라서 비동기 처리를 하게 된다
    //    즉, resolve()가 실행되기 전에 아래 코드를 실행한다

    // 4. 한편, await 는 아래로 내려가지 않고
    //    resolve()가 끝나는 것을 기다린다

    // 5. resolve( param )가 실행되면
    //    param 값을 create()로 보내며
    //    값을 받아 value 변수에 할당한다
    /**
     *  - 이것이 바로 실행은 비동기이고, 실행 순서는 비동기라는 뜻이다.
     *  --> 비동기라면
     *      log( value )를 실행하고
     *      resolve( param )을 실행하게 되는데,
     *      동기로 실행하므로 await 에서 기다려준다라는 것
     *      ( resolve 가 끝날때까지... )
     */
    // 6. 이어서 log( value )를 실행한다
}
/**
 *           ===== async 함수 =====
 *
 *      - 비동기 함수를 뜻하며
 *      --> AsyncFunction 오브젝트를
 *          생성하여 반환한다
 *
 *      - async 함수가 호출되면
 *      --> Promise 인스턴스를 반환한다
 *
 *      - async 함수의 return 값을 처리하려면
 *      --> then()을 함수 호출에 연결하여 작성
 *
 *      - async 함수에서 throw 가 발생하면
 *      --> reject() 로 처리된다
 */
{
    log('------------ async 함수 ---------------');
    async function sports(){
        return "축구";
    };
    debugger;
    log( Object.prototype.toString.call( sports ) );
    // :: [object AsyncFunction]
    debugger;

    // 1. async function sports(){ ... }
    //    엔진이 async 함수를 만나면
    //    AsyncFunction 오브젝트로 생성한다

    // 2. 함수 표현식으로 작성할 수도 있다
    //    const sports = async function(){ ... }

    // 3. Object.prototype.toString.call( sports )
    //    toString()을 call 하면
    //    Symbol.toStringTag()가 실행되며
    //    오브젝트를 설명하는 디폴트 문자열을 반환한다
    /**
     *  ----> 아, 너무 멋있다....
     */

    // 4. [ object AsyncFunction ]이 출력된다
    //    즉, sports 는 AsyncFunction 오브젝트이다

    // 5. AsyncFunction 오브젝트는
    //    자체에 Symbol.toStringTag 만 있으며
    //    빌트인 Function 오브젝트를 상속받는다
    //    따라서 호출할 수 있다.
    /**
     *  - Function 오브젝트를 오버라이드 한거네...
     */
}
{
    log('------------ async 함수 호출 ---------------');

    /**
     *  - return 값이 [[ PromiseResult ]] 에 설정되는 구만...
     */
    async function sports(){
        debugger;
        return "축구";
    };

    const obj = sports();
    log( obj instanceof Promise );
    // :: true;
    debugger;

    // 1. const obj = sports();
    //    async 함수를 호출하면 "축구"를 반환하지 않고
    //    Promise 인스턴스를 반환한다

    // 2. log( obj instanceof Promise )
    //    true 가 출력되며, Promise 인스턴스를 뜻한다
    //    그래서 비동기 환경에서 실행된다.
    /**
     *  - 그러므로 then()을 사용할 수 있다.
     */
}
{
    log('------------ then() 작성 ---------------');
    async function sports(){
        return "축구";
    };

    /**
     *  - async function 의 return 결과를
     *    then() 의 첫 번째 파라미터 값으로 사용.
     */
    sports().then( res => {
        log( res );
        debugger;
    });
    log( '여기 먼저' );

    // :: 여기 먼저
    // :: 축구
    debugger;

    // 1. sports()를 호출하면
    //    Promise 인스턴스를 반환하므로
    //    then()을 연결하여 사용할 수 있다

    // 2. then()을 실행하지 않고
    //    아래의 log( '여기 먼저' )를 먼저 실행한다

    // 3. return "축구";
    //    resolve()를 작성하지 않았지만
    //    return 문의 표현식 평가 결과를
    //    resolve()의 파라미터 값으로 사용하여
    //    then()의 첫 번째 파라미터 함수를 호출한다

    // 4. then( res => log( res ) );
    //    return 문의 표현식 평가 결과가
    //    then()의 첫 번째 파라미터 함수의
    //    res 파라미터에 설정된다.
}
{
    log('------------ throw 작성 ---------------');
    async function sports(){
        debugger;
        throw '에러';
    };
    debugger;
    sports().then( ()=> 0 , rej => {
        log( rej );
        // :: 에러
        debugger;
    });

    // 1. throw "에러";
    //    async 함수에서 throw 가 발생하면
    //    reject()로 처리되며
    //    표현식의 평가 결과를 파라미터 값으로 사용한다

    // 2. then()의 두 번째 파라미터 함수가 호출되며
    //    표현식의 평가 결과가 rej 에 설정된다
    /**
     *  - throw 는 에러이므로 reject 가 호출되지 않았지만
     *    reject 가 호출되는 것과 같다고 보는 것이다.
     *
     *  --> 괜찮은 접근이다.
     *      ( then , catch 등 사용 가능 )
     */
}