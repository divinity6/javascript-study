/**
 * 프로그람 설명문서 주석
 * 2022.05. 10~11 수업
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
     *  - 댓다!!!!
     *  --> 현재 출처간 격리 문제때문에 SharedArrayBuffer 를 사용할 수 없다
     *      ( express Api 에 아래의 헤더를 설정해주면 사용가능!! )
     *   res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');
     *   res.setHeader('Cross-origin-Opener-Policy','same-origin');
     *  --> 이거 작성해주면되네!!!
     */
    // main.js
    const main = new Worker( './workerGlobalScope/worker.js' );
    debugger;
    const sab = new SharedArrayBuffer( 10 );
    const obj = new Int16Array( sab );
    debugger;
    obj.set( [ 10 ] );
    main.postMessage( sab );
    obj[ 1 ] = 20;
    main.onmessage = ( event ) => {
        obj.forEach( ( value ) => {
            log( value );
            debugger;
        } )
    }
}