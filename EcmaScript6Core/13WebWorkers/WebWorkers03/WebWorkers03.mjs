/**
 * 프로그람 설명문서 주석
 * 2022.05. 09 수업
 *
 *
 *           ===== 복사하여 전송( postMessage ) =====
 *
 *      - postMessage() 파라미터에 작성한
 *      --> 오브젝트의 값을 복사하여 전송한다
 *      --> 값을 복사하므로 값이 연동되지 않는다
 *      --> 오브젝트가 클 때는 복사에 시간이 걸린다
 *
 *      - clone.js
 *        self.onmessage = ( event ) => {
 *            const book = { point : event.data.point + 300 };
 *            self.postMessage( book );
 *        };
 *
 *      - 복사 알고리즘을
 *      --> MDN 에 structured clone algorithm 이라고
 *          기술되어 있다
 *
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
{
    log('------------ 오브젝트 값 복사 ---------------');
    /**
     *  - main 의 book 이랑
     *    clone 쪽 event.data 이랑 연결되어 있지 않네
     *    ( 복사하여 전송하는듯 )
     *
     *  - 애네들은 완전 다른 객체인듯?
     */
    // clone.js
    // self.onmessage = ( event ) => {
    //     const book = { point : event.data.point + 300 };
    //     self.postMessage( book );
    //     debugger;
    // }

    // main.js
    const main = new Worker( './workerGlobalScope/clone.js' );
    const book = { point : 100 };
    main.postMessage( book );
    book.point = 700;

    main.onmessage = ( event ) => {
        log( event.data.point );
        // :: 400
        log( book.point );
        // :: 700
        debugger;
    }
    debugger;

    // 1. main.postMessage( book );
    //    book 오브젝트의 메모리 주소를 전송하지 않고
    //    book 오브젝트의 프로퍼티를 복사하여 전송한다
    /**
     *  - 메모리 주소를 전송하면 Worker 에서 같은 메모리 주소를
     *    참조하게 되므로 프로퍼티 값을 바꾸면 연동이 된다..
     */

    // 2. 값을 복사하므로 값이 연동되지 않는다
    //    한 쪽에서 값을 바꾸면 값이 같지 않게 된다

    // 3. book.point = 700;
    //    book 오브젝트의 point 값을 700 으로 변경한다
    //    Worker 의 point 값이 700 으로 바뀌지 않는다
    //    Worker 의 값은 100 이고 main 은 700 이다

    // 4. log( event.data.point );
    //    Worker 에서 point 값에 300을 더해 전송하므로
    //    [ 실행 결과 ]에 400이 출력된다.

    // 5. log( book.point );
    //    main 의 book.point 값으로 700 이 출력된다.

    /**
     *  - 이와 같이 postMessage()메소드는 오브젝트의 값을 복사하여 전송한다
     *  --> 그러므로 값이 연동되지 않는다
     */
};
/**
 *          ===== Transferable 오브젝트 =====
 *
 *      - main.postMessage( buffer , [ buffer ] );
 *      --> 두 번째 파라미터에
 *          Worker 로 넘겨 줄 오브젝트를 배열로 작성
 *
 *      --> Worker 에 오브젝트의 소유권을 넘겨주며
 *
 *      --> main 에서는 오브젝트 사용 불가
 *
 *      --> SharedArrayBuffer 로 대처
 *
 *      - transfer.js
 *
 *        self.onMessage = ( event ) => {
 *            const view = new DataView( event.data );
 *            view.setInt8( 1 , 20 );
 *            self.postMessage( event.data );
 *        };
 */
{
    log('------------ Transferable 오브젝트 ---------------');
    // transfer.js
    // self.onmessage = ( event ) => {
    //     const view = new DataView( event.data );
    //     view.setInt8( 1 , 20 );
    //     self.postMessage( event.data );
    // };

    // main.js
    const main = new Worker( './workerGlobalScope/transfer.js' );
    const buffer = new ArrayBuffer( 3 );
    const view = new DataView( buffer );
    view.setInt8( 0 , 10 );
    /**
     *  - transferable 오브젝트로 buffer 를 작성하면,
     *    buffer 의 소유권이 넘어간다
     */
    main.postMessage( buffer , [ buffer ] );
    /**
     *  - 오호 view 를 쩍어볼 수는 있는데
     *    set 이나 get 으로 사용할 수가 없네...
     *    ( 소유권이 넘어갔기 때문에... )
     */
    try {
        view.setInt8( 1 , 30 );
    } catch( error ) {
        log( error + '사용할 수 없음' );
        // :: TypeError: Cannot perform DataView.prototype.setInt8
        //    on a detached ArrayBuffer
        //    detached :: 떨어져 있는, 분리되어 있는
    }

    main.onmessage = ( event ) => {
        const view = new DataView( event.data );
        log( view.getInt8( 0 ) );
        // :: 10
        log( view.getInt8( 1 ) );
        // :: 20
        debugger;
    }
    debugger;

    /**
     *  - 이처럼 transferable 오브젝트를 사용해서
     *    main 에서 맨든 인스턴스를 worker 로 소유권을 넘겨줄 수 있다
     *
     *  --> 소유권을 넘겨주다 보니 main 에서 transferable 오브젝트를
     *      사용할 수 없게된다.
     *
     *  --> 이런 것을 커버하기 위해서 나온 것이 SharedArrayBuffer 이다
     *      ( 이것은 JS SPEC 에 작성되어 있다 )
     *
     *  --> SharedArrayBuffer 을 설명하기 위하여 Worker 라는 API 를
     *      소개한 것.
     *
     *  1. Worker 에서는 postMessage 메소드를 이용해서, buffer 의
     *     데이터를 복사해서 넘겨주는 방법이 있고, ( 값 연동 x )
     *
     *  2. 오브젝트 자체를 transferable 오브젝트로 넘겨주어
     *     소유권 자체를 넘겨주는 방법이 있다
     *
     *  ===== 이제 남은 과제는 main 과 worker 에서 오브젝트를 공유하는 것 =====
     *
     *  - 그런데 쓰레드가 다르다.
     *    ( 하나의 쓰레드라면 공유하는데 문제가 없지만, 쓰레드가 다르기 때문에,
     *      그것에 대한 조치가 필요하다. )
     *
     *  --> 여기에 대한 해결책이 SharedArrayBuffer 이다.
     *
     */
}