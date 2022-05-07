/**
 * 프로그람 설명문서 주석
 * 2022.05. 07 수업
 *
 *
 *           ===== 비동기 병렬 처리 =====
 *
 *      - 지금부터 두 개 섹션으로 나누어
 *      --> 자바스크립트의 비동기 병렬 처리를 다룬다
 *
 *      - 병행 처리( concurrent )
 *      --> 하나의 스레드에서 비동기로 실행
 *      --> Promise , Fetch
 *
 *      - 스레드( thread )
 *      --> 코드를 동시에 실행시키는 것( 단위 )
 *      ----> 코드를 실행시키는 단위!!
 *      ----> 한 문장을 읽어야, 다음문장을 읽을 수 있음.
 *            이것은 쓰레드가 하나이기 때문에 그렇다
 *
 *      --> 자바스크립트는 스레드 하나에서 실행
 *
 *      - 병렬 처리( parallel )
 *      --> 다수의 스레드에서 동시에 비동기로 실행
 *      --> WebWorkers , SharedArrayBuffer , Atomics
 *
 *      ----> WebWorkers 는 JS 스펙이 아닌 별도의 API 에 있다
 *      ----> SharedArrayBuffer , Atomics 는 JS 스펙에 있다
 *
 *      ------> 쓰레드 예 )
 *              한문장을 읽고 다음문장을 읽는다,
 *              그런데 다른사람이 있으면 내가 한 문장을 읽는동안,
 *              다른 사람이 다른 문장을 읽고 있는 것이다.
 *              만약 한 사람이 더 있다면, 그사람은 다른 문장을
 *              읽고있는것이다
 *
 *              이렇게 된다면 1/3 시간동안 문장들을 다 읽을 수
 *              있게 되는 것이다.
 *              ( 이 개념이 병렬 처리 개념 )
 *
 *      ------> 여러개의 쓰레드가 비동기로 동시에 실행하는 것.
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *           ===== Web Workers =====
 *
 *      - Web Workers 는
 *      --> 자바스크립트가 아니라 API 이다
 *          ( whatwg 에서 맨든다 )
 *      ----> 홧 워킹 그룹에서 맨듬
 *            여기서 SPEC 을 정의하고, 이것을 w3g 에서 표준으로 공표함
 *
 *      - 그런데도 Web Workers 를 다루는 것은
 *      --> SharedArrayBuffer 에서 사용하기 때문이다
 *      --> 전체 시나리오 연결을 위한 것이다
 *      --> 강좌와 관련된 범위에서 개념 중심으로 다룬다
 *          자세한 것은 관련 자료를 참조할 것
 */

/**
 *           ===== Web Workers =====
 *
 *      - Web Workers 코드 형태
 */
{
    /**
     *  - 우와, 따로 import 하지 않아도 worker.js 파일을 읽어오는구나...
     */
    log('------------ Web Workers ---------------');
    // workers.js
    // self.onmessage = ( event ) => {
    //     const data = event.data;
    //     console.log( data );
    //     // :: Main 에서 전송
    //     self.postMessage( 'Worker 에서 전송');
    // };

    /**
     *  - 아, 여기 파라메타 타입에 scriptURL 경로라고 적혀잇구만...
     */
    // main.js
    const main = new Worker( 'worker.js' );
    /**
     *  - 그치, 동시실행( 병렬처리 : 멀티 쓰레드 )이 되지않으면
     *    main.postMessage 로 message 를 보낸순간,
     *    받는쪽 코드가 컴파일되지 않아서 에러가 나겠지...
     *
     *  ==============================================
     *      - 아, 개발자도구 오른쪽에 Threads 항목에
     *        어느 쓰레드에서 실행되는지 나오네!!
     *  ==============================================
     */
    main.postMessage( 'Main 에서 전송' );
    main.onmessage = ( event ) => {
        log( 'Main 에서 수신 :' , event.data );
        debugger;
    }
    log( '난 main.js' );
    debugger;
    // ::Main 에서 전송
    // ::Main 에서 수신 : Worker 에서 전송

    // 1. const main = new Worker( 'worker.js' );
    //    Worker 인스턴스를 생성한다
    //    worker.js 파일의 코드를 실행한다
    /**
     *  - 이때 ,파라메타에 작성한 worker.js 의 파일을
     *    서버에서 가져와 파일에 작성된 코드를 실행한다.
     *
     *  --> worker.js 파일은 별도의 스레드에서 실행된다
     *      그러지 않으면 바로 아래의 main.postMessage
     *      메소드를 호출할 수 없다
     *      ( workers.js 의 코드가 끝날때까지... )
     *
     *  --> 별도의 쓰레드에서 실행되므로,
     *      worker.js 파일의 실행과 관계없이
     *      main.js 에서는 바로 아래의 코드
     *      ( main.postMessage( 'Main 에서 전송' ) )를
     *      실행한다라는 것.
     */

    // 2. main.postMessage( 'Main 에서 전송' );
    //    Worker 로 메세지를 보낸다

    // worker.js
    // 3. self.onmessage = ( event ) => { ... };
    //    Worker 에서 onmessage 이벤트가 발생하며
    //    핸들러 함수가 실행된다

    // 4. self.postMessage( 'Worker 에서 전송' );
    //    Worker 에서 main 으로 메시지를 보낸다

    // 5. main.onmessage = ( event ) => { ... };
    //    main 에서 onmessage 이벤트가 발생하며
    //    핸들러 함수가 실행된다

    /**
     *  - 전체적인 코드 흐름을 본다면,
     *  1. main 에서 Worker 인스턴스를 생성하고,
     *     별도의 쓰레드에서 worker.js 파일의 코드가 실행되고,
     *
     *  2. worker.js 파일의 코드가 끝나는 것을 기다리지 않고,
     *     main 은 main.postMessage( 'Main 에서 전송' )를 호출하면서
     *     메시지를 worker.js 로 전송하고,
     *
     *  3. worker 에서 self.onmessage = ( event ) => { ... }
     *     이벤트가 발생하게 되며 핸들러 함수가 실행되게 되는 것
     *
     *  4. worker 에서 self.postMessage( 'Worker 에서 전송') 메소드를 호출하면
     *
     *  5. main 에서 main.onmessage = ( event ) => { ... } 이벤트가 발생하게 되고
     *     핸들러 함수가 실행된다.
     *
     *  - 이와같이 주거니 받거니 하면서 데이터를 전송하고, 받고 하는것.
     */
}
/**
 *          ===== Web Workers =====
 *
 *      - Web Workers 는 별도의 스레드에서
 *      --> 비동기로 자바스크립트 코드를 실행한다
 *      ----> 동기가 아니기 때문에, worker.js 의 코드가 끝나야,
 *            main.js 가 실행되는 것이 아니라,
 *            main 은 main 대로 가고,
 *            worker 는 worker 대로 간다는 것.
 *
 *      ----> 서로 주고 받거니 하는 것은 postMessage 메소드를 호출해서,
 *            파라메타 값으로 넘기고 받고한다는 것.
 *
 *      --> 따라서 실행 중에도 클릭 이벤트가 발생한다
 *
 *      - 멀티 스레드 사용을 통해
 *      --> 메인 스레드의 부하를 분산시킬 수 있다
 *      --> 또한, Module 개념으로 사용할 수 있다
 *
 *      - Web Workers 에서
 *      --> DOM 을 사용할 수 없으며
 *      ----> 즉, HTML 의 콘텐츠를 표현하는 것은 할 수가 없다.
 *            ( 그러한 것들을 제외한 사항들을 처리하고, 그결과를 main 으로 보내주면
 *              main 에서 DOM 을 이용해 html 에 콘텐츠를 표현하는 흐름 )
 *
 *      --> Window 와 API 사용에도 제약이 있다
 */

/**
 *          ===== Web Workers =====
 *
 *      - Main 과 Worker 사이의
 *      --> 데이터 송수신에 메시지 기법 사용
 *
 */
{
    log('------------ 전용 Workers ---------------');
    // worker.js
    // self.onmessage = ( event ) => {
    //     const data = event.data;
    //     console.log( data );
    //     // :: Main 에서 전송
    //     self.postMessage( 'Worker 에서 전송');
    // };

    // main.js
    /**
     *  - new Worker( 'worker.js' ); 할때마다, 새로운
     *    쓰레드를 생성한다고 킹리적 갓심됨...
     */
    const main = new Worker( 'worker.js' );
    main.postMessage( 'Main 에서 전송' );
    main.onmessage = ( event ) => {
        log( 'Main 에서 수신 :' , event.data );
        debugger;
    };
    debugger;

    // 1. main.postMessage( "Main 에서 전송" );
    //    main 에서 Worker 로 메시지를 전송한다

    // 2. self.onmessage = ( event ) => { ... }
    //    Event 오브젝트가 event 파라미터에 설정된다
    //    main.postMessage( param ) 의 param 을
    //    event.data 로 구할 수 있다

    // 3. self.postMessage( 'Worker 에서 전송' );
    //    Worker 에서 메인으로 메시지를 전송한다

    // 4. main.onmessage = ( event ) => { ... }
    //    Event 오브젝트가 event 파라미터에 설정된다
    //    self.postMessage( param )의 param 을
    //    event.data 로 구할 수 있다.
}

/**
 *          ===== Web Workers =====
 *
 *      - Web Workers 타입
 *      --> 전용( Dedicated ) Worker, 공유( Shared ) Worker
 *
 *      - 전용 Worker
 *      --> Web Workers 를 생성한 곳에서만 사용
 *      --> new Worker( "worker.js" );
 *
 *      - 공유 Worker
 *      --> 다른 Worker, Window, iframe 에서 공유 가능
 *      --> new SharedWorker( "share.js" );
 *      ----> 이것은 쉐어드 워커로 생성( SharedWorker( "share.js" ) )
 *
 *      ========================================================
 *           본 강좌는 SharedWorker 는 다루지 않고, Worker 만다룬다
 *      ========================================================
 */