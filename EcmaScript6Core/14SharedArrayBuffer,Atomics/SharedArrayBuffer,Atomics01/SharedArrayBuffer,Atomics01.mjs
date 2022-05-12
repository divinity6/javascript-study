/**
 * 프로그람 설명문서 주석
 * 2022.05. 10~12 수업
 *
 *
 *           ===== SharedArrayBuffer =====
 *
 *
 *      -----------------------------------------------------------
 *      - 구분                  - 개요
 *
 *      - 파라미터               - SharedArrayBuffer 바이트 수
 *
 *      - 반환                  - SharedArrayBuffer 인스턴스
 *      -----------------------------------------------------------
 *
 *      - 공유 메모리에 SharedArrayBuffer 를 생성하고
 *      --> main 과 Worker 에서 공유( 공유가 키포인트 )
 *
 *      - worker.js
 *
 *        self.onmessage = ( event ) => {
 *            const obj = new Int16Array( event.data );
 *            obj[ 2 ] = 30;
 *            self.postMessage( event.data );
 *        }
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    // res.setHeader('Access-Control-Allow-origin', 'https://inpa.tistory.com');

    log('------------ SharedArrayBuffer ---------------');
    // // worker.js
    // self.onmessage = ( event ) => {
    //     const obj = new Int16Array( event.data );
    //     obj[ 2 ] = 30;
    //     self.postMessage( event.data );
    // };
    if (crossOriginIsolated) {
        // Works
    }
    log( self.crossOriginIsolated );
    /**
     *  - 댓다!!!! 출처 간 격리 ( CORS 문제여씀 )
     *  --> 현재 출처간 격리 문제때문에 SharedArrayBuffer 를 사용할 수 없다
     *      ( express Api 에 아래의 헤더를 설정해주면 사용가능!! )
     *   res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');
     *   res.setHeader('Cross-origin-Opener-Policy','same-origin');
     *  --> 이거 작성해주면되네!!!
     */
    // main.js
    const main = new Worker( './workerGlobalScope/worker.js' );
    /**
     * - SharedArrayBuffer 를 사용하면 값이 연동되는구만...
     *   ( 다른 Threads 에서도... )
     * --> 타입은 TypedArray 와 같네 ㅋㅋ
     */
    const sab = new SharedArrayBuffer( 10 );
    const obj = new Int16Array( sab );
    obj.set( [ 10 ] );
    main.postMessage( sab );
    obj[ 1 ] = 20;
    log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 0 , 3 : 0 , 4 : 0 }
    debugger;
    /**
     *  - 우와 event.data 값이 서로 연동되는구나!!
     *  --> 어떤순서로 연동되는거야 ㅋㅋㅋ
     *  --> 심지어 main.js 랑 worker.js 가 동시에 실행되고있어...
     *  ----> 아, 알았다.
     *        worker.js 에서 self.postMessage( event.data ); 한순간부터
     *        여기로 들어오는거구나
     *        ( 그때부터는 Threads 가 동시 실행이네... )
     */
    main.onmessage = ( event ) => {
        /**
         *  - 여기의 obj 는 위의 sharedArrayBuffer 로 맨들었기 때문에 공유된다
         */
        obj.forEach( ( value ) => {
            log( value );
            // :: 10
            // :: 20
            // :: 30
            // :: 0
            // :: 0
        } );
        debugger;
    };

    // 1. const sab = new SharedArrayBuffer( 10 );
    //    10 바이트의 인스턴스를 생성한다
    //    ArrayBuffer 기능을 그대로 사용할 수 있다
    //    ES2017 부터 지원한다

    // 2. const obj = new Int16Array( sab );
    //    SharedArrayBuffer 를 사용하여 인스턴스를 생성한다
    //    View 타입이 TypedArray 와 같다
    //    Int32 타입까지 사용, Float 타입은 사용 불가

    // 3. obj.set( [ 10 ] );
    //    SharedArrayBuffer 에 값이 설정된다
    /**
     *  - ArrayBuffer 와 같은 개념이다.
     */

    // 4. main.postMessage( sab );
    //    Worker 로 SharedArrayBuffer 를 post 한다
    //    ArrayBuffer 는 값을 복사해서 post 하지만
    //    SharedArrayBuffer 는 오브젝트를 공유한다
    /**
     * - 복사가 아닌 공유!!
     */

    // 5. obj[ 1 ] = 20;
    //    postMessage() 실행 후에 main 에서 값을 설정하며
    //    SharedArrayBuffer 에 설정되며, 값이 공유된다

    /**
     * - worker.js
     */
    // 6. obj[ 2 ] = 30;
    //    SharedArrayBuffer 를 공유하므로
    //    30 이 SharedArrayBuffer 에 설정된다

    // 7. self.postMessage( event.data );
    //    SharedArrayBuffer 에 값을 설정하고 post 한다

    /**
     *  - onmessage 안의 obj 는 SharedArrayBuffer 의 인스턴스이므로
     *    값이 서로 공유된다
     */
    // 8. main.onmessage = ( event ) => { ... }
    //    worker 로 전송한 후 변경한 20이 반영되었으며
    //    worker 에서 설정한 30도 반영되었다

    /**
     *  - sab 값을 main.postMessage( sab ); 보낸후에
     *    obj[ 1 ] = 20; 으로 설정했지만
     *    서로 공유된다는 것!!
     *
     *   - worker 에서도
     *     obj[ 2 ] = 30; 으로 설정했고,
     *     그 값도 서로 공유된다!!
     */
}

/**
 *          ===== SharedArrayBuffer 고려사항 =====
 *
 *      - 싱글 스레드는 순서대로 실행하므로
 *      --> 순서대로 값이 처리된다
 *
 *      ----> 즉, 코드 순서대로 값이 처리되는것.
 *            ( 코드만 잘 작성한다면 값이 이상하게 될 이유는 없다 )
 *
 *      - 싱글 스레드의 비동기 처리는
 *      --> 콜백 함수를 사용하여
 *          순서대로 처리할 수 있다
 *          ( Promise.then() !)
 *
 *      - Worker 는 다수의 스레드 처리이다
 *      --> SharedArrayBuffer 를 공유하므로
 *
 *      --> main 에서 값을 설정할때
 *          다른 Worker 에서 값을 설정하면
 *          값이 엉킬 수 있다
 *
 *      --> 한 쪽의 설정과 관련된 처리가 끝났을 때
 *          다른 쪽에서 처리하도록 제어해야 한다
 *
 *      ----> 즉, 싱글 스레드처럼,
 *            다른 한쪽의 처리가 완전히 끝나야 처리할 수 있도록
 *            맨들어야 한다는 뜻.
 *
 *      - 이것이 병렬 처리의 고려사항이다.
 */

/**
 *          ===== SharedArrayBuffer 고려사항 =====
 *
 *      - 공유에 따른 문제 발생 형태
 */
{
    log('------------ SharedArrayBuffer ---------------');

    // change.js
    // self.onmessage = ( event ) => {
    //     const obj = new Int16Array( event.data );
    //     obj[ 0 ] = 20;
    // }

    // main.js
    const main = new Worker('./workerGlobalScope/change.js' );
    const sab = new SharedArrayBuffer( 10 );
    const obj = new Int16Array( sab );
    obj[ 0 ] = 10;
    debugger;
    main.postMessage( sab );
    /**
     * - 이때, 10 이되느냐 20이 되느냐가 문제이다
     * --> 이것을 하는 순간에 change.js 에서 설정한
     *     obj[ 0 ] = 20 으로 값을 할당하게 될 수 있는 문제가 있다
     *
     * --> 공유를 하고, 병렬처리. 즉, 별도의 Threads 에서 동시에 실행을
     *     하다보면 이런 가능성이 있다.
     */
    obj[ 1 ] = obj[ 0 ] + 30;
    log( obj );
    // :: { 0 : 10 , 1 : 20 , 2 : 30 , 3 : 0 , 4 : 0 }
    debugger;
}

/**
 *      - obj[ 1 ] = obj[ 0 ] + 30 에서
 *      --> 병렬 처리이므로 코드를 실행하는 동안
 *      --> Worker 에서 obj[ 0 ] = 20 처럼
 *          obj[ 0 ]에 값을 설정할 수도 있다
 *
 *      --> 이때, 코드를 실행하는 동안에는
 *          값을 변경하는 처리를 하지 못하도록 막으면
 *          문제 발생을 예방할 수 있다
 *
 *      --> SharedArrayBuffer 사용할 때
 *          lock 상태로 설정하고
 *          사용이 끝나면 lock 상태를 푸는 것이다
 *
 *      ----> 그러면 위의 obj[ 0 ] 이 10 이라는 것이 보장된다.
 *            그리고, obj[ 1 ] = obj[ 0 ] + 30; 을 한 후
 *            lock 을 풀어주는 것이다
 *
 *            그다음 obj[ 0 ] = 20 이 실행되는 것.
 *
 *      - 이를 위한 것이 Atomics 이다.
 *      ----> 이것은 JS 스펙에 기술되어 있다.
 *
 *      ----> 항상, 안정성있는 코드를 짜야한다.
 */

